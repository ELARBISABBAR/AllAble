// AllAble Extension Background Service Worker

// Initialize extension
chrome.runtime.onInstalled.addListener((details) => {
  console.log('AllAble Extension installed');
  
  // Set default settings
  chrome.storage.sync.set({
    voiceReaderEnabled: true,
    signLanguageEnabled: false,
    motorAssistanceEnabled: false,
    facileMode: false,
    ttsSpeed: 1.0,
    ttsVoice: 'default',
    highContrast: false,
    fontSize: 'medium',
    quickContactEnabled: false,
    learningHubEnabled: true
  });

  // Create context menus
  createContextMenus();
});

// Create context menus for accessibility features
function createContextMenus() {
  chrome.contextMenus.create({
    id: 'allable-read-selection',
    title: 'Read Selected Text',
    contexts: ['selection']
  });

  chrome.contextMenus.create({
    id: 'allable-read-page',
    title: 'Read Entire Page',
    contexts: ['page']
  });

  chrome.contextMenus.create({
    id: 'allable-simplify-page',
    title: 'Simplify Page (Facile Mode)',
    contexts: ['page']
  });

  chrome.contextMenus.create({
    id: 'allable-image-to-text',
    title: 'Extract Text from Image',
    contexts: ['image']
  });
}

// Handle context menu clicks
chrome.contextMenus.onClicked.addListener((info, tab) => {
  switch (info.menuItemId) {
    case 'allable-read-selection':
      chrome.tabs.sendMessage(tab.id, {
        action: 'readText',
        text: info.selectionText
      });
      break;
    
    case 'allable-read-page':
      chrome.tabs.sendMessage(tab.id, {
        action: 'readPage'
      });
      break;
    
    case 'allable-simplify-page':
      chrome.tabs.sendMessage(tab.id, {
        action: 'toggleFacileMode'
      });
      break;
    
    case 'allable-image-to-text':
      chrome.tabs.sendMessage(tab.id, {
        action: 'extractImageText',
        imageUrl: info.srcUrl
      });
      break;
  }
});

// Handle keyboard shortcuts
chrome.commands.onCommand.addListener((command) => {
  chrome.tabs.query({ active: true, currentWindow: true }, (tabs) => {
    const tab = tabs[0];
    
    switch (command) {
      case 'toggle-voice-reader':
        chrome.tabs.sendMessage(tab.id, { action: 'toggleVoiceReader' });
        break;
      
      case 'toggle-sign-language':
        chrome.tabs.sendMessage(tab.id, { action: 'toggleSignLanguage' });
        break;
      
      case 'toggle-motor-assistance':
        chrome.tabs.sendMessage(tab.id, { action: 'toggleMotorAssistance' });
        break;
      
      case 'toggle-facile-mode':
        chrome.tabs.sendMessage(tab.id, { action: 'toggleFacileMode' });
        break;
    }
  });
});

// Handle messages from content scripts and popup
chrome.runtime.onMessage.addListener((request, sender, sendResponse) => {
  switch (request.action) {
    case 'getSettings':
      chrome.storage.sync.get(null, (settings) => {
        sendResponse(settings);
      });
      return true;
    
    case 'updateSettings':
      chrome.storage.sync.set(request.settings, () => {
        sendResponse({ success: true });
      });
      return true;
    
    case 'showNotification':
      chrome.notifications.create({
        type: 'basic',
        iconUrl: 'icons/icon48.png',
        title: 'AllAble',
        message: request.message
      });
      break;
    
    case 'openLearningHub':
      chrome.tabs.create({
        url: chrome.runtime.getURL('learning-hub.html')
      });
      break;
  }
});

// Monitor tab updates for accessibility features
chrome.tabs.onUpdated.addListener((tabId, changeInfo, tab) => {
  if (changeInfo.status === 'complete' && tab.url) {
    // Inject accessibility features into new pages
    chrome.tabs.sendMessage(tabId, {
      action: 'initializeAccessibility'
    }).catch(() => {
      // Ignore errors for pages that don't support content scripts
    });
  }
});

// Handle TTS events
chrome.tts.onEvent.addListener((event) => {
  if (event.type === 'error') {
    console.error('TTS Error:', event.errorMessage);
  }
});
