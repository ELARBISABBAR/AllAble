import React, { useState, useEffect } from 'react';
import { 
  FaUser, 
  FaSignOutAlt, 
  FaBolt, 
  FaVolumeUp, 
  FaHandsHelping, 
  FaBrain, 
  FaEye,
  FaChartLine,
  FaCog,
  FaBell,
  FaHeart
} from 'react-icons/fa';

const Dashboard = ({ user, onLogout }) => {
  const [mounted, setMounted] = useState(false);
  const [activeTab, setActiveTab] = useState('overview');

  useEffect(() => {
    setMounted(true);
  }, []);

  const accessibilityTools = [
    {
      id: 'voice',
      name: 'Voice Reader',
      description: 'Text-to-speech functionality',
      icon: FaVolumeUp,
      color: 'from-blue-500 to-blue-600',
      active: true
    },
    {
      id: 'motor',
      name: 'Motor Assistance',
      description: 'Navigation and interaction aids',
      icon: FaHandsHelping,
      color: 'from-green-500 to-green-600',
      active: false
    },
    {
      id: 'cognitive',
      name: 'Cognitive Tools',
      description: 'Memory and focus assistance',
      icon: FaBrain,
      color: 'from-purple-500 to-purple-600',
      active: true
    },
    {
      id: 'visual',
      name: 'Visual Aids',
      description: 'Screen reading and magnification',
      icon: FaEye,
      color: 'from-orange-500 to-orange-600',
      active: false
    }
  ];

  const stats = [
    { label: 'Tools Used Today', value: '3', change: '+2' },
    { label: 'Accessibility Score', value: '94%', change: '+5%' },
    { label: 'Time Saved', value: '2.5h', change: '+30min' },
    { label: 'Community Points', value: '1,247', change: '+50' }
  ];

  return (
    <div className="min-h-screen bg-gray-50">
      {/* Header */}
      <header className="bg-white shadow-sm border-b">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex justify-between items-center h-16">
            {/* Logo */}
            <div className="flex items-center">
              <div className="flex items-center justify-center w-10 h-10 bg-gradient-to-r from-purple-600 to-blue-600 rounded-lg mr-3">
                <FaBolt className="text-white text-lg" />
              </div>
              <h1 className="text-xl font-bold text-gray-900">AllAble</h1>
            </div>

            {/* User Menu */}
            <div className="flex items-center space-x-4">
              <button className="p-2 text-gray-400 hover:text-gray-600 transition-colors">
                <FaBell className="w-5 h-5" />
              </button>
              <div className="flex items-center space-x-3">
                <img
                  src={user?.avatar || 'https://images.unsplash.com/photo-1472099645785-5658abf4ff4e?w=150&h=150&fit=crop&crop=face'}
                  alt={user?.name}
                  className="w-8 h-8 rounded-full"
                />
                <span className="text-sm font-medium text-gray-700">{user?.name}</span>
                <button
                  onClick={onLogout}
                  className="p-2 text-gray-400 hover:text-red-600 transition-colors"
                  title="Logout"
                >
                  <FaSignOutAlt className="w-4 h-4" />
                </button>
              </div>
            </div>
          </div>
        </div>
      </header>

      {/* Main Content */}
      <main className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-8">
        {/* Welcome Section */}
        <div className={`mb-8 transform transition-all duration-1000 ${
          mounted ? 'translate-y-0 opacity-100' : 'translate-y-10 opacity-0'
        }`}>
          <h2 className="text-3xl font-bold text-gray-900 mb-2">
            Welcome back, {user?.name?.split(' ')[0]}! 👋
          </h2>
          <p className="text-gray-600">
            Here's your accessibility dashboard. Let's make the web more accessible together.
          </p>
        </div>

        {/* Stats Grid */}
        <div className={`grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 mb-8 transform transition-all duration-1000 delay-200 ${
          mounted ? 'translate-y-0 opacity-100' : 'translate-y-10 opacity-0'
        }`}>
          {stats.map((stat, index) => (
            <div key={index} className="bg-white rounded-xl shadow-sm p-6 hover:shadow-md transition-shadow">
              <div className="flex items-center justify-between">
                <div>
                  <p className="text-sm font-medium text-gray-600">{stat.label}</p>
                  <p className="text-2xl font-bold text-gray-900">{stat.value}</p>
                </div>
                <div className="text-sm text-green-600 font-medium">
                  {stat.change}
                </div>
              </div>
            </div>
          ))}
        </div>

        {/* Accessibility Tools */}
        <div className={`mb-8 transform transition-all duration-1000 delay-400 ${
          mounted ? 'translate-y-0 opacity-100' : 'translate-y-10 opacity-0'
        }`}>
          <h3 className="text-xl font-bold text-gray-900 mb-6">Your Accessibility Tools</h3>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
            {accessibilityTools.map((tool) => {
              const IconComponent = tool.icon;
              return (
                <div
                  key={tool.id}
                  className="bg-white rounded-xl shadow-sm p-6 hover:shadow-md transition-all duration-200 cursor-pointer group"
                >
                  <div className="flex items-center justify-between mb-4">
                    <div className={`w-12 h-12 bg-gradient-to-r ${tool.color} rounded-lg flex items-center justify-center group-hover:scale-110 transition-transform`}>
                      <IconComponent className="text-white text-xl" />
                    </div>
                    <div className={`w-3 h-3 rounded-full ${tool.active ? 'bg-green-400' : 'bg-gray-300'}`}></div>
                  </div>
                  <h4 className="font-semibold text-gray-900 mb-2">{tool.name}</h4>
                  <p className="text-sm text-gray-600 mb-4">{tool.description}</p>
                  <button className={`w-full py-2 px-4 rounded-lg text-sm font-medium transition-colors ${
                    tool.active 
                      ? 'bg-green-100 text-green-700 hover:bg-green-200' 
                      : 'bg-gray-100 text-gray-700 hover:bg-gray-200'
                  }`}>
                    {tool.active ? 'Active' : 'Activate'}
                  </button>
                </div>
              );
            })}
          </div>
        </div>

        {/* Quick Actions */}
        <div className={`grid grid-cols-1 lg:grid-cols-2 gap-8 transform transition-all duration-1000 delay-600 ${
          mounted ? 'translate-y-0 opacity-100' : 'translate-y-10 opacity-0'
        }`}>
          {/* Recent Activity */}
          <div className="bg-white rounded-xl shadow-sm p-6">
            <h3 className="text-lg font-semibold text-gray-900 mb-4">Recent Activity</h3>
            <div className="space-y-4">
              {[
                { action: 'Activated Voice Reader', time: '2 hours ago', icon: FaVolumeUp },
                { action: 'Updated Cognitive Settings', time: '1 day ago', icon: FaBrain },
                { action: 'Joined Community Discussion', time: '2 days ago', icon: FaHeart }
              ].map((activity, index) => {
                const IconComponent = activity.icon;
                return (
                  <div key={index} className="flex items-center space-x-3">
                    <div className="w-8 h-8 bg-purple-100 rounded-lg flex items-center justify-center">
                      <IconComponent className="text-purple-600 text-sm" />
                    </div>
                    <div className="flex-1">
                      <p className="text-sm font-medium text-gray-900">{activity.action}</p>
                      <p className="text-xs text-gray-500">{activity.time}</p>
                    </div>
                  </div>
                );
              })}
            </div>
          </div>

          {/* Quick Settings */}
          <div className="bg-white rounded-xl shadow-sm p-6">
            <h3 className="text-lg font-semibold text-gray-900 mb-4">Quick Settings</h3>
            <div className="space-y-4">
              <div className="flex items-center justify-between">
                <span className="text-sm font-medium text-gray-700">High Contrast Mode</span>
                <button className="w-12 h-6 bg-gray-200 rounded-full relative transition-colors hover:bg-gray-300">
                  <div className="w-5 h-5 bg-white rounded-full absolute top-0.5 left-0.5 transition-transform"></div>
                </button>
              </div>
              <div className="flex items-center justify-between">
                <span className="text-sm font-medium text-gray-700">Large Text</span>
                <button className="w-12 h-6 bg-purple-600 rounded-full relative">
                  <div className="w-5 h-5 bg-white rounded-full absolute top-0.5 right-0.5 transition-transform"></div>
                </button>
              </div>
              <div className="flex items-center justify-between">
                <span className="text-sm font-medium text-gray-700">Voice Notifications</span>
                <button className="w-12 h-6 bg-purple-600 rounded-full relative">
                  <div className="w-5 h-5 bg-white rounded-full absolute top-0.5 right-0.5 transition-transform"></div>
                </button>
              </div>
            </div>
            <button className="w-full mt-6 bg-gradient-to-r from-purple-600 to-blue-600 text-white py-2 px-4 rounded-lg text-sm font-medium hover:from-purple-700 hover:to-blue-700 transition-all duration-200">
              <FaCog className="inline mr-2" />
              Advanced Settings
            </button>
          </div>
        </div>
      </main>
    </div>
  );
};

export default Dashboard;
