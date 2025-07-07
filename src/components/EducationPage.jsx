import React, { useState } from 'react';
import { FaCode, FaLaptop, FaHammer, FaCertificate, FaPython, FaReact, FaPalette, FaChartBar, FaShieldAlt, FaYarn, FaPlay, FaStar, FaUsers, FaClock, FaArrowRight, FaFilter, FaDatabase, FaBullhorn, FaLock } from 'react-icons/fa';

const EducationPage = () => {
  const [selectedCategory, setSelectedCategory] = useState('All');
  const [selectedFormat, setSelectedFormat] = useState('All');

  const categories = ['All', 'Coding', 'Digital Skills', 'Crafts', 'Communication', 'Life Skills'];
  const formats = ['All', 'Video', 'Audio', 'Sign Language'];

  const continueLearningCourses = [
    {
      title: 'Introduction to Python',
      instructor: 'Dr. Sarah Johnson',
      progress: 65,
      icon: FaPython,
      gradient: 'from-blue-500 to-blue-700',
      category: 'Coding',
      duration: '8 weeks'
    },
    {
      title: 'Web Development with React',
      instructor: 'Mike Chen',
      progress: 40,
      icon: FaReact,
      gradient: 'from-cyan-500 to-blue-600',
      category: 'Coding',
      duration: '10 weeks'
    },
    {
      title: 'Graphic Design for Beginners',
      instructor: 'Lisa Rodriguez',
      progress: 80,
      icon: FaPalette,
      gradient: 'from-purple-500 to-pink-600',
      category: 'Digital Skills',
      duration: '6 weeks'
    },
    {
      title: 'Knitting for All Ages',
      instructor: 'Emma Thompson',
      progress: 25,
      icon: FaYarn,
      gradient: 'from-pink-500 to-rose-600',
      category: 'Crafts',
      duration: '4 weeks'
    }
  ];

  const courseCatalog = [
    {
      title: 'Introduction to Python',
      instructor: 'Dr. Sarah Johnson',
      rating: 4.8,
      students: 1234,
      duration: '8 weeks',
      icon: FaPython,
      gradient: 'from-blue-500 to-blue-700',
      category: 'Coding',
      format: 'Video',
      description: 'Learn Python programming from scratch with hands-on projects and real-world applications.',
      price: 'Free'
    },
    {
      title: 'Web Development with React',
      instructor: 'Mike Chen',
      rating: 4.9,
      students: 987,
      duration: '10 weeks',
      icon: FaReact,
      gradient: 'from-cyan-500 to-blue-600',
      category: 'Coding',
      format: 'Video',
      description: 'Master React.js including components, state management, and modern development practices.',
      price: 'Free'
    },
    {
      title: 'Data Science with R',
      instructor: 'Prof. David Kim',
      rating: 4.7,
      students: 756,
      duration: '12 weeks',
      icon: FaChartBar,
      gradient: 'from-green-500 to-emerald-600',
      category: 'Coding',
      format: 'Video',
      description: 'Explore data analysis and visualization using R programming language.',
      price: 'Free'
    },
    {
      title: 'Digital Marketing Essentials',
      instructor: 'Jessica Brown',
      rating: 4.6,
      students: 2341,
      duration: '6 weeks',
      icon: FaBullhorn,
      gradient: 'from-orange-500 to-red-600',
      category: 'Digital Skills',
      format: 'Video',
      description: 'Learn digital marketing strategies, SEO, content creation, and social media marketing.',
      price: 'Free'
    },
    {
      title: 'Graphic Design for Beginners',
      instructor: 'Lisa Rodriguez',
      rating: 4.8,
      students: 1567,
      duration: '8 weeks',
      icon: FaPalette,
      gradient: 'from-purple-500 to-pink-600',
      category: 'Digital Skills',
      format: 'Video',
      description: 'Master design principles, color theory, and typography using industry-standard tools.',
      price: 'Free'
    },
    {
      title: 'Cybersecurity Fundamentals',
      instructor: 'Alex Turner',
      rating: 4.9,
      students: 892,
      duration: '10 weeks',
      icon: FaShieldAlt,
      gradient: 'from-red-500 to-red-700',
      category: 'Digital Skills',
      format: 'Video',
      description: 'Understanding the basics of cybersecurity, threat detection, and protection strategies.',
      price: 'Free'
    },
    {
      title: 'Introduction to Pottery',
      instructor: 'Maria Santos',
      rating: 4.7,
      students: 445,
      duration: '6 weeks',
      icon: FaHammer,
      gradient: 'from-amber-500 to-orange-600',
      category: 'Crafts',
      format: 'Video',
      description: 'Discover the art of pottery, from basic techniques to creating beautiful ceramic pieces.',
      price: 'Free'
    },
    {
      title: 'Knitting for All Ages',
      instructor: 'Emma Thompson',
      rating: 4.8,
      students: 678,
      duration: '4 weeks',
      icon: FaYarn,
      gradient: 'from-pink-500 to-rose-600',
      category: 'Crafts',
      format: 'Video',
      description: 'Learn basic knitting techniques and create cozy scarves, hats, and sweaters.',
      price: 'Free'
    }
  ];

  const filteredCourses = courseCatalog.filter(course => {
    const categoryMatch = selectedCategory === 'All' || course.category === selectedCategory;
    const formatMatch = selectedFormat === 'All' || course.format === selectedFormat;
    return categoryMatch && formatMatch;
  });

  return (
    <div className="min-h-screen bg-gray-50">
      {/* Hero Section */}
      <section className="relative bg-gradient-to-r from-purple-800 to-blue-600 text-white py-20 px-4">
        <div className="max-w-7xl mx-auto text-center">
          <div className="animate-fade-in-up">
            <h1 className="text-4xl md:text-6xl font-bold mb-6">
              Unlock Your Potential with Free Courses
            </h1>
            <p className="text-lg md:text-xl text-white-600 mb-8 max-w-3xl mx-auto">
              Dive into our diverse range of educational content, from coding to crafts,
              designed for all learning styles.
            </p>
            <button className="bg-white text-purple-600 px-8 py-3 rounded-lg font-semibold hover:bg-gray-100 transition-all duration-300 transform hover:scale-105 shadow-lg">
              Browse All Courses
            </button>
          </div>
        </div>
      </section>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
        {/* Continue Learning Section */}
        <section className="mb-16">
          <h2 className="text-3xl font-bold text-gray-900 mb-2">Continue Learning</h2>
          <p className="text-gray-600 mb-8">Pick up where you left off or explore new insights.</p>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
            {continueLearningCourses.map((course, index) => {
              const Icon = course.icon;
              return (
                <div
                  key={index}
                  className="bg-white rounded-lg shadow-md hover:shadow-xl transition-all duration-300 transform hover:-translate-y-2 group overflow-hidden"
                >
                  <div className={`relative overflow-hidden h-40 bg-gradient-to-br ${course.gradient} flex items-center justify-center`}>
                    <Icon className="text-6xl text-white opacity-80 group-hover:opacity-100 group-hover:scale-110 transition-all duration-300" />
                    <div className="absolute inset-0 bg-black bg-opacity-0 group-hover:bg-opacity-10 transition-all duration-300 flex items-center justify-center">
                      <FaPlay className="text-white opacity-0 group-hover:opacity-100 transition-opacity duration-300 text-2xl" />
                    </div>
                  </div>
                  <div className="p-4">
                    <h3 className="font-semibold text-gray-900 mb-1 group-hover:text-purple-600 transition-colors duration-300">
                      {course.title}
                    </h3>
                    <p className="text-sm text-gray-600 mb-3">{course.instructor}</p>
                    <div className="flex items-center justify-between mb-3">
                      <span className="text-xs text-gray-500">{course.duration}</span>
                      <span className="text-xs bg-purple-100 text-purple-600 px-2 py-1 rounded">
                        {course.category}
                      </span>
                    </div>
                    <div className="w-full bg-gray-200 rounded-full h-2 mb-2">
                      <div
                        className="bg-purple-600 h-2 rounded-full transition-all duration-500"
                        style={{width: `${course.progress}%`}}
                      ></div>
                    </div>
                    <p className="text-xs text-gray-600">{course.progress}% Complete</p>
                  </div>
                </div>
              );
            })}

          </div>
        </section>

        {/* Explore Course Catalog Section */}
        <section>
          <h2 className="text-3xl font-bold text-gray-900 mb-2">Explore Our Course Catalog</h2>
          <p className="text-gray-600 mb-8">Find the perfect course to advance your skills and knowledge.</p>

          {/* Filter Section */}
          <div className="bg-white rounded-lg shadow-md p-6 mb-8">
            <div className="flex flex-wrap gap-4 items-center">
              <div className="flex items-center space-x-2">
                <FaFilter className="text-gray-500" />
                <span className="font-medium text-gray-700">Categories:</span>
              </div>
              <div className="flex flex-wrap gap-2">
                {categories.map((category) => (
                  <button
                    key={category}
                    onClick={() => setSelectedCategory(category)}
                    className={`px-4 py-2 rounded-full text-sm font-medium transition-all duration-300 ${
                      selectedCategory === category
                        ? 'bg-purple-600 text-white shadow-lg'
                        : 'bg-gray-100 text-gray-700 hover:bg-gray-200'
                    }`}
                  >
                    {category}
                  </button>
                ))}
              </div>

              <div className="flex items-center space-x-2 ml-auto">
                <span className="font-medium text-gray-700">Formats:</span>
                <div className="flex gap-2">
                  {formats.map((format) => (
                    <button
                      key={format}
                      onClick={() => setSelectedFormat(format)}
                      className={`px-3 py-1 rounded-full text-sm transition-all duration-300 ${
                        selectedFormat === format
                          ? 'bg-blue-600 text-white'
                          : 'bg-gray-100 text-gray-700 hover:bg-gray-200'
                      }`}
                    >
                      {format}
                    </button>
                  ))}
                </div>
              </div>
            </div>
          </div>

          {/* Course Grid */}
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
            {filteredCourses.map((course, index) => {
              const Icon = course.icon;
              return (
                <div
                  key={index}
                  className="bg-white rounded-lg shadow-md hover:shadow-xl transition-all duration-300 transform hover:-translate-y-2 group overflow-hidden"
                >
                  <div className={`relative overflow-hidden h-40 bg-gradient-to-br ${course.gradient} flex items-center justify-center`}>
                    <Icon className="text-6xl text-white opacity-80 group-hover:opacity-100 group-hover:scale-110 transition-all duration-300" />
                    <div className="absolute inset-0 bg-black bg-opacity-0 group-hover:bg-opacity-10 transition-all duration-300 flex items-center justify-center">
                      <FaPlay className="text-white opacity-0 group-hover:opacity-100 transition-opacity duration-300 text-2xl" />
                    </div>
                    <div className="absolute top-3 right-3 bg-white bg-opacity-90 px-2 py-1 rounded text-xs font-semibold text-green-600">
                      {course.price}
                    </div>
                  </div>
                <div className="p-4">
                  <h3 className="font-semibold text-gray-900 mb-1 group-hover:text-purple-600 transition-colors duration-300">
                    {course.title}
                  </h3>
                  <p className="text-sm text-gray-600 mb-2">{course.instructor}</p>
                  <p className="text-xs text-gray-500 mb-3 line-clamp-2">{course.description}</p>

                  <div className="flex items-center justify-between mb-3">
                    <div className="flex items-center space-x-1">
                      <FaStar className="text-yellow-400 text-xs" />
                      <span className="text-xs text-gray-600">{course.rating}</span>
                    </div>
                    <div className="flex items-center space-x-1">
                      <FaUsers className="text-gray-400 text-xs" />
                      <span className="text-xs text-gray-600">{course.students}</span>
                    </div>
                    <div className="flex items-center space-x-1">
                      <FaClock className="text-gray-400 text-xs" />
                      <span className="text-xs text-gray-600">{course.duration}</span>
                    </div>
                  </div>

                  <button className="w-full bg-purple-600 text-white py-2 rounded-lg hover:bg-purple-700 transition-all duration-300 transform hover:scale-105 flex items-center justify-center space-x-2 group">
                    <span>Enroll Now</span>
                    <FaArrowRight className="text-xs group-hover:translate-x-1 transition-transform duration-300" />
                  </button>
                </div>
              </div>
              );
            })}
          </div>
        </section>

        {/* Newsletter Section */}
        <section className="mt-16 bg-white rounded-lg shadow-lg p-8 text-center">
          <h2 className="text-2xl font-bold text-gray-900 mb-4">Stay updated with AllAble</h2>
          <p className="text-gray-600 mb-6">Get news and updates about new courses and features.</p>
          <div className="flex max-w-md mx-auto">
            <input
              type="email"
              placeholder="Enter your email"
              className="flex-1 px-4 py-2 border border-gray-300 rounded-l-lg focus:outline-none focus:ring-2 focus:ring-purple-600 focus:border-transparent"
            />
            <button className="bg-purple-600 text-white px-6 py-2 rounded-r-lg hover:bg-purple-700 transition-colors duration-300">
              Subscribe
            </button>
          </div>
        </section>
      </div>
    </div>
  );
};

export default EducationPage;
