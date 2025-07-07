import React, { useState } from 'react';
import { FaMicrophone, FaEye, FaHandPaper, FaDesktop, FaPlay, FaChevronDown, FaChevronUp, FaQuestionCircle } from 'react-icons/fa';

const InterfacePage = () => {
  const [activeMode, setActiveMode] = useState(null);
  const [expandedFaq, setExpandedFaq] = useState(null);

  const interfaceModes = [
    {
      title: 'Vocal Interface',
      description: 'Navigate and interact through voice commands and speech recognition for hands-free accessibility.',
      icon: FaMicrophone,
      color: 'from-blue-400 to-blue-600',
      bgColor: 'bg-blue-50',
      features: ['Voice commands', 'Speech recognition', 'Audio feedback']
    },
    {
      title: 'Visual Adaptations',
      description: 'Customize visual elements like font size, contrast, and color schemes for optimal readability.',
      icon: FaEye,
      color: 'from-green-400 to-green-600',
      bgColor: 'bg-green-50',
      features: ['High contrast', 'Large text', 'Color adjustments']
    },
    {
      title: 'Sign Language Support',
      description: 'Real-time sign language interpretation and gesture recognition for seamless communication.',
      icon: FaHandPaper,
      color: 'from-purple-400 to-purple-600',
      bgColor: 'bg-purple-50',
      features: ['ASL recognition', 'Real-time translation', 'Gesture controls']
    },
    {
      title: 'Simplified Access',
      description: 'A clean interface with essential features and intuitive navigation for cognitive accessibility.',
      icon: FaDesktop,
      color: 'from-orange-400 to-orange-600',
      bgColor: 'bg-orange-50',
      features: ['Simplified layout', 'Essential features', 'Clear navigation']
    }
  ];

  const faqItems = [
    {
      question: 'How does the vocal interface work?',
      answer: 'Our vocal interface uses advanced speech recognition to understand your commands and navigate the platform hands-free.'
    },
    {
      question: 'What visual customization options are available?',
      answer: 'You can adjust font sizes, contrast levels, color schemes, and enable high contrast mode for better visibility.'
    },
    {
      question: 'Can I use sign language for communication?',
      answer: 'Yes, our platform supports real-time sign language recognition and can translate gestures into text or speech.'
    },
    {
      question: 'Is the simplified interface suitable for everyone?',
      answer: 'The simplified interface is designed for users who prefer cleaner layouts and essential features for easier navigation.'
    }
  ];

  const testimonials = [
    {
      name: 'Sarah J.',
      text: 'The vocal interface has completely changed how I interact with technology. It\'s incredibly responsive and accurate.',
      rating: 5
    },
    {
      name: 'Mike R.',
      text: 'Visual adaptations make everything so much clearer. The high contrast mode is perfect for my needs.',
      rating: 5
    },
    {
      name: 'Alex K.',
      text: 'Outstanding sign language support. Real-time translation works flawlessly and has improved my communication significantly.',
      rating: 5
    }
  ];

  return (
    <div className="min-h-screen bg-gradient-to-br from-purple-50 via-blue-50 to-indigo-50">
      {/* Hero Section */}
      <section className="relative bg-gradient-to-r from-purple-600 to-blue-600 text-white py-20 px-4 overflow-hidden">
        <div className="absolute inset-0 bg-black opacity-20"></div>
        <div className="relative max-w-7xl mx-auto text-center">
          <h1 className="text-5xl md:text-6xl font-bold mb-6 animate-fade-in">
            Tailored Access, Just For You
          </h1>
          <p className="text-xl md:text-2xl mb-8 max-w-4xl mx-auto opacity-90">
            Discover the ideal interface designed to match your unique accessibility needs,
            with adaptive options.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <button className="bg-white text-purple-600 px-8 py-4 rounded-full text-lg font-semibold hover:bg-gray-100 transition-all duration-300 transform hover:scale-105">
              Get Started
            </button>
            <button className="border-2 border-white text-white px-8 py-4 rounded-full text-lg font-semibold hover:bg-white hover:text-purple-600 transition-all duration-300">
              Learn More
            </button>
          </div>
        </div>
      </section>

      {/* Adaptive Interface Modes */}
      <section className="py-20 px-4">
        <div className="max-w-7xl mx-auto">
          <h2 className="text-4xl font-bold text-center text-gray-900 mb-16">
            Our Adaptive Interface Modes
          </h2>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            {interfaceModes.map((mode, index) => {
              const Icon = mode.icon;
              return (
                <div
                  key={index}
                  className={`${mode.bgColor} rounded-2xl p-8 interface-card transition-all duration-500 cursor-pointer group animate-fadeInUp`}
                  style={{ animationDelay: `${index * 0.2}s` }}
                  onMouseEnter={() => setActiveMode(index)}
                  onMouseLeave={() => setActiveMode(null)}
                >
                  <div className="flex items-start space-x-6">
                    <div className={`w-20 h-20 bg-gradient-to-r ${mode.color} rounded-2xl flex items-center justify-center shadow-lg group-hover:scale-110 transition-transform duration-300 animate-float`}>
                      <Icon className="w-10 h-10 text-white" />
                    </div>
                    <div className="flex-1">
                      <h3 className="text-2xl font-bold text-gray-900 mb-3">
                        {mode.title}
                      </h3>
                      <p className="text-gray-700 mb-4 leading-relaxed">
                        {mode.description}
                      </p>
                      <ul className="space-y-2 mb-6">
                        {mode.features.map((feature, featureIndex) => (
                          <li key={featureIndex} className="flex items-center text-gray-600">
                            <div className="w-2 h-2 bg-purple-500 rounded-full mr-3"></div>
                            {feature}
                          </li>
                        ))}
                      </ul>
                      <button className={`bg-gradient-to-r ${mode.color} text-white px-6 py-3 rounded-full font-semibold hover:shadow-lg transition-all duration-300 transform hover:scale-105`}>
                        Try This Mode
                      </button>
                    </div>
                  </div>
                </div>
              );
            })}
          </div>
        </div>
      </section>

      {/* How It Works Section */}
      <section className="py-20 px-4 bg-white">
        <div className="max-w-4xl mx-auto text-center">
          <h2 className="text-4xl font-bold text-gray-900 mb-16">
            How It Works
          </h2>

          <div className="space-y-8">
            <div
              className="p-6 border border-gray-200 rounded-lg cursor-pointer hover:shadow-lg transition-all duration-300"
              onClick={() => setExpandedFaq(expandedFaq === 0 ? null : 0)}
            >
              <div className="flex items-center justify-between">
                <h3 className="text-xl font-semibold text-gray-900">How does the vocal interface work?</h3>
                {expandedFaq === 0 ? <FaChevronUp /> : <FaChevronDown />}
              </div>
              {expandedFaq === 0 && (
                <p className="mt-4 text-gray-600 text-left">
                  Our vocal interface uses advanced speech recognition to understand your commands and navigate the platform hands-free.
                </p>
              )}
            </div>

            <div
              className="p-6 border border-gray-200 rounded-lg cursor-pointer hover:shadow-lg transition-all duration-300"
              onClick={() => setExpandedFaq(expandedFaq === 1 ? null : 1)}
            >
              <div className="flex items-center justify-between">
                <h3 className="text-xl font-semibold text-gray-900">What visual customization options are available?</h3>
                {expandedFaq === 1 ? <FaChevronUp /> : <FaChevronDown />}
              </div>
              {expandedFaq === 1 && (
                <p className="mt-4 text-gray-600 text-left">
                  You can adjust font sizes, contrast levels, color schemes, and enable high contrast mode for better visibility.
                </p>
              )}
            </div>

            <div
              className="p-6 border border-gray-200 rounded-lg cursor-pointer hover:shadow-lg transition-all duration-300"
              onClick={() => setExpandedFaq(expandedFaq === 2 ? null : 2)}
            >
              <div className="flex items-center justify-between">
                <h3 className="text-xl font-semibold text-gray-900">Can I use sign language for communication?</h3>
                {expandedFaq === 2 ? <FaChevronUp /> : <FaChevronDown />}
              </div>
              {expandedFaq === 2 && (
                <p className="mt-4 text-gray-600 text-left">
                  Yes, our platform supports real-time sign language recognition and can translate gestures into text or speech.
                </p>
              )}
            </div>

            <div
              className="p-6 border border-gray-200 rounded-lg cursor-pointer hover:shadow-lg transition-all duration-300"
              onClick={() => setExpandedFaq(expandedFaq === 3 ? null : 3)}
            >
              <div className="flex items-center justify-between">
                <h3 className="text-xl font-semibold text-gray-900">Is the simplified interface suitable for everyone?</h3>
                {expandedFaq === 3 ? <FaChevronUp /> : <FaChevronDown />}
              </div>
              {expandedFaq === 3 && (
                <p className="mt-4 text-gray-600 text-left">
                  The simplified interface is designed for users who prefer cleaner layouts and essential features for easier navigation.
                </p>
              )}
            </div>
          </div>
        </div>
      </section>

      {/* Testimonials Section */}
      <section className="py-20 px-4 bg-gray-50">
        <div className="max-w-7xl mx-auto">
          <h2 className="text-4xl font-bold text-center text-gray-900 mb-16">
            Hear From Our Users
          </h2>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {testimonials.map((testimonial, index) => (
              <div key={index} className="bg-white rounded-2xl p-8 shadow-lg hover:shadow-xl transition-all duration-300 transform hover:-translate-y-1">
                <div className="flex items-center mb-4">
                  <div className="w-12 h-12 bg-gradient-to-r from-purple-400 to-blue-500 rounded-full flex items-center justify-center text-white font-bold text-lg">
                    {testimonial.name.charAt(0)}
                  </div>
                  <div className="ml-4">
                    <h4 className="font-semibold text-gray-900">{testimonial.name}</h4>
                    <div className="flex text-yellow-400">
                      {[...Array(testimonial.rating)].map((_, i) => (
                        <span key={i}>★</span>
                      ))}
                    </div>
                  </div>
                </div>
                <p className="text-gray-600 italic">"{testimonial.text}"</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-20 px-4 bg-gradient-to-r from-purple-600 to-blue-600 text-white">
        <div className="max-w-4xl mx-auto text-center">
          <h2 className="text-4xl font-bold mb-6">
            Ready to Experience Seamless Accessibility?
          </h2>
          <p className="text-xl mb-8 opacity-90">
            Join thousands of users who have transformed their digital experience.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <button className="bg-white text-purple-600 px-8 py-4 rounded-full text-lg font-semibold hover:bg-gray-100 transition-all duration-300 transform hover:scale-105">
              Start for Free
            </button>
            <button className="border-2 border-white text-white px-8 py-4 rounded-full text-lg font-semibold hover:bg-white hover:text-purple-600 transition-all duration-300">
              Explore Our Library
            </button>
          </div>
        </div>
      </section>

      {/* Footer */}
      <footer className="bg-gray-900 text-white py-12 px-4">
        <div className="max-w-7xl mx-auto text-center">
          <h3 className="text-2xl font-bold mb-4">AllAble</h3>
          <p className="text-gray-400 mb-6">Stay updated with AllAble</p>
          <div className="flex justify-center space-x-6 mb-8">
            <a href="#" className="text-gray-400 hover:text-white transition-colors">Privacy</a>
            <a href="#" className="text-gray-400 hover:text-white transition-colors">© 2024 AllAble</a>
            <a href="#" className="text-gray-400 hover:text-white transition-colors">Terms</a>
          </div>
          <button className="bg-purple-600 text-white px-6 py-3 rounded-full hover:bg-purple-700 transition-colors">
            Contact
          </button>
        </div>
      </footer>
    </div>
  );
}

export default InterfacePage;
