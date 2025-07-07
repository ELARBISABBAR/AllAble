// AllAble Extension Popup Script

class AllAblePopup {
  constructor() {
    this.settings = {};
    this.isLoading = false;
    this.init();
  }

  async init() {
    this.showLoading(true);
    try {
      await this.loadSettings();
      this.setupUI();
      this.setupEventListeners();
      this.updateUI();
      this.updateStatus('Ready', 'success');
    } catch (error) {
      console.error('Failed to initialize popup:', error);
      this.updateStatus('Error loading', 'error');
    } finally {
      this.showLoading(false);
    }
  }

  async loadSettings() {
    return new Promise((resolve) => {
      chrome.runtime.sendMessage({ action: 'getSettings' }, (settings) => {
        this.settings = settings || this.getDefaultSettings();
        resolve();
      });
    });
  }

  getDefaultSettings() {
    return {
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
    };
  }

  setupUI() {
    // Load available voices
    this.loadVoices();
  }

  loadVoices() {
    if ('speechSynthesis' in window) {
      const voices = speechSynthesis.getVoices();
      const voiceSelect = document.getElementById('voice-select');
      
      // Clear existing options except default
      voiceSelect.innerHTML = '<option value="default">Default</option>';
      
      voices.forEach(voice => {
        const option = document.createElement('option');
        option.value = voice.name;
        option.textContent = `${voice.name} (${voice.lang})`;
        voiceSelect.appendChild(option);
      });

      // Load voices when they become available
      if (speechSynthesis.onvoiceschanged !== undefined) {
        speechSynthesis.onvoiceschanged = () => this.loadVoices();
      }
    }
  }

  setupEventListeners() {
    // Feature toggles with enhanced feedback
    document.getElementById('voice-toggle').addEventListener('click', () => {
      this.toggleSetting('voiceReaderEnabled', 'Voice Reader');
    });

    document.getElementById('sign-toggle').addEventListener('click', () => {
      this.toggleSetting('signLanguageEnabled', 'Sign Language');
    });

    document.getElementById('motor-toggle').addEventListener('click', () => {
      this.toggleSetting('motorAssistanceEnabled', 'Motor Assistance');
    });

    document.getElementById('facile-toggle').addEventListener('click', () => {
      this.toggleSetting('facileMode', 'Facile Mode');
    });

    // Help button
    document.getElementById('help-button').addEventListener('click', () => {
      this.openHelp();
    });

    // Voice settings
    document.getElementById('speech-speed').addEventListener('input', (e) => {
      this.settings.ttsSpeed = parseFloat(e.target.value);
      this.saveSettings();
    });

    document.getElementById('voice-select').addEventListener('change', (e) => {
      this.settings.ttsVoice = e.target.value;
      this.saveSettings();
    });

    // Display settings
    document.getElementById('font-size').addEventListener('change', (e) => {
      this.settings.fontSize = e.target.value;
      this.saveSettings();
    });

    // Quick actions
    document.getElementById('read-page').addEventListener('click', () => {
      this.sendMessageToActiveTab({ action: 'readPage' });
      window.close();
    });

    document.getElementById('simplify-page').addEventListener('click', () => {
      this.sendMessageToActiveTab({ action: 'toggleFacileMode' });
      window.close();
    });

    document.getElementById('emergency-contact').addEventListener('click', () => {
      this.sendMessageToActiveTab({ action: 'showQuickContact' });
      window.close();
    });

    document.getElementById('learning-hub').addEventListener('click', () => {
      chrome.runtime.sendMessage({ action: 'openLearningHub' });
      window.close();
    });

    // Settings actions
    document.getElementById('save-settings').addEventListener('click', () => {
      this.saveSettings();
      this.showNotification('Settings saved!');
    });

    document.getElementById('reset-settings').addEventListener('click', () => {
      this.resetSettings();
    });
  }

  toggleSetting(settingName, featureName) {
    const toggle = document.querySelector(`#${settingName.replace(/([A-Z])/g, '-$1').toLowerCase().replace('enabled', '').replace('mode', '')}-toggle`);

    // Add loading state
    toggle.classList.add('loading');

    this.settings[settingName] = !this.settings[settingName];
    const isEnabled = this.settings[settingName];

    // Update UI immediately for responsiveness
    this.updateToggle(toggle, isEnabled);

    // Save settings and notify content script
    this.saveSettings().then(() => {
      this.sendMessageToActiveTab({
        action: this.getToggleAction(settingName)
      });

      // Show notification
      this.showNotification(
        `${featureName} ${isEnabled ? 'enabled' : 'disabled'}`,
        isEnabled ? 'success' : 'warning'
      );

      // Update status
      this.updateStatus(`${featureName} ${isEnabled ? 'ON' : 'OFF'}`, isEnabled ? 'success' : 'warning');

      // Remove loading state
      setTimeout(() => {
        toggle.classList.remove('loading');
      }, 300);
    });
  }

  getToggleAction(settingName) {
    const actionMap = {
      'voiceReaderEnabled': 'toggleVoiceReader',
      'signLanguageEnabled': 'toggleSignLanguage',
      'motorAssistanceEnabled': 'toggleMotorAssistance',
      'facileMode': 'toggleFacileMode'
    };
    return actionMap[settingName] || 'updateSettings';
  }

  updateUI() {
    // Update toggle switches
    this.updateToggle('voice-toggle', this.settings.voiceReaderEnabled);
    this.updateToggle('sign-toggle', this.settings.signLanguageEnabled);
    this.updateToggle('motor-toggle', this.settings.motorAssistanceEnabled);
    this.updateToggle('facile-toggle', this.settings.facileMode);

    // Update other controls if they exist
    const speechSpeed = document.getElementById('speech-speed');
    const voiceSelect = document.getElementById('voice-select');
    const fontSize = document.getElementById('font-size');

    if (speechSpeed) speechSpeed.value = this.settings.ttsSpeed || 1.0;
    if (voiceSelect) voiceSelect.value = this.settings.ttsVoice || 'default';
    if (fontSize) fontSize.value = this.settings.fontSize || 'medium';
  }

  updateToggle(toggle, isActive) {
    if (typeof toggle === 'string') {
      toggle = document.getElementById(toggle);
    }

    if (toggle) {
      if (isActive) {
        toggle.classList.add('active');
      } else {
        toggle.classList.remove('active');
      }
    }
  }

  showLoading(show) {
    const container = document.querySelector('.container');
    if (show) {
      container.classList.add('loading');
    } else {
      container.classList.remove('loading');
    }
  }

  updateStatus(message, type = 'success') {
    const statusText = document.getElementById('status-text');
    const statusDot = document.getElementById('extension-status');

    if (statusText) {
      statusText.textContent = message;
    }

    if (statusDot) {
      statusDot.className = 'status-dot';
      if (type === 'error') {
        statusDot.classList.add('error');
      } else if (type === 'warning') {
        statusDot.classList.add('warning');
      }
    }
  }

  showNotification(message, type = 'success') {
    // Remove existing notifications
    const existing = document.querySelectorAll('.notification');
    existing.forEach(n => n.remove());

    // Create new notification
    const notification = document.createElement('div');
    notification.className = `notification ${type}`;
    notification.textContent = message;
    document.body.appendChild(notification);

    // Auto-remove after 3 seconds
    setTimeout(() => {
      notification.remove();
    }, 3000);
  }

  openHelp() {
    chrome.runtime.sendMessage({ action: 'openLearningHub' });
    window.close();
  }

  async saveSettings() {
    return new Promise((resolve) => {
      chrome.runtime.sendMessage({
        action: 'updateSettings',
        settings: this.settings
      }, (response) => {
        resolve(response);
      });
    });
  }

  resetSettings() {
    if (confirm('Are you sure you want to reset all settings to default?')) {
      this.settings = this.getDefaultSettings();
      this.updateUI();
      this.saveSettings();
      this.showNotification('Settings reset to default!');
    }
  }

  sendMessageToActiveTab(message) {
    chrome.tabs.query({ active: true, currentWindow: true }, (tabs) => {
      if (tabs[0]) {
        chrome.tabs.sendMessage(tabs[0].id, message);
      }
    });
  }

  showNotification(message) {
    // Create temporary notification
    const notification = document.createElement('div');
    notification.style.cssText = `
      position: fixed;
      top: 10px;
      right: 10px;
      background: #000;
      color: #fff;
      padding: 8px 12px;
      border-radius: 4px;
      font-size: 12px;
      z-index: 1000;
    `;
    notification.textContent = message;
    document.body.appendChild(notification);

    setTimeout(() => {
      notification.remove();
    }, 2000);
  }
}

// Initialize popup when DOM is ready
document.addEventListener('DOMContentLoaded', () => {
  new AllAblePopup();
});
