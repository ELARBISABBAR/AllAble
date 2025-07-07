import React from 'react';
import { FaDownload, FaChrome, FaFirefox, FaEdge, FaCheck, FaCog, FaPlay } from 'react-icons/fa';

const ExtensionPage = () => {
  const features = [
    {
      title: 'Voice Reader & TTS',
      description: 'Text-to-speech functionality with natural-sounding voices',
      icon: FaPlay
    },
    {
      title: 'Sign Language Overlay',
      description: 'Real-time sign language interpretation overlay',
      icon: FaCheck
    },
    {
      title: 'Motor Assistance',
      description: 'Enhanced navigation for users with motor disabilities',
      icon: FaCog
    },
    {
      title: 'Cognitive Tools',
      description: 'Simplified interfaces and cognitive accessibility features',
      icon: FaCheck
    }
  ];

  const browsers = [
    {
      name: 'Chrome',
      icon: FaChrome,
      color: 'text-blue-600',
      available: true
    },
    {
      name: 'Firefox',
      icon: FaFirefox,
      color: 'text-orange-600',
      available: true
    },
    {
      name: 'Edge',
      icon: FaEdge,
      color: 'text-blue-500',
      available: true
    }
  ];

  return (
    <div className="min-h-screen bg-gray-50 py-8">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Header */}
        <div className="text-center mb-12">
          <h1 className="text-4xl font-bold text-gray-900 mb-4">
            AllAble Browser Extension
          </h1>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto">
            Enhance your browsing experience with our comprehensive accessibility extension featuring voice reader, sign language overlays, and motor assistance tools.
          </p>
        </div>

        {/* Download Section */}
        <div className="bg-white rounded-lg shadow-lg p-8 mb-12 text-center">
          <h2 className="text-2xl font-bold text-gray-900 mb-6">
            Download AllAble Extension
          </h2>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mb-8">
            {browsers.map((browser, index) => {
              const Icon = browser.icon;
              return (
                <div key={index} className="border border-gray-200 rounded-lg p-6 hover:shadow-md transition-shadow duration-300">
                  <Icon className={`w-12 h-12 ${browser.color} mx-auto mb-4`} />
                  <h3 className="text-lg font-semibold text-gray-900 mb-3">
                    {browser.name}
                  </h3>
                  {browser.available ? (
                    <button className="bg-purple-600 text-white px-6 py-2 rounded-lg hover:bg-purple-700 transition-colors duration-200 flex items-center mx-auto">
                      <FaDownload className="w-4 h-4 mr-2" />
                      Install
                    </button>
                  ) : (
                    <span className="text-gray-500">Coming Soon</span>
                  )}
                </div>
              );
            })}
          </div>
          <p className="text-gray-600">
            Free to download and use. No registration required.
          </p>
        </div>

        {/* Features */}
        <div className="mb-12">
          <h2 className="text-3xl font-bold text-center text-gray-900 mb-8">
            Extension Features
          </h2>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            {features.map((feature, index) => {
              const Icon = feature.icon;
              return (
                <div key={index} className="bg-white rounded-lg shadow-lg p-6 text-center">
                  <div className="w-16 h-16 bg-purple-100 rounded-lg flex items-center justify-center mx-auto mb-4">
                    <Icon className="w-8 h-8 text-purple-600" />
                  </div>
                  <h3 className="text-lg font-semibold text-gray-900 mb-2">
                    {feature.title}
                  </h3>
                  <p className="text-gray-600">
                    {feature.description}
                  </p>
                </div>
              );
            })}
          </div>
        </div>

        {/* How to Use */}
        <div className="bg-white rounded-lg shadow-lg p-8 mb-12">
          <h2 className="text-2xl font-bold text-gray-900 mb-6">
            How to Use the Extension
          </h2>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            <div className="text-center">
              <div className="w-12 h-12 bg-purple-600 text-white rounded-full flex items-center justify-center mx-auto mb-4 text-xl font-bold">
                1
              </div>
              <h3 className="text-lg font-semibold text-gray-900 mb-2">
                Install Extension
              </h3>
              <p className="text-gray-600">
                Download and install the AllAble extension from your browser's extension store.
              </p>
            </div>
            <div className="text-center">
              <div className="w-12 h-12 bg-purple-600 text-white rounded-full flex items-center justify-center mx-auto mb-4 text-xl font-bold">
                2
              </div>
              <h3 className="text-lg font-semibold text-gray-900 mb-2">
                Configure Settings
              </h3>
              <p className="text-gray-600">
                Customize the extension settings to match your accessibility needs and preferences.
              </p>
            </div>
            <div className="text-center">
              <div className="w-12 h-12 bg-purple-600 text-white rounded-full flex items-center justify-center mx-auto mb-4 text-xl font-bold">
                3
              </div>
              <h3 className="text-lg font-semibold text-gray-900 mb-2">
                Start Browsing
              </h3>
              <p className="text-gray-600">
                Enjoy enhanced accessibility features on any website you visit.
              </p>
            </div>
          </div>
        </div>

        {/* Demo Video */}
        <div className="bg-white rounded-lg shadow-lg p-8 text-center">
          <h2 className="text-2xl font-bold text-gray-900 mb-6">
            See It in Action
          </h2>
          <div className="bg-gray-200 rounded-lg h-64 flex items-center justify-center mb-6">
            <div className="text-center">
              <FaPlay className="w-16 h-16 text-gray-400 mx-auto mb-4" />
              <p className="text-gray-600">Demo video coming soon</p>
            </div>
          </div>
          <p className="text-gray-600 mb-6">
            Watch our demo video to see how the AllAble extension can transform your browsing experience.
          </p>
          <button className="bg-green-600 text-white px-8 py-3 rounded-lg hover:bg-green-700 transition-colors duration-200">
            Watch Demo
          </button>
        </div>
      </div>
    </div>
  );
};

export default ExtensionPage;
