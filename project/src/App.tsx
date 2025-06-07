import React, { useState } from 'react';
import { ThemeProvider, CssBaseline } from '@mui/material';
import { createCustomTheme } from './theme/theme';
import Layout from './components/Layout/Layout';
import Header from './components/Header/Header';
import HeroSection from './components/HeroSection/HeroSection';
import AboutSection from './components/AboutSection/AboutSection';
import ConferenceTimeline from './components/Timeline/Timeline';
import CommitteeSection from './components/CommitteeSection/CommitteeSection';
import RegistrationForm from './components/RegistrationForm/RegistrationForm';
import FaqSection from './components/FaqSection/FaqSection';
import Footer from './components/Footer/Footer';

const App: React.FC = () => {
  const [darkMode, setDarkMode] = useState(false);

  const toggleDarkMode = () => {
    setDarkMode(!darkMode);
  };

  const theme = createCustomTheme(darkMode);

  return (
    <ThemeProvider theme={theme}>
      <CssBaseline />
      <Layout>
        <Header darkMode={darkMode} toggleDarkMode={toggleDarkMode} />
        <HeroSection />
        <AboutSection />
        <ConferenceTimeline />
        <CommitteeSection />
        <RegistrationForm />
        <FaqSection />
        <Footer />
      </Layout>
    </ThemeProvider>
  );
};

export default App;