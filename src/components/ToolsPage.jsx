import React from 'react';
import { FaMicrophone, FaHandPaper, FaEye, FaKeyboard, FaVolumeUp, FaCog } from 'react-icons/fa';

const ToolsPage = () => {
  const tools = [
    {
      title: 'Voice OCR',
      description: 'Convert spoken words to text with high accuracy and multiple language support.',
      icon: FaMicrophone,
      color: 'bg-blue-100 text-blue-600',
      features: ['Real-time transcription', 'Multiple languages', 'Punctuation commands']
    },
    {
      title: 'Sign Language Translator',
      description: 'Real-time sign language recognition and translation to text or speech.',
      icon: FaHandPaper,
      color: 'bg-green-100 text-green-600',
      features: ['ASL recognition', 'Real-time translation', 'Learning mode']
    },
    {
      title: 'Text OCR Scanner',
      description: 'Extract text from images and documents with accessibility features.',
      icon: FaEye,
      color: 'bg-purple-100 text-purple-600',
      features: ['Image to text', 'Document scanning', 'Text-to-speech output']
    },
    {
      title: 'Virtual Keyboard',
      description: 'Customizable on-screen keyboard with accessibility enhancements.',
      icon: FaKeyboard,
      color: 'bg-orange-100 text-orange-600',
      features: ['Large keys', 'Voice input', 'Predictive text']
    },
    {
      title: 'Text-to-Speech',
      description: 'High-quality speech synthesis with natural-sounding voices.',
      icon: FaVolumeUp,
      color: 'bg-red-100 text-red-600',
      features: ['Natural voices', 'Speed control', 'Highlight reading']
    },
    {
      title: 'Accessibility Settings',
      description: 'Comprehensive accessibility configuration and customization tools.',
      icon: FaCog,
      color: 'bg-gray-100 text-gray-600',
      features: ['Custom profiles', 'Quick settings', 'Export/import']
    }
  ];

  return (
    <div className="min-h-screen bg-gray-50 py-8">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Header */}
        <div className="text-center mb-12">
          <h1 className="text-4xl font-bold text-gray-900 mb-4">
            Accessibility Tools
          </h1>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto">
            Utilize our comprehensive suite of accessibility tools including voice OCR, sign language translators, and OCR features.
          </p>
        </div>

        {/* Tools Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 mb-12">
          {tools.map((tool, index) => {
            const Icon = tool.icon;
            return (
              <div key={index} className="bg-white rounded-lg shadow-lg p-6 hover:shadow-xl transition-shadow duration-300">
                <div className={`w-16 h-16 ${tool.color} rounded-lg flex items-center justify-center mb-4`}>
                  <Icon className="w-8 h-8" />
                </div>
                <h3 className="text-xl font-semibold text-gray-900 mb-2">
                  {tool.title}
                </h3>
                <p className="text-gray-600 mb-4">
                  {tool.description}
                </p>
                <ul className="space-y-1 mb-4">
                  {tool.features.map((feature, featureIndex) => (
                    <li key={featureIndex} className="text-sm text-gray-500 flex items-center">
                      <span className="w-2 h-2 bg-purple-600 rounded-full mr-2"></span>
                      {feature}
                    </li>
                  ))}
                </ul>
                <button className="w-full bg-purple-600 text-white py-2 rounded-lg hover:bg-purple-700 transition-colors duration-200">
                  Try Tool
                </button>
              </div>
            );
          })}
        </div>

        {/* Quick Access Tools */}
        <div className="bg-white rounded-lg shadow-lg p-8 mb-8">
          <h2 className="text-2xl font-bold text-gray-900 mb-6">
            Quick Access Tools
          </h2>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-4">
            <button className="p-4 border border-gray-200 rounded-lg hover:bg-gray-50 transition-colors duration-200">
              <FaMicrophone className="w-8 h-8 text-blue-600 mx-auto mb-2" />
              <span className="text-sm font-medium">Voice Input</span>
            </button>
            <button className="p-4 border border-gray-200 rounded-lg hover:bg-gray-50 transition-colors duration-200">
              <FaEye className="w-8 h-8 text-purple-600 mx-auto mb-2" />
              <span className="text-sm font-medium">Scan Text</span>
            </button>
            <button className="p-4 border border-gray-200 rounded-lg hover:bg-gray-50 transition-colors duration-200">
              <FaVolumeUp className="w-8 h-8 text-red-600 mx-auto mb-2" />
              <span className="text-sm font-medium">Read Aloud</span>
            </button>
            <button className="p-4 border border-gray-200 rounded-lg hover:bg-gray-50 transition-colors duration-200">
              <FaHandPaper className="w-8 h-8 text-green-600 mx-auto mb-2" />
              <span className="text-sm font-medium">Sign Language</span>
            </button>
          </div>
        </div>

        {/* Tool Integration */}
        <div className="bg-white rounded-lg shadow-lg p-8">
          <h2 className="text-2xl font-bold text-gray-900 mb-6">
            Tool Integration & Workflows
          </h2>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            <div>
              <h3 className="text-lg font-semibold text-gray-900 mb-4">
                Create Custom Workflows
              </h3>
              <p className="text-gray-600 mb-4">
                Combine multiple tools to create personalized accessibility workflows that match your specific needs.
              </p>
              <button className="bg-purple-600 text-white px-6 py-2 rounded-lg hover:bg-purple-700 transition-colors duration-200">
                Build Workflow
              </button>
            </div>
            <div>
              <h3 className="text-lg font-semibold text-gray-900 mb-4">
                Browser Extension
              </h3>
              <p className="text-gray-600 mb-4">
                Install our browser extension to access these tools on any website with seamless integration.
              </p>
              <button className="bg-green-600 text-white px-6 py-2 rounded-lg hover:bg-green-700 transition-colors duration-200">
                Install Extension
              </button>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ToolsPage;
