// AllAble Extension Content Script - Main Accessibility Controller

class AllAbleAccessibility {
  constructor() {
    this.settings = {};
    this.isInitialized = false;
    this.voiceReader = null;
    this.signLanguageOverlay = null;
    this.motorAssistance = null;
    this.facileMode = null;
    this.quickTools = null;
    this.floatingPanel = null;
    
    this.init();
  }

  async init() {
    if (this.isInitialized) return;
    
    // Load settings
    await this.loadSettings();
    
    // Initialize components
    this.initializeVoiceReader();
    this.initializeSignLanguage();
    this.initializeMotorAssistance();
    this.initializeFacileMode();
    this.initializeQuickTools();
    this.createFloatingPanel();
    
    // Set up event listeners
    this.setupEventListeners();
    
    this.isInitialized = true;
    console.log('AllAble Accessibility initialized');
  }

  async loadSettings() {
    return new Promise((resolve) => {
      chrome.runtime.sendMessage({ action: 'getSettings' }, (settings) => {
        this.settings = settings || {};
        resolve();
      });
    });
  }

  initializeVoiceReader() {
    this.voiceReader = new VoiceReader(this.settings);
  }

  initializeSignLanguage() {
    this.signLanguageOverlay = new SignLanguageOverlay(this.settings);
  }

  initializeMotorAssistance() {
    this.motorAssistance = new MotorAssistance(this.settings);
  }

  initializeFacileMode() {
    this.facileMode = new FacileMode(this.settings);
  }

  initializeQuickTools() {
    this.quickTools = new QuickTools(this.settings);
  }

  createFloatingPanel() {
    this.floatingPanel = document.createElement('div');
    this.floatingPanel.id = 'allable-floating-panel';
    this.floatingPanel.className = 'allable-floating-panel';
    this.floatingPanel.innerHTML = `
      <div class="allable-panel-header">
        <div class="allable-logo">
          <span class="allable-icon">♿</span>
          <span class="allable-title">AllAble</span>
        </div>
        <div class="allable-header-controls">
          <button id="allable-minimize" class="allable-header-btn" aria-label="Minimize panel" title="Minimize">
            <span class="minimize-icon">−</span>
          </button>
          <button id="allable-close" class="allable-header-btn" aria-label="Close panel" title="Close">
            <span class="close-icon">×</span>
          </button>
        </div>
      </div>
      <div class="allable-panel-content">
        <div class="allable-status-bar">
          <span class="allable-status-text">Ready</span>
          <span class="allable-status-dot"></span>
        </div>
        <div class="allable-tools-grid">
          <button id="allable-voice-toggle" class="allable-tool-btn" aria-label="Toggle Voice Reader" data-feature="voice">
            <span class="tool-icon">🔊</span>
            <span class="tool-label">Voice</span>
            <span class="tool-status" data-status="off">OFF</span>
          </button>
          <button id="allable-sign-toggle" class="allable-tool-btn" aria-label="Toggle Sign Language" data-feature="sign">
            <span class="tool-icon">🤟</span>
            <span class="tool-label">Sign</span>
            <span class="tool-status" data-status="off">OFF</span>
          </button>
          <button id="allable-motor-toggle" class="allable-tool-btn" aria-label="Toggle Motor Assistance" data-feature="motor">
            <span class="tool-icon">🖱️</span>
            <span class="tool-label">Motor</span>
            <span class="tool-status" data-status="off">OFF</span>
          </button>
          <button id="allable-facile-toggle" class="allable-tool-btn" aria-label="Toggle Facile Mode" data-feature="facile">
            <span class="tool-icon">🧠</span>
            <span class="tool-label">Facile</span>
            <span class="tool-status" data-status="off">OFF</span>
          </button>
        </div>
        <div class="allable-quick-actions">
          <button id="allable-read-page" class="allable-action-btn" aria-label="Read entire page" title="Read Page">
            📖
          </button>
          <button id="allable-emergency" class="allable-action-btn" aria-label="Emergency alert" title="Emergency">
            🚨
          </button>
          <button id="allable-settings" class="allable-action-btn" aria-label="Open settings" title="Settings">
            ⚙️
          </button>
        </div>
      </div>
    `;

    document.body.appendChild(this.floatingPanel);
    this.setupPanelEvents();
    this.updatePanelStatus();
  }

  setupPanelEvents() {
    const panel = this.floatingPanel;

    // Feature toggles with enhanced feedback
    panel.querySelector('#allable-voice-toggle').addEventListener('click', (e) => {
      this.toggleVoiceReader();
      this.animateButton(e.target);
    });

    panel.querySelector('#allable-sign-toggle').addEventListener('click', (e) => {
      this.toggleSignLanguage();
      this.animateButton(e.target);
    });

    panel.querySelector('#allable-motor-toggle').addEventListener('click', (e) => {
      this.toggleMotorAssistance();
      this.animateButton(e.target);
    });

    panel.querySelector('#allable-facile-toggle').addEventListener('click', (e) => {
      this.toggleFacileMode();
      this.animateButton(e.target);
    });

    // Quick actions
    panel.querySelector('#allable-read-page').addEventListener('click', () => {
      this.voiceReader.readPage();
      this.showPanelNotification('Reading page...');
    });

    panel.querySelector('#allable-emergency').addEventListener('click', () => {
      this.quickTools.triggerEmergencyAlert();
      this.showPanelNotification('Emergency alert activated!');
    });

    panel.querySelector('#allable-settings').addEventListener('click', () => {
      // This would open the extension popup in a real implementation
      this.showPanelNotification('Open extension popup for settings');
    });

    // Panel controls
    panel.querySelector('#allable-minimize').addEventListener('click', () => {
      panel.classList.toggle('minimized');
      const isMinimized = panel.classList.contains('minimized');
      panel.querySelector('.minimize-icon').textContent = isMinimized ? '+' : '−';
    });

    panel.querySelector('#allable-close').addEventListener('click', () => {
      panel.style.display = 'none';
      setTimeout(() => {
        panel.style.display = 'block';
        this.showPanelNotification('Panel restored');
      }, 3000);
    });

    // Make panel draggable
    this.makeDraggable(panel);

    // Add hover effects
    this.setupHoverEffects(panel);
  }

  makeDraggable(element) {
    let pos1 = 0, pos2 = 0, pos3 = 0, pos4 = 0;
    const header = element.querySelector('.allable-panel-header');
    
    header.onmousedown = dragMouseDown;
    
    function dragMouseDown(e) {
      e = e || window.event;
      e.preventDefault();
      pos3 = e.clientX;
      pos4 = e.clientY;
      document.onmouseup = closeDragElement;
      document.onmousemove = elementDrag;
    }
    
    function elementDrag(e) {
      e = e || window.event;
      e.preventDefault();
      pos1 = pos3 - e.clientX;
      pos2 = pos4 - e.clientY;
      pos3 = e.clientX;
      pos4 = e.clientY;
      element.style.top = (element.offsetTop - pos2) + "px";
      element.style.left = (element.offsetLeft - pos1) + "px";
    }
    
    function closeDragElement() {
      document.onmouseup = null;
      document.onmousemove = null;
    }
  }

  setupEventListeners() {
    // Listen for messages from background script
    chrome.runtime.onMessage.addListener((request, sender, sendResponse) => {
      this.handleMessage(request, sender, sendResponse);
    });
    
    // Listen for text selection
    document.addEventListener('mouseup', () => {
      if (this.settings.voiceReaderEnabled) {
        this.voiceReader.handleTextSelection();
      }
    });
    
    // Listen for hover events for voice reading
    if (this.settings.voiceReaderEnabled) {
      document.addEventListener('mouseover', (e) => {
        this.voiceReader.handleHover(e);
      });
    }
  }

  handleMessage(request, sender, sendResponse) {
    switch (request.action) {
      case 'initializeAccessibility':
        this.init();
        break;
      
      case 'toggleVoiceReader':
        this.toggleVoiceReader();
        break;
      
      case 'toggleSignLanguage':
        this.toggleSignLanguage();
        break;
      
      case 'toggleMotorAssistance':
        this.toggleMotorAssistance();
        break;
      
      case 'toggleFacileMode':
        this.toggleFacileMode();
        break;
      
      case 'readText':
        this.voiceReader.speak(request.text);
        break;
      
      case 'readPage':
        this.voiceReader.readPage();
        break;
      
      case 'extractImageText':
        this.quickTools.extractImageText(request.imageUrl);
        break;
    }
  }

  toggleVoiceReader() {
    this.settings.voiceReaderEnabled = !this.settings.voiceReaderEnabled;
    this.voiceReader.toggle(this.settings.voiceReaderEnabled);
    this.updateSettings();
    this.updatePanelButtonStatus('voice', this.settings.voiceReaderEnabled);
    this.showPanelNotification(`Voice Reader ${this.settings.voiceReaderEnabled ? 'ON' : 'OFF'}`);
  }

  toggleSignLanguage() {
    this.settings.signLanguageEnabled = !this.settings.signLanguageEnabled;
    this.signLanguageOverlay.toggle(this.settings.signLanguageEnabled);
    this.updateSettings();
    this.updatePanelButtonStatus('sign', this.settings.signLanguageEnabled);
    this.showPanelNotification(`Sign Language ${this.settings.signLanguageEnabled ? 'ON' : 'OFF'}`);
  }

  toggleMotorAssistance() {
    this.settings.motorAssistanceEnabled = !this.settings.motorAssistanceEnabled;
    this.motorAssistance.toggle(this.settings.motorAssistanceEnabled);
    this.updateSettings();
    this.updatePanelButtonStatus('motor', this.settings.motorAssistanceEnabled);
    this.showPanelNotification(`Motor Assistance ${this.settings.motorAssistanceEnabled ? 'ON' : 'OFF'}`);
  }

  toggleFacileMode() {
    this.settings.facileMode = !this.settings.facileMode;
    this.facileMode.toggle(this.settings.facileMode);
    this.updateSettings();
    this.updatePanelButtonStatus('facile', this.settings.facileMode);
    this.showPanelNotification(`Facile Mode ${this.settings.facileMode ? 'ON' : 'OFF'}`);
  }

  updatePanelButtonStatus(feature, isEnabled) {
    const button = this.floatingPanel.querySelector(`[data-feature="${feature}"]`);
    if (button) {
      const status = button.querySelector('.tool-status');
      if (status) {
        status.textContent = isEnabled ? 'ON' : 'OFF';
        status.setAttribute('data-status', isEnabled ? 'on' : 'off');
      }
      button.classList.toggle('active', isEnabled);
    }
  }

  updatePanelStatus() {
    // Update all button statuses based on current settings
    this.updatePanelButtonStatus('voice', this.settings.voiceReaderEnabled);
    this.updatePanelButtonStatus('sign', this.settings.signLanguageEnabled);
    this.updatePanelButtonStatus('motor', this.settings.motorAssistanceEnabled);
    this.updatePanelButtonStatus('facile', this.settings.facileMode);
  }

  animateButton(button) {
    button.style.transform = 'scale(0.95)';
    setTimeout(() => {
      button.style.transform = 'scale(1)';
    }, 150);
  }

  showPanelNotification(message) {
    const statusText = this.floatingPanel.querySelector('.allable-status-text');
    const originalText = statusText.textContent;

    statusText.textContent = message;
    statusText.style.color = '#28a745';

    setTimeout(() => {
      statusText.textContent = originalText;
      statusText.style.color = '';
    }, 2000);
  }

  setupHoverEffects(panel) {
    const buttons = panel.querySelectorAll('.allable-tool-btn, .allable-action-btn');
    buttons.forEach(button => {
      button.addEventListener('mouseenter', () => {
        button.style.transform = 'translateY(-2px)';
      });

      button.addEventListener('mouseleave', () => {
        button.style.transform = 'translateY(0)';
      });
    });
  }

  updateSettings() {
    chrome.runtime.sendMessage({
      action: 'updateSettings',
      settings: this.settings
    });
  }

  updatePanelButtonStatus(feature, isEnabled) {
    if (!this.floatingPanel) return;

    const button = this.floatingPanel.querySelector(`[data-feature="${feature}"]`);
    if (button) {
      const status = button.querySelector('.tool-status');
      if (status) {
        status.textContent = isEnabled ? 'ON' : 'OFF';
        status.setAttribute('data-status', isEnabled ? 'on' : 'off');
      }
      button.classList.toggle('active', isEnabled);
    }
  }

  updatePanelStatus() {
    if (!this.floatingPanel) return;

    // Update all button statuses based on current settings
    this.updatePanelButtonStatus('voice', this.settings.voiceReaderEnabled);
    this.updatePanelButtonStatus('sign', this.settings.signLanguageEnabled);
    this.updatePanelButtonStatus('motor', this.settings.motorAssistanceEnabled);
    this.updatePanelButtonStatus('facile', this.settings.facileMode);
  }

  animateButton(button) {
    button.style.transform = 'scale(0.95)';
    setTimeout(() => {
      button.style.transform = 'scale(1)';
    }, 150);
  }

  showPanelNotification(message) {
    if (!this.floatingPanel) return;

    const statusText = this.floatingPanel.querySelector('.allable-status-text');
    if (!statusText) return;

    const originalText = statusText.textContent;

    statusText.textContent = message;
    statusText.style.color = '#28a745';
    statusText.style.fontWeight = 'bold';

    setTimeout(() => {
      statusText.textContent = originalText;
      statusText.style.color = '';
      statusText.style.fontWeight = '';
    }, 2000);
  }

  setupHoverEffects(panel) {
    const buttons = panel.querySelectorAll('.allable-tool-btn, .allable-action-btn');
    buttons.forEach(button => {
      button.addEventListener('mouseenter', () => {
        button.style.transform = 'translateY(-2px)';
      });

      button.addEventListener('mouseleave', () => {
        button.style.transform = 'translateY(0)';
      });
    });
  }
}

// Voice Reader Component
class VoiceReader {
  constructor(settings) {
    this.settings = settings;
    this.isEnabled = settings.voiceReaderEnabled || false;
    this.isSpeaking = false;
    this.currentUtterance = null;
    this.hoverTimeout = null;

    this.initializeTTS();
  }

  initializeTTS() {
    if ('speechSynthesis' in window) {
      this.synth = window.speechSynthesis;
      this.voices = [];
      this.loadVoices();

      // Load voices when they become available
      if (speechSynthesis.onvoiceschanged !== undefined) {
        speechSynthesis.onvoiceschanged = () => this.loadVoices();
      }
    }
  }

  loadVoices() {
    this.voices = this.synth.getVoices();
  }

  speak(text, options = {}) {
    if (!this.isEnabled || !text.trim()) return;

    // Stop current speech
    this.stop();

    const utterance = new SpeechSynthesisUtterance(text);

    // Set voice properties
    utterance.rate = this.settings.ttsSpeed || 1.0;
    utterance.pitch = 1.0;
    utterance.volume = 1.0;

    // Set voice if specified
    if (this.settings.ttsVoice && this.settings.ttsVoice !== 'default') {
      const voice = this.voices.find(v => v.name === this.settings.ttsVoice);
      if (voice) utterance.voice = voice;
    }

    // Event handlers
    utterance.onstart = () => {
      this.isSpeaking = true;
      this.currentUtterance = utterance;
    };

    utterance.onend = () => {
      this.isSpeaking = false;
      this.currentUtterance = null;
    };

    utterance.onerror = (event) => {
      console.error('Speech synthesis error:', event.error);
      this.isSpeaking = false;
      this.currentUtterance = null;
    };

    this.synth.speak(utterance);
  }

  stop() {
    if (this.synth && this.isSpeaking) {
      this.synth.cancel();
      this.isSpeaking = false;
      this.currentUtterance = null;
    }
  }

  handleTextSelection() {
    const selection = window.getSelection();
    const selectedText = selection.toString().trim();

    if (selectedText && this.isEnabled) {
      this.speak(selectedText);
    }
  }

  handleHover(event) {
    if (!this.isEnabled) return;

    clearTimeout(this.hoverTimeout);

    this.hoverTimeout = setTimeout(() => {
      const element = event.target;
      const text = this.extractTextFromElement(element);

      if (text && text.length > 0 && text.length < 200) {
        this.speak(text);
      }
    }, 1000); // 1 second hover delay
  }

  extractTextFromElement(element) {
    // Skip if element is part of AllAble UI
    if (element.closest('#allable-floating-panel')) return '';

    // Get text content, prioritizing alt text for images
    if (element.tagName === 'IMG') {
      return element.alt || element.title || '';
    }

    // For other elements, get clean text content
    const text = element.textContent || element.innerText || '';
    return text.trim().substring(0, 200);
  }

  readPage() {
    if (!this.isEnabled) return;

    const content = this.extractPageContent();
    if (content) {
      this.speak(content);
    }
  }

  extractPageContent() {
    // Remove AllAble UI elements
    const clone = document.cloneNode(true);
    const allableElements = clone.querySelectorAll('[id^="allable-"]');
    allableElements.forEach(el => el.remove());

    // Extract main content
    const mainContent = clone.querySelector('main') ||
                       clone.querySelector('[role="main"]') ||
                       clone.querySelector('article') ||
                       clone.body;

    if (!mainContent) return '';

    // Remove script and style elements
    const unwanted = mainContent.querySelectorAll('script, style, nav, header, footer, aside');
    unwanted.forEach(el => el.remove());

    return mainContent.textContent.trim();
  }

  toggle(enabled) {
    this.isEnabled = enabled;
    if (!enabled) {
      this.stop();
    }
  }
}

// Sign Language Overlay Component
class SignLanguageOverlay {
  constructor(settings) {
    this.settings = settings;
    this.isEnabled = settings.signLanguageEnabled || false;
    this.overlay = null;
    this.avatar = null;
    this.subtitlesContainer = null;

    if (this.isEnabled) {
      this.createOverlay();
    }
  }

  createOverlay() {
    this.overlay = document.createElement('div');
    this.overlay.id = 'allable-sign-overlay';
    this.overlay.className = 'allable-sign-overlay';
    this.overlay.innerHTML = `
      <div class="allable-sign-avatar">
        <div class="avatar-container">
          <div class="avatar-figure">👤</div>
          <div class="sign-text"></div>
        </div>
      </div>
      <div class="allable-subtitles">
        <div class="subtitles-content"></div>
      </div>
      <div class="allable-sign-controls">
        <button id="toggle-avatar" aria-label="Toggle sign language avatar">Avatar</button>
        <button id="toggle-subtitles" aria-label="Toggle subtitles">Subtitles</button>
        <button id="sign-settings" aria-label="Sign language settings">Settings</button>
      </div>
    `;

    document.body.appendChild(this.overlay);
    this.setupSignLanguageEvents();
    this.detectVideoElements();
  }

  setupSignLanguageEvents() {
    const controls = this.overlay.querySelector('.allable-sign-controls');

    controls.querySelector('#toggle-avatar').addEventListener('click', () => {
      this.toggleAvatar();
    });

    controls.querySelector('#toggle-subtitles').addEventListener('click', () => {
      this.toggleSubtitles();
    });

    // Listen for speech events to show sign language
    document.addEventListener('allable-speech-start', (event) => {
      this.showSignLanguage(event.detail.text);
    });
  }

  detectVideoElements() {
    const videos = document.querySelectorAll('video');
    videos.forEach(video => {
      this.addSubtitlesToVideo(video);
    });

    // Watch for new videos
    const observer = new MutationObserver((mutations) => {
      mutations.forEach((mutation) => {
        mutation.addedNodes.forEach((node) => {
          if (node.nodeType === 1) {
            const videos = node.querySelectorAll ? node.querySelectorAll('video') : [];
            videos.forEach(video => this.addSubtitlesToVideo(video));
          }
        });
      });
    });

    observer.observe(document.body, { childList: true, subtree: true });
  }

  addSubtitlesToVideo(video) {
    if (video.hasAttribute('data-allable-subtitles')) return;

    video.setAttribute('data-allable-subtitles', 'true');

    // Create subtitle overlay for this video
    const subtitleOverlay = document.createElement('div');
    subtitleOverlay.className = 'allable-video-subtitles';
    subtitleOverlay.style.cssText = `
      position: absolute;
      bottom: 10px;
      left: 50%;
      transform: translateX(-50%);
      background: rgba(0, 0, 0, 0.8);
      color: white;
      padding: 8px 16px;
      border-radius: 4px;
      font-size: 16px;
      font-weight: bold;
      text-align: center;
      z-index: 1000;
      display: none;
    `;

    // Position relative to video
    const videoContainer = video.parentElement;
    if (videoContainer) {
      videoContainer.style.position = 'relative';
      videoContainer.appendChild(subtitleOverlay);
    }

    // Listen for audio and generate subtitles
    this.setupAudioCapture(video, subtitleOverlay);
  }

  setupAudioCapture(video, subtitleOverlay) {
    // This would integrate with speech recognition API
    // For now, we'll simulate subtitle generation
    video.addEventListener('play', () => {
      if (this.isEnabled) {
        this.generateSubtitles(video, subtitleOverlay);
      }
    });
  }

  generateSubtitles(video, subtitleOverlay) {
    // Placeholder for real-time subtitle generation
    // In a real implementation, this would use speech recognition
    subtitleOverlay.style.display = 'block';
    subtitleOverlay.textContent = 'Live subtitles would appear here...';

    setTimeout(() => {
      subtitleOverlay.style.display = 'none';
    }, 3000);
  }

  showSignLanguage(text) {
    if (!this.isEnabled || !this.overlay) return;

    const signText = this.overlay.querySelector('.sign-text');
    const avatar = this.overlay.querySelector('.avatar-figure');

    // Show the text being signed
    signText.textContent = text;

    // Animate avatar (simple animation)
    avatar.style.animation = 'signing 2s ease-in-out';

    setTimeout(() => {
      avatar.style.animation = '';
      signText.textContent = '';
    }, 3000);
  }

  toggleAvatar() {
    const avatar = this.overlay.querySelector('.allable-sign-avatar');
    avatar.style.display = avatar.style.display === 'none' ? 'block' : 'none';
  }

  toggleSubtitles() {
    const subtitles = document.querySelectorAll('.allable-video-subtitles');
    subtitles.forEach(subtitle => {
      subtitle.style.display = subtitle.style.display === 'none' ? 'block' : 'none';
    });
  }

  toggle(enabled) {
    this.isEnabled = enabled;

    if (enabled && !this.overlay) {
      this.createOverlay();
    } else if (!enabled && this.overlay) {
      this.overlay.style.display = 'none';
    } else if (enabled && this.overlay) {
      this.overlay.style.display = 'block';
    }
  }
}

// Motor Assistance Component
class MotorAssistance {
  constructor(settings) {
    this.settings = settings;
    this.isEnabled = settings.motorAssistanceEnabled || false;
    this.voiceControl = null;
    this.largeButtons = [];
    this.stickyElements = [];

    if (this.isEnabled) {
      this.initialize();
    }
  }

  initialize() {
    this.setupVoiceControl();
    this.createLargeButtons();
    this.enhanceClickableElements();
    this.setupKeyboardNavigation();
  }

  setupVoiceControl() {
    if ('webkitSpeechRecognition' in window || 'SpeechRecognition' in window) {
      const SpeechRecognition = window.SpeechRecognition || window.webkitSpeechRecognition;
      this.voiceControl = new SpeechRecognition();

      this.voiceControl.continuous = true;
      this.voiceControl.interimResults = false;
      this.voiceControl.lang = 'en-US';

      this.voiceControl.onresult = (event) => {
        const command = event.results[event.results.length - 1][0].transcript.toLowerCase().trim();
        this.processVoiceCommand(command);
      };

      this.voiceControl.onerror = (event) => {
        console.error('Voice recognition error:', event.error);
      };

      // Start listening
      this.startVoiceControl();
    }
  }

  startVoiceControl() {
    if (this.voiceControl && this.isEnabled) {
      try {
        this.voiceControl.start();
      } catch (error) {
        console.error('Could not start voice control:', error);
      }
    }
  }

  stopVoiceControl() {
    if (this.voiceControl) {
      this.voiceControl.stop();
    }
  }

  processVoiceCommand(command) {
    console.log('Voice command:', command);

    // Click commands
    if (command.includes('click')) {
      const target = this.findClickTarget(command);
      if (target) {
        target.click();
        this.showFeedback(`Clicked ${target.tagName}`);
      }
    }

    // Scroll commands
    else if (command.includes('scroll up')) {
      window.scrollBy(0, -200);
      this.showFeedback('Scrolled up');
    }
    else if (command.includes('scroll down')) {
      window.scrollBy(0, 200);
      this.showFeedback('Scrolled down');
    }

    // Navigation commands
    else if (command.includes('go back')) {
      window.history.back();
    }
    else if (command.includes('go forward')) {
      window.history.forward();
    }
    else if (command.includes('refresh')) {
      window.location.reload();
    }

    // Focus commands
    else if (command.includes('focus')) {
      const element = this.findFocusTarget(command);
      if (element) {
        element.focus();
        this.showFeedback(`Focused ${element.tagName}`);
      }
    }
  }

  findClickTarget(command) {
    // Simple target finding based on common words
    const buttons = document.querySelectorAll('button, [role="button"], input[type="submit"], input[type="button"]');
    const links = document.querySelectorAll('a');

    // Look for button text matches
    for (let button of buttons) {
      const text = button.textContent.toLowerCase();
      if (command.includes(text) && text.length > 2) {
        return button;
      }
    }

    // Look for link text matches
    for (let link of links) {
      const text = link.textContent.toLowerCase();
      if (command.includes(text) && text.length > 2) {
        return link;
      }
    }

    return null;
  }

  findFocusTarget(command) {
    const inputs = document.querySelectorAll('input, textarea, select');

    for (let input of inputs) {
      const label = input.labels?.[0]?.textContent.toLowerCase() ||
                   input.placeholder?.toLowerCase() ||
                   input.name?.toLowerCase() || '';

      if (command.includes(label) && label.length > 2) {
        return input;
      }
    }

    return null;
  }

  createLargeButtons() {
    // Create floating large buttons for common actions
    const buttonContainer = document.createElement('div');
    buttonContainer.id = 'allable-large-buttons';
    buttonContainer.className = 'allable-large-buttons';
    buttonContainer.innerHTML = `
      <button class="allable-large-btn" data-action="scroll-up" aria-label="Scroll up">↑</button>
      <button class="allable-large-btn" data-action="scroll-down" aria-label="Scroll down">↓</button>
      <button class="allable-large-btn" data-action="go-back" aria-label="Go back">←</button>
      <button class="allable-large-btn" data-action="go-forward" aria-label="Go forward">→</button>
      <button class="allable-large-btn" data-action="refresh" aria-label="Refresh page">⟳</button>
    `;

    document.body.appendChild(buttonContainer);

    // Add event listeners
    buttonContainer.addEventListener('click', (e) => {
      if (e.target.classList.contains('allable-large-btn')) {
        this.handleLargeButtonClick(e.target.dataset.action);
      }
    });
  }

  handleLargeButtonClick(action) {
    switch (action) {
      case 'scroll-up':
        window.scrollBy(0, -200);
        break;
      case 'scroll-down':
        window.scrollBy(0, 200);
        break;
      case 'go-back':
        window.history.back();
        break;
      case 'go-forward':
        window.history.forward();
        break;
      case 'refresh':
        window.location.reload();
        break;
    }
  }

  enhanceClickableElements() {
    // Make clickable elements larger and more accessible
    const clickables = document.querySelectorAll('button, a, [role="button"], input[type="submit"], input[type="button"]');

    clickables.forEach(element => {
      if (!element.classList.contains('allable-enhanced')) {
        element.classList.add('allable-enhanced');

        // Add visual enhancement
        element.style.minHeight = '44px';
        element.style.minWidth = '44px';
        element.style.padding = '8px 12px';
        element.style.border = '2px solid transparent';
        element.style.borderRadius = '4px';

        // Add focus enhancement
        element.addEventListener('focus', () => {
          element.style.border = '2px solid #000';
          element.style.outline = '2px solid #000';
        });

        element.addEventListener('blur', () => {
          element.style.border = '2px solid transparent';
          element.style.outline = 'none';
        });
      }
    });
  }

  setupKeyboardNavigation() {
    // Enhanced keyboard navigation
    document.addEventListener('keydown', (e) => {
      if (!this.isEnabled) return;

      // Tab navigation enhancement
      if (e.key === 'Tab') {
        const focusedElement = document.activeElement;
        if (focusedElement) {
          focusedElement.scrollIntoView({ behavior: 'smooth', block: 'center' });
        }
      }

      // Arrow key navigation
      if (e.altKey) {
        switch (e.key) {
          case 'ArrowUp':
            e.preventDefault();
            window.scrollBy(0, -100);
            break;
          case 'ArrowDown':
            e.preventDefault();
            window.scrollBy(0, 100);
            break;
          case 'ArrowLeft':
            e.preventDefault();
            window.history.back();
            break;
          case 'ArrowRight':
            e.preventDefault();
            window.history.forward();
            break;
        }
      }
    });
  }

  showFeedback(message) {
    // Show visual feedback for voice commands
    const feedback = document.createElement('div');
    feedback.className = 'allable-feedback';
    feedback.textContent = message;
    feedback.style.cssText = `
      position: fixed;
      top: 20px;
      right: 20px;
      background: #000;
      color: #fff;
      padding: 10px 15px;
      border-radius: 4px;
      z-index: 10000;
      font-size: 14px;
    `;

    document.body.appendChild(feedback);

    setTimeout(() => {
      feedback.remove();
    }, 2000);
  }

  toggle(enabled) {
    this.isEnabled = enabled;

    if (enabled) {
      this.initialize();
      this.startVoiceControl();
    } else {
      this.stopVoiceControl();
      // Hide large buttons
      const buttons = document.getElementById('allable-large-buttons');
      if (buttons) buttons.style.display = 'none';
    }
  }
}

// Facile Mode Component
class FacileMode {
  constructor(settings) {
    this.settings = settings;
    this.isEnabled = settings.facileMode || false;
    this.originalContent = new Map();

    if (this.isEnabled) {
      this.activate();
    }
  }

  activate() {
    document.body.classList.add('allable-facile-mode');
    this.simplifyContent();
    this.addVisualAids();
    this.createGlossary();
  }

  deactivate() {
    document.body.classList.remove('allable-facile-mode');
    this.restoreContent();
    this.removeVisualAids();
    this.removeGlossary();
  }

  simplifyContent() {
    // Simplify paragraphs
    const paragraphs = document.querySelectorAll('p');
    paragraphs.forEach(p => {
      if (p.textContent.length > 200) {
        const originalText = p.textContent;
        this.originalContent.set(p, originalText);

        // Break long sentences
        const simplified = this.simplifyText(originalText);
        p.innerHTML = `<div class="allable-facile-simplified">${simplified}</div>`;
      }
    });

    // Hide complex elements
    const complexElements = document.querySelectorAll('aside, .sidebar, .advertisement, .social-share');
    complexElements.forEach(el => {
      el.style.display = 'none';
    });
  }

  simplifyText(text) {
    // Basic text simplification
    return text
      .replace(/\b(however|nevertheless|furthermore|moreover)\b/gi, 'But')
      .replace(/\b(utilize|utilization)\b/gi, 'use')
      .replace(/\b(demonstrate|illustrate)\b/gi, 'show')
      .replace(/\b(approximately|roughly)\b/gi, 'about')
      .replace(/\b(subsequently|thereafter)\b/gi, 'then')
      .split('. ')
      .map(sentence => sentence.trim())
      .filter(sentence => sentence.length > 0)
      .map(sentence => `<p>${sentence}${sentence.endsWith('.') ? '' : '.'}</p>`)
      .join('');
  }

  addVisualAids() {
    // Add visual indicators for important content
    const headings = document.querySelectorAll('h1, h2, h3');
    headings.forEach(heading => {
      if (!heading.querySelector('.allable-visual-aid')) {
        const aid = document.createElement('span');
        aid.className = 'allable-visual-aid';
        aid.textContent = '📍 ';
        heading.insertBefore(aid, heading.firstChild);
      }
    });

    // Add visual aids for links
    const links = document.querySelectorAll('a');
    links.forEach(link => {
      if (!link.querySelector('.allable-link-aid')) {
        const aid = document.createElement('span');
        aid.className = 'allable-link-aid';
        aid.textContent = ' 🔗';
        link.appendChild(aid);
      }
    });
  }

  createGlossary() {
    const glossaryTerms = {
      'API': 'Application Programming Interface - a way for programs to talk to each other',
      'URL': 'Web address - the location of a webpage',
      'Browser': 'Program used to view websites like Chrome or Firefox',
      'Download': 'Copy a file from the internet to your computer',
      'Upload': 'Send a file from your computer to the internet'
    };

    // Find and highlight glossary terms
    const textNodes = this.getTextNodes(document.body);
    textNodes.forEach(node => {
      let text = node.textContent;
      let modified = false;

      Object.keys(glossaryTerms).forEach(term => {
        const regex = new RegExp(`\\b${term}\\b`, 'gi');
        if (regex.test(text)) {
          text = text.replace(regex, `<span class="allable-glossary-term" title="${glossaryTerms[term]}">${term}</span>`);
          modified = true;
        }
      });

      if (modified) {
        const wrapper = document.createElement('span');
        wrapper.innerHTML = text;
        node.parentNode.replaceChild(wrapper, node);
      }
    });
  }

  getTextNodes(element) {
    const textNodes = [];
    const walker = document.createTreeWalker(
      element,
      NodeFilter.SHOW_TEXT,
      {
        acceptNode: (node) => {
          // Skip AllAble elements and script/style tags
          if (node.parentElement.closest('#allable-floating-panel, script, style')) {
            return NodeFilter.FILTER_REJECT;
          }
          return node.textContent.trim() ? NodeFilter.FILTER_ACCEPT : NodeFilter.FILTER_REJECT;
        }
      }
    );

    let node;
    while (node = walker.nextNode()) {
      textNodes.push(node);
    }
    return textNodes;
  }

  restoreContent() {
    // Restore original content
    this.originalContent.forEach((originalText, element) => {
      element.textContent = originalText;
    });
    this.originalContent.clear();

    // Show hidden elements
    const hiddenElements = document.querySelectorAll('[style*="display: none"]');
    hiddenElements.forEach(el => {
      el.style.display = '';
    });
  }

  removeVisualAids() {
    const aids = document.querySelectorAll('.allable-visual-aid, .allable-link-aid');
    aids.forEach(aid => aid.remove());
  }

  removeGlossary() {
    const glossaryTerms = document.querySelectorAll('.allable-glossary-term');
    glossaryTerms.forEach(term => {
      term.outerHTML = term.textContent;
    });
  }

  toggle(enabled) {
    this.isEnabled = enabled;

    if (enabled) {
      this.activate();
    } else {
      this.deactivate();
    }
  }
}

// Quick Tools Component
class QuickTools {
  constructor(settings) {
    this.settings = settings;
    this.isEnabled = true;
    this.toolsContainer = null;

    this.createQuickTools();
  }

  createQuickTools() {
    this.toolsContainer = document.createElement('div');
    this.toolsContainer.id = 'allable-quick-tools';
    this.toolsContainer.className = 'allable-quick-tools';
    this.toolsContainer.innerHTML = `
      <div class="allable-quick-tool" id="image-to-text" title="Extract text from images">
        📷→📝
      </div>
      <div class="allable-quick-tool" id="quick-contact" title="Quick contact">
        📞
      </div>
      <div class="allable-quick-tool" id="emergency-alert" title="Emergency alert">
        🚨
      </div>
      <div class="allable-quick-tool" id="reading-mode" title="Reading mode">
        📖
      </div>
    `;

    document.body.appendChild(this.toolsContainer);
    this.setupQuickToolEvents();
  }

  setupQuickToolEvents() {
    const tools = this.toolsContainer;

    tools.querySelector('#image-to-text').addEventListener('click', () => {
      this.activateImageToText();
    });

    tools.querySelector('#quick-contact').addEventListener('click', () => {
      this.showQuickContact();
    });

    tools.querySelector('#emergency-alert').addEventListener('click', () => {
      this.triggerEmergencyAlert();
    });

    tools.querySelector('#reading-mode').addEventListener('click', () => {
      this.toggleReadingMode();
    });
  }

  activateImageToText() {
    // Create overlay for image selection
    const overlay = document.createElement('div');
    overlay.id = 'allable-image-selector';
    overlay.style.cssText = `
      position: fixed;
      top: 0;
      left: 0;
      width: 100%;
      height: 100%;
      background: rgba(0, 0, 0, 0.5);
      z-index: 10001;
      cursor: crosshair;
    `;

    const instructions = document.createElement('div');
    instructions.style.cssText = `
      position: fixed;
      top: 20px;
      left: 50%;
      transform: translateX(-50%);
      background: #fff;
      padding: 15px;
      border-radius: 8px;
      font-weight: bold;
      z-index: 10002;
    `;
    instructions.textContent = 'Click on any image to extract text from it. Press ESC to cancel.';

    overlay.appendChild(instructions);
    document.body.appendChild(overlay);

    // Handle image clicks
    const images = document.querySelectorAll('img');
    images.forEach(img => {
      img.addEventListener('click', (e) => {
        e.stopPropagation();
        this.extractImageText(img.src);
        overlay.remove();
      }, { once: true });
    });

    // Handle escape key
    const escapeHandler = (e) => {
      if (e.key === 'Escape') {
        overlay.remove();
        document.removeEventListener('keydown', escapeHandler);
      }
    };
    document.addEventListener('keydown', escapeHandler);

    // Handle overlay click
    overlay.addEventListener('click', () => {
      overlay.remove();
    });
  }

  async extractImageText(imageUrl) {
    try {
      // This would integrate with OCR service in a real implementation
      // For now, we'll simulate the process
      this.showNotification('Extracting text from image...');

      // Simulate OCR processing
      setTimeout(() => {
        const extractedText = 'Sample extracted text from image. In a real implementation, this would use OCR technology.';
        this.showExtractedText(extractedText);
      }, 2000);

    } catch (error) {
      console.error('Error extracting text from image:', error);
      this.showNotification('Error extracting text from image');
    }
  }

  showExtractedText(text) {
    const modal = document.createElement('div');
    modal.style.cssText = `
      position: fixed;
      top: 50%;
      left: 50%;
      transform: translate(-50%, -50%);
      background: #fff;
      border: 2px solid #000;
      border-radius: 8px;
      padding: 20px;
      max-width: 500px;
      z-index: 10003;
    `;

    modal.innerHTML = `
      <h3>Extracted Text</h3>
      <div style="background: #f5f5f5; padding: 10px; border-radius: 4px; margin: 10px 0; max-height: 200px; overflow-y: auto;">
        ${text}
      </div>
      <div style="display: flex; gap: 10px; justify-content: flex-end;">
        <button id="copy-text" style="padding: 8px 16px; background: #fff; border: 1px solid #ccc; border-radius: 4px; cursor: pointer;">Copy</button>
        <button id="read-text" style="padding: 8px 16px; background: #fff; border: 1px solid #ccc; border-radius: 4px; cursor: pointer;">Read Aloud</button>
        <button id="close-modal" style="padding: 8px 16px; background: #fff; border: 1px solid #ccc; border-radius: 4px; cursor: pointer;">Close</button>
      </div>
    `;

    document.body.appendChild(modal);

    // Handle button clicks
    modal.querySelector('#copy-text').addEventListener('click', () => {
      navigator.clipboard.writeText(text);
      this.showNotification('Text copied to clipboard');
    });

    modal.querySelector('#read-text').addEventListener('click', () => {
      // Trigger voice reader
      document.dispatchEvent(new CustomEvent('allable-speech-start', { detail: { text } }));
    });

    modal.querySelector('#close-modal').addEventListener('click', () => {
      modal.remove();
    });
  }

  showQuickContact() {
    const contacts = this.settings.quickContacts || [
      { name: 'Emergency', number: '911' },
      { name: 'Family', number: 'Not set' },
      { name: 'Caregiver', number: 'Not set' }
    ];

    const modal = document.createElement('div');
    modal.style.cssText = `
      position: fixed;
      top: 50%;
      left: 50%;
      transform: translate(-50%, -50%);
      background: #fff;
      border: 2px solid #000;
      border-radius: 8px;
      padding: 20px;
      z-index: 10003;
    `;

    const contactsHtml = contacts.map(contact => `
      <div style="display: flex; justify-content: space-between; align-items: center; padding: 8px; border-bottom: 1px solid #eee;">
        <span>${contact.name}</span>
        <button onclick="window.open('tel:${contact.number}')" style="padding: 4px 8px; background: #fff; border: 1px solid #ccc; border-radius: 4px; cursor: pointer;">
          📞 ${contact.number}
        </button>
      </div>
    `).join('');

    modal.innerHTML = `
      <h3>Quick Contacts</h3>
      <div style="margin: 10px 0;">
        ${contactsHtml}
      </div>
      <button id="close-contacts" style="padding: 8px 16px; background: #fff; border: 1px solid #ccc; border-radius: 4px; cursor: pointer; float: right;">Close</button>
    `;

    document.body.appendChild(modal);

    modal.querySelector('#close-contacts').addEventListener('click', () => {
      modal.remove();
    });
  }

  triggerEmergencyAlert() {
    // Multi-modal alert system
    this.showVisualAlert();
    this.playAudioAlert();
    this.triggerVibration();
  }

  showVisualAlert() {
    const alert = document.createElement('div');
    alert.style.cssText = `
      position: fixed;
      top: 0;
      left: 0;
      width: 100%;
      height: 100%;
      background: red;
      color: white;
      display: flex;
      align-items: center;
      justify-content: center;
      font-size: 48px;
      font-weight: bold;
      z-index: 10004;
      animation: flash 0.5s infinite;
    `;
    alert.textContent = '🚨 EMERGENCY ALERT 🚨';

    document.body.appendChild(alert);

    setTimeout(() => {
      alert.remove();
    }, 5000);
  }

  playAudioAlert() {
    // Create audio alert
    const audioContext = new (window.AudioContext || window.webkitAudioContext)();
    const oscillator = audioContext.createOscillator();
    const gainNode = audioContext.createGain();

    oscillator.connect(gainNode);
    gainNode.connect(audioContext.destination);

    oscillator.frequency.setValueAtTime(800, audioContext.currentTime);
    oscillator.type = 'sine';

    gainNode.gain.setValueAtTime(0.3, audioContext.currentTime);

    oscillator.start();
    oscillator.stop(audioContext.currentTime + 2);
  }

  triggerVibration() {
    if ('vibrate' in navigator) {
      navigator.vibrate([200, 100, 200, 100, 200]);
    }
  }

  toggleReadingMode() {
    document.body.classList.toggle('allable-reading-mode');

    if (document.body.classList.contains('allable-reading-mode')) {
      // Apply reading mode styles
      const style = document.createElement('style');
      style.id = 'allable-reading-mode-styles';
      style.textContent = `
        .allable-reading-mode {
          background: #f9f9f9 !important;
          font-size: 18px !important;
          line-height: 1.8 !important;
          max-width: 800px !important;
          margin: 0 auto !important;
          padding: 20px !important;
        }
        .allable-reading-mode * {
          max-width: 100% !important;
        }
        .allable-reading-mode img, .allable-reading-mode video {
          display: block !important;
          margin: 20px auto !important;
        }
      `;
      document.head.appendChild(style);
      this.showNotification('Reading mode activated');
    } else {
      const style = document.getElementById('allable-reading-mode-styles');
      if (style) style.remove();
      this.showNotification('Reading mode deactivated');
    }
  }

  showNotification(message) {
    const notification = document.createElement('div');
    notification.className = 'allable-feedback';
    notification.textContent = message;
    document.body.appendChild(notification);

    setTimeout(() => {
      notification.remove();
    }, 3000);
  }
}

// Initialize AllAble when DOM is ready
if (document.readyState === 'loading') {
  document.addEventListener('DOMContentLoaded', () => {
    new AllAbleAccessibility();
  });
} else {
  new AllAbleAccessibility();
}
