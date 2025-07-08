import React, { useState, useEffect } from 'react';
import { FaPlay, FaStar, FaUsers, FaClock, FaArrowRight, FaFilter, FaGraduationCap, FaBookOpen, FaLightbulb, FaMicrophone, FaEye, FaLanguage, FaQuoteLeft } from 'react-icons/fa';
import '../styles/animations.css';
import Footer from './Footer';

const EducationPage = () => {
  const [selectedCategory, setSelectedCategory] = useState('All');
  const [isVisible, setIsVisible] = useState(false);

  useEffect(() => {
    setIsVisible(true);
  }, []);

  const categories = ['All', 'Coding', 'Design', 'Business', 'Language', 'Personal Development'];

  const featuredCourses = [
    {
      title: 'Introduction to Web Development',
      instructor: 'Sarah Johnson',
      image: 'https://images.unsplash.com/photo-1461749280684-dccba630e2f6?w=400&h=250&fit=crop&crop=center',
      description: 'Learn the fundamentals of HTML, CSS, and JavaScript to build modern websites.',
      category: 'Coding',
      duration: '8 weeks',
      students: 1234,
      rating: 4.8,
      price: 'Free'
    },
    {
      title: 'Digital Painting for Beginners',
      instructor: 'Mike Chen',
      image: 'https://images.unsplash.com/photo-1513475382585-d06e58bcb0e0?w=400&h=250&fit=crop&crop=center',
      description: 'Master digital art techniques using professional tools and creative methods.',
      category: 'Design',
      duration: '6 weeks',
      students: 987,
      rating: 4.9,
      price: 'Free'
    },
    {
      title: 'Mixed Martial Arts Training',
      instructor: 'Alex Rodriguez',
      image: 'https://images.unsplash.com/photo-1544367567-0f2fcb009e0b?w=400&h=250&fit=crop&crop=center',
      description: 'Build strength, discipline, and self-defense skills through martial arts.',
      category: 'Personal Development',
      duration: '10 weeks',
      students: 756,
      rating: 4.7,
      price: 'Free'
    },
    {
      title: 'Advanced Photography',
      instructor: 'Emma Wilson',
      image: 'https://images.unsplash.com/photo-1502920917128-1aa500764cbd?w=400&h=250&fit=crop&crop=center',
      description: 'Capture stunning photos with advanced techniques and composition skills.',
      category: 'Design',
      duration: '12 weeks',
      students: 2341,
      rating: 4.6,
      price: 'Free'
    }
  ];

  const courseCatalog = [
    {
      title: 'Frontend Web Development',
      instructor: 'David Kim',
      image: 'https://images.unsplash.com/photo-1498050108023-c5249f4df085?w=400&h=250&fit=crop&crop=center',
      description: 'Master modern frontend development with React, JavaScript, and responsive design.',
      category: 'Coding',
      duration: '10 weeks',
      students: 1567,
      rating: 4.9,
      price: 'Free'
    },
    {
      title: 'UX/UI Design Principles',
      instructor: 'Lisa Chen',
      image: 'https://images.unsplash.com/photo-1561070791-2526d30994b5?w=400&h=250&fit=crop&crop=center',
      description: 'Learn user experience design, wireframing, and creating intuitive interfaces.',
      category: 'Design',
      duration: '8 weeks',
      students: 2341,
      rating: 4.8,
      price: 'Free'
    },
    {
      title: 'Mindfulness & Well-being',
      instructor: 'Dr. Sarah Wilson',
      image: 'https://images.unsplash.com/photo-1506905925346-21bda4d32df4?w=400&h=250&fit=crop&crop=center',
      description: 'Develop mental wellness through mindfulness practices and stress management.',
      category: 'Personal Development',
      duration: '6 weeks',
      students: 892,
      rating: 4.7,
      price: 'Free'
    },
    {
      title: 'Financial Planning Basics',
      instructor: 'Michael Brown',
      image: 'https://images.unsplash.com/photo-1554224155-6726b3ff858f?w=400&h=250&fit=crop&crop=center',
      description: 'Learn budgeting, investing, and financial planning for a secure future.',
      category: 'Business',
      duration: '12 weeks',
      students: 1234,
      rating: 4.6,
      price: 'Free'
    },
    {
      title: 'French Language Immersion',
      instructor: 'Marie Dubois',
      image: 'https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?w=400&h=250&fit=crop&crop=center',
      description: 'Learn French through immersive conversation and cultural exploration.',
      category: 'Language',
      duration: '16 weeks',
      students: 756,
      rating: 4.8,
      price: 'Free'
    },
    {
      title: 'Creative Writing Workshop',
      instructor: 'James Rodriguez',
      image: 'https://images.unsplash.com/photo-1455390582262-044cdead277a?w=400&h=250&fit=crop&crop=center',
      description: 'Develop your storytelling skills and creative writing techniques.',
      category: 'Personal Development',
      duration: '8 weeks',
      students: 445,
      rating: 4.9,
      price: 'Free'
    }
  ];

  const filteredCourses = courseCatalog.filter(course => {
    return selectedCategory === 'All' || course.category === selectedCategory;
  });

  const accessibilityFeatures = [
    {
      icon: FaMicrophone,
      title: 'Voice-Controlled Navigation',
      description: 'Navigate courses using voice commands for hands-free learning experience.'
    },
    {
      icon: FaEye,
      title: 'Visual Enhancement Options',
      description: 'Customize text size, contrast, and color schemes for better visibility.'
    },
    {
      icon: FaLanguage,
      title: 'Multi-Language Interpretation',
      description: 'Access courses in multiple languages with real-time translation support.'
    }
  ];

  const successStories = [
    {
      name: 'Ahmed Hassan',
      story: 'Completed coding bootcamp and landed my first job as a developer. AllAble made learning accessible with voice navigation.',
      image: 'https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?w=100&h=100&fit=crop&crop=face',
      course: 'Web Development'
    },
    {
      name: 'Fatima Al-Zahra',
      story: 'As a busy mother, I used AllAble\'s flexible learning to master digital marketing. Now I run my own agency.',
      image: 'https://images.unsplash.com/photo-1494790108755-2616b332c1c2?w=100&h=100&fit=crop&crop=face',
      course: 'Digital Marketing'
    },
    {
      name: 'Omar Benali',
      story: 'The sign language interpretation feature helped me learn photography. I now work as a professional photographer.',
      image: 'https://images.unsplash.com/photo-1472099645785-5658abf4ff4e?w=100&h=100&fit=crop&crop=face',
      course: 'Photography'
    }
  ];

  return (
    <div className="min-h-screen bg-gray-50">
      {/* Hero Section */}
      <section className="relative bg-gradient-to-br from-blue-600 via-purple-600 to-blue-800 text-white py-20 px-4 overflow-hidden">
        <div className="absolute inset-0 bg-black bg-opacity-20"></div>
        <div className="relative max-w-7xl mx-auto text-center">
          <div className={`transition-all duration-1000 transform ${isVisible ? 'translate-y-0 opacity-100' : 'translate-y-10 opacity-0'}`}>
            <h1 className="text-4xl md:text-6xl font-bold mb-6 leading-tight">
              Unlock Your Potential with Free Education
            </h1>
            <p className="text-lg md:text-xl text-blue-100 mb-8 max-w-3xl mx-auto leading-relaxed">
              Explore a diverse range of courses and skills designed for everyone, with accessibility features that make learning possible for all abilities.
            </p>
            <button className="bg-white text-blue-600 px-8 py-4 rounded-lg font-semibold hover:bg-blue-50 transition-all duration-300 transform hover:scale-105 shadow-lg hover:shadow-xl">
              Start Learning Today
            </button>
          </div>
        </div>

        {/* Floating Animation Elements */}
        <div className="absolute top-20 left-10 animate-bounce">
          <FaGraduationCap className="text-4xl text-white opacity-20" />
        </div>
        <div className="absolute bottom-20 right-10 animate-pulse">
          <FaBookOpen className="text-3xl text-white opacity-20" />
        </div>
        <div className="absolute top-1/2 left-1/4 animate-spin-slow">
          <FaLightbulb className="text-2xl text-white opacity-20" />
        </div>
      </section>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16">
        {/* Featured Courses Section */}
        <section className="mb-20">
          <div className="text-center mb-12">
            <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">Featured Courses</h2>
            <p className="text-lg text-gray-600 max-w-2xl mx-auto">
              Discover our most popular courses designed to help you develop new skills and advance your career.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            {featuredCourses.map((course, index) => (
              <div
                key={index}
                className={`bg-white rounded-xl shadow-lg hover:shadow-2xl transition-all duration-500 transform hover:-translate-y-3 group overflow-hidden ${
                  isVisible ? 'animate-fade-in-up' : 'opacity-0'
                }`}
                style={{ animationDelay: `${index * 0.1}s` }}
              >
                <div className="relative overflow-hidden">
                  <img
                    src={course.image}
                    alt={course.title}
                    className="w-full h-48 object-cover group-hover:scale-110 transition-transform duration-500"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-black/50 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>
                  <div className="absolute top-4 right-4 bg-green-500 text-white px-3 py-1 rounded-full text-sm font-semibold">
                    {course.price}
                  </div>
                  <div className="absolute inset-0 flex items-center justify-center opacity-0 group-hover:opacity-100 transition-opacity duration-300">
                    <FaPlay className="text-white text-3xl bg-blue-600 rounded-full p-3 w-12 h-12 hover:bg-blue-700 transition-colors duration-300" />
                  </div>
                </div>
                <div className="p-6">
                  <div className="flex items-center justify-between mb-2">
                    <span className="text-sm bg-blue-100 text-blue-600 px-3 py-1 rounded-full font-medium">
                      {course.category}
                    </span>
                    <div className="flex items-center space-x-1">
                      <FaStar className="text-yellow-400 text-sm" />
                      <span className="text-sm text-gray-600">{course.rating}</span>
                    </div>
                  </div>
                  <h3 className="font-bold text-lg text-gray-900 mb-2 group-hover:text-blue-600 transition-colors duration-300">
                    {course.title}
                  </h3>
                  <p className="text-sm text-gray-600 mb-3">{course.instructor}</p>
                  <p className="text-sm text-gray-500 mb-4 line-clamp-2">{course.description}</p>
                  <div className="flex items-center justify-between text-sm text-gray-500 mb-4">
                    <div className="flex items-center space-x-1">
                      <FaUsers className="text-xs" />
                      <span>{course.students}</span>
                    </div>
                    <div className="flex items-center space-x-1">
                      <FaClock className="text-xs" />
                      <span>{course.duration}</span>
                    </div>
                  </div>
                  <button className="w-full bg-blue-600 text-white py-3 rounded-lg hover:bg-blue-700 transition-all duration-300 transform hover:scale-105 font-semibold">
                    Start Learning
                  </button>
                </div>
              </div>
            ))}
          </div>
        </section>

        {/* Course Catalog Section */}
        <section className="mb-20">
          <div className="text-center mb-12">
            <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">Course Catalog</h2>
            <p className="text-lg text-gray-600 max-w-2xl mx-auto">
              Browse our comprehensive collection of courses across various disciplines and skill levels.
            </p>
          </div>

          {/* Category Filter */}
          <div className="bg-white rounded-xl shadow-lg p-6 mb-12">
            <div className="flex flex-wrap gap-3 items-center justify-center">
              <div className="flex items-center space-x-2 mr-4">
                <FaFilter className="text-blue-600" />
                <span className="font-semibold text-gray-700">Filter by Category:</span>
              </div>
              {categories.map((category) => (
                <button
                  key={category}
                  onClick={() => setSelectedCategory(category)}
                  className={`px-6 py-3 rounded-full text-sm font-semibold transition-all duration-300 transform hover:scale-105 ${
                    selectedCategory === category
                      ? 'bg-blue-600 text-white shadow-lg'
                      : 'bg-gray-100 text-gray-700 hover:bg-gray-200 hover:shadow-md'
                  }`}
                >
                  {category}
                </button>
              ))}
            </div>
          </div>

          {/* Course Grid */}
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {filteredCourses.map((course, index) => (
              <div
                key={index}
                className={`bg-white rounded-xl shadow-lg hover:shadow-2xl transition-all duration-500 transform hover:-translate-y-2 group overflow-hidden ${
                  isVisible ? 'animate-fade-in-up' : 'opacity-0'
                }`}
                style={{ animationDelay: `${index * 0.1}s` }}
              >
                <div className="relative overflow-hidden">
                  <img
                    src={course.image}
                    alt={course.title}
                    className="w-full h-48 object-cover group-hover:scale-110 transition-transform duration-500"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-black/60 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>
                  <div className="absolute top-4 right-4 bg-green-500 text-white px-3 py-1 rounded-full text-sm font-semibold">
                    {course.price}
                  </div>
                  <div className="absolute inset-0 flex items-center justify-center opacity-0 group-hover:opacity-100 transition-opacity duration-300">
                    <FaPlay className="text-white text-4xl bg-blue-600 rounded-full p-4 w-16 h-16 hover:bg-blue-700 transition-colors duration-300 cursor-pointer" />
                  </div>
                </div>
                <div className="p-6">
                  <div className="flex items-center justify-between mb-3">
                    <span className="text-sm bg-blue-100 text-blue-600 px-3 py-1 rounded-full font-medium">
                      {course.category}
                    </span>
                    <div className="flex items-center space-x-1">
                      <FaStar className="text-yellow-400 text-sm" />
                      <span className="text-sm text-gray-600 font-medium">{course.rating}</span>
                    </div>
                  </div>
                  <h3 className="font-bold text-xl text-gray-900 mb-2 group-hover:text-blue-600 transition-colors duration-300">
                    {course.title}
                  </h3>
                  <p className="text-sm text-gray-600 mb-3 font-medium">{course.instructor}</p>
                  <p className="text-sm text-gray-500 mb-4 line-clamp-2 leading-relaxed">{course.description}</p>
                  <div className="flex items-center justify-between text-sm text-gray-500 mb-6">
                    <div className="flex items-center space-x-1">
                      <FaUsers className="text-xs" />
                      <span>{course.students} students</span>
                    </div>
                    <div className="flex items-center space-x-1">
                      <FaClock className="text-xs" />
                      <span>{course.duration}</span>
                    </div>
                  </div>
                  <button className="w-full bg-gradient-to-r from-blue-600 to-purple-600 text-white py-3 rounded-lg hover:from-blue-700 hover:to-purple-700 transition-all duration-300 transform hover:scale-105 font-semibold shadow-lg hover:shadow-xl flex items-center justify-center space-x-2">
                    <span>Start Course</span>
                    <FaArrowRight className="text-sm group-hover:translate-x-1 transition-transform duration-300" />
                  </button>
                </div>
              </div>
            ))}
          </div>
        </section>

        {/* Learning Accessibility Features */}
        <section className="mb-20">
          <div className="text-center mb-12">
            <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">Learning Accessibility Features</h2>
            <p className="text-lg text-gray-600 max-w-2xl mx-auto">
              Our platform is designed to be accessible for everyone, with features that adapt to your unique learning needs.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {accessibilityFeatures.map((feature, index) => {
              const Icon = feature.icon;
              return (
                <div
                  key={index}
                  className={`bg-white rounded-xl shadow-lg p-8 text-center hover:shadow-2xl transition-all duration-500 transform hover:-translate-y-2 ${
                    isVisible ? 'animate-fade-in-up' : 'opacity-0'
                  }`}
                  style={{ animationDelay: `${index * 0.2}s` }}
                >
                  <div className="bg-gradient-to-br from-blue-500 to-purple-600 rounded-full w-16 h-16 flex items-center justify-center mx-auto mb-6">
                    <Icon className="text-2xl text-white" />
                  </div>
                  <h3 className="text-xl font-bold text-gray-900 mb-4">{feature.title}</h3>
                  <p className="text-gray-600 leading-relaxed">{feature.description}</p>
                </div>
              );
            })}
          </div>
        </section>

        {/* Inspiring Success Stories */}
        <section className="mb-20">
          <div className="text-center mb-12">
            <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">Inspiring Success Stories</h2>
            <p className="text-lg text-gray-600 max-w-2xl mx-auto">
              Real stories from learners who transformed their lives through accessible education.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {successStories.map((story, index) => (
              <div
                key={index}
                className={`bg-white rounded-xl shadow-lg p-8 hover:shadow-2xl transition-all duration-500 transform hover:-translate-y-2 ${
                  isVisible ? 'animate-fade-in-up' : 'opacity-0'
                }`}
                style={{ animationDelay: `${index * 0.15}s` }}
              >
                <div className="flex items-center mb-6">
                  <img
                    src={story.image}
                    alt={story.name}
                    className="w-16 h-16 rounded-full object-cover mr-4"
                  />
                  <div>
                    <h3 className="font-bold text-lg text-gray-900">{story.name}</h3>
                    <p className="text-sm text-blue-600 font-medium">{story.course}</p>
                  </div>
                </div>
                <div className="relative">
                  <FaQuoteLeft className="text-blue-200 text-2xl absolute -top-2 -left-2" />
                  <p className="text-gray-600 italic leading-relaxed pl-6">{story.story}</p>
                </div>
              </div>
            ))}
          </div>
        </section>

        {/* Newsletter Section */}
        <section className="bg-gradient-to-r from-blue-600 to-purple-600 rounded-2xl shadow-2xl p-12 text-center text-white">
          <h2 className="text-3xl md:text-4xl font-bold mb-4">Stay Updated with AllAble</h2>
          <p className="text-lg text-blue-100 mb-8 max-w-2xl mx-auto">
            Get the latest news about new courses, accessibility features, and learning opportunities delivered to your inbox.
          </p>
          <div className="flex flex-col sm:flex-row max-w-md mx-auto gap-4">
            <input
              type="email"
              placeholder="Enter your email address"
              className="flex-1 px-6 py-4 rounded-lg text-gray-900 focus:outline-none focus:ring-4 focus:ring-blue-300 transition-all duration-300"
            />
            <button className="bg-white text-blue-600 px-8 py-4 rounded-lg font-semibold hover:bg-blue-50 transition-all duration-300 transform hover:scale-105 shadow-lg">
              Subscribe
            </button>
          </div>
        </section>
      </div>

      <Footer />
    </div>
  );
};

export default EducationPage;
