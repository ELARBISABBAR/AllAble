import React, { useState, useEffect } from 'react';
import { BrowserRouter as Router, Routes, Route, Navigate } from 'react-router-dom';
import LoginPage from './components/LoginPage';
import SignupPage from './components/SignupPage';
import Dashboard from './components/Dashboard';
import HomePage from './components/HomePage';
import Navbar from './components/Navbar';
import InterfacePage from './components/InterfacePage';
import EducationPage from './components/EducationPage';
import ToolsPage from './components/ToolsPage';
import CommunityPage from './components/CommunityPage';
import DirectoryPage from './components/DirectoryPage';
import ExtensionPage from './components/ExtensionPage';
import './App.css';
import Setting from './components/Setting';

const App = () => {
  const [isAuthenticated, setIsAuthenticated] = useState(false);
  const [user, setUser] = useState(null);
  const [loading, setLoading] = useState(true);

  // Check for existing authentication on app load
  useEffect(() => {
    const checkAuth = () => {
      const token = localStorage.getItem('authToken');
      const userData = localStorage.getItem('userData');

      if (token && userData) {
        setIsAuthenticated(true);
        setUser(JSON.parse(userData));
      }
      setLoading(false);
    };

    checkAuth();
  }, []);

  const handleLogin = (userData) => {
    setIsAuthenticated(true);
    setUser(userData);
    localStorage.setItem('authToken', 'demo-token');
    localStorage.setItem('userData', JSON.stringify(userData));
  };

  const handleSignup = (userData) => {
    setIsAuthenticated(true);
    setUser(userData);
    localStorage.setItem('authToken', 'demo-token');
    localStorage.setItem('userData', JSON.stringify(userData));
  };

  const handleLogout = () => {
    setIsAuthenticated(false);
    setUser(null);
    localStorage.removeItem('authToken');
    localStorage.removeItem('userData');
  };

  if (loading) {
    return (
      <div className="min-h-screen flex items-center justify-center bg-gradient-to-br from-purple-50 to-blue-50">
        <div className="animate-spin rounded-full h-12 w-12 border-b-2 border-purple-600"></div>
      </div>
    );
  }

  return (
    // <Router>
      <div className="App">
        {/* Show navbar only when authenticated */}
        {isAuthenticated && <Navbar user={user} onLogout={handleLogout} />}

        <Routes>
          {/* Public Routes */}
          <Route
            path="/login"
            element={
              !isAuthenticated ?
                <LoginPage onLogin={handleLogin} onSwitchToSignup={() => window.location.href = '/signup'} /> :
                <Navigate to="/home" replace />
            }
          />
          <Route
            path="/signup"
            element={
              !isAuthenticated ?
                <SignupPage onSignup={handleSignup} onSwitchToLogin={() => window.location.href = '/login'} /> :
                <Navigate to="/home" replace />
            }
          />

          {/* Protected Routes */}
          <Route
            path="/home"
            element={
              isAuthenticated ?
                <HomePage /> :
                <Navigate to="/login" replace />
            }
          />
          <Route
            path="/interface"
            element={
              isAuthenticated ?
                <InterfacePage /> :
                <Navigate to="/login" replace />
            }
          />
          <Route
            path="/education"
            element={
              isAuthenticated ?
                <EducationPage /> :
                <Navigate to="/login" replace />
            }
          />
          <Route
            path="/tools"
            element={
              isAuthenticated ?
                <ToolsPage /> :
                <Navigate to="/login" replace />
            }
          />
          <Route
            path="/community"
            element={
              isAuthenticated ?
                <CommunityPage /> :
                <Navigate to="/login" replace />
            }
          />
          <Route
            path="/directory"
            element={
              isAuthenticated ?
                <DirectoryPage /> :
                <Navigate to="/login" replace />
            }
          />
          <Route
            path="/extension"
            element={
              isAuthenticated ?
                <ExtensionPage /> :
                <Navigate to="/login" replace />
            }
          />
          <Route
            path="/settings"
            element={
              isAuthenticated ?
                <Setting/> :
                <Navigate to="/login" replace />
            }
          />
          <Route
            path="/dashboard"
            element={
              isAuthenticated ?
                <Dashboard user={user} onLogout={handleLogout} /> :
                <Navigate to="/login" replace />
            }
          />

          {/* Default Route */}
          <Route
            path="/"
            element={<Navigate to={isAuthenticated ? "/home" : "/login"} replace />}
          />
        </Routes>
      </div>
    // </Router>
  );
};

export default App;