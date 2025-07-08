import React from 'react';
import { useNavigate } from 'react-router-dom';
import { FaFacebook, FaTwitter, FaInstagram, FaLinkedin, FaYoutube } from 'react-icons/fa';

const Footer = () => {
  const navigate = useNavigate();

  return (
    <footer className="bg-gray-900 text-white py-12 px-4 relative overflow-hidden">
      <div className="max-w-7xl mx-auto">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
          {/* Company Info */}
          <div className="col-span-1 md:col-span-2 animate-slideInLeft">
            <h3 className="text-xl font-bold mb-4 ">AllAble</h3>
            <p className="text-gray-300 mb-4">
              Empowering every ability through accessible technology and inclusive community support.
            </p>
            <div className="flex space-x-4">
              <FaFacebook className="w-6 h-6 text-gray-300 hover:text-white cursor-pointer transition-all duration-300 transform hover:scale-110 icon-bounce" />
              <FaTwitter className="w-6 h-6 text-gray-300 hover:text-white cursor-pointer transition-all duration-300 transform hover:scale-110 icon-bounce" />
              <FaInstagram className="w-6 h-6 text-gray-300 hover:text-white cursor-pointer transition-all duration-300 transform hover:scale-110 icon-bounce" />
              <FaLinkedin className="w-6 h-6 text-gray-300 hover:text-white cursor-pointer transition-all duration-300 transform hover:scale-110 icon-bounce" />
              <FaYoutube className="w-6 h-6 text-gray-300 hover:text-white cursor-pointer transition-all duration-300 transform hover:scale-110 icon-bounce" />
            </div>
          </div>

          {/* Quick Links */}
          <div className="animate-fadeInUp animate-delay-200">
            <h4 className="text-lg font-semibold mb-4">Quick Links</h4>
            <ul className="space-y-2">
              <li>
                <button
                  onClick={() => navigate('/')}
                  className="text-gray-300 hover:text-white transition-colors duration-200"
                >
                  Home
                </button>
              </li>
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
                  onClick={() => navigate('/community')}
                  className="text-gray-300 hover:text-white transition-colors duration-200"
                >
                  Community
                </button>
              </li>
              <li>
                <button
                  onClick={() => navigate('/directory')}
                  className="text-gray-300 hover:text-white transition-colors duration-200"
                >
                  Directory
                </button>
              </li>
              <li>
                <button
                  onClick={() => navigate('/extension')}
                  className="text-gray-300 hover:text-white transition-colors duration-200"
                >
                  Extension
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
              <li>
                <button
                  onClick={() => navigate('/accessibility')}
                  className="text-gray-300 hover:text-white transition-colors duration-200"
                >
                  Accessibility
                </button>
              </li>
            </ul>
          </div>
        </div>

        <div className="border-t border-gray-700 mt-8 pt-8 text-center">
          <p className="text-gray-300">
            © 2024 AllAble. All rights reserved.
          </p>
          <p className="text-gray-400 text-sm mt-2">
            Making the web accessible for everyone
          </p>
        </div>
      </div>

      {/* Background decoration */}
      <div className="absolute top-0 right-0 w-64 h-64 bg-gradient-to-br from-blue-600/10 to-purple-600/10 rounded-full blur-3xl"></div>
      <div className="absolute bottom-0 left-0 w-48 h-48 bg-gradient-to-tr from-purple-600/10 to-blue-600/10 rounded-full blur-3xl"></div>
    </footer>
  );
};

export default Footer;
