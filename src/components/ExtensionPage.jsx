import React, { useEffect } from 'react';
import { FaCheck, FaRocket, FaShieldAlt, FaHeadphones, FaEye, FaGraduationCap, FaLanguage, FaBookOpen, FaFlask, FaChrome, FaFirefox, FaEdge, FaGlobe, FaSearch, FaYoutube } from 'react-icons/fa';
import Footer from './Footer';

// Custom animations and styles
const styles = `
  @keyframes fadeInUp {
    from {
      opacity: 0;
      transform: translateY(30px);
    }
    to {
      opacity: 1;
      transform: translateY(0);
    }
  }

  @keyframes slideInLeft {
    from {
      opacity: 0;
      transform: translateX(-30px);
    }
    to {
      opacity: 1;
      transform: translateX(0);
    }
  }

  @keyframes slideInRight {
    from {
      opacity: 0;
      transform: translateX(30px);
    }
    to {
      opacity: 1;
      transform: translateX(0);
    }
  }

  @keyframes scaleIn {
    from {
      opacity: 0;
      transform: scale(0.9);
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
      transform: translateY(-10px);
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

  .animate-fadeInUp {
    animation: fadeInUp 0.6s ease-out forwards;
  }

  .animate-slideInLeft {
    animation: slideInLeft 0.6s ease-out forwards;
  }

  .animate-slideInRight {
    animation: slideInRight 0.6s ease-out forwards;
  }

  .animate-scaleIn {
    animation: scaleIn 0.6s ease-out forwards;
  }

  .animate-float {
    animation: float 3s ease-in-out infinite;
  }

  .animate-pulse {
    animation: pulse 2s ease-in-out infinite;
  }

  .animate-delay-100 {
    animation-delay: 0.1s;
  }

  .animate-delay-200 {
    animation-delay: 0.2s;
  }

  .animate-delay-300 {
    animation-delay: 0.3s;
  }

  .animate-delay-400 {
    animation-delay: 0.4s;
  }

  .animate-delay-500 {
    animation-delay: 0.5s;
  }

  .pricing-card {
    transition: all 0.3s ease;
  }

  .pricing-card:hover {
    transform: translateY(-10px);
    box-shadow: 0 25px 50px rgba(0, 0, 0, 0.15);
  }

  .platform-card {
    transition: all 0.3s ease;
  }

  .platform-card:hover {
    transform: translateY(-5px);
    box-shadow: 0 20px 40px rgba(0, 0, 0, 0.1);
  }

  .gradient-text {
    background: linear-gradient(135deg, #667eea 0%, #764ba2 100%);
    -webkit-background-clip: text;
    -webkit-text-fill-color: transparent;
    background-clip: text;
  }
`;

const ExtensionPage = () => {
  // Inject custom styles
  useEffect(() => {
    const styleSheet = document.createElement("style");
    styleSheet.innerText = styles;
    document.head.appendChild(styleSheet);
    return () => document.head.removeChild(styleSheet);
  }, []);



  return (
    <div className="min-h-screen bg-gradient-to-br from-blue-50 via-white to-purple-50">
      {/* Hero Section */}
      <section className="relative overflow-hidden bg-gradient-to-br from-blue-50 to-purple-50 py-20 px-4">
        <div className="max-w-7xl mx-auto">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
            {/* Left Content */}
            <div className="animate-slideInLeft">
              <h1 className="text-5xl lg:text-6xl font-bold text-gray-900 mb-6 leading-tight">
                Votre accessibilité,
                <br />
                <span className="gradient-text">partout sur le web</span>
              </h1>
              <p className="text-xl text-gray-600 mb-8 leading-relaxed">
                L'extension AllAble apporte l'accessibilité directement dans votre navigateur web avec des outils avancés de
                navigation vocale, traduction en langue des signes et personnalisation visuelle pour une expérience web
                véritablement inclusive.
              </p>

              {/* Social Proof */}
              <div className="flex items-center space-x-6 mb-8">
                <div className="flex items-center space-x-2">
                  <FaGlobe className="text-blue-600" />
                  <span className="text-sm text-gray-600">Compatible avec</span>
                </div>
                <div className="flex items-center space-x-2">
                  <FaChrome className="text-blue-600" />
                  <FaFirefox className="text-orange-600" />
                  <FaEdge className="text-blue-600" />
                </div>
              </div>

              <button className="bg-blue-600 text-white px-8 py-4 rounded-full text-lg font-semibold hover:bg-blue-700 transition-all duration-300 transform hover:scale-105 animate-pulse">
                Télécharger l'extension →
              </button>
            </div>

            {/* Right Content - Professional Illustration */}
            <div className="animate-slideInRight">
              <div className="relative">
                {/* Main illustration container */}
                <div className="bg-white rounded-3xl shadow-2xl p-8 animate-float">
                  {/* Browser mockup */}
                  <div className="bg-gray-100 rounded-2xl p-6">
                    {/* Browser header */}
                    <div className="flex items-center space-x-2 mb-4">
                      <div className="w-3 h-3 bg-red-400 rounded-full"></div>
                      <div className="w-3 h-3 bg-yellow-400 rounded-full"></div>
                      <div className="w-3 h-3 bg-green-400 rounded-full"></div>
                      <div className="flex-1 bg-white rounded-lg px-3 py-1 ml-4">
                        <div className="text-xs text-gray-500">allable.com</div>
                      </div>
                    </div>

                    {/* Content area with accessibility features */}
                    <div className="bg-white rounded-xl p-4 space-y-3">
                      <div className="flex items-center space-x-3">
                        <div className="w-8 h-8 bg-blue-100 rounded-full flex items-center justify-center">
                          <FaEye className="text-blue-600 text-sm" />
                        </div>
                        <div className="flex-1 h-2 bg-blue-100 rounded"></div>
                      </div>
                      <div className="flex items-center space-x-3">
                        <div className="w-8 h-8 bg-green-100 rounded-full flex items-center justify-center">
                          <FaHeadphones className="text-green-600 text-sm" />
                        </div>
                        <div className="flex-1 h-2 bg-green-100 rounded"></div>
                      </div>
                      <div className="flex items-center space-x-3">
                        <div className="w-8 h-8 bg-purple-100 rounded-full flex items-center justify-center">
                          <FaLanguage className="text-purple-600 text-sm" />
                        </div>
                        <div className="flex-1 h-2 bg-purple-100 rounded"></div>
                      </div>
                    </div>
                  </div>
                </div>

                {/* Floating accessibility icons */}
                <div className="absolute -top-4 -right-4 w-16 h-16 bg-blue-600 rounded-full flex items-center justify-center animate-pulse">
                  <FaRocket className="text-white text-xl" />
                </div>
                <div className="absolute -bottom-4 -left-4 w-12 h-12 bg-green-500 rounded-full flex items-center justify-center animate-float" style={{animationDelay: '1s'}}>
                  <FaShieldAlt className="text-white" />
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Pricing Section */}
      <section className="py-20 px-4 bg-white">
        <div className="max-w-4xl mx-auto text-center">
          <h2 className="text-4xl font-bold text-gray-900 mb-4 animate-fadeInUp">Nos Versions</h2>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-8 mt-12">
            {/* Free Version */}
            <div className="pricing-card bg-white rounded-3xl shadow-lg border-2 border-gray-200 p-8 animate-scaleIn">
              <h3 className="text-2xl font-bold text-gray-900 mb-4">Version Gratuite</h3>

              <div className="space-y-4 mb-8">
                <div className="flex items-center text-gray-700">
                  <FaCheck className="text-green-500 mr-3" />
                  <span>Text-to-speech</span>
                </div>
                <div className="flex items-center text-gray-700">
                  <FaCheck className="text-green-500 mr-3" />
                  <span>Content summarization</span>
                </div>
                <div className="flex items-center text-gray-700">
                  <FaCheck className="text-green-500 mr-3" />
                  <span>Basic navigation</span>
                </div>
                <div className="flex items-center text-gray-700">
                  <FaCheck className="text-green-500 mr-3" />
                  <span>High contrast mode</span>
                </div>
                <div className="flex items-center text-gray-700">
                  <FaCheck className="text-green-500 mr-3" />
                  <span>Font adjustments</span>
                </div>
              </div>

              <button className="w-full bg-gray-100 text-gray-700 py-3 px-6 rounded-xl font-semibold hover:bg-gray-200 transition-colors">
                Installer Gratuitement →
              </button>
            </div>

            {/* Premium Version */}
            <div className="pricing-card bg-blue-600 rounded-3xl shadow-xl p-8 text-white animate-scaleIn animate-delay-200 relative">
              <div className="absolute -top-4 left-1/2 transform -translate-x-1/2">
                <span className="bg-yellow-400 text-gray-900 px-4 py-2 rounded-full text-sm font-bold">
                  30 jours d'essai gratuit
                </span>
              </div>

              <h3 className="text-2xl font-bold mb-4 mt-4">Version Premium</h3>

              <div className="space-y-4 mb-8">
                <div className="flex items-center">
                  <FaCheck className="text-yellow-400 mr-3" />
                  <span>Sign language translation</span>
                </div>
                <div className="flex items-center">
                  <FaCheck className="text-yellow-400 mr-3" />
                  <span>Advanced voice control</span>
                </div>
                <div className="flex items-center">
                  <FaCheck className="text-yellow-400 mr-3" />
                  <span>All visual modes</span>
                </div>
                <div className="flex items-center">
                  <FaCheck className="text-yellow-400 mr-3" />
                  <span>Priority support</span>
                </div>
                <div className="flex items-center">
                  <FaCheck className="text-yellow-400 mr-3" />
                  <span>Voice recording of notes</span>
                </div>
              </div>

              <button className="w-full bg-white text-blue-600 py-3 px-6 rounded-xl font-semibold hover:bg-gray-50 transition-colors">
                Passer à Premium →
              </button>
            </div>
          </div>
        </div>
      </section>

      {/* Where to Use Section */}
      <section className="py-20 px-4 bg-gray-50">
        <div className="max-w-6xl mx-auto">
          <h2 className="text-4xl font-bold text-center text-gray-900 mb-4 animate-fadeInUp">Où l'utiliser?</h2>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 mt-12">
            {/* Google Search */}
            <div className="platform-card bg-white rounded-2xl p-6 shadow-lg animate-scaleIn">
              <div className="w-16 h-16 bg-blue-100 rounded-2xl flex items-center justify-center mb-4">
                <FaSearch className="text-blue-600 text-2xl" />
              </div>
              <h3 className="text-xl font-bold text-gray-900 mb-3">Google Search</h3>
              <p className="text-gray-600 text-sm leading-relaxed">
                Effectuez des recherches avec votre voix, obtenez des résultats audio et une navigation accessible
              </p>
            </div>

            {/* YouTube */}
            <div className="platform-card bg-white rounded-2xl p-6 shadow-lg animate-scaleIn animate-delay-100">
              <div className="w-16 h-16 bg-red-100 rounded-2xl flex items-center justify-center mb-4">
                <FaYoutube className="text-red-600 text-2xl" />
              </div>
              <h3 className="text-xl font-bold text-gray-900 mb-3">YouTube</h3>
              <p className="text-gray-600 text-sm leading-relaxed">
                Regardez des vidéos avec la langue des signes, des descriptions audio et le contrôle vocal
              </p>
            </div>

            {/* E-Learning */}
            <div className="platform-card bg-white rounded-2xl p-6 shadow-lg animate-scaleIn animate-delay-200">
              <div className="w-16 h-16 bg-green-100 rounded-2xl flex items-center justify-center mb-4">
                <FaGraduationCap className="text-green-600 text-2xl" />
              </div>
              <h3 className="text-xl font-bold text-gray-900 mb-3">E-Learning Platforms</h3>
              <p className="text-gray-600 text-sm leading-relaxed">
                Accédez aux cours en ligne avec des fonctionnalités d'accessibilité améliorées
              </p>
            </div>

            {/* Microsoft Office */}
            <div className="platform-card bg-white rounded-2xl p-6 shadow-lg animate-scaleIn animate-delay-300">
              <div className="w-16 h-16 bg-orange-100 rounded-2xl flex items-center justify-center mb-4">
                <FaBookOpen className="text-orange-600 text-2xl" />
              </div>
              <h3 className="text-xl font-bold text-gray-900 mb-3">Microsoft Office</h3>
              <p className="text-gray-600 text-sm leading-relaxed">
                Travaillez avec des documents en utilisant des commandes vocales et des outils d'accessibilité
              </p>
            </div>

            {/* Data Visualization */}
            <div className="platform-card bg-white rounded-2xl p-6 shadow-lg animate-scaleIn animate-delay-400">
              <div className="w-16 h-16 bg-purple-100 rounded-2xl flex items-center justify-center mb-4">
                <FaFlask className="text-purple-600 text-2xl" />
              </div>
              <h3 className="text-xl font-bold text-gray-900 mb-3">Data Visualization</h3>
              <p className="text-gray-600 text-sm leading-relaxed">
                Comprenez les graphiques et les tableaux avec des descriptions audio
              </p>
            </div>

            {/* Mobile Devices */}
            <div className="platform-card bg-white rounded-2xl p-6 shadow-lg animate-scaleIn animate-delay-500">
              <div className="w-16 h-16 bg-pink-100 rounded-2xl flex items-center justify-center mb-4">
                <FaRocket className="text-pink-600 text-2xl" />
              </div>
              <h3 className="text-xl font-bold text-gray-900 mb-3">Mobile Devices</h3>
              <p className="text-gray-600 text-sm leading-relaxed">
                Accédez aux applications mobiles avec des contrôles tactiles et vocaux améliorés
              </p>
            </div>
          </div>
        </div>
      </section>

      <Footer />
    </div>
  );
};

export default ExtensionPage;
