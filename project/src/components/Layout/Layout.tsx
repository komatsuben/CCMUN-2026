import React from 'react';
import { Box } from '@mui/material';
import { ParallaxProvider } from 'react-parallax';

interface LayoutProps {
  children: React.ReactNode;
}

const Layout: React.FC<LayoutProps> = ({ children }) => {
  return (
    <ParallaxProvider>
      <Box sx={{ minHeight: '100vh', overflow: 'hidden' }}>
        {children}
      </Box>
    </ParallaxProvider>
  );
};

export default Layout;