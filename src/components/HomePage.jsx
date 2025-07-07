import React from 'react';
import { useNavigate } from 'react-router-dom';
import { 
  FaDesktop, 
  FaGraduationCap, 
  FaTools, 
  FaUsers,
  FaFacebook,
  FaTwitter,
  FaLinkedin
} from 'react-icons/fa';

const HomePage = () => {
  const navigate = useNavigate();

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
      <section className="relative bg-gradient-to-r from-purple-800 to-blue-600 text-white py-20 px-4">
        <div className="max-w-7xl mx-auto">
          <div className="text-center">
            <h1 className="text-4xl md:text-6xl font-bold mb-6">
              Empowering Every Ability
              <br />
              Through Accessible
              <br />
              Technology
            </h1>
            <p className="text-lg md:text-xl text-white-600 mb-8 max-w-3xl mx-auto">
              AllAble offers inclusive tools, education, and community support designed to enhance
              skills and connectivity for individuals with disabilities.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <button
                onClick={() => navigate('/login')}
                className="bg-purple-600 text-white px-8 py-3 rounded-full text-lg font-medium hover:bg-purple-700 transition-colors duration-200"
              >
                Login
              </button>
              <button
                onClick={() => navigate('/signup')}
                className="bg-white text-purple-600 border-2 border-purple-600 px-8 py-3 rounded-full text-lg font-medium hover:bg-purple-50 transition-colors duration-200"
              >
                Sign Up
              </button>
            </div>
          </div>
        </div>
      </section>

      {/* Core Offerings Section */}
      <section className="py-16 px-4">
        <div className="max-w-7xl mx-auto">
          <h2 className="text-3xl md:text-4xl font-bold text-center text-gray-800 mb-12">
            Our Core Offerings
          </h2>
          
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            {coreOfferings.map((offering, index) => {
              const Icon = offering.icon;
              return (
                <div
                  key={index}
                  className="bg-white rounded-lg shadow-lg overflow-hidden hover:shadow-xl transition-shadow duration-300 cursor-pointer"
                  onClick={() => navigate(offering.path)}
                >
                  {/* Image placeholder */}
                  <div className="h-48 bg-gray-200 flex items-center justify-center">
                    <Icon className="w-16 h-16 text-gray-400" />
                  </div>
                  
                  <div className="p-6">
                    <div className="flex items-center mb-4">
                      <div className="w-12 h-12 bg-purple-100 rounded-lg flex items-center justify-center mr-4">
                        <Icon className="w-6 h-6 text-purple-600" />
                      </div>
                      <h3 className="text-xl font-semibold text-gray-800">
                        {offering.title}
                      </h3>
                    </div>
                    <p className="text-gray-600 text-sm leading-relaxed">
                      {offering.description}
                    </p>
                  </div>
                </div>
              );
            })}
          </div>
        </div>
      </section>

      {/* Newsletter Section */}
      <section className="bg-white py-16 px-4">
        <div className="max-w-4xl mx-auto text-center">
          <h2 className="text-2xl md:text-3xl font-bold text-gray-800 mb-4">
            AllAble
          </h2>
          <p className="text-lg text-gray-600 mb-8">
            Stay updated with AllAble
          </p>
          
          <div className="flex flex-col sm:flex-row max-w-md mx-auto">
            <input
              type="email"
              placeholder="Enter your email"
              className="flex-1 px-4 py-3 border border-gray-300 rounded-l-lg sm:rounded-r-none rounded-r-lg focus:outline-none focus:ring-2 focus:ring-purple-600 focus:border-transparent"
            />
            <button className="bg-purple-600 text-white px-6 py-3 rounded-r-lg sm:rounded-l-none rounded-l-lg hover:bg-purple-700 transition-colors duration-200 mt-2 sm:mt-0">
              Subscribe
            </button>
          </div>
        </div>
      </section>

      {/* Footer */}
      <footer className="bg-gray-800 text-white py-12 px-4">
        <div className="max-w-7xl mx-auto">
          <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
            {/* Company Info */}
            <div className="col-span-1 md:col-span-2">
              <h3 className="text-xl font-bold mb-4">AllAble</h3>
              <p className="text-gray-300 mb-4">
                Empowering every ability through accessible technology and inclusive community support.
              </p>
              <div className="flex space-x-4">
                <FaFacebook className="w-6 h-6 text-gray-300 hover:text-white cursor-pointer" />
                <FaTwitter className="w-6 h-6 text-gray-300 hover:text-white cursor-pointer" />
                <FaLinkedin className="w-6 h-6 text-gray-300 hover:text-white cursor-pointer" />
              </div>
            </div>

            {/* Quick Links */}
            <div>
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
            <div>
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
