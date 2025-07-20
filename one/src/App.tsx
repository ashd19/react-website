// App.tsx
import React, { useState, useEffect } from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import { ThemeProvider } from './components/ui/theme-provider';
import LandingPage from './pages/LandingPage';
import LoadingScreen from './components/loadingScreen';

const App: React.FC = () => {
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const timer = setTimeout(() => {
      setLoading(false);
    }, 2000);

    return () => clearTimeout(timer);
  }, []);

  return (
    <ThemeProvider defaultTheme="dark" storageKey="vite-ui-theme">
      {loading ? (
        <LoadingScreen />
      ) : (
        <Router>
          <Routes>
            <Route path="/" element={<LandingPage />} />
          </Routes>
        </Router>
      )}
    </ThemeProvider>
  );
};

export default App;
