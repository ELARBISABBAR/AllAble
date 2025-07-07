import React, { useEffect, useState } from 'react';
import { useNavigate } from 'react-router-dom';
import {
  FaDesktop,
  FaGraduationCap,
  FaTools,
  FaUsers,
  FaFacebook,
  FaTwitter,
  FaLinkedin,
  FaArrowRight,
  FaPlay,
  FaStar,
  FaHeart,
  FaRocket,
  FaShieldAlt,
  FaGlobe
} from 'react-icons/fa';

// Professional animations and styles
const styles = `
  @keyframes fadeInUp {
    from {
      opacity: 0;
      transform: translateY(60px);
    }
    to {
      opacity: 1;
      transform: translateY(0);
    }
  }

  @keyframes fadeInDown {
    from {
      opacity: 0;
      transform: translateY(-60px);
    }
    to {
      opacity: 1;
      transform: translateY(0);
    }
  }

  @keyframes slideInLeft {
    from {
      opacity: 0;
      transform: translateX(-60px);
    }
    to {
      opacity: 1;
      transform: translateX(0);
    }
  }

  @keyframes slideInRight {
    from {
      opacity: 0;
      transform: translateX(60px);
    }
    to {
      opacity: 1;
      transform: translateX(0);
    }
  }

  @keyframes scaleIn {
    from {
      opacity: 0;
      transform: scale(0.8);
    }
    to {
      opacity: 1;
      transform: scale(1);
    }
  }

  @keyframes float {
    0%, 100% {
      transform: translateY(0px);
    }
    50% {
      transform: translateY(-20px);
    }
  }

  @keyframes pulse {
    0%, 100% {
      transform: scale(1);
    }
    50% {
      transform: scale(1.05);
    }
  }

  @keyframes glow {
    0%, 100% {
      box-shadow: 0 0 20px rgba(139, 92, 246, 0.3);
    }
    50% {
      box-shadow: 0 0 40px rgba(139, 92, 246, 0.6);
    }
  }

  @keyframes gradientShift {
    0%, 100% {
      background-position: 0% 50%;
    }
    50% {
      background-position: 100% 50%;
    }
  }

  @keyframes bounce {
    0%, 20%, 53%, 80%, 100% {
      transform: translate3d(0,0,0);
    }
    40%, 43% {
      transform: translate3d(0, -30px, 0);
    }
    70% {
      transform: translate3d(0, -15px, 0);
    }
    90% {
      transform: translate3d(0, -4px, 0);
    }
  }

  @keyframes rotateIn {
    from {
      opacity: 0;
      transform: rotate(-200deg);
    }
    to {
      opacity: 1;
      transform: rotate(0deg);
    }
  }

  @keyframes zoomIn {
    from {
      opacity: 0;
      transform: scale3d(0.3, 0.3, 0.3);
    }
    50% {
      opacity: 1;
    }
  }

  .animate-fadeInUp {
    animation: fadeInUp 0.8s ease-out forwards;
  }

  .animate-fadeInDown {
    animation: fadeInDown 0.8s ease-out forwards;
  }

  .animate-slideInLeft {
    animation: slideInLeft 0.8s ease-out forwards;
  }

  .animate-slideInRight {
    animation: slideInRight 0.8s ease-out forwards;
  }

  .animate-scaleIn {
    animation: scaleIn 0.6s ease-out forwards;
  }

  .animate-float {
    animation: float 4s ease-in-out infinite;
  }

  .animate-pulse {
    animation: pulse 2s ease-in-out infinite;
  }

  .animate-glow {
    animation: glow 3s ease-in-out infinite;
  }

  .animate-gradientShift {
    background-size: 200% 200%;
    animation: gradientShift 4s ease infinite;
  }

  .animate-bounce {
    animation: bounce 2s infinite;
  }

  .animate-rotateIn {
    animation: rotateIn 1s ease-out forwards;
  }

  .animate-zoomIn {
    animation: zoomIn 0.6s ease-out forwards;
  }

  .animate-delay-100 {
    animation-delay: 0.1s;
    animation-fill-mode: both;
  }

  .animate-delay-200 {
    animation-delay: 0.2s;
    animation-fill-mode: both;
  }

  .animate-delay-300 {
    animation-delay: 0.3s;
    animation-fill-mode: both;
  }

  .animate-delay-400 {
    animation-delay: 0.4s;
    animation-fill-mode: both;
  }

  .animate-delay-500 {
    animation-delay: 0.5s;
    animation-fill-mode: both;
  }

  .animate-delay-600 {
    animation-delay: 0.6s;
    animation-fill-mode: both;
  }

  .animate-delay-700 {
    animation-delay: 0.7s;
    animation-fill-mode: both;
  }

  .animate-delay-800 {
    animation-delay: 0.8s;
    animation-fill-mode: both;
  }

  .card-hover {
    transition: all 0.4s cubic-bezier(0.175, 0.885, 0.32, 1.275);
  }

  .card-hover:hover {
    transform: translateY(-15px) scale(1.02);
    box-shadow: 0 25px 50px rgba(0, 0, 0, 0.15);
  }

  .button-hover {
    transition: all 0.3s ease;
    position: relative;
    overflow: hidden;
  }

  .button-hover:hover {
    transform: translateY(-2px);
    box-shadow: 0 10px 25px rgba(0, 0, 0, 0.2);
  }

  .button-hover::before {
    content: '';
    position: absolute;
    top: 0;
    left: -100%;
    width: 100%;
    height: 100%;
    background: linear-gradient(90deg, transparent, rgba(255, 255, 255, 0.2), transparent);
    transition: left 0.5s;
  }

  .button-hover:hover::before {
    left: 100%;
  }

  .gradient-text {
    background: linear-gradient(135deg, #667eea 0%, #764ba2 100%);
    -webkit-background-clip: text;
    -webkit-text-fill-color: transparent;
    background-clip: text;
  }

  .hero-bg {
    background: linear-gradient(135deg, #667eea 0%, #764ba2 100%);
  }

  .glass-effect {
    background: rgba(255, 255, 255, 0.1);
    backdrop-filter: blur(10px);
    border: 1px solid rgba(255, 255, 255, 0.2);
  }

  .text-shadow {
    text-shadow: 2px 2px 4px rgba(0, 0, 0, 0.3);
  }

  .icon-bounce:hover {
    animation: bounce 1s;
  }

  .parallax-element {
    transform: translateZ(0);
    will-change: transform;
  }
`;

const HomePage = () => {
  const navigate = useNavigate();
  const [isVisible, setIsVisible] = useState(false);

  // Inject custom styles and trigger animations
  useEffect(() => {
    const styleSheet = document.createElement("style");
    styleSheet.innerText = styles;
    document.head.appendChild(styleSheet);

    // Trigger animations after component mounts
    setTimeout(() => setIsVisible(true), 100);

    return () => document.head.removeChild(styleSheet);
  }, []);

  const coreOfferings = [
    {
      title: 'Adapted Interface',
      description: 'Explore vocal, visual, sign language, and simplified modes.',
      icon: FaDesktop,
      image: '/api/placeholder/300/200',
      path: '/interface'
    },
    {
      title: 'Education',
      description: 'Access free courses in coding, digital skills, and crafts.',
      icon: FaGraduationCap,
      image: '/api/placeholder/300/200',
      path: '/education'
    },
    {
      title: 'Tools',
      description: 'Utilize voice OCR, sign language translators, and OCR features.',
      icon: FaTools,
      image: '/api/placeholder/300/200',
      path: '/tools'
    },
    {
      title: 'Community',
      description: 'Connect, support, and collaborate with a vibrant community.',
      icon: FaUsers,
      image: '/api/placeholder/300/200',
      path: '/community'
    }
  ];

  return (
    <div className="min-h-screen bg-gray-50">
      {/* Hero Section */}
      <section className="relative hero-bg text-white py-20 px-4 overflow-hidden animate-gradientShift">
        {/* Floating background elements */}
        <div className="absolute inset-0 overflow-hidden">
          <div className="absolute top-20 left-10 w-20 h-20 bg-white bg-opacity-10 rounded-full animate-float"></div>
          <div className="absolute top-40 right-20 w-16 h-16 bg-white bg-opacity-10 rounded-full animate-float animate-delay-200"></div>
          <div className="absolute bottom-20 left-1/4 w-12 h-12 bg-white bg-opacity-10 rounded-full animate-float animate-delay-400"></div>
          <div className="absolute bottom-40 right-1/3 w-24 h-24 bg-white bg-opacity-10 rounded-full animate-float animate-delay-600"></div>
        </div>

        <div className="max-w-7xl mx-auto relative z-10">
          <div className="text-center">
            <div className="animate-fadeInDown">
              <h1 className="text-4xl md:text-6xl font-bold mb-6 text-shadow">
                Empowering Every <span className="gradient-text animate-pulse">Ability</span>
                <br />
                Through <span className="animate-bounce inline-block">Accessible</span>
                <br />
                <span className="animate-glow">Technology</span>
              </h1>
            </div>

            <div className="animate-fadeInUp animate-delay-200">
              <p className="text-lg md:text-xl text-white-600 mb-8 max-w-3xl mx-auto text-shadow opacity-90">
                AllAble offers inclusive tools, education, and community support designed to enhance
                skills and connectivity for individuals with disabilities.
              </p>
            </div>

            <div className="animate-fadeInUp animate-delay-400">
              <div className="flex flex-col sm:flex-row gap-4 justify-center">
                <button
                  onClick={() => navigate('/interface')}
                  className="button-hover bg-white text-purple-800 px-8 py-4 rounded-full text-lg font-semibold hover:bg-gray-100 transition-all duration-300 transform hover:scale-105 animate-glow"
                >
                  <span className="flex items-center justify-center">
                    <FaRocket className="mr-2 animate-bounce" />
                    Explore Interface
                  </span>
                </button>
                <button
                  onClick={() => navigate('/education')}
                  className="button-hover glass-effect border-2 border-white text-white px-8 py-4 rounded-full text-lg font-semibold hover:bg-white hover:text-purple-800 transition-all duration-300 transform hover:scale-105"
                >
                  <span className="flex items-center justify-center">
                    <FaPlay className="mr-2 animate-pulse" />
                    Start Learning
                  </span>
                </button>
              </div>
            </div>
          </div>

          {/* Floating icons */}
          <div className="absolute top-10 left-10 animate-rotateIn animate-delay-800">
            <div className="w-16 h-16 bg-white bg-opacity-20 rounded-full flex items-center justify-center animate-float icon-bounce">
              <FaShieldAlt className="text-2xl text-white" />
            </div>
          </div>

          <div className="absolute top-20 right-10 animate-rotateIn animate-delay-600">
            <div className="w-12 h-12 bg-white bg-opacity-20 rounded-full flex items-center justify-center animate-float animate-delay-300 icon-bounce">
              <FaHeart className="text-xl text-white animate-pulse" />
            </div>
          </div>

          <div className="absolute bottom-10 left-1/4 animate-zoomIn animate-delay-700">
            <div className="w-14 h-14 bg-white bg-opacity-20 rounded-full flex items-center justify-center animate-float animate-delay-500 icon-bounce">
              <FaGlobe className="text-xl text-white" />
            </div>
          </div>

          <div className="absolute bottom-20 right-10 animate-scaleIn animate-delay-800">
            <div className="w-10 h-10 bg-white bg-opacity-20 rounded-full flex items-center justify-center animate-float animate-delay-700 icon-bounce">
              <FaStar className="text-sm text-white animate-pulse" />
            </div>
          </div>
        </div>
      </section>

      {/* Core Offerings Section */}
      <section className="py-16 px-4 bg-gradient-to-b from-gray-50 to-white">
        <div className="max-w-7xl mx-auto">
          <div className="animate-fadeInUp">
            <h2 className="text-3xl md:text-4xl font-bold text-center text-gray-800 mb-4">
              Our Core <span className="gradient-text">Offerings</span>
            </h2>
            <p className="text-center text-gray-600 mb-12 max-w-2xl mx-auto">
              Discover our comprehensive suite of accessibility tools and services designed to empower every individual
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            {coreOfferings.map((offering, index) => {
              const Icon = offering.icon;
              return (
                <div
                  key={index}
                  className={`card-hover bg-white rounded-2xl shadow-lg overflow-hidden cursor-pointer animate-scaleIn animate-delay-${(index + 1) * 100} group`}
                  onClick={() => navigate(offering.path)}
                >
                  {/* Enhanced Image section */}
                  <div className="h-48 bg-gradient-to-br from-purple-100 to-blue-100 flex items-center justify-center relative overflow-hidden">
                    <div className="absolute inset-0 bg-gradient-to-br from-purple-400 to-blue-500 opacity-0 group-hover:opacity-20 transition-opacity duration-300"></div>
                    <Icon className="text-6xl text-purple-600 transform group-hover:scale-110 transition-transform duration-300 animate-float" style={{animationDelay: `${index * 0.5}s`}} />

                    {/* Floating particles */}
                    <div className="absolute top-4 right-4 w-2 h-2 bg-purple-400 rounded-full animate-pulse"></div>
                    <div className="absolute bottom-6 left-6 w-1 h-1 bg-blue-400 rounded-full animate-bounce"></div>
                    <div className="absolute top-1/2 left-4 w-1.5 h-1.5 bg-purple-300 rounded-full animate-pulse" style={{animationDelay: '1s'}}></div>
                  </div>

                  <div className="p-6 relative">
                    <div className="flex items-center mb-4">
                      <div className="w-12 h-12 bg-purple-100 rounded-lg flex items-center justify-center mr-4 group-hover:bg-purple-200 transition-colors duration-300">
                        <Icon className="w-6 h-6 text-purple-600 group-hover:animate-bounce" />
                      </div>
                      <h3 className="text-xl font-semibold text-gray-800 group-hover:text-purple-600 transition-colors duration-300">
                        {offering.title}
                      </h3>
                    </div>
                    <p className="text-gray-600 text-sm leading-relaxed mb-4">
                      {offering.description}
                    </p>

                    <div className="flex items-center text-purple-600 font-medium text-sm group-hover:translate-x-2 transition-transform duration-300">
                      Learn More
                      <FaArrowRight className="ml-2 text-xs group-hover:animate-bounce" />
                    </div>

                    {/* Hover effect overlay */}
                    <div className="absolute inset-0 bg-gradient-to-r from-purple-500 to-blue-500 opacity-0 group-hover:opacity-5 transition-opacity duration-300 rounded-b-2xl"></div>
                  </div>
                </div>
              );
            })}
          </div>
        </div>
      </section>

      {/* Newsletter Section */}
      <section className="bg-gradient-to-r from-purple-600 to-blue-600 py-16 px-4 relative overflow-hidden">
        {/* Animated background elements */}
        <div className="absolute inset-0">
          <div className="absolute top-10 left-10 w-32 h-32 bg-white bg-opacity-10 rounded-full animate-float"></div>
          <div className="absolute bottom-10 right-10 w-24 h-24 bg-white bg-opacity-10 rounded-full animate-float animate-delay-300"></div>
          <div className="absolute top-1/2 left-1/4 w-16 h-16 bg-white bg-opacity-10 rounded-full animate-float animate-delay-500"></div>
        </div>

        <div className="max-w-4xl mx-auto text-center relative z-10">
          <div className="animate-fadeInUp">
            <h2 className="text-3xl md:text-4xl font-bold text-white mb-4 text-shadow">
              <span className="animate-pulse">AllAble</span>
            </h2>
            <p className="text-xl text-white mb-8 opacity-90 text-shadow">
              Stay updated with AllAble's latest features and accessibility innovations
            </p>
          </div>

          <div className="animate-fadeInUp animate-delay-200">
            <div className="flex flex-col sm:flex-row max-w-md mx-auto gap-4">
              <input
                type="email"
                placeholder="Enter your email address"
                className="flex-1 px-6 py-4 border-2 border-white border-opacity-30 rounded-full bg-white bg-opacity-20 text-black placeholder-gray-500 placeholder-opacity-70 focus:outline-none focus:ring-2 focus:ring-white focus:border-white backdrop-blur-sm"
              />
              <button className="button-hover bg-white text-purple-600 px-8 py-4 rounded-full font-semibold hover:bg-gray-100 transition-all duration-300 transform hover:scale-105 animate-glow">
                <span className="flex items-center justify-center">
                  Subscribe
                  <FaArrowRight className="ml-2 animate-bounce" />
                </span>
              </button>
            </div>
          </div>

          {/* Floating subscription benefits */}
          <div className="mt-12 animate-fadeInUp animate-delay-400">
            <div className="flex flex-wrap justify-center gap-6 text-white text-sm">
              <div className="flex items-center glass-effect px-4 py-2 rounded-full">
                <FaStar className="mr-2 animate-pulse" />
                Latest Features
              </div>
              <div className="flex items-center glass-effect px-4 py-2 rounded-full">
                <FaRocket className="mr-2 animate-bounce" />
                Early Access
              </div>
              <div className="flex items-center glass-effect px-4 py-2 rounded-full">
                <FaHeart className="mr-2 animate-pulse" />
                Community Updates
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Footer */}
      <footer className="bg-gray-900 text-white py-12 px-4 relative overflow-hidden">
        <div className="max-w-7xl mx-auto">
          <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
            {/* Company Info */}
            <div className="col-span-1 md:col-span-2 animate-slideInLeft">
              <h3 className="text-xl font-bold mb-4 animate-glow">AllAble</h3>
              <p className="text-gray-300 mb-4">
                Empowering every ability through accessible technology and inclusive community support.
              </p>
              <div className="flex space-x-4">
                <FaFacebook className="w-6 h-6 text-gray-300 hover:text-white cursor-pointer transition-all duration-300 transform hover:scale-110 icon-bounce" />
                <FaTwitter className="w-6 h-6 text-gray-300 hover:text-white cursor-pointer transition-all duration-300 transform hover:scale-110 icon-bounce" />
                <FaLinkedin className="w-6 h-6 text-gray-300 hover:text-white cursor-pointer transition-all duration-300 transform hover:scale-110 icon-bounce" />
              </div>
            </div>

            {/* Quick Links */}
            <div className="animate-fadeInUp animate-delay-200">
              <h4 className="text-lg font-semibold mb-4">Quick Links</h4>
              <ul className="space-y-2">
                <li>
                  <button
                    onClick={() => navigate('/interface')}
                    className="text-gray-300 hover:text-white transition-colors duration-200"
                  >
                    Interface
                  </button>
                </li>
                <li>
                  <button
                    onClick={() => navigate('/education')}
                    className="text-gray-300 hover:text-white transition-colors duration-200"
                  >
                    Education
                  </button>
                </li>
                <li>
                  <button
                    onClick={() => navigate('/tools')}
                    className="text-gray-300 hover:text-white transition-colors duration-200"
                  >
                    Tools
                  </button>
                </li>
                <li>
                  <button
                    onClick={() => navigate('/community')}
                    className="text-gray-300 hover:text-white transition-colors duration-200"
                  >
                    Community
                  </button>
                </li>
              </ul>
            </div>

            {/* Support */}
            <div className="animate-fadeInUp animate-delay-400">
              <h4 className="text-lg font-semibold mb-4">Support</h4>
              <ul className="space-y-2">
                <li>
                  <button
                    onClick={() => navigate('/contact')}
                    className="text-gray-300 hover:text-white transition-colors duration-200"
                  >
                    Contact
                  </button>
                </li>
                <li>
                  <button
                    onClick={() => navigate('/help')}
                    className="text-gray-300 hover:text-white transition-colors duration-200"
                  >
                    Help Center
                  </button>
                </li>
                <li>
                  <button
                    onClick={() => navigate('/privacy')}
                    className="text-gray-300 hover:text-white transition-colors duration-200"
                  >
                    Privacy Policy
                  </button>
                </li>
                <li>
                  <button
                    onClick={() => navigate('/terms')}
                    className="text-gray-300 hover:text-white transition-colors duration-200"
                  >
                    Terms of Service
                  </button>
                </li>
              </ul>
            </div>
          </div>

          <div className="border-t border-gray-700 mt-8 pt-8 text-center">
            <p className="text-gray-300">
              © 2023 AllAble. All rights reserved.
            </p>
            <p className="text-gray-400 text-sm mt-2">
              English
            </p>
          </div>
        </div>
      </footer>
    </div>
  );
};

export default HomePage;
