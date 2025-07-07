import React, { useState, useEffect } from 'react';
import { FaMicrophone, FaEye, FaHandPaper, FaDesktop, FaPlay, FaChevronDown, FaChevronUp, FaQuestionCircle, FaRocket, FaStar, FaArrowRight } from 'react-icons/fa';

// Add custom animations
const styles = `
  @keyframes float {
    0%, 100% {
      transform: translateY(0px);
    }
    50% {
      transform: translateY(-20px);
    }
  }

  @keyframes fadeInUp {
    from {
      opacity: 0;
      transform: translateY(30px);
    }
    to {
      opacity: 1;
      transform: translateY(0);
    }
  }

  @keyframes fade-in {
    from {
      opacity: 0;
    }
    to {
      opacity: 1;
    }
  }

  .animate-float {
    animation: float 4s ease-in-out infinite;
  }

  .animate-fadeInUp {
    animation: fadeInUp 0.8s ease-out forwards;
  }

  .animate-fade-in {
    animation: fade-in 1s ease-out forwards;
  }

  .interface-card {
    transition: all 0.3s ease;
  }

  .interface-card:hover {
    transform: translateY(-5px);
    box-shadow: 0 20px 40px rgba(0, 0, 0, 0.1);
  }
`;

const InterfacePage = () => {
  // Inject custom styles
  useEffect(() => {
    const styleSheet = document.createElement("style");
    styleSheet.innerText = styles;
    document.head.appendChild(styleSheet);
    return () => document.head.removeChild(styleSheet);
  }, []);
  const [activeMode, setActiveMode] = useState(null);
  const [expandedFaq, setExpandedFaq] = useState(null);

  const interfaceModes = [
    {
      title: 'Vocal Interface',
      description: 'Navigate and interact through voice commands and speech recognition for hands-free accessibility.',
      icon: FaMicrophone,
      color: 'from-blue-400 to-blue-600',
      bgColor: 'bg-blue-50',
      image: 'https://images.unsplash.com/photo-1589254065878-42c9da997008?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1000&q=80',
      features: ['Voice commands', 'Speech recognition', 'Audio feedback']
    },
    {
      title: 'Visual Adaptations',
      description: 'Customize visual elements like font size, contrast, and color schemes for optimal readability.',
      icon: FaEye,
      color: 'from-green-400 to-green-600',
      bgColor: 'bg-green-50',
      image: 'https://images.unsplash.com/photo-1559757148-5c350d0d3c56?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1000&q=80',
      features: ['High contrast', 'Large text', 'Color adjustments']
    },
    {
      title: 'Sign Language Support',
      description: 'Real-time sign language interpretation and gesture recognition for seamless communication.',
      icon: FaHandPaper,
      color: 'from-purple-400 to-purple-600',
      bgColor: 'bg-purple-50',
      image: 'https://images.unsplash.com/photo-1559757175-0eb30cd8c063?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1000&q=80',
      features: ['ASL recognition', 'Real-time translation', 'Gesture controls']
    },
    {
      title: 'Simplified Access',
      description: 'A clean interface with essential features and intuitive navigation for cognitive accessibility.',
      icon: FaDesktop,
      color: 'from-orange-400 to-orange-600',
      bgColor: 'bg-orange-50',
      image: 'https://images.unsplash.com/photo-1551288049-bebda4e38f71?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1000&q=80',
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
      rating: 5,
      avatar: 'https://images.unsplash.com/photo-1494790108755-2616b612b786?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=150&q=80'
    },
    {
      name: 'Mike R.',
      text: 'Visual adaptations make everything so much clearer. The high contrast mode is perfect for my needs.',
      rating: 5,
      avatar: 'https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=150&q=80'
    },
    {
      name: 'Alex K.',
      text: 'Outstanding sign language support. Real-time translation works flawlessly and has improved my communication significantly.',
      rating: 5,
      avatar: 'https://images.unsplash.com/photo-1438761681033-6461ffad8d80?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=150&q=80'
    }
  ];

  return (
    <div className="min-h-screen bg-gradient-to-br from-purple-50 via-blue-50 to-indigo-50">
      {/* Hero Section */}
      <section className="relative bg-gradient-to-r from-purple-600 to-blue-600 text-white py-20 px-4 overflow-hidden">
        {/* Background Image */}
        <div
          className="absolute inset-0 bg-cover bg-center bg-no-repeat"
          style={{
            backgroundImage: 'url(https://images.unsplash.com/photo-1559757148-5c350d0d3c56?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=2000&q=80)'
          }}
        ></div>
        <div className="absolute inset-0 bg-gradient-to-r from-purple-600/80 to-blue-600/80"></div>

        {/* Floating Elements */}
        <div className="absolute inset-0 overflow-hidden">
          <div className="absolute top-20 left-10 w-20 h-20 bg-white bg-opacity-10 rounded-full flex items-center justify-center animate-float">
            <FaRocket className="text-2xl text-white" />
          </div>
          <div className="absolute top-40 right-20 w-16 h-16 bg-white bg-opacity-10 rounded-full flex items-center justify-center animate-float" style={{ animationDelay: '0.5s' }}>
            <FaStar className="text-xl text-white" />
          </div>
          <div className="absolute bottom-20 left-1/4 w-12 h-12 bg-white bg-opacity-10 rounded-full flex items-center justify-center animate-float" style={{ animationDelay: '1s' }}>
            <FaArrowRight className="text-lg text-white" />
          </div>
        </div>

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
                  className="bg-white rounded-2xl shadow-lg overflow-hidden interface-card transition-all duration-500 cursor-pointer group animate-fadeInUp hover:shadow-xl transform hover:-translate-y-2"
                  style={{ animationDelay: `${index * 0.2}s` }}
                  onMouseEnter={() => setActiveMode(index)}
                  onMouseLeave={() => setActiveMode(null)}
                >
                  {/* Image Section */}
                  <div className="h-48 relative overflow-hidden">
                    <img
                      src={mode.image}
                      alt={mode.title}
                      className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-500"
                    />
                    <div className="absolute top-4 left-4">
                      <div className={`w-16 h-16 bg-gradient-to-r ${mode.color} rounded-2xl flex items-center justify-center shadow-lg group-hover:scale-110 transition-transform duration-300`}>
                        <Icon className="w-8 h-8 text-white" />
                      </div>
                    </div>
                    <div className="absolute inset-0 bg-gradient-to-t from-black/20 to-transparent"></div>
                  </div>

                  {/* Content Section */}
                  <div className="p-8">
                    <h3 className="text-2xl font-bold text-gray-900 mb-3 group-hover:text-purple-600 transition-colors duration-300">
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
                    <button className={`w-full bg-gradient-to-r ${mode.color} text-white px-6 py-3 rounded-full font-semibold hover:shadow-lg transition-all duration-300 transform hover:scale-105`}>
                      Try This Mode
                    </button>
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
                  <img
                    src={testimonial.avatar}
                    alt={testimonial.name}
                    className="w-12 h-12 rounded-full object-cover border-2 border-purple-200"
                  />
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
