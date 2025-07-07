import React, { useState, useEffect } from 'react';
import { FaEye, FaEyeSlash, FaBolt } from 'react-icons/fa';

const LoginPage = ({ onLogin, onSwitchToSignup }) => {
  const [formData, setFormData] = useState({
    email: '',
    password: ''
  });
  const [showPassword, setShowPassword] = useState(false);
  const [errors, setErrors] = useState({});
  const [isLoading, setIsLoading] = useState(false);
  const [mounted, setMounted] = useState(false);

  useEffect(() => {
    setMounted(true);
  }, []);

  const validateForm = () => {
    const newErrors = {};
    
    if (!formData.email) {
      newErrors.email = 'Email is required';
    } else if (!/\S+@\S+\.\S+/.test(formData.email)) {
      newErrors.email = 'Email is invalid';
    }
    
    if (!formData.password) {
      newErrors.password = 'Password is required';
    } else if (formData.password.length < 6) {
      newErrors.password = 'Password must be at least 6 characters';
    }
    
    setErrors(newErrors);
    return Object.keys(newErrors).length === 0;
  };

  const handleInputChange = (e) => {
    const { name, value } = e.target;
    setFormData(prev => ({
      ...prev,
      [name]: value
    }));
    
    // Clear error when user starts typing
    if (errors[name]) {
      setErrors(prev => ({
        ...prev,
        [name]: ''
      }));
    }
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    
    if (!validateForm()) return;
    
    setIsLoading(true);
    
    // Simulate API call
    try {
      await new Promise(resolve => setTimeout(resolve, 1500));
      
      // Mock successful login
      const userData = {
        id: 1,
        name: 'John Doe',
        email: formData.email,
        avatar: 'https://images.unsplash.com/photo-1472099645785-5658abf4ff4e?w=150&h=150&fit=crop&crop=face'
      };
      
      onLogin(userData);
    } catch (error) {
      setErrors({ general: 'Login failed. Please try again.' });
    } finally {
      setIsLoading(false);
    }
  };

  return (
    <div className="min-h-screen bg-gradient-to-br from-purple-50 via-white to-blue-50 flex items-center justify-center p-4">
      <div className="w-full max-w-6xl mx-auto grid lg:grid-cols-2 gap-8 items-center">
        
        {/* Left Side - Login Form */}
        <div className={`bg-white rounded-2xl shadow-2xl p-8 lg:p-12 transform transition-all duration-1000 ${
          mounted ? 'translate-y-0 opacity-100' : 'translate-y-10 opacity-0'
        }`}>
          
          {/* Header */}
          <div className="text-center mb-8">
            <div className="inline-flex items-center justify-center w-16 h-16 bg-gradient-to-r from-purple-600 to-blue-600 rounded-xl mb-6 transform hover:scale-110 transition-transform duration-300">
              <FaBolt className="text-white text-2xl" />
            </div>
            <h1 className="text-3xl font-bold text-gray-900 mb-2">Welcome Back!</h1>
            <p className="text-gray-600">Login to access your personalized accessibility tools.</p>
          </div>

          {/* Login Form */}
          <form onSubmit={handleSubmit} className="space-y-6">
            {errors.general && (
              <div className="bg-red-50 border border-red-200 text-red-600 px-4 py-3 rounded-lg text-sm">
                {errors.general}
              </div>
            )}

            {/* Email Field */}
            <div>
              <label htmlFor="email" className="block text-sm font-medium text-gray-700 mb-2">
                Email
              </label>
              <input
                type="email"
                id="email"
                name="email"
                value={formData.email}
                onChange={handleInputChange}
                placeholder="your.email@example.com"
                className={`w-full px-4 py-3 border rounded-lg focus:ring-2 focus:ring-purple-500 focus:border-transparent transition-all duration-200 ${
                  errors.email ? 'border-red-300 bg-red-50' : 'border-gray-300 hover:border-gray-400'
                }`}
                disabled={isLoading}
              />
              {errors.email && (
                <p className="mt-1 text-sm text-red-600">{errors.email}</p>
              )}
            </div>

            {/* Password Field */}
            <div>
              <label htmlFor="password" className="block text-sm font-medium text-gray-700 mb-2">
                Password
              </label>
              <div className="relative">
                <input
                  type={showPassword ? 'text' : 'password'}
                  id="password"
                  name="password"
                  value={formData.password}
                  onChange={handleInputChange}
                  placeholder="••••••••"
                  className={`w-full px-4 py-3 pr-12 border rounded-lg focus:ring-2 focus:ring-purple-500 focus:border-transparent transition-all duration-200 ${
                    errors.password ? 'border-red-300 bg-red-50' : 'border-gray-300 hover:border-gray-400'
                  }`}
                  disabled={isLoading}
                />
                <button
                  type="button"
                  onClick={() => setShowPassword(!showPassword)}
                  className="absolute right-3 top-1/2 transform -translate-y-1/2 text-gray-400 hover:text-gray-600 transition-colors"
                  disabled={isLoading}
                >
                  {showPassword ? <FaEyeSlash /> : <FaEye />}
                </button>
              </div>
              {errors.password && (
                <p className="mt-1 text-sm text-red-600">{errors.password}</p>
              )}
            </div>

            {/* Login Button */}
            <button
              type="submit"
              disabled={isLoading}
              className="w-full bg-gradient-to-r from-purple-600 to-blue-600 text-white py-3 px-6 rounded-lg font-medium hover:from-purple-700 hover:to-blue-700 focus:ring-4 focus:ring-purple-200 transition-all duration-200 transform hover:scale-[1.02] disabled:opacity-50 disabled:cursor-not-allowed disabled:transform-none"
            >
              {isLoading ? (
                <div className="flex items-center justify-center">
                  <div className="animate-spin rounded-full h-5 w-5 border-b-2 border-white mr-2"></div>
                  Logging in...
                </div>
              ) : (
                'Login'
              )}
            </button>
          </form>

          {/* Footer Links */}
          <div className="mt-8 text-center space-y-4">
            <a href="#" className="text-purple-600 hover:text-purple-700 text-sm font-medium transition-colors">
              Forgot password?
            </a>
            <div className="text-sm text-gray-600">
              Don't have an account?{' '}
              <button
                onClick={onSwitchToSignup}
                className="text-purple-600 hover:text-purple-700 font-medium transition-colors"
              >
                Sign Up
              </button>
            </div>
          </div>

          {/* Terms */}
          <div className="mt-6 text-xs text-gray-500 text-center">
            By logging in, you agree to our{' '}
            <a href="#" className="text-purple-600 hover:underline">Terms of Service</a>
            {' '}and{' '}
            <a href="#" className="text-purple-600 hover:underline">Privacy Policy</a>
          </div>
        </div>

        {/* Right Side - Illustration */}
        <div className={`hidden lg:block transform transition-all duration-1000 delay-300 ${
          mounted ? 'translate-x-0 opacity-100' : 'translate-x-10 opacity-0'
        }`}>
          <div className="bg-gradient-to-br from-purple-100 to-blue-100 rounded-3xl p-12 text-center">
            <div className="mb-8">
              <div className="w-80 h-64 mx-auto bg-gradient-to-br from-yellow-100 to-orange-100 rounded-2xl flex items-center justify-center relative overflow-hidden">
                {/* Illustration placeholder - you can replace with actual image */}
                <div className="absolute inset-0 bg-gradient-to-br from-purple-200/30 to-blue-200/30"></div>
                <div className="relative z-10 text-6xl">👥</div>
              </div>
            </div>
            
            <h2 className="text-2xl font-bold text-gray-800 mb-4">
              Empowering Every Voice.
            </h2>
            <p className="text-gray-600 mb-8 leading-relaxed">
              AllAble provides innovative tools, free education, and a supportive community to 
              enhance digital accessibility for everyone.
            </p>
            <button className="bg-gradient-to-r from-purple-600 to-blue-600 text-white px-8 py-3 rounded-lg font-medium hover:from-purple-700 hover:to-blue-700 transition-all duration-200 transform hover:scale-105">
              Learn More About AllAble
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default LoginPage;
