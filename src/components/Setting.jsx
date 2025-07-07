import React, { useState } from 'react';
import {
  FaUser,
  FaUniversalAccess,
  FaBell,
  FaShieldAlt,
  FaPalette,
  FaMicrophone,
  FaEye,
  FaHandPaper,
  FaDesktop,
  FaChevronRight
} from 'react-icons/fa';

const Setting = () => {
  const [activeSection, setActiveSection] = useState('accessible-interface');
  const [textSize, setTextSize] = useState(16);
  const [contrastRatio, setContrastRatio] = useState(1.0);
  const [reducedMotion, setReducedMotion] = useState(false);
  const [applicationTheme, setApplicationTheme] = useState('System Default');
  const [voiceControl, setVoiceControl] = useState(true);
  const [visualEnhancements, setVisualEnhancements] = useState(false);
  const [signLanguage, setSignLanguage] = useState(true);
  const [simplifiedInterface, setSimplifiedInterface] = useState(false);

  const sidebarItems = [
    { id: 'account', label: 'Account', icon: FaUser },
    { id: 'accessible-interface', label: 'Accessible Interface', icon: FaUniversalAccess },
    { id: 'notifications', label: 'Notifications', icon: FaBell },
    { id: 'privacy', label: 'Privacy', icon: FaShieldAlt },
    { id: 'theme-display', label: 'Theme & Display', icon: FaPalette }
  ];

  const accessibilityModes = [
    {
      id: 'voice-control',
      title: 'Voice Control',
      description: 'Interact with the app using voice commands for navigation and input, enhancing hands-free operation.',
      icon: FaMicrophone,
      color: 'text-blue-600',
      bgColor: 'bg-blue-50',
      isActive: voiceControl,
      setActive: setVoiceControl
    },
    {
      id: 'visual-enhancements',
      title: 'Visual Enhancements',
      description: 'Adjust color contrast, text size, and focus indicators for optimal visual clarity and reduced eye strain.',
      icon: FaEye,
      color: 'text-green-600',
      bgColor: 'bg-green-50',
      isActive: visualEnhancements,
      setActive: setVisualEnhancements
    },
    {
      id: 'sign-language',
      title: 'Sign Language Support',
      description: 'Enable on-screen sign language interpreters for video and audio content, promoting inclusive communication.',
      icon: FaHandPaper,
      color: 'text-purple-600',
      bgColor: 'bg-purple-50',
      isActive: signLanguage,
      setActive: setSignLanguage
    },
    {
      id: 'simplified-interface',
      title: 'Simplified Interface',
      description: 'Reduce visual clutter and complexity for a streamlined user experience, focusing on essential functions.',
      icon: FaDesktop,
      color: 'text-orange-600',
      bgColor: 'bg-orange-50',
      isActive: simplifiedInterface,
      setActive: setSimplifiedInterface
    }
  ];

  return (
    <div className="min-h-screen bg-gray-50 flex">
      {/* Sidebar */}
      <div className="w-80 bg-white shadow-lg border-r border-gray-200">
        <div className="p-6 border-b border-gray-200">
          <h2 className="text-2xl font-bold text-gray-900">Settings</h2>
        </div>
        <nav className="p-4">
          {sidebarItems.map((item) => {
            const Icon = item.icon;
            return (
              <button
                key={item.id}
                onClick={() => setActiveSection(item.id)}
                className={`w-full flex items-center px-4 py-3 mb-2 rounded-lg text-left transition-all duration-200 ${
                  activeSection === item.id
                    ? 'bg-blue-50 text-blue-700 border-l-4 border-blue-500'
                    : 'text-gray-600 hover:bg-gray-50 hover:text-gray-900'
                }`}
              >
                <Icon className="w-5 h-5 mr-3" />
                <span className="font-medium">{item.label}</span>
                <FaChevronRight className="w-4 h-4 ml-auto" />
              </button>
            );
          })}
        </nav>
      </div>

      {/* Main Content */}
      <div className="flex-1 p-8">
        {activeSection === 'accessible-interface' && (
          <div className="max-w-4xl">
            {/* Header */}
            <div className="mb-8">
              <h1 className="text-3xl font-bold text-gray-900 mb-4">Accessible Interface</h1>
              <p className="text-lg text-gray-600">
                Tailor your AllAble experience to your unique needs with our comprehensive
                accessibility settings. Activate and customize features like voice control, visual
                enhancements, and sign language support.
              </p>
            </div>

            {/* Global Display Settings */}
            <div className="bg-white rounded-xl shadow-lg p-8 mb-8">
              <h2 className="text-2xl font-bold text-gray-900 mb-4">Global Display Settings</h2>
              <p className="text-gray-600 mb-6">
                Adjust overall visual and behavioral preferences for a comfortable experience.
              </p>

              <div className="space-y-6">
                {/* Text Size */}
                <div>
                  <label className="block text-sm font-semibold text-gray-900 mb-2">
                    Text Size: {textSize}px
                  </label>
                  <p className="text-sm text-gray-600 mb-3">
                    Adjust the base font size for easier readability across the application.
                  </p>
                  <input
                    type="range"
                    min="12"
                    max="24"
                    value={textSize}
                    onChange={(e) => setTextSize(parseInt(e.target.value))}
                    className="w-full h-2 bg-blue-200 rounded-lg appearance-none cursor-pointer slider"
                  />
                </div>

                {/* Contrast Ratio */}
                <div>
                  <label className="block text-sm font-semibold text-gray-900 mb-2">
                    Contrast Ratio: {contrastRatio.toFixed(1)}x
                  </label>
                  <p className="text-sm text-gray-600 mb-3">
                    Enhance text and element contrast for better visibility, especially for vision users.
                  </p>
                  <input
                    type="range"
                    min="1.0"
                    max="3.0"
                    step="0.1"
                    value={contrastRatio}
                    onChange={(e) => setContrastRatio(parseFloat(e.target.value))}
                    className="w-full h-2 bg-blue-200 rounded-lg appearance-none cursor-pointer slider"
                  />
                </div>

                {/* Reduced Motion */}
                <div className="flex items-center justify-between">
                  <div>
                    <h3 className="text-sm font-semibold text-gray-900">Reduced Motion</h3>
                    <p className="text-sm text-gray-600">
                      Minimize animations and transitions to reduce motion sickness or distractions.
                    </p>
                  </div>
                  <label className="relative inline-flex items-center cursor-pointer">
                    <input
                      type="checkbox"
                      checked={reducedMotion}
                      onChange={(e) => setReducedMotion(e.target.checked)}
                      className="sr-only peer"
                    />
                    <div className="w-11 h-6 bg-gray-200 peer-focus:outline-none peer-focus:ring-4 peer-focus:ring-blue-300 rounded-full peer peer-checked:after:translate-x-full peer-checked:after:border-white after:content-[''] after:absolute after:top-[2px] after:left-[2px] after:bg-white after:border-gray-300 after:border after:rounded-full after:h-5 after:w-5 after:transition-all peer-checked:bg-blue-600"></div>
                  </label>
                </div>

                {/* Application Theme */}
                <div className="flex items-center justify-between">
                  <div>
                    <h3 className="text-sm font-semibold text-gray-900">Application Theme</h3>
                    <p className="text-sm text-gray-600">
                      Choose the visual theme for the application (light, dark, or system default).
                    </p>
                  </div>
                  <select
                    value={applicationTheme}
                    onChange={(e) => setApplicationTheme(e.target.value)}
                    className="bg-white border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block p-2.5"
                  >
                    <option value="System Default">System Default</option>
                    <option value="Light">Light</option>
                    <option value="Dark">Dark</option>
                  </select>
                </div>
              </div>
            </div>

            {/* Specific Accessibility Modes */}
            <div className="bg-white rounded-xl shadow-lg p-8">
              <h2 className="text-2xl font-bold text-gray-900 mb-4">Specific Accessibility Modes</h2>
              <p className="text-gray-600 mb-6">
                Choose and configure individual accessibility modes to seamlessly integrate
                into your daily interactions with AllAble.
              </p>

              <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                {accessibilityModes.map((mode) => {
                  const Icon = mode.icon;
                  return (
                    <div
                      key={mode.id}
                      className={`p-6 rounded-xl border-2 transition-all duration-300 ${
                        mode.isActive
                          ? 'border-blue-200 bg-blue-50'
                          : 'border-gray-200 bg-white hover:border-gray-300'
                      }`}
                    >
                      <div className="flex items-start justify-between mb-4">
                        <div className={`p-3 rounded-lg ${mode.bgColor}`}>
                          <Icon className={`w-6 h-6 ${mode.color}`} />
                        </div>
                        <div className="flex items-center space-x-3">
                          <span className={`text-sm font-medium ${
                            mode.isActive ? 'text-blue-700' : 'text-gray-500'
                          }`}>
                            {mode.isActive ? 'Activated' : 'Deactivated'}
                          </span>
                          <label className="relative inline-flex items-center cursor-pointer">
                            <input
                              type="checkbox"
                              checked={mode.isActive}
                              onChange={(e) => mode.setActive(e.target.checked)}
                              className="sr-only peer"
                            />
                            <div className="w-11 h-6 bg-gray-200 peer-focus:outline-none peer-focus:ring-4 peer-focus:ring-blue-300 rounded-full peer peer-checked:after:translate-x-full peer-checked:after:border-white after:content-[''] after:absolute after:top-[2px] after:left-[2px] after:bg-white after:border-gray-300 after:border after:rounded-full after:h-5 after:w-5 after:transition-all peer-checked:bg-blue-600"></div>
                          </label>
                        </div>
                      </div>

                      <h3 className="text-lg font-semibold text-gray-900 mb-2">{mode.title}</h3>
                      <p className="text-gray-600 text-sm mb-4">{mode.description}</p>

                      <button className="w-full py-2 px-4 bg-blue-600 text-white rounded-lg hover:bg-blue-700 transition-colors duration-200 font-medium">
                        Customize
                      </button>
                    </div>
                  );
                })}
              </div>
            </div>
          </div>
        )}

        {/* Account Settings */}
        {activeSection === 'account' && (
          <div className="max-w-4xl">
            <h1 className="text-3xl font-bold text-gray-900 mb-4">Account Settings</h1>
            <p className="text-lg text-gray-600 mb-8">
              Manage your personal information, security settings, and account preferences.
            </p>

            {/* Profile Information */}
            <div className="bg-white rounded-xl shadow-lg p-8 mb-8">
              <h2 className="text-2xl font-bold text-gray-900 mb-6">Profile Information</h2>

              <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                <div>
                  <label className="block text-sm font-semibold text-gray-900 mb-2">First Name</label>
                  <input
                    type="text"
                    defaultValue="John"
                    className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-blue-500"
                  />
                </div>
                <div>
                  <label className="block text-sm font-semibold text-gray-900 mb-2">Last Name</label>
                  <input
                    type="text"
                    defaultValue="Doe"
                    className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-blue-500"
                  />
                </div>
                <div>
                  <label className="block text-sm font-semibold text-gray-900 mb-2">Email Address</label>
                  <input
                    type="email"
                    defaultValue="john.doe@example.com"
                    className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-blue-500"
                  />
                </div>
                <div>
                  <label className="block text-sm font-semibold text-gray-900 mb-2">Phone Number</label>
                  <input
                    type="tel"
                    defaultValue="+1 (555) 123-4567"
                    className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-blue-500"
                  />
                </div>
              </div>

              <div className="mt-6">
                <label className="block text-sm font-semibold text-gray-900 mb-2">Bio</label>
                <textarea
                  rows="4"
                  defaultValue="Passionate about accessibility and inclusive design. Working to make technology accessible for everyone."
                  className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-blue-500"
                />
              </div>

              <div className="flex justify-end mt-6">
                <button className="px-6 py-3 bg-blue-600 text-white rounded-lg hover:bg-blue-700 transition-colors duration-200 font-medium">
                  Save Changes
                </button>
              </div>
            </div>

            {/* Security Settings */}
            <div className="bg-white rounded-xl shadow-lg p-8 mb-8">
              <h2 className="text-2xl font-bold text-gray-900 mb-6">Security & Authentication</h2>

              <div className="space-y-6">
                <div className="flex items-center justify-between p-4 border border-gray-200 rounded-lg">
                  <div>
                    <h3 className="text-lg font-semibold text-gray-900">Two-Factor Authentication</h3>
                    <p className="text-gray-600">Add an extra layer of security to your account</p>
                  </div>
                  <button className="px-4 py-2 bg-green-600 text-white rounded-lg hover:bg-green-700 transition-colors duration-200">
                    Enabled
                  </button>
                </div>

                <div className="flex items-center justify-between p-4 border border-gray-200 rounded-lg">
                  <div>
                    <h3 className="text-lg font-semibold text-gray-900">Change Password</h3>
                    <p className="text-gray-600">Update your account password</p>
                  </div>
                  <button className="px-4 py-2 bg-blue-600 text-white rounded-lg hover:bg-blue-700 transition-colors duration-200">
                    Change
                  </button>
                </div>

                <div className="flex items-center justify-between p-4 border border-gray-200 rounded-lg">
                  <div>
                    <h3 className="text-lg font-semibold text-gray-900">Login Sessions</h3>
                    <p className="text-gray-600">Manage your active login sessions</p>
                  </div>
                  <button className="px-4 py-2 bg-gray-600 text-white rounded-lg hover:bg-gray-700 transition-colors duration-200">
                    View All
                  </button>
                </div>
              </div>
            </div>

            {/* Account Preferences */}
            <div className="bg-white rounded-xl shadow-lg p-8">
              <h2 className="text-2xl font-bold text-gray-900 mb-6">Account Preferences</h2>

              <div className="space-y-4">
                <div className="flex items-center justify-between">
                  <div>
                    <h3 className="text-lg font-semibold text-gray-900">Language</h3>
                    <p className="text-gray-600">Choose your preferred language</p>
                  </div>
                  <select className="bg-white border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block p-2.5">
                    <option value="en">English</option>
                    <option value="es">Español</option>
                    <option value="fr">Français</option>
                    <option value="de">Deutsch</option>
                    <option value="ar">العربية</option>
                  </select>
                </div>

                <div className="flex items-center justify-between">
                  <div>
                    <h3 className="text-lg font-semibold text-gray-900">Time Zone</h3>
                    <p className="text-gray-600">Set your local time zone</p>
                  </div>
                  <select className="bg-white border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block p-2.5">
                    <option value="UTC-5">Eastern Time (UTC-5)</option>
                    <option value="UTC-6">Central Time (UTC-6)</option>
                    <option value="UTC-7">Mountain Time (UTC-7)</option>
                    <option value="UTC-8">Pacific Time (UTC-8)</option>
                    <option value="UTC+0">Greenwich Mean Time (UTC+0)</option>
                  </select>
                </div>
              </div>
            </div>
          </div>
        )}

        {activeSection === 'notifications' && (
          <div className="max-w-4xl">
            <h1 className="text-3xl font-bold text-gray-900 mb-4">Notification Settings</h1>
            <p className="text-lg text-gray-600 mb-8">
              Control how and when you receive notifications from AllAble to stay informed without being overwhelmed.
            </p>

            {/* Email Notifications */}
            <div className="bg-white rounded-xl shadow-lg p-8 mb-8">
              <h2 className="text-2xl font-bold text-gray-900 mb-6">Email Notifications</h2>

              <div className="space-y-4">
                <div className="flex items-center justify-between p-4 border border-gray-200 rounded-lg">
                  <div>
                    <h3 className="text-lg font-semibold text-gray-900">Account Updates</h3>
                    <p className="text-gray-600">Security alerts, password changes, and account modifications</p>
                  </div>
                  <label className="relative inline-flex items-center cursor-pointer">
                    <input type="checkbox" defaultChecked className="sr-only peer" />
                    <div className="w-11 h-6 bg-gray-200 peer-focus:outline-none peer-focus:ring-4 peer-focus:ring-blue-300 rounded-full peer peer-checked:after:translate-x-full peer-checked:after:border-white after:content-[''] after:absolute after:top-[2px] after:left-[2px] after:bg-white after:border-gray-300 after:border after:rounded-full after:h-5 after:w-5 after:transition-all peer-checked:bg-blue-600"></div>
                  </label>
                </div>

                <div className="flex items-center justify-between p-4 border border-gray-200 rounded-lg">
                  <div>
                    <h3 className="text-lg font-semibold text-gray-900">Feature Updates</h3>
                    <p className="text-gray-600">New accessibility features and platform improvements</p>
                  </div>
                  <label className="relative inline-flex items-center cursor-pointer">
                    <input type="checkbox" defaultChecked className="sr-only peer" />
                    <div className="w-11 h-6 bg-gray-200 peer-focus:outline-none peer-focus:ring-4 peer-focus:ring-blue-300 rounded-full peer peer-checked:after:translate-x-full peer-checked:after:border-white after:content-[''] after:absolute after:top-[2px] after:left-[2px] after:bg-white after:border-gray-300 after:border after:rounded-full after:h-5 after:w-5 after:transition-all peer-checked:bg-blue-600"></div>
                  </label>
                </div>

                <div className="flex items-center justify-between p-4 border border-gray-200 rounded-lg">
                  <div>
                    <h3 className="text-lg font-semibold text-gray-900">Community Updates</h3>
                    <p className="text-gray-600">New community posts, events, and discussions</p>
                  </div>
                  <label className="relative inline-flex items-center cursor-pointer">
                    <input type="checkbox" className="sr-only peer" />
                    <div className="w-11 h-6 bg-gray-200 peer-focus:outline-none peer-focus:ring-4 peer-focus:ring-blue-300 rounded-full peer peer-checked:after:translate-x-full peer-checked:after:border-white after:content-[''] after:absolute after:top-[2px] after:left-[2px] after:bg-white after:border-gray-300 after:border after:rounded-full after:h-5 after:w-5 after:transition-all peer-checked:bg-blue-600"></div>
                  </label>
                </div>

                <div className="flex items-center justify-between p-4 border border-gray-200 rounded-lg">
                  <div>
                    <h3 className="text-lg font-semibold text-gray-900">Weekly Digest</h3>
                    <p className="text-gray-600">Summary of your activity and platform highlights</p>
                  </div>
                  <label className="relative inline-flex items-center cursor-pointer">
                    <input type="checkbox" defaultChecked className="sr-only peer" />
                    <div className="w-11 h-6 bg-gray-200 peer-focus:outline-none peer-focus:ring-4 peer-focus:ring-blue-300 rounded-full peer peer-checked:after:translate-x-full peer-checked:after:border-white after:content-[''] after:absolute after:top-[2px] after:left-[2px] after:bg-white after:border-gray-300 after:border after:rounded-full after:h-5 after:w-5 after:transition-all peer-checked:bg-blue-600"></div>
                  </label>
                </div>
              </div>
            </div>

            {/* Push Notifications */}
            <div className="bg-white rounded-xl shadow-lg p-8 mb-8">
              <h2 className="text-2xl font-bold text-gray-900 mb-6">Push Notifications</h2>

              <div className="space-y-4">
                <div className="flex items-center justify-between p-4 border border-gray-200 rounded-lg">
                  <div>
                    <h3 className="text-lg font-semibold text-gray-900">Accessibility Reminders</h3>
                    <p className="text-gray-600">Reminders to use accessibility features and take breaks</p>
                  </div>
                  <label className="relative inline-flex items-center cursor-pointer">
                    <input type="checkbox" defaultChecked className="sr-only peer" />
                    <div className="w-11 h-6 bg-gray-200 peer-focus:outline-none peer-focus:ring-4 peer-focus:ring-blue-300 rounded-full peer peer-checked:after:translate-x-full peer-checked:after:border-white after:content-[''] after:absolute after:top-[2px] after:left-[2px] after:bg-white after:border-gray-300 after:border after:rounded-full after:h-5 after:w-5 after:transition-all peer-checked:bg-blue-600"></div>
                  </label>
                </div>

                <div className="flex items-center justify-between p-4 border border-gray-200 rounded-lg">
                  <div>
                    <h3 className="text-lg font-semibold text-gray-900">System Alerts</h3>
                    <p className="text-gray-600">Important system notifications and maintenance updates</p>
                  </div>
                  <label className="relative inline-flex items-center cursor-pointer">
                    <input type="checkbox" defaultChecked className="sr-only peer" />
                    <div className="w-11 h-6 bg-gray-200 peer-focus:outline-none peer-focus:ring-4 peer-focus:ring-blue-300 rounded-full peer peer-checked:after:translate-x-full peer-checked:after:border-white after:content-[''] after:absolute after:top-[2px] after:left-[2px] after:bg-white after:border-gray-300 after:border after:rounded-full after:h-5 after:w-5 after:transition-all peer-checked:bg-blue-600"></div>
                  </label>
                </div>

                <div className="flex items-center justify-between p-4 border border-gray-200 rounded-lg">
                  <div>
                    <h3 className="text-lg font-semibold text-gray-900">Social Interactions</h3>
                    <p className="text-gray-600">Comments, mentions, and community interactions</p>
                  </div>
                  <label className="relative inline-flex items-center cursor-pointer">
                    <input type="checkbox" className="sr-only peer" />
                    <div className="w-11 h-6 bg-gray-200 peer-focus:outline-none peer-focus:ring-4 peer-focus:ring-blue-300 rounded-full peer peer-checked:after:translate-x-full peer-checked:after:border-white after:content-[''] after:absolute after:top-[2px] after:left-[2px] after:bg-white after:border-gray-300 after:border after:rounded-full after:h-5 after:w-5 after:transition-all peer-checked:bg-blue-600"></div>
                  </label>
                </div>
              </div>
            </div>

            {/* Notification Preferences */}
            <div className="bg-white rounded-xl shadow-lg p-8">
              <h2 className="text-2xl font-bold text-gray-900 mb-6">Notification Preferences</h2>

              <div className="space-y-6">
                <div>
                  <label className="block text-sm font-semibold text-gray-900 mb-2">Quiet Hours</label>
                  <p className="text-gray-600 mb-4">Set times when you don't want to receive notifications</p>
                  <div className="grid grid-cols-2 gap-4">
                    <div>
                      <label className="block text-sm text-gray-700 mb-1">Start Time</label>
                      <input
                        type="time"
                        defaultValue="22:00"
                        className="w-full px-3 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-blue-500"
                      />
                    </div>
                    <div>
                      <label className="block text-sm text-gray-700 mb-1">End Time</label>
                      <input
                        type="time"
                        defaultValue="08:00"
                        className="w-full px-3 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-blue-500"
                      />
                    </div>
                  </div>
                </div>

                <div>
                  <label className="block text-sm font-semibold text-gray-900 mb-2">Notification Sound</label>
                  <p className="text-gray-600 mb-4">Choose how you want to be notified</p>
                  <select className="w-full bg-white border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block p-2.5">
                    <option value="default">Default Sound</option>
                    <option value="gentle">Gentle Chime</option>
                    <option value="vibrate">Vibration Only</option>
                    <option value="silent">Silent</option>
                  </select>
                </div>
              </div>
            </div>
          </div>
        )}

        {activeSection === 'privacy' && (
          <div className="max-w-4xl">
            <h1 className="text-3xl font-bold text-gray-900 mb-4">Privacy Settings</h1>
            <p className="text-lg text-gray-600 mb-8">
              Control your privacy preferences and manage how your data is used to enhance your AllAble experience.
            </p>

            {/* Data Privacy */}
            <div className="bg-white rounded-xl shadow-lg p-8 mb-8">
              <h2 className="text-2xl font-bold text-gray-900 mb-6">Data Privacy</h2>

              <div className="space-y-4">
                <div className="flex items-center justify-between p-4 border border-gray-200 rounded-lg">
                  <div>
                    <h3 className="text-lg font-semibold text-gray-900">Usage Analytics</h3>
                    <p className="text-gray-600">Help improve AllAble by sharing anonymous usage data</p>
                  </div>
                  <label className="relative inline-flex items-center cursor-pointer">
                    <input type="checkbox" defaultChecked className="sr-only peer" />
                    <div className="w-11 h-6 bg-gray-200 peer-focus:outline-none peer-focus:ring-4 peer-focus:ring-blue-300 rounded-full peer peer-checked:after:translate-x-full peer-checked:after:border-white after:content-[''] after:absolute after:top-[2px] after:left-[2px] after:bg-white after:border-gray-300 after:border after:rounded-full after:h-5 after:w-5 after:transition-all peer-checked:bg-blue-600"></div>
                  </label>
                </div>

                <div className="flex items-center justify-between p-4 border border-gray-200 rounded-lg">
                  <div>
                    <h3 className="text-lg font-semibold text-gray-900">Accessibility Data</h3>
                    <p className="text-gray-600">Share accessibility preferences to improve features for all users</p>
                  </div>
                  <label className="relative inline-flex items-center cursor-pointer">
                    <input type="checkbox" defaultChecked className="sr-only peer" />
                    <div className="w-11 h-6 bg-gray-200 peer-focus:outline-none peer-focus:ring-4 peer-focus:ring-blue-300 rounded-full peer peer-checked:after:translate-x-full peer-checked:after:border-white after:content-[''] after:absolute after:top-[2px] after:left-[2px] after:bg-white after:border-gray-300 after:border after:rounded-full after:h-5 after:w-5 after:transition-all peer-checked:bg-blue-600"></div>
                  </label>
                </div>

                <div className="flex items-center justify-between p-4 border border-gray-200 rounded-lg">
                  <div>
                    <h3 className="text-lg font-semibold text-gray-900">Personalized Recommendations</h3>
                    <p className="text-gray-600">Use your activity to suggest relevant accessibility features</p>
                  </div>
                  <label className="relative inline-flex items-center cursor-pointer">
                    <input type="checkbox" className="sr-only peer" />
                    <div className="w-11 h-6 bg-gray-200 peer-focus:outline-none peer-focus:ring-4 peer-focus:ring-blue-300 rounded-full peer peer-checked:after:translate-x-full peer-checked:after:border-white after:content-[''] after:absolute after:top-[2px] after:left-[2px] after:bg-white after:border-gray-300 after:border after:rounded-full after:h-5 after:w-5 after:transition-all peer-checked:bg-blue-600"></div>
                  </label>
                </div>
              </div>
            </div>

            {/* Profile Visibility */}
            <div className="bg-white rounded-xl shadow-lg p-8 mb-8">
              <h2 className="text-2xl font-bold text-gray-900 mb-6">Profile Visibility</h2>

              <div className="space-y-4">
                <div className="flex items-center justify-between p-4 border border-gray-200 rounded-lg">
                  <div>
                    <h3 className="text-lg font-semibold text-gray-900">Public Profile</h3>
                    <p className="text-gray-600">Make your profile visible to other AllAble community members</p>
                  </div>
                  <label className="relative inline-flex items-center cursor-pointer">
                    <input type="checkbox" defaultChecked className="sr-only peer" />
                    <div className="w-11 h-6 bg-gray-200 peer-focus:outline-none peer-focus:ring-4 peer-focus:ring-blue-300 rounded-full peer peer-checked:after:translate-x-full peer-checked:after:border-white after:content-[''] after:absolute after:top-[2px] after:left-[2px] after:bg-white after:border-gray-300 after:border after:rounded-full after:h-5 after:w-5 after:transition-all peer-checked:bg-blue-600"></div>
                  </label>
                </div>

                <div className="flex items-center justify-between p-4 border border-gray-200 rounded-lg">
                  <div>
                    <h3 className="text-lg font-semibold text-gray-900">Activity Status</h3>
                    <p className="text-gray-600">Show when you're online and active on the platform</p>
                  </div>
                  <label className="relative inline-flex items-center cursor-pointer">
                    <input type="checkbox" className="sr-only peer" />
                    <div className="w-11 h-6 bg-gray-200 peer-focus:outline-none peer-focus:ring-4 peer-focus:ring-blue-300 rounded-full peer peer-checked:after:translate-x-full peer-checked:after:border-white after:content-[''] after:absolute after:top-[2px] after:left-[2px] after:bg-white after:border-gray-300 after:border after:rounded-full after:h-5 after:w-5 after:transition-all peer-checked:bg-blue-600"></div>
                  </label>
                </div>

                <div className="flex items-center justify-between p-4 border border-gray-200 rounded-lg">
                  <div>
                    <h3 className="text-lg font-semibold text-gray-900">Contact Information</h3>
                    <p className="text-gray-600">Allow others to see your contact details</p>
                  </div>
                  <select className="bg-white border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block p-2.5">
                    <option value="everyone">Everyone</option>
                    <option value="community">Community Members Only</option>
                    <option value="friends">Friends Only</option>
                    <option value="nobody">Nobody</option>
                  </select>
                </div>
              </div>
            </div>

            {/* Data Management */}
            <div className="bg-white rounded-xl shadow-lg p-8">
              <h2 className="text-2xl font-bold text-gray-900 mb-6">Data Management</h2>

              <div className="space-y-4">
                <div className="flex items-center justify-between p-4 border border-gray-200 rounded-lg">
                  <div>
                    <h3 className="text-lg font-semibold text-gray-900">Download Your Data</h3>
                    <p className="text-gray-600">Get a copy of all your data stored on AllAble</p>
                  </div>
                  <button className="px-4 py-2 bg-blue-600 text-white rounded-lg hover:bg-blue-700 transition-colors duration-200">
                    Download
                  </button>
                </div>

                <div className="flex items-center justify-between p-4 border border-gray-200 rounded-lg">
                  <div>
                    <h3 className="text-lg font-semibold text-gray-900">Data Retention</h3>
                    <p className="text-gray-600">Control how long your data is stored</p>
                  </div>
                  <select className="bg-white border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block p-2.5">
                    <option value="indefinite">Keep Indefinitely</option>
                    <option value="5years">5 Years</option>
                    <option value="2years">2 Years</option>
                    <option value="1year">1 Year</option>
                  </select>
                </div>

                <div className="flex items-center justify-between p-4 border border-red-200 rounded-lg bg-red-50">
                  <div>
                    <h3 className="text-lg font-semibold text-red-900">Delete Account</h3>
                    <p className="text-red-600">Permanently delete your account and all associated data</p>
                  </div>
                  <button className="px-4 py-2 bg-red-600 text-white rounded-lg hover:bg-red-700 transition-colors duration-200">
                    Delete
                  </button>
                </div>
              </div>
            </div>
          </div>
        )}

        {activeSection === 'theme-display' && (
          <div className="max-w-4xl">
            <h1 className="text-3xl font-bold text-gray-900 mb-4">Theme & Display Settings</h1>
            <p className="text-lg text-gray-600 mb-8">
              Customize the visual appearance and display preferences to create a comfortable viewing experience.
            </p>

            {/* Theme Selection */}
            <div className="bg-white rounded-xl shadow-lg p-8 mb-8">
              <h2 className="text-2xl font-bold text-gray-900 mb-6">Theme Selection</h2>

              <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
                <div className="border-2 border-blue-500 rounded-lg p-4 cursor-pointer hover:shadow-lg transition-shadow">
                  <div className="bg-gradient-to-br from-blue-50 to-white h-24 rounded-lg mb-3 flex items-center justify-center">
                    <div className="w-8 h-8 bg-blue-500 rounded-full"></div>
                  </div>
                  <h3 className="font-semibold text-gray-900">Light Theme</h3>
                  <p className="text-sm text-gray-600">Clean and bright interface</p>
                </div>

                <div className="border-2 border-gray-300 rounded-lg p-4 cursor-pointer hover:shadow-lg transition-shadow">
                  <div className="bg-gradient-to-br from-gray-800 to-gray-900 h-24 rounded-lg mb-3 flex items-center justify-center">
                    <div className="w-8 h-8 bg-gray-400 rounded-full"></div>
                  </div>
                  <h3 className="font-semibold text-gray-900">Dark Theme</h3>
                  <p className="text-sm text-gray-600">Easy on the eyes in low light</p>
                </div>

                <div className="border-2 border-gray-300 rounded-lg p-4 cursor-pointer hover:shadow-lg transition-shadow">
                  <div className="bg-gradient-to-br from-yellow-100 to-blue-100 h-24 rounded-lg mb-3 flex items-center justify-center">
                    <div className="w-8 h-8 bg-yellow-500 rounded-full"></div>
                  </div>
                  <h3 className="font-semibold text-gray-900">High Contrast</h3>
                  <p className="text-sm text-gray-600">Maximum visibility and clarity</p>
                </div>
              </div>
            </div>

            {/* Color Customization */}
            <div className="bg-white rounded-xl shadow-lg p-8 mb-8">
              <h2 className="text-2xl font-bold text-gray-900 mb-6">Color Customization</h2>

              <div className="space-y-6">
                <div>
                  <label className="block text-sm font-semibold text-gray-900 mb-3">Primary Color</label>
                  <div className="flex items-center space-x-4">
                    <div className="flex space-x-2">
                      <div className="w-8 h-8 bg-blue-500 rounded-full cursor-pointer border-2 border-blue-700"></div>
                      <div className="w-8 h-8 bg-green-500 rounded-full cursor-pointer border-2 border-transparent hover:border-green-700"></div>
                      <div className="w-8 h-8 bg-purple-500 rounded-full cursor-pointer border-2 border-transparent hover:border-purple-700"></div>
                      <div className="w-8 h-8 bg-red-500 rounded-full cursor-pointer border-2 border-transparent hover:border-red-700"></div>
                      <div className="w-8 h-8 bg-orange-500 rounded-full cursor-pointer border-2 border-transparent hover:border-orange-700"></div>
                    </div>
                    <input type="color" defaultValue="#3B82F6" className="w-8 h-8 rounded cursor-pointer" />
                  </div>
                </div>

                <div>
                  <label className="block text-sm font-semibold text-gray-900 mb-2">Background Opacity</label>
                  <div className="flex items-center space-x-4">
                    <span className="text-sm text-gray-600">0%</span>
                    <input
                      type="range"
                      min="0"
                      max="100"
                      defaultValue="100"
                      className="flex-1 h-2 bg-gray-200 rounded-lg appearance-none cursor-pointer slider"
                    />
                    <span className="text-sm text-gray-600">100%</span>
                  </div>
                </div>
              </div>
            </div>

            {/* Typography Settings */}
            <div className="bg-white rounded-xl shadow-lg p-8 mb-8">
              <h2 className="text-2xl font-bold text-gray-900 mb-6">Typography Settings</h2>

              <div className="space-y-6">
                <div>
                  <label className="block text-sm font-semibold text-gray-900 mb-2">Font Family</label>
                  <select className="w-full bg-white border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block p-2.5">
                    <option value="system">System Default</option>
                    <option value="arial">Arial</option>
                    <option value="helvetica">Helvetica</option>
                    <option value="times">Times New Roman</option>
                    <option value="georgia">Georgia</option>
                    <option value="verdana">Verdana</option>
                    <option value="dyslexic">OpenDyslexic (Accessibility)</option>
                  </select>
                </div>

                <div>
                  <label className="block text-sm font-semibold text-gray-900 mb-2">Line Height</label>
                  <div className="flex items-center space-x-4">
                    <span className="text-sm text-gray-600">1.0</span>
                    <input
                      type="range"
                      min="1"
                      max="2"
                      step="0.1"
                      defaultValue="1.5"
                      className="flex-1 h-2 bg-gray-200 rounded-lg appearance-none cursor-pointer slider"
                    />
                    <span className="text-sm text-gray-600">2.0</span>
                  </div>
                </div>

                <div>
                  <label className="block text-sm font-semibold text-gray-900 mb-2">Letter Spacing</label>
                  <div className="flex items-center space-x-4">
                    <span className="text-sm text-gray-600">Normal</span>
                    <input
                      type="range"
                      min="0"
                      max="5"
                      step="0.5"
                      defaultValue="0"
                      className="flex-1 h-2 bg-gray-200 rounded-lg appearance-none cursor-pointer slider"
                    />
                    <span className="text-sm text-gray-600">Wide</span>
                  </div>
                </div>
              </div>
            </div>

            {/* Layout Preferences */}
            <div className="bg-white rounded-xl shadow-lg p-8">
              <h2 className="text-2xl font-bold text-gray-900 mb-6">Layout Preferences</h2>

              <div className="space-y-4">
                <div className="flex items-center justify-between p-4 border border-gray-200 rounded-lg">
                  <div>
                    <h3 className="text-lg font-semibold text-gray-900">Compact Mode</h3>
                    <p className="text-gray-600">Reduce spacing and padding for more content on screen</p>
                  </div>
                  <label className="relative inline-flex items-center cursor-pointer">
                    <input type="checkbox" className="sr-only peer" />
                    <div className="w-11 h-6 bg-gray-200 peer-focus:outline-none peer-focus:ring-4 peer-focus:ring-blue-300 rounded-full peer peer-checked:after:translate-x-full peer-checked:after:border-white after:content-[''] after:absolute after:top-[2px] after:left-[2px] after:bg-white after:border-gray-300 after:border after:rounded-full after:h-5 after:w-5 after:transition-all peer-checked:bg-blue-600"></div>
                  </label>
                </div>

                <div className="flex items-center justify-between p-4 border border-gray-200 rounded-lg">
                  <div>
                    <h3 className="text-lg font-semibold text-gray-900">Focus Indicators</h3>
                    <p className="text-gray-600">Enhanced visual focus indicators for keyboard navigation</p>
                  </div>
                  <label className="relative inline-flex items-center cursor-pointer">
                    <input type="checkbox" defaultChecked className="sr-only peer" />
                    <div className="w-11 h-6 bg-gray-200 peer-focus:outline-none peer-focus:ring-4 peer-focus:ring-blue-300 rounded-full peer peer-checked:after:translate-x-full peer-checked:after:border-white after:content-[''] after:absolute after:top-[2px] after:left-[2px] after:bg-white after:border-gray-300 after:border after:rounded-full after:h-5 after:w-5 after:transition-all peer-checked:bg-blue-600"></div>
                  </label>
                </div>

                <div className="flex items-center justify-between p-4 border border-gray-200 rounded-lg">
                  <div>
                    <h3 className="text-lg font-semibold text-gray-900">Sidebar Position</h3>
                    <p className="text-gray-600">Choose where to display the navigation sidebar</p>
                  </div>
                  <select className="bg-white border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block p-2.5">
                    <option value="left">Left Side</option>
                    <option value="right">Right Side</option>
                    <option value="top">Top Bar</option>
                    <option value="bottom">Bottom Bar</option>
                  </select>
                </div>
              </div>
            </div>
          </div>
        )}
      </div>
    </div>
  );
};

export default Setting;