import React, { useState, useEffect, useRef } from 'react';
import { FaSearch, FaMapMarkerAlt, FaPhone, FaEnvelope, FaGlobe, FaFilter, FaStar, FaHeart, FaDirections, FaClock, FaWheelchair, FaEye, FaHandsHelping, FaGraduationCap, FaStethoscope, FaBriefcase, FaGamepad, FaHome, FaUsers, FaTools, FaExpand, FaCompress } from 'react-icons/fa';

// Custom animations and styles
const styles = `
  @keyframes fade-in-up {
    from { opacity: 0; transform: translateY(30px); }
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

  @keyframes pulse-glow {
    0%, 100% { box-shadow: 0 0 5px rgba(147, 51, 234, 0.3); }
    50% { box-shadow: 0 0 20px rgba(147, 51, 234, 0.6); }
  }

  .animate-fade-in-up {
    animation: fade-in-up 0.8s ease-out;
  }

  .animate-slide-in-left {
    animation: slide-in-left 0.6s ease-out;
  }

  .animate-slide-in-right {
    animation: slide-in-right 0.6s ease-out;
  }

  .animate-pulse-glow {
    animation: pulse-glow 2s infinite;
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

  .map-marker {
    cursor: pointer;
    transition: all 0.3s ease;
  }

  .map-marker:hover {
    transform: scale(1.2);
    filter: drop-shadow(0 4px 8px rgba(0,0,0,0.3));
  }
`;

const DirectoryPage = () => {
  const [searchTerm, setSearchTerm] = useState('');
  const [selectedCategory, setSelectedCategory] = useState('all');
  const [selectedLocation, setSelectedLocation] = useState(null);
  const [viewMode, setViewMode] = useState('grid'); // 'grid' or 'map'
  const [isMapFullscreen, setIsMapFullscreen] = useState(false);
  const mapRef = useRef(null);
  const mapInstanceRef = useRef(null);

  // Inject custom styles and Leaflet CSS
  useEffect(() => {
    const styleSheet = document.createElement("style");
    styleSheet.innerText = styles;
    document.head.appendChild(styleSheet);

    // Add Leaflet CSS
    const leafletCSS = document.createElement("link");
    leafletCSS.rel = "stylesheet";
    leafletCSS.href = "https://unpkg.com/leaflet@1.9.4/dist/leaflet.css";
    leafletCSS.integrity = "sha256-p4NxAoJBhIIN+hmNHrzRCf9tD/miZyoHS5obTRR9BMY=";
    leafletCSS.crossOrigin = "";
    document.head.appendChild(leafletCSS);

    // Add Leaflet JS
    const leafletJS = document.createElement("script");
    leafletJS.src = "https://unpkg.com/leaflet@1.9.4/dist/leaflet.js";
    leafletJS.integrity = "sha256-20nQCchB9co0qIjJZRGuk2/Z9VM+kNiyxNV1lvTlZBo=";
    leafletJS.crossOrigin = "";
    leafletJS.onload = initializeMap;
    document.head.appendChild(leafletJS);

    return () => {
      document.head.removeChild(styleSheet);
      document.head.removeChild(leafletCSS);
      document.head.removeChild(leafletJS);
    };
  }, []);

  // Initialize real Morocco map
  const initializeMap = () => {
    if (mapRef.current && window.L && !mapInstanceRef.current) {
      // Center of Morocco coordinates
      const moroccoCenter = [31.7917, -7.0926];

      const map = window.L.map(mapRef.current, {
        center: moroccoCenter,
        zoom: 6,
        zoomControl: true,
        scrollWheelZoom: true,
        doubleClickZoom: true,
        boxZoom: true,
        keyboard: true,
        dragging: true,
        touchZoom: true
      });

      // Add OpenStreetMap tiles
      window.L.tileLayer('https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png', {
        attribution: '© OpenStreetMap contributors',
        maxZoom: 18,
      }).addTo(map);

      // Custom marker icon
      const customIcon = window.L.divIcon({
        html: `<div style="background: #ef4444; width: 30px; height: 30px; border-radius: 50% 50% 50% 0; transform: rotate(-45deg); border: 3px solid white; box-shadow: 0 2px 10px rgba(0,0,0,0.3);"><div style="transform: rotate(45deg); color: white; font-size: 14px; text-align: center; line-height: 24px;">📍</div></div>`,
        className: 'custom-marker',
        iconSize: [30, 30],
        iconAnchor: [15, 30],
        popupAnchor: [0, -30]
      });

      // Add markers for each service
      services.forEach(service => {
        const marker = window.L.marker([service.coordinates.lat, service.coordinates.lng], {
          icon: customIcon
        }).addTo(map);

        // Create popup content
        const popupContent = `
          <div style="min-width: 250px; font-family: system-ui;">
            <img src="${service.image}" alt="${service.name}" style="width: 100%; height: 120px; object-fit: cover; border-radius: 8px; margin-bottom: 8px;">
            <h3 style="margin: 0 0 8px 0; font-size: 16px; font-weight: bold; color: #1f2937;">${service.name}</h3>
            <p style="margin: 0 0 8px 0; font-size: 12px; color: #6b7280; line-height: 1.4;">${service.description}</p>
            <div style="margin-bottom: 8px;">
              <div style="display: flex; align-items: center; margin-bottom: 4px; font-size: 12px; color: #4b5563;">
                <span style="margin-right: 6px;">📍</span>
                <span>${service.address}</span>
              </div>
              <div style="display: flex; align-items: center; margin-bottom: 4px; font-size: 12px; color: #4b5563;">
                <span style="margin-right: 6px;">📞</span>
                <span>${service.phone}</span>
              </div>
              <div style="display: flex; align-items: center; margin-bottom: 8px; font-size: 12px; color: #4b5563;">
                <span style="margin-right: 6px;">⏰</span>
                <span>${service.hours}</span>
              </div>
            </div>
            <div style="display: flex; align-items: center; justify-content: space-between;">
              <div style="display: flex; align-items: center;">
                <span style="color: #fbbf24; margin-right: 4px;">⭐</span>
                <span style="font-size: 12px; font-weight: 600;">${service.rating}</span>
                <span style="font-size: 11px; color: #6b7280; margin-left: 4px;">(${service.reviews} reviews)</span>
              </div>
              <button onclick="window.open('tel:${service.phone}')" style="background: #7c3aed; color: white; border: none; padding: 6px 12px; border-radius: 6px; font-size: 11px; cursor: pointer;">Call Now</button>
            </div>
          </div>
        `;

        marker.bindPopup(popupContent, {
          maxWidth: 300,
          className: 'custom-popup'
        });

        // Add click event
        marker.on('click', () => {
          setSelectedLocation(service);
        });
      });

      mapInstanceRef.current = map;

      // Add custom CSS for popups
      const popupStyles = document.createElement('style');
      popupStyles.innerHTML = `
        .custom-popup .leaflet-popup-content-wrapper {
          border-radius: 12px;
          box-shadow: 0 10px 25px rgba(0,0,0,0.15);
          border: none;
        }
        .custom-popup .leaflet-popup-tip {
          background: white;
          border: none;
          box-shadow: 0 2px 5px rgba(0,0,0,0.1);
        }
        .custom-marker {
          cursor: pointer;
          transition: all 0.3s ease;
        }
        .custom-marker:hover {
          transform: scale(1.1);
          z-index: 1000;
        }
      `;
      document.head.appendChild(popupStyles);
    }
  };

  // Toggle fullscreen map
  const toggleMapFullscreen = () => {
    setIsMapFullscreen(!isMapFullscreen);
    setTimeout(() => {
      if (mapInstanceRef.current) {
        mapInstanceRef.current.invalidateSize();
      }
    }, 300);
  };

  const categories = [
    { value: 'all', label: 'All Services', icon: FaGlobe, color: 'bg-gray-100 text-gray-600' },
    { value: 'medical', label: 'Medical Center', icon: FaStethoscope, color: 'bg-red-100 text-red-600' },
    { value: 'training', label: 'Training Institutes', icon: FaGraduationCap, color: 'bg-blue-100 text-blue-600' },
    { value: 'community', label: 'Community Aid Hub', icon: FaUsers, color: 'bg-green-100 text-green-600' },
    { value: 'therapy', label: 'Inclusive Therapy Clinic', icon: FaHandsHelping, color: 'bg-purple-100 text-purple-600' },
    { value: 'skills', label: 'Digital Skills Academy', icon: FaTools, color: 'bg-yellow-100 text-yellow-600' },
    { value: 'mobility', label: 'Mobility Support Services', icon: FaWheelchair, color: 'bg-indigo-100 text-indigo-600' },
    { value: 'hospital', label: 'Green Valley Hospital', icon: FaStethoscope, color: 'bg-teal-100 text-teal-600' },
    { value: 'workshop', label: 'Art & Craft Workshop', icon: FaGamepad, color: 'bg-pink-100 text-pink-600' },
    { value: 'living', label: 'Accessible Living Solutions', icon: FaHome, color: 'bg-orange-100 text-orange-600' },
    { value: 'wellness', label: 'Wellness & Rehabilitation', icon: FaHeart, color: 'bg-rose-100 text-rose-600' },
    { value: 'language', label: 'Language & Communication Hub', icon: FaGraduationCap, color: 'bg-cyan-100 text-cyan-600' },
    { value: 'sports', label: 'Adaptive Sports Center', icon: FaGamepad, color: 'bg-lime-100 text-lime-600' }
  ];

  // Moroccan locations with accessibility services
  const services = [
    {
      id: 1,
      name: 'Hôpital Medical Center',
      category: 'medical',
      description: 'Leading medical center with specialized accessibility services and adaptive equipment for patients with disabilities.',
      location: 'Casablanca, Morocco',
      address: 'Boulevard Mohammed V, Casablanca',
      phone: '+212 522-123-456',
      email: 'info@hopitalmedical.ma',
      website: 'www.hopitalmedical.ma',
      rating: 4.8,
      reviews: 234,
      hours: '24/7 Emergency Services',
      image: 'https://images.pexels.com/photos/263402/pexels-photo-263402.jpeg?auto=compress&cs=tinysrgb&w=400&h=250&fit=crop',
      coordinates: { lat: 33.5731, lng: -7.5898 }, // Real Casablanca coordinates
      services: ['Emergency Care', 'Rehabilitation', 'Accessible Facilities', 'Sign Language Support'],
      accessibility: ['Wheelchair Access', 'Audio Assistance', 'Braille Signage']
    },
    {
      id: 2,
      name: 'Skills Training Institute',
      category: 'training',
      description: 'Comprehensive training programs designed to enhance digital and professional skills for individuals with diverse abilities.',
      location: 'Rabat, Morocco',
      address: 'Avenue Hassan II, Rabat',
      phone: '+212 537-234-567',
      email: 'contact@skillstraining.ma',
      website: 'www.skillstraining.ma',
      rating: 4.9,
      reviews: 156,
      hours: 'Mon-Fri: 8:00 AM - 6:00 PM',
      image: 'https://images.pexels.com/photos/3184465/pexels-photo-3184465.jpeg?auto=compress&cs=tinysrgb&w=400&h=250&fit=crop',
      coordinates: { lat: 34.0209, lng: -6.8416 }, // Real Rabat coordinates
      services: ['Digital Literacy', 'Professional Training', 'Career Counseling', 'Adaptive Technology'],
      accessibility: ['Screen Readers', 'Large Print Materials', 'Flexible Scheduling']
    },
    {
      id: 3,
      name: 'Community Aid Hub',
      category: 'community',
      description: 'Community center providing comprehensive support services, social programs, and resources for individuals and families.',
      location: 'Marrakech, Morocco',
      address: 'Place Jemaa el-Fnaa, Marrakech',
      phone: '+212 524-345-678',
      email: 'support@communityaid.ma',
      website: 'www.communityaid.ma',
      rating: 4.7,
      reviews: 189,
      hours: 'Mon-Sat: 9:00 AM - 5:00 PM',
      image: 'https://images.pexels.com/photos/1181396/pexels-photo-1181396.jpeg?auto=compress&cs=tinysrgb&w=400&h=250&fit=crop',
      coordinates: { lat: 31.6295, lng: -7.9811 }, // Real Marrakech coordinates
      services: ['Social Support', 'Community Programs', 'Resource Center', 'Peer Counseling'],
      accessibility: ['Multilingual Support', 'Transportation Assistance', 'Flexible Programs']
    },
    {
      id: 4,
      name: 'Inclusive Therapy Clinic',
      category: 'therapy',
      description: 'Specialized therapy services including physical, occupational, and speech therapy with adaptive approaches.',
      location: 'Fès, Morocco',
      address: 'Boulevard Moulay Youssef, Fès',
      phone: '+212 535-456-789',
      email: 'therapy@inclusiveclinic.ma',
      website: 'www.inclusiveclinic.ma',
      rating: 4.8,
      reviews: 142,
      hours: 'Mon-Fri: 8:00 AM - 7:00 PM',
      image: 'https://images.pexels.com/photos/4386466/pexels-photo-4386466.jpeg?auto=compress&cs=tinysrgb&w=400&h=250&fit=crop',
      coordinates: { lat: 34.0181, lng: -5.0078 }, // Real Fès coordinates
      services: ['Physical Therapy', 'Occupational Therapy', 'Speech Therapy', 'Adaptive Equipment'],
      accessibility: ['Accessible Parking', 'Elevator Access', 'Adaptive Equipment']
    },
    {
      id: 5,
      name: 'Digital Skills Academy',
      category: 'skills',
      description: 'Modern academy focused on digital skills development with adaptive learning technologies and inclusive teaching methods.',
      location: 'Tangier, Morocco',
      address: 'Avenue Mohammed VI, Tangier',
      phone: '+212 539-567-890',
      email: 'academy@digitalskills.ma',
      website: 'www.digitalskills.ma',
      rating: 4.9,
      reviews: 198,
      hours: 'Mon-Sat: 9:00 AM - 8:00 PM',
      image: 'https://images.pexels.com/photos/574071/pexels-photo-574071.jpeg?auto=compress&cs=tinysrgb&w=400&h=250&fit=crop',
      coordinates: { lat: 35.7595, lng: -5.8340 }, // Real Tangier coordinates
      services: ['Coding Bootcamps', 'Digital Marketing', 'Web Design', 'Assistive Technology'],
      accessibility: ['Voice Recognition Software', 'Adaptive Keyboards', 'Flexible Learning']
    },
    {
      id: 6,
      name: 'Mobility Support Services',
      category: 'mobility',
      description: 'Comprehensive mobility support including equipment rental, training, and accessibility consulting services.',
      location: 'Agadir, Morocco',
      address: 'Boulevard Hassan II, Agadir',
      phone: '+212 528-678-901',
      email: 'mobility@support.ma',
      website: 'www.mobilitysupport.ma',
      rating: 4.6,
      reviews: 167,
      hours: 'Mon-Fri: 8:30 AM - 5:30 PM',
      image: 'https://images.pexels.com/photos/4386321/pexels-photo-4386321.jpeg?auto=compress&cs=tinysrgb&w=400&h=250&fit=crop',
      coordinates: { lat: 30.4278, lng: -9.5981 }, // Real Agadir coordinates
      services: ['Equipment Rental', 'Mobility Training', 'Home Modifications', 'Accessibility Consulting'],
      accessibility: ['Equipment Testing', 'Home Visits', 'Custom Solutions']
    },
    {
      id: 7,
      name: 'Green Valley Hospital',
      category: 'hospital',
      description: 'State-of-the-art hospital facility with comprehensive medical services and full accessibility accommodations.',
      location: 'Meknes, Morocco',
      address: 'Avenue Allal Ben Abdellah, Meknes',
      phone: '+212 535-789-012',
      email: 'info@greenvalley.ma',
      website: 'www.greenvalley.ma',
      rating: 4.7,
      reviews: 278,
      hours: '24/7 Emergency & Outpatient Services',
      image: 'https://images.pexels.com/photos/236380/pexels-photo-236380.jpeg?auto=compress&cs=tinysrgb&w=400&h=250&fit=crop',
      coordinates: { lat: 33.8935, lng: -5.5473 }, // Real Meknes coordinates
      services: ['Emergency Medicine', 'Specialized Care', 'Rehabilitation', 'Mental Health'],
      accessibility: ['Full Wheelchair Access', 'Sign Language Interpreters', 'Accessible Parking']
    },
    {
      id: 8,
      name: 'Art & Craft Workshop',
      category: 'workshop',
      description: 'Creative workshop space offering adaptive art and craft programs designed for individuals with diverse abilities.',
      location: 'Oujda, Morocco',
      address: 'Boulevard Derfoufi, Oujda',
      phone: '+212 536-890-123',
      email: 'workshop@artcraft.ma',
      website: 'www.artcraft.ma',
      rating: 4.8,
      reviews: 134,
      hours: 'Tue-Sun: 10:00 AM - 6:00 PM',
      image: 'https://images.pexels.com/photos/1181686/pexels-photo-1181686.jpeg?auto=compress&cs=tinysrgb&w=400&h=250&fit=crop',
      coordinates: { lat: 34.6814, lng: -1.9086 }, // Real Oujda coordinates
      services: ['Art Therapy', 'Craft Classes', 'Creative Expression', 'Adaptive Tools'],
      accessibility: ['Adaptive Art Tools', 'Flexible Seating', 'Sensory-Friendly Environment']
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
    <div className="min-h-screen bg-gradient-to-br from-blue-50 via-white to-purple-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-8">
        {/* Hero Header */}
        <div className="text-center mb-8 animate-fade-in-up">
          <h1 className="text-4xl md:text-5xl font-bold text-gray-900 mb-4">
            Discover Accessible Resources Near You
          </h1>
          <p className="text-xl text-gray-600 max-w-4xl mx-auto leading-relaxed">
            Find medical centers, training facilities, and support services designed for accessibility.
          </p>
        </div>

        {/* Real Interactive Morocco Map Section */}
        <div className={`bg-white rounded-3xl shadow-2xl mb-8 overflow-hidden animate-fade-in-up animate-delay-100 transition-all duration-300 ${
          isMapFullscreen ? 'fixed inset-4 z-50' : ''
        }`}>
          {/* Map Header */}
          <div className="bg-gradient-to-r from-purple-600 to-blue-600 p-6 text-white">
            <div className="flex items-center justify-between">
              <div>
                <h2 className="text-2xl font-bold">Real Morocco Accessibility Map</h2>
                <p className="text-sm opacity-90 mt-1">Interactive map with real coordinates and locations</p>
              </div>
              <div className="flex space-x-2">
                <button
                  onClick={toggleMapFullscreen}
                  className=" bg-black bg-opacity-20 px-4 py-2 rounded-lg hover:bg-opacity-30 transition-all duration-200 flex items-center"
                >
                  {isMapFullscreen ? <FaCompress className="mr-2" /> : <FaExpand className="mr-2" />}
                  {isMapFullscreen ? 'Exit Fullscreen' : 'Fullscreen'}
                </button>
                <button className="bg-black bg-opacity-20 px-4 py-2 rounded-lg hover:bg-opacity-30 transition-all duration-200">
                  <FaDirections className="inline mr-2" />
                  Directions
                </button>
              </div>
            </div>
          </div>

          {/* Real Morocco Map with Leaflet */}
          <div className={`relative bg-gray-100 ${isMapFullscreen ? 'h-full' : 'h-96 md:h-[500px]'}`}>
            <div
              ref={mapRef}
              className="w-full h-full"
              style={{ minHeight: '400px' }}
            />

            {/* Map Loading Overlay */}
            {!mapInstanceRef.current && (
              <div className="absolute inset-0 flex items-center justify-center bg-gray-100">
                <div className="text-center">
                  <div className="animate-spin rounded-full h-12 w-12 border-b-2 border-purple-600 mx-auto mb-4"></div>
                  <p className="text-gray-600 font-medium">Loading Real Morocco Map...</p>
                  <p className="text-sm text-gray-500 mt-2">Powered by OpenStreetMap</p>
                </div>
              </div>
            )}

            {/* Map Controls */}
            <div className="absolute top-4 right-4 bg-white rounded-lg shadow-lg p-3 z-10">
              <h4 className="font-semibold text-gray-900 text-sm mb-2">Map Legend</h4>
              <div className="space-y-2">
                <div className="flex items-center text-xs">
                  <div className="w-4 h-4 bg-red-500 rounded-full mr-2 flex items-center justify-center text-white text-xs">📍</div>
                  <span>Accessibility Services</span>
                </div>
                <div className="flex items-center text-xs text-gray-600">
                  <FaMapMarkerAlt className="text-red-500 mr-2" />
                  <span>Click markers for details</span>
                </div>
                <div className="flex items-center text-xs text-gray-600">
                  <FaDirections className="text-blue-500 mr-2" />
                  <span>Zoom & Pan enabled</span>
                </div>
              </div>
            </div>

            {/* Map Statistics */}
            <div className="absolute bottom-4 left-4 bg-white rounded-lg shadow-lg p-3 z-10">
              <h4 className="font-semibold text-gray-900 text-sm mb-2">Coverage</h4>
              <div className="space-y-1">
                <div className="flex items-center justify-between text-xs">
                  <span className="text-gray-600">Total Services:</span>
                  <span className="font-semibold text-purple-600">{services.length}</span>
                </div>
                <div className="flex items-center justify-between text-xs">
                  <span className="text-gray-600">Cities Covered:</span>
                  <span className="font-semibold text-blue-600">8</span>
                </div>
                <div className="flex items-center justify-between text-xs">
                  <span className="text-gray-600">Map Provider:</span>
                  <span className="font-semibold text-green-600">OSM</span>
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* Fullscreen Overlay */}
        {isMapFullscreen && (
          <div className="fixed inset-0 bg-black bg-opacity-50 z-40" onClick={toggleMapFullscreen} />
        )}

        {/* Explore Our Directory Section */}
        <div className="mb-8 animate-fade-in-up animate-delay-200">
          <h2 className="text-3xl font-bold text-gray-900 mb-6 text-center">Explore Our Directory</h2>

          {/* Category Filter Tabs */}
          <div className="flex flex-wrap justify-center gap-3 mb-8">
            {categories.slice(0, 4).map((category, index) => {
              const Icon = category.icon;
              return (
                <button
                  key={category.value}
                  onClick={() => setSelectedCategory(category.value)}
                  className={`flex items-center px-6 py-3 rounded-full font-medium transition-all duration-300 transform hover:scale-105 ${
                    selectedCategory === category.value
                      ? 'bg-purple-600 text-white shadow-lg'
                      : 'bg-white text-gray-700 hover:bg-gray-50 shadow-md'
                  } animate-fade-in-up animate-delay-${300 + index * 100}`}
                >
                  <Icon className="mr-2" />
                  {category.label}
                </button>
              );
            })}
          </div>

          {/* Search Bar */}
          <div className="max-w-2xl mx-auto mb-8">
            <div className="relative">
              <FaSearch className="absolute left-4 top-1/2 transform -translate-y-1/2 text-gray-400" />
              <input
                type="text"
                placeholder="Search for services, locations, or specialties..."
                value={searchTerm}
                onChange={(e) => setSearchTerm(e.target.value)}
                className="w-full pl-12 pr-4 py-4 border border-gray-200 rounded-2xl focus:outline-none focus:ring-2 focus:ring-purple-600 focus:border-transparent shadow-lg text-lg"
              />
            </div>
          </div>

          {/* Results Count */}
          <div className="text-center mb-8">
            <p className="text-gray-600 text-lg">
              Showing <span className="font-semibold text-purple-600">{filteredServices.length}</span> of <span className="font-semibold">{services.length}</span> services
            </p>
          </div>
        </div>

        {/* Services Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-6">
          {filteredServices.map((service, index) => {
            const categoryInfo = categories.find(cat => cat.value === service.category);
            const Icon = categoryInfo?.icon || FaGlobe;

            return (
              <div
                key={service.id}
                className={`bg-white rounded-2xl shadow-lg hover:shadow-2xl transition-all duration-300 transform hover:-translate-y-2 overflow-hidden animate-fade-in-up animate-delay-${(index % 8) * 100}`}
              >
                {/* Service Image */}
                <div className="relative h-48 overflow-hidden">
                  <img
                    src={service.image}
                    alt={service.name}
                    className="w-full h-full object-cover transition-transform duration-300 hover:scale-110"
                  />
                  <div className="absolute top-4 left-4">
                    <div className={`p-2 rounded-full ${categoryInfo?.color || 'bg-gray-100 text-gray-600'}`}>
                      <Icon className="text-lg" />
                    </div>
                  </div>
                  <div className="absolute top-4 right-4">
                    <button className="p-2 bg-white bg-opacity-80 rounded-full hover:bg-opacity-100 transition-all duration-200">
                      <FaHeart className="text-gray-600 hover:text-red-500" />
                    </button>
                  </div>
                  <div className="absolute bottom-4 left-4 bg-white bg-opacity-90 px-3 py-1 rounded-full">
                    <div className="flex items-center text-sm">
                      <FaStar className="text-yellow-500 mr-1" />
                      <span className="font-semibold">{service.rating}</span>
                      <span className="text-gray-600 ml-1">({service.reviews})</span>
                    </div>
                  </div>
                </div>

                {/* Service Content */}
                <div className="p-6">
                  {/* Header */}
                  <div className="mb-4">
                    <h3 className="text-lg font-bold text-gray-900 mb-2 line-clamp-2 hover:text-purple-600 transition-colors duration-200">
                      {service.name}
                    </h3>
                    <span className={`inline-block px-3 py-1 rounded-full text-xs font-medium ${categoryInfo?.color || 'bg-gray-100 text-gray-600'}`}>
                      {categoryInfo?.label || 'Service'}
                    </span>
                  </div>

                  {/* Description */}
                  <p className="text-gray-600 text-sm mb-4 line-clamp-3">
                    {service.description}
                  </p>

                  {/* Location & Hours */}
                  <div className="space-y-2 mb-4">
                    <div className="flex items-center text-sm text-gray-600">
                      <FaMapMarkerAlt className="w-4 h-4 mr-2 text-purple-500" />
                      <span className="truncate">{service.location}</span>
                    </div>
                    <div className="flex items-center text-sm text-gray-600">
                      <FaClock className="w-4 h-4 mr-2 text-green-500" />
                      <span className="truncate">{service.hours}</span>
                    </div>
                  </div>

                  {/* Services Tags */}
                  <div className="flex flex-wrap gap-1 mb-4">
                    {service.services.slice(0, 2).map((serviceItem, idx) => (
                      <span key={idx} className="px-2 py-1 bg-blue-50 text-blue-600 text-xs rounded-full">
                        {serviceItem}
                      </span>
                    ))}
                    {service.services.length > 2 && (
                      <span className="px-2 py-1 bg-gray-50 text-gray-600 text-xs rounded-full">
                        +{service.services.length - 2} more
                      </span>
                    )}
                  </div>

                  {/* Actions */}
                  <div className="flex space-x-2">
                    <button className="flex-1 bg-gradient-to-r from-purple-600 to-blue-600 text-white py-2 px-4 rounded-xl font-medium hover:from-purple-700 hover:to-blue-700 transition-all duration-200 transform hover:scale-105">
                      <FaPhone className="inline mr-2" />
                      Contact
                    </button>
                    <button className="flex-1 bg-gray-100 text-gray-700 py-2 px-4 rounded-xl font-medium hover:bg-gray-200 transition-all duration-200">
                      <FaEye className="inline mr-2" />
                      Details
                    </button>
                  </div>
                </div>
              </div>
            );
          })}
        </div>

        {/* No Results */}
        {filteredServices.length === 0 && (
          <div className="text-center py-16 animate-fade-in-up">
            <div className="max-w-md mx-auto">
              <div className="w-24 h-24 bg-gray-100 rounded-full flex items-center justify-center mx-auto mb-6">
                <FaSearch className="text-4xl text-gray-400" />
              </div>
              <h3 className="text-2xl font-bold text-gray-900 mb-4">No Services Found</h3>
              <p className="text-gray-600 mb-6">
                We couldn't find any services matching your search criteria. Try adjusting your filters or search terms.
              </p>
              <button
                onClick={() => {
                  setSearchTerm('');
                  setSelectedCategory('all');
                }}
                className="bg-gradient-to-r from-purple-600 to-blue-600 text-white px-8 py-3 rounded-full font-semibold hover:from-purple-700 hover:to-blue-700 transition-all duration-300 transform hover:scale-105 shadow-lg"
              >
                Clear All Filters
              </button>
            </div>
          </div>
        )}

        {/* Newsletter Signup */}
        <div className="bg-gradient-to-r from-purple-600 to-blue-600 rounded-3xl p-8 mt-16 text-white text-center animate-fade-in-up animate-delay-300">
          <h2 className="text-3xl font-bold mb-4">Stay up to date with AllAble</h2>
          <p className="text-xl mb-8 opacity-90 max-w-2xl mx-auto">
            Get the latest updates on new accessibility services and resources in Morocco.
          </p>
          <div className="max-w-md mx-auto flex flex-col sm:flex-row gap-4">
            <input
              type="email"
              placeholder="Enter your email address"
              className="flex-1 px-6 py-3 rounded-full text-gray-900 placeholder-gray-500 focus:outline-none focus:ring-2 focus:ring-white"
            />
            <button className="bg-white text-purple-600 px-8 py-3 rounded-full font-semibold hover:bg-gray-100 transition-all duration-200 transform hover:scale-105">
              Subscribe
            </button>
          </div>
        </div>

        {/* Footer CTA */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8 mt-16">
          {/* Add Service */}
          <div className="bg-white rounded-2xl shadow-lg p-8 text-center animate-slide-in-left animate-delay-400">
            <div className="w-16 h-16 bg-green-100 rounded-full flex items-center justify-center mx-auto mb-4">
              <FaHandsHelping className="text-2xl text-green-600" />
            </div>
            <h3 className="text-xl font-bold text-gray-900 mb-4">Add Your Service</h3>
            <p className="text-gray-600 mb-6">
              Are you providing accessible services in Morocco? Join our directory to help others find you.
            </p>
            <button className="bg-green-600 text-white px-6 py-3 rounded-xl font-semibold hover:bg-green-700 transition-all duration-200 transform hover:scale-105">
              Submit Your Service
            </button>
          </div>

          {/* Get Support */}
          <div className="bg-white rounded-2xl shadow-lg p-8 text-center animate-slide-in-right animate-delay-500">
            <div className="w-16 h-16 bg-blue-100 rounded-full flex items-center justify-center mx-auto mb-4">
              <FaUsers className="text-2xl text-blue-600" />
            </div>
            <h3 className="text-xl font-bold text-gray-900 mb-4">Need Help Finding Services?</h3>
            <p className="text-gray-600 mb-6">
              Our community support team can help you find the right accessibility services for your needs.
            </p>
            <button className="bg-blue-600 text-white px-6 py-3 rounded-xl font-semibold hover:bg-blue-700 transition-all duration-200 transform hover:scale-105">
              Get Support
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default DirectoryPage;
