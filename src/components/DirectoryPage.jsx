import React, { useState } from 'react';
import { FaSearch, FaMapMarkerAlt, FaPhone, FaEnvelope, FaGlobe, FaFilter } from 'react-icons/fa';

const DirectoryPage = () => {
  const [searchTerm, setSearchTerm] = useState('');
  const [selectedCategory, setSelectedCategory] = useState('all');

  const categories = [
    { value: 'all', label: 'All Services' },
    { value: 'healthcare', label: 'Healthcare' },
    { value: 'education', label: 'Education' },
    { value: 'employment', label: 'Employment' },
    { value: 'technology', label: 'Technology' },
    { value: 'support', label: 'Support Services' },
    { value: 'recreation', label: 'Recreation' }
  ];

  const services = [
    {
      name: 'Accessible Tech Solutions',
      category: 'technology',
      description: 'Specialized assistive technology consulting and implementation services.',
      location: 'New York, NY',
      phone: '(555) 123-4567',
      email: 'info@accessibletech.com',
      website: 'www.accessibletech.com',
      rating: 4.8,
      reviews: 124
    },
    {
      name: 'Inclusive Learning Center',
      category: 'education',
      description: 'Educational programs and resources designed for learners with diverse abilities.',
      location: 'Los Angeles, CA',
      phone: '(555) 234-5678',
      email: 'contact@inclusivelearning.org',
      website: 'www.inclusivelearning.org',
      rating: 4.9,
      reviews: 89
    },
    {
      name: 'Adaptive Healthcare Clinic',
      category: 'healthcare',
      description: 'Comprehensive healthcare services with full accessibility accommodations.',
      location: 'Chicago, IL',
      phone: '(555) 345-6789',
      email: 'appointments@adaptivehealthcare.com',
      website: 'www.adaptivehealthcare.com',
      rating: 4.7,
      reviews: 156
    },
    {
      name: 'Career Bridge Employment',
      category: 'employment',
      description: 'Job placement and career development services for people with disabilities.',
      location: 'Austin, TX',
      phone: '(555) 456-7890',
      email: 'jobs@careerbridge.org',
      website: 'www.careerbridge.org',
      rating: 4.6,
      reviews: 73
    },
    {
      name: 'Community Support Network',
      category: 'support',
      description: 'Peer support groups and community resources for individuals and families.',
      location: 'Seattle, WA',
      phone: '(555) 567-8901',
      email: 'support@communitysupport.net',
      website: 'www.communitysupport.net',
      rating: 4.8,
      reviews: 201
    },
    {
      name: 'Adaptive Recreation Center',
      category: 'recreation',
      description: 'Sports, arts, and recreational activities adapted for all ability levels.',
      location: 'Denver, CO',
      phone: '(555) 678-9012',
      email: 'programs@adaptiverecreation.org',
      website: 'www.adaptiverecreation.org',
      rating: 4.9,
      reviews: 95
    }
  ];

  const filteredServices = services.filter(service => {
    const matchesSearch = service.name.toLowerCase().includes(searchTerm.toLowerCase()) ||
                         service.description.toLowerCase().includes(searchTerm.toLowerCase()) ||
                         service.location.toLowerCase().includes(searchTerm.toLowerCase());
    const matchesCategory = selectedCategory === 'all' || service.category === selectedCategory;
    return matchesSearch && matchesCategory;
  });

  return (
    <div className="min-h-screen bg-gray-50 py-8">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Header */}
        <div className="text-center mb-12">
          <h1 className="text-4xl font-bold text-gray-900 mb-4">
            Service Directory
          </h1>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto">
            Find accessible services, organizations, and resources in your area that support individuals with disabilities.
          </p>
        </div>

        {/* Search and Filter */}
        <div className="bg-white rounded-lg shadow-lg p-6 mb-8">
          <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
            {/* Search */}
            <div className="md:col-span-2">
              <div className="relative">
                <FaSearch className="absolute left-3 top-1/2 transform -translate-y-1/2 text-gray-400" />
                <input
                  type="text"
                  placeholder="Search services, organizations, or locations..."
                  value={searchTerm}
                  onChange={(e) => setSearchTerm(e.target.value)}
                  className="w-full pl-10 pr-4 py-3 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-purple-600 focus:border-transparent"
                />
              </div>
            </div>

            {/* Category Filter */}
            <div className="relative">
              <FaFilter className="absolute left-3 top-1/2 transform -translate-y-1/2 text-gray-400" />
              <select
                value={selectedCategory}
                onChange={(e) => setSelectedCategory(e.target.value)}
                className="w-full pl-10 pr-4 py-3 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-purple-600 focus:border-transparent appearance-none"
              >
                {categories.map(category => (
                  <option key={category.value} value={category.value}>
                    {category.label}
                  </option>
                ))}
              </select>
            </div>
          </div>
        </div>

        {/* Results Count */}
        <div className="mb-6">
          <p className="text-gray-600">
            Showing {filteredServices.length} of {services.length} services
          </p>
        </div>

        {/* Services Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {filteredServices.map((service, index) => (
            <div key={index} className="bg-white rounded-lg shadow-lg p-6 hover:shadow-xl transition-shadow duration-300">
              {/* Header */}
              <div className="mb-4">
                <h3 className="text-xl font-semibold text-gray-900 mb-2">
                  {service.name}
                </h3>
                <span className="inline-block bg-purple-100 text-purple-800 text-xs px-2 py-1 rounded-full">
                  {categories.find(cat => cat.value === service.category)?.label}
                </span>
              </div>

              {/* Description */}
              <p className="text-gray-600 mb-4">
                {service.description}
              </p>

              {/* Contact Info */}
              <div className="space-y-2 mb-4">
                <div className="flex items-center text-sm text-gray-600">
                  <FaMapMarkerAlt className="w-4 h-4 mr-2 text-gray-400" />
                  {service.location}
                </div>
                <div className="flex items-center text-sm text-gray-600">
                  <FaPhone className="w-4 h-4 mr-2 text-gray-400" />
                  {service.phone}
                </div>
                <div className="flex items-center text-sm text-gray-600">
                  <FaEnvelope className="w-4 h-4 mr-2 text-gray-400" />
                  {service.email}
                </div>
                <div className="flex items-center text-sm text-gray-600">
                  <FaGlobe className="w-4 h-4 mr-2 text-gray-400" />
                  {service.website}
                </div>
              </div>

              {/* Rating */}
              <div className="flex items-center justify-between mb-4">
                <div className="flex items-center">
                  <div className="flex text-yellow-400">
                    {[...Array(5)].map((_, i) => (
                      <span key={i} className={i < Math.floor(service.rating) ? 'text-yellow-400' : 'text-gray-300'}>
                        ★
                      </span>
                    ))}
                  </div>
                  <span className="ml-2 text-sm text-gray-600">
                    {service.rating} ({service.reviews} reviews)
                  </span>
                </div>
              </div>

              {/* Actions */}
              <div className="flex space-x-2">
                <button className="flex-1 bg-purple-600 text-white py-2 rounded-lg hover:bg-purple-700 transition-colors duration-200">
                  Contact
                </button>
                <button className="flex-1 bg-gray-200 text-gray-700 py-2 rounded-lg hover:bg-gray-300 transition-colors duration-200">
                  Details
                </button>
              </div>
            </div>
          ))}
        </div>

        {/* No Results */}
        {filteredServices.length === 0 && (
          <div className="text-center py-12">
            <p className="text-gray-500 text-lg">
              No services found matching your criteria.
            </p>
            <button
              onClick={() => {
                setSearchTerm('');
                setSelectedCategory('all');
              }}
              className="mt-4 bg-purple-600 text-white px-6 py-2 rounded-lg hover:bg-purple-700 transition-colors duration-200"
            >
              Clear Filters
            </button>
          </div>
        )}

        {/* Add Service CTA */}
        <div className="bg-white rounded-lg shadow-lg p-8 mt-12 text-center">
          <h2 className="text-2xl font-bold text-gray-900 mb-4">
            Add Your Service
          </h2>
          <p className="text-gray-600 mb-6">
            Are you an organization providing accessible services? Join our directory to help others find you.
          </p>
          <button className="bg-green-600 text-white px-8 py-3 rounded-lg hover:bg-green-700 transition-colors duration-200">
            Submit Your Service
          </button>
        </div>
      </div>
    </div>
  );
};

export default DirectoryPage;
