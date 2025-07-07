import React, { useState, useEffect } from 'react';
import { FaUsers, FaComments, FaCalendar, FaHeart, FaShare, FaStar, FaThumbsUp, FaReply, FaEye, FaUserPlus, FaMapMarkerAlt, FaClock, FaGraduationCap, FaLightbulb, FaHandsHelping, FaCode, FaAccessibleIcon, FaBookOpen, FaVideo, FaChartLine, FaAward, FaBell, FaSearch, FaFilter, FaPlus, FaEllipsisH } from 'react-icons/fa';

// Add custom animations
const styles = `
  @keyframes fade-in {
    from { opacity: 0; transform: translateY(20px); }
    to { opacity: 1; transform: translateY(0); }
  }

  @keyframes slide-in-left {
    from { opacity: 0; transform: translateX(-30px); }
    to { opacity: 1; transform: translateX(0); }
  }

  @keyframes slide-in-right {
    from { opacity: 0; transform: translateX(30px); }
    to { opacity: 1; transform: translateX(0); }
  }

  .animate-fade-in {
    animation: fade-in 0.8s ease-out;
  }

  .animate-slide-in-left {
    animation: slide-in-left 0.6s ease-out;
  }

  .animate-slide-in-right {
    animation: slide-in-right 0.6s ease-out;
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
`;

const CommunityPage = () => {
  const [selectedTab, setSelectedTab] = useState('All Discussions');
  const [selectedFilter, setSelectedFilter] = useState('Recent');

  // Inject custom styles
  useEffect(() => {
    const styleSheet = document.createElement("style");
    styleSheet.innerText = styles;
    document.head.appendChild(styleSheet);
    return () => document.head.removeChild(styleSheet);
  }, []);

  // Community Snapshot Data
  const communityStats = {
    totalMembers: 18,
    activeToday: 124,
    onlineNow: 465
  };

  // Community Feed Posts
  const communityPosts = [
    {
      id: 1,
      author: {
        name: 'Jane Doe',
        avatar: 'https://images.pexels.com/photos/774909/pexels-photo-774909.jpeg?auto=compress&cs=tinysrgb&w=50&h=50&fit=crop&crop=face',
        role: 'Accessibility Advocate',
        isOnline: true
      },
      title: 'Seeking Advice: Navigating Public Transport with Mobility Aid',
      content: 'I recently started using a mobility aid and I\'m looking for advice on navigating public transport. Any tips or experiences you\'d like to share would be greatly appreciated.',
      timeAgo: '2 hours ago',
      likes: 12,
      comments: 8,
      views: 45,
      tags: ['mobility', 'transport', 'advice'],
      hasImage: true,
      image: 'https://images.pexels.com/photos/544966/pexels-photo-544966.jpeg?auto=compress&cs=tinysrgb&w=400&h=200&fit=crop'
    },
    {
      id: 2,
      author: {
        name: 'Alex M.',
        avatar: 'https://images.pexels.com/photos/1239291/pexels-photo-1239291.jpeg?auto=compress&cs=tinysrgb&w=50&h=50&fit=crop&crop=face',
        role: 'Web Developer',
        isOnline: false
      },
      title: 'Accessibility Beginners in Web Accessibility',
      content: 'Just finished learning Web Accessibility course and I\'m excited to implement these practices in my projects. Looking forward to making the web more inclusive!',
      timeAgo: '4 hours ago',
      likes: 24,
      comments: 15,
      views: 89,
      tags: ['web-accessibility', 'learning', 'development']
    },
    {
      id: 3,
      author: {
        name: 'Chris P.',
        avatar: 'https://images.pexels.com/photos/1043471/pexels-photo-1043471.jpeg?auto=compress&cs=tinysrgb&w=50&h=50&fit=crop&crop=face',
        role: 'UX Designer',
        isOnline: true
      },
      title: 'Volunteer Opportunity: Digital Literacy Workshop for Seniors',
      content: 'We\'re organizing a digital literacy workshop for seniors and looking for volunteers. If you\'re passionate about helping others learn technology, please join us!',
      timeAgo: '6 hours ago',
      likes: 18,
      comments: 12,
      views: 67,
      tags: ['volunteer', 'seniors', 'digital-literacy'],
      hasImage: true,
      image: 'https://images.pexels.com/photos/4145190/pexels-photo-4145190.jpeg?auto=compress&cs=tinysrgb&w=400&h=200&fit=crop'
    },
    {
      id: 4,
      author: {
        name: 'Sarah K.',
        avatar: 'https://images.pexels.com/photos/1181686/pexels-photo-1181686.jpeg?auto=compress&cs=tinysrgb&w=50&h=50&fit=crop&crop=face',
        role: 'Researcher',
        isOnline: false
      },
      title: 'Share Your Favorite Accessible Travel Destinations',
      content: 'Planning a vacation and looking for accessible travel destinations. What are your favorite places that are welcoming and accessible for people with disabilities?',
      timeAgo: '8 hours ago',
      likes: 31,
      comments: 22,
      views: 156,
      tags: ['travel', 'accessibility', 'destinations']
    },
    {
      id: 5,
      author: {
        name: 'Mark R.',
        avatar: 'https://images.pexels.com/photos/1222271/pexels-photo-1222271.jpeg?auto=compress&cs=tinysrgb&w=50&h=50&fit=crop&crop=face',
        role: 'Assistive Tech Specialist',
        isOnline: true
      },
      title: 'My Experience with Voice OCR for Academic Research',
      content: 'I\'ve been using Voice OCR technology for my academic research and it\'s been a game-changer. Happy to share my experience and answer any questions about this technology.',
      timeAgo: '12 hours ago',
      likes: 45,
      comments: 18,
      views: 203,
      tags: ['voice-ocr', 'research', 'assistive-tech']
    },
    {
      id: 6,
      author: {
        name: 'Lisa T.',
        avatar: 'https://images.pexels.com/photos/1130626/pexels-photo-1130626.jpeg?auto=compress&cs=tinysrgb&w=50&h=50&fit=crop&crop=face',
        role: 'Sign Language Interpreter',
        isOnline: false
      },
      title: 'Looking for a study partner for the Sign Language Basics course',
      content: 'I\'m currently taking the Sign Language Basics course and would love to find a study partner to practice with. Anyone interested in partnering up for learning sessions?',
      timeAgo: '1 day ago',
      likes: 28,
      comments: 14,
      views: 92,
      tags: ['sign-language', 'study-partner', 'learning']
    }
  ];

  // Upcoming Events
  const upcomingEvents = [
    {
      id: 1,
      title: 'Accessibility Tech Innovations',
      date: 'Dec 15, 2024',
      time: '2:00 PM',
      location: 'Online',
      attendees: 156,
      category: 'Workshop',
      image: 'https://images.pexels.com/photos/3184465/pexels-photo-3184465.jpeg?auto=compress&cs=tinysrgb&w=300&h=200&fit=crop',
      organizer: 'AllAble Community'
    },
    {
      id: 2,
      title: 'Local AllAble Community Meetup',
      date: 'Dec 18, 2024',
      time: '6:00 PM',
      location: 'Community Center',
      attendees: 89,
      category: 'Meetup',
      image: 'https://images.pexels.com/photos/1181396/pexels-photo-1181396.jpeg?auto=compress&cs=tinysrgb&w=300&h=200&fit=crop',
      organizer: 'Community Leaders'
    },
    {
      id: 3,
      title: 'Introduction to Accessible Coding Workshop',
      date: 'Dec 22, 2024',
      time: '10:00 AM',
      location: 'Tech Hub Downtown',
      attendees: 234,
      category: 'Workshop',
      image: 'https://images.pexels.com/photos/574071/pexels-photo-574071.jpeg?auto=compress&cs=tinysrgb&w=300&h=200&fit=crop',
      organizer: 'Tech Accessibility Group'
    }
  ];

  // Trending Topics
  const trendingTopics = [
    { name: 'Accessible Travel Tips', posts: 45, trend: 'up' },
    { name: 'New Education Courses', posts: 32, trend: 'up' },
    { name: 'Assistive Technology', posts: 28, trend: 'stable' },
    { name: 'Volunteer Stories', posts: 19, trend: 'up' },
    { name: 'OCR Challenges', posts: 15, trend: 'down' }
  ];

  // Who to Follow
  const suggestedUsers = [
    {
      name: 'Emily R.',
      role: 'Accessibility Expert',
      avatar: 'https://images.pexels.com/photos/1239291/pexels-photo-1239291.jpeg?auto=compress&cs=tinysrgb&w=50&h=50&fit=crop&crop=face',
      followers: 1234,
      isFollowing: false
    },
    {
      name: 'David S.',
      role: 'UX Designer',
      avatar: 'https://images.pexels.com/photos/1043471/pexels-photo-1043471.jpeg?auto=compress&cs=tinysrgb&w=50&h=50&fit=crop&crop=face',
      followers: 892,
      isFollowing: false
    },
    {
      name: 'Maria J.',
      role: 'Assistive Tech Developer',
      avatar: 'https://images.pexels.com/photos/1181686/pexels-photo-1181686.jpeg?auto=compress&cs=tinysrgb&w=50&h=50&fit=crop&crop=face',
      followers: 567,
      isFollowing: true
    }
  ];

  return (
    <div className="min-h-screen bg-gradient-to-br from-purple-50 via-white to-blue-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-8">
        {/* Hero Section */}
        <div className="relative bg-gradient-to-r from-purple-600 to-blue-600 rounded-3xl p-8 mb-8 overflow-hidden">
          <div className="absolute inset-0 bg-black opacity-10"></div>
          <div className="relative z-10 text-center text-white">
            <h1 className="text-4xl md:text-5xl font-bold mb-4 animate-fade-in">
              Welcome to the AllAble Community Hub
            </h1>
            <p className="text-xl mb-6 opacity-90 max-w-3xl mx-auto">
              Connect with like-minded individuals, share your experiences, and discover a world of support and inspiration. Your voice matters here.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <button className="bg-white text-purple-600 px-8 py-3 rounded-full font-semibold hover:bg-gray-100 transition-all duration-300 transform hover:scale-105 shadow-lg">
                <FaPlus className="inline mr-2" />
                Start a Discussion
              </button>
              <button className="border-2 border-white text-white px-8 py-3 rounded-full font-semibold hover:bg-white hover:text-purple-600 transition-all duration-300 transform hover:scale-105">
                <FaUserPlus className="inline mr-2" />
                Find Support Groups
              </button>
            </div>
          </div>
          {/* Floating Elements */}
          <div className="absolute top-4 right-4 w-20 h-20 bg-white bg-opacity-20 rounded-full animate-bounce"></div>
          <div className="absolute bottom-4 left-4 w-16 h-16 bg-white bg-opacity-20 rounded-full animate-pulse"></div>
        </div>

        {/* Main Content Grid */}
        <div className="grid grid-cols-1 lg:grid-cols-4 gap-8">
          {/* Left Sidebar - Community Snapshot */}
          <div className="lg:col-span-1 space-y-6 animate-slide-in-left">
            {/* My Community Snapshot */}
            <div className="bg-white rounded-2xl shadow-lg p-6 border border-gray-100 hover:shadow-xl transition-all duration-300">
              <h3 className="text-lg font-bold text-gray-900 mb-4">My Community Snapshot</h3>

              <div className="space-y-4">
                <div className="flex items-center justify-between p-3 bg-blue-50 rounded-xl">
                  <div className="flex items-center">
                    <div className="w-10 h-10 bg-blue-500 rounded-full flex items-center justify-center">
                      <FaUsers className="text-white text-sm" />
                    </div>
                    <div className="ml-3">
                      <p className="text-2xl font-bold text-blue-600">{communityStats.totalMembers}</p>
                      <p className="text-xs text-gray-600">Total Members</p>
                    </div>
                  </div>
                </div>

                <div className="flex items-center justify-between p-3 bg-green-50 rounded-xl">
                  <div className="flex items-center">
                    <div className="w-10 h-10 bg-green-500 rounded-full flex items-center justify-center">
                      <FaChartLine className="text-white text-sm" />
                    </div>
                    <div className="ml-3">
                      <p className="text-2xl font-bold text-green-600">{communityStats.activeToday}</p>
                      <p className="text-xs text-gray-600">Active Today</p>
                    </div>
                  </div>
                </div>

                <div className="flex items-center justify-between p-3 bg-purple-50 rounded-xl">
                  <div className="flex items-center">
                    <div className="w-10 h-10 bg-purple-500 rounded-full flex items-center justify-center">
                      <FaEye className="text-white text-sm" />
                    </div>
                    <div className="ml-3">
                      <p className="text-2xl font-bold text-purple-600">{communityStats.onlineNow}</p>
                      <p className="text-xs text-gray-600">Online Now</p>
                    </div>
                  </div>
                </div>
              </div>
            </div>

            {/* Quick Actions */}
            <div className="bg-white rounded-2xl shadow-lg p-6 border border-gray-100">
              <h3 className="text-lg font-bold text-gray-900 mb-4">Quick Actions</h3>
              <div className="space-y-3">
                <button className="w-full flex items-center p-3 text-left hover:bg-gray-50 rounded-xl transition-colors duration-200">
                  <FaPlus className="text-purple-600 mr-3" />
                  <span className="text-sm font-medium">Write a New Post</span>
                </button>
                <button className="w-full flex items-center p-3 text-left hover:bg-gray-50 rounded-xl transition-colors duration-200">
                  <FaCalendar className="text-blue-600 mr-3" />
                  <span className="text-sm font-medium">View My Discussions</span>
                </button>
                <button className="w-full flex items-center p-3 text-left hover:bg-gray-50 rounded-xl transition-colors duration-200">
                  <FaHeart className="text-red-600 mr-3" />
                  <span className="text-sm font-medium">Saved Posts</span>
                </button>
                <button className="w-full flex items-center p-3 text-left hover:bg-gray-50 rounded-xl transition-colors duration-200">
                  <FaAward className="text-yellow-600 mr-3" />
                  <span className="text-sm font-medium">Find Local Groups</span>
                </button>
              </div>
            </div>
          </div>

          {/* Center Content - Community Feed */}
          <div className="lg:col-span-2 space-y-6 animate-fade-in animate-delay-100">
            {/* Feed Header */}
            <div className="bg-white rounded-2xl shadow-lg p-6 border border-gray-100">
              <div className="flex items-center justify-between mb-4">
                <h2 className="text-2xl font-bold text-gray-900">Community Feed</h2>
                <div className="flex items-center space-x-2">
                  <button className="p-2 hover:bg-gray-100 rounded-lg transition-colors duration-200">
                    <FaSearch className="text-gray-600" />
                  </button>
                  <button className="p-2 hover:bg-gray-100 rounded-lg transition-colors duration-200">
                    <FaFilter className="text-gray-600" />
                  </button>
                </div>
              </div>

              {/* Filter Tabs */}
              <div className="flex space-x-1 bg-gray-100 rounded-xl p-1">
                {['All Discussions', 'My Discussions', 'Saved', 'Trending'].map((tab) => (
                  <button
                    key={tab}
                    onClick={() => setSelectedTab(tab)}
                    className={`px-4 py-2 rounded-lg text-sm font-medium transition-all duration-200 ${
                      selectedTab === tab
                        ? 'bg-white text-purple-600 shadow-sm'
                        : 'text-gray-600 hover:text-gray-900'
                    }`}
                  >
                    {tab}
                  </button>
                ))}
              </div>
            </div>

            {/* Community Posts */}
            <div className="space-y-4">
              {communityPosts.map((post) => (
                <div
                  key={post.id}
                  className="bg-white rounded-2xl shadow-lg border border-gray-100 hover:shadow-xl transition-all duration-300 transform hover:-translate-y-1"
                >
                  {/* Post Header */}
                  <div className="p-6 pb-4">
                    <div className="flex items-start space-x-4">
                      <div className="relative">
                        <img
                          src={post.author.avatar}
                          alt={post.author.name}
                          className="w-12 h-12 rounded-full object-cover"
                        />
                        {post.author.isOnline && (
                          <div className="absolute -bottom-1 -right-1 w-4 h-4 bg-green-500 border-2 border-white rounded-full"></div>
                        )}
                      </div>
                      <div className="flex-1">
                        <div className="flex items-center space-x-2">
                          <h3 className="font-semibold text-gray-900">{post.author.name}</h3>
                          <span className="text-sm text-gray-500">•</span>
                          <span className="text-sm text-gray-500">{post.timeAgo}</span>
                        </div>
                        <p className="text-sm text-gray-600">{post.author.role}</p>
                      </div>
                      <button className="p-2 hover:bg-gray-100 rounded-lg transition-colors duration-200">
                        <FaEllipsisH className="text-gray-400" />
                      </button>
                    </div>
                  </div>

                  {/* Post Content */}
                  <div className="px-6 pb-4">
                    <h4 className="text-lg font-semibold text-gray-900 mb-3 hover:text-purple-600 cursor-pointer transition-colors duration-200">
                      {post.title}
                    </h4>
                    <p className="text-gray-700 leading-relaxed mb-4">{post.content}</p>

                    {/* Post Image */}
                    {post.hasImage && post.image && (
                      <div className="mb-4 rounded-xl overflow-hidden">
                        <img
                          src={post.image}
                          alt="Post content"
                          className="w-full h-48 object-cover hover:scale-105 transition-transform duration-300"
                        />
                      </div>
                    )}

                    {/* Tags */}
                    <div className="flex flex-wrap gap-2 mb-4">
                      {post.tags.map((tag, index) => (
                        <span
                          key={index}
                          className="px-3 py-1 bg-purple-100 text-purple-600 text-xs font-medium rounded-full hover:bg-purple-200 cursor-pointer transition-colors duration-200"
                        >
                          #{tag}
                        </span>
                      ))}
                    </div>
                  </div>

                  {/* Post Actions */}
                  <div className="px-6 py-4 border-t border-gray-100 bg-gray-50 rounded-b-2xl">
                    <div className="flex items-center justify-between">
                      <div className="flex items-center space-x-6">
                        <button className="flex items-center space-x-2 text-gray-600 hover:text-purple-600 transition-colors duration-200">
                          <FaThumbsUp className="text-sm" />
                          <span className="text-sm font-medium">{post.likes}</span>
                        </button>
                        <button className="flex items-center space-x-2 text-gray-600 hover:text-blue-600 transition-colors duration-200">
                          <FaComments className="text-sm" />
                          <span className="text-sm font-medium">{post.comments}</span>
                        </button>
                        <button className="flex items-center space-x-2 text-gray-600 hover:text-green-600 transition-colors duration-200">
                          <FaShare className="text-sm" />
                          <span className="text-sm font-medium">Share</span>
                        </button>
                      </div>
                      <div className="flex items-center text-gray-500">
                        <FaEye className="text-sm mr-1" />
                        <span className="text-sm">{post.views}</span>
                      </div>
                    </div>
                  </div>
                </div>
              ))}
            </div>

            {/* Load More Button */}
            <div className="text-center">
              <button className="bg-gradient-to-r from-purple-600 to-blue-600 text-white px-8 py-3 rounded-full font-semibold hover:from-purple-700 hover:to-blue-700 transition-all duration-300 transform hover:scale-105 shadow-lg">
                Load More Posts
              </button>
            </div>
          </div>

          {/* Right Sidebar */}
          <div className="lg:col-span-1 space-y-6 animate-slide-in-right animate-delay-200">
            {/* Upcoming Events */}
            <div className="bg-white rounded-2xl shadow-lg p-6 border border-gray-100">
              <h3 className="text-lg font-bold text-gray-900 mb-4">Upcoming Events</h3>
              <div className="space-y-4">
                {upcomingEvents.map((event) => (
                  <div
                    key={event.id}
                    className="group cursor-pointer hover:bg-gray-50 p-3 rounded-xl transition-all duration-200"
                  >
                    <div className="flex space-x-3">
                      <img
                        src={event.image}
                        alt={event.title}
                        className="w-16 h-16 rounded-lg object-cover group-hover:scale-105 transition-transform duration-200"
                      />
                      <div className="flex-1 min-w-0">
                        <h4 className="font-semibold text-gray-900 text-sm mb-1 group-hover:text-purple-600 transition-colors duration-200">
                          {event.title}
                        </h4>
                        <div className="flex items-center text-xs text-gray-500 mb-1">
                          <FaCalendar className="mr-1" />
                          <span>{event.date}</span>
                        </div>
                        <div className="flex items-center text-xs text-gray-500 mb-1">
                          <FaClock className="mr-1" />
                          <span>{event.time}</span>
                        </div>
                        <div className="flex items-center text-xs text-gray-500">
                          <FaUsers className="mr-1" />
                          <span>{event.attendees} attending</span>
                        </div>
                      </div>
                    </div>
                  </div>
                ))}
              </div>
              <button className="w-full mt-4 text-purple-600 font-medium text-sm hover:text-purple-700 transition-colors duration-200">
                View All Events
              </button>
            </div>

            {/* Trending Topics */}
            <div className="bg-white rounded-2xl shadow-lg p-6 border border-gray-100">
              <h3 className="text-lg font-bold text-gray-900 mb-4">Trending Topics</h3>
              <div className="space-y-3">
                {trendingTopics.map((topic, index) => (
                  <div
                    key={index}
                    className="flex items-center justify-between p-3 hover:bg-gray-50 rounded-xl cursor-pointer transition-colors duration-200"
                  >
                    <div className="flex items-center space-x-3">
                      <div className="w-2 h-2 bg-purple-600 rounded-full"></div>
                      <div>
                        <p className="font-medium text-gray-900 text-sm">{topic.name}</p>
                        <p className="text-xs text-gray-500">{topic.posts} posts</p>
                      </div>
                    </div>
                    <div className={`text-xs px-2 py-1 rounded-full ${
                      topic.trend === 'up' ? 'bg-green-100 text-green-600' :
                      topic.trend === 'down' ? 'bg-red-100 text-red-600' :
                      'bg-gray-100 text-gray-600'
                    }`}>
                      {topic.trend === 'up' ? '↗' : topic.trend === 'down' ? '↘' : '→'}
                    </div>
                  </div>
                ))}
              </div>
            </div>

            {/* Who to Follow */}
            <div className="bg-white rounded-2xl shadow-lg p-6 border border-gray-100">
              <h3 className="text-lg font-bold text-gray-900 mb-4">Who to Follow</h3>
              <div className="space-y-4">
                {suggestedUsers.map((user, index) => (
                  <div key={index} className="flex items-center justify-between">
                    <div className="flex items-center space-x-3">
                      <img
                        src={user.avatar}
                        alt={user.name}
                        className="w-10 h-10 rounded-full object-cover"
                      />
                      <div>
                        <p className="font-medium text-gray-900 text-sm">{user.name}</p>
                        <p className="text-xs text-gray-500">{user.role}</p>
                        <p className="text-xs text-gray-400">{user.followers} followers</p>
                      </div>
                    </div>
                    <button
                      className={`px-4 py-1 rounded-full text-xs font-medium transition-all duration-200 ${
                        user.isFollowing
                          ? 'bg-gray-200 text-gray-700 hover:bg-gray-300'
                          : 'bg-purple-600 text-white hover:bg-purple-700'
                      }`}
                    >
                      {user.isFollowing ? 'Following' : 'Follow'}
                    </button>
                  </div>
                ))}
              </div>
            </div>

            {/* Newsletter Signup */}
            <div className="bg-gradient-to-br from-purple-600 to-blue-600 rounded-2xl p-6 text-white">
              <h3 className="text-lg font-bold mb-2">Stay up to date with AllAble</h3>
              <p className="text-sm opacity-90 mb-4">Get the latest community updates and accessibility news.</p>
              <div className="space-y-3">
                <input
                  type="email"
                  placeholder="Enter your email address"
                  className="w-full px-4 py-2 rounded-lg text-gray-900 placeholder-gray-500 focus:outline-none focus:ring-2 focus:ring-white"
                />
                <button className="w-full bg-white text-purple-600 py-2 rounded-lg font-semibold hover:bg-gray-100 transition-colors duration-200">
                  Subscribe
                </button>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>


  );
};

export default CommunityPage;
