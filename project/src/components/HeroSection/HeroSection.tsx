import React, { useRef, useEffect, useState } from 'react';
import {
  Box,
  Container,
  Typography,
  Button,
  Stack,
  Chip,
} from '@mui/material';
import { KeyboardArrowDown, Event, LocationOn, People } from '@mui/icons-material';
import { motion } from 'framer-motion';

const useParallax = (ref: React.RefObject<HTMLElement>, factor = 0.1) => {
  const [offset, setOffset] = useState(0);

  useEffect(() => {
    if (!ref.current) return;

    const handleScroll = () => {
      const scrollY = window.scrollY || window.pageYOffset;
      // Calculate offset based on scroll position, but limit the maximum offset
      const maxOffset = 100; // Maximum offset in pixels
      const newOffset = Math.min(scrollY * factor, maxOffset);
      setOffset(newOffset);
    };

    // Initial calculation
    handleScroll();

    window.addEventListener('scroll', handleScroll, { passive: true });
    return () => window.removeEventListener('scroll', handleScroll);
  }, [ref, factor]);

  return offset;
};

const HeroSection: React.FC = () => {
  const scrollToNext = () => {
    const aboutSection = document.querySelector('#about');
    if (aboutSection) {
      aboutSection.scrollIntoView({ behavior: 'smooth' });
    }
  };

  const heroRef = useRef<HTMLDivElement>(null);
  const parallaxOffset = useParallax(heroRef, 0.3);

  return (
    <Box 
      ref={heroRef}
      id="hero" 
      sx={{ 
        position: 'relative', 
        height: '100vh', 
        overflow: 'hidden',
        '&::before': {
          content: '""',
          position: 'absolute',
          top: 0,
          left: 0,
          right: 0,
          bottom: 0,
          backgroundImage: 'url(https://images.pexels.com/photos/159751/book-address-book-learning-learn-159751.jpeg)',
          backgroundSize: 'cover',
          backgroundPosition: 'center',
          backgroundAttachment: 'fixed',
          // Use negative margin to prevent pushing content down
          transform: `translate3d(0, -${parallaxOffset}px, 0)`,
          willChange: 'transform',
          // Ensure the background covers the entire area even when moving
          height: `calc(100% + ${parallaxOffset * 2}px)`,
          marginTop: `-${parallaxOffset}px`,
          zIndex: 0,
        },
        '&::after': {
          content: '""',
          position: 'absolute',
          top: 0,
          left: 0,
          right: 0,
          bottom: 0,
          backgroundColor: 'rgba(0, 0, 0, 0.5)',
          zIndex: 1,
        },
      }}
    >
      <Box
        sx={{
          height: '100vh',
          display: 'flex',
          alignItems: 'center',
          justifyContent: 'center',
          position: 'relative',
        }}
      >
        <Container maxWidth="lg" sx={{ position: 'relative', zIndex: 2 }}>
          <Stack
            spacing={4}
            alignItems="center"
            textAlign="center"
            sx={{ color: 'white' }}
          >
            <motion.div
              initial={{ opacity: 0, y: 50 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8 }}
            >
              <Chip
                label="Registration Now Open"
                color="secondary"
                sx={{
                  fontSize: '1rem',
                  fontWeight: 'bold',
                  py: 1,
                  px: 2,
                  mb: 2,
                }}
              />
            </motion.div>

            <motion.div
              initial={{ opacity: 0, y: 50 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: 0.2 }}
            >
              <Typography
                variant="h1"
                component="h1"
                sx={{
                  fontWeight: 'bold',
                  textShadow: '2px 2px 4px rgba(0,0,0,0.5)',
                  mb: 2,
                  fontSize: { xs: '2.5rem', md: '3.5rem' },
                }}
              >
                Model UN Conference 2024
              </Typography>
            </motion.div>

            <motion.div
              initial={{ opacity: 0, y: 50 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: 0.4 }}
            >
              <Typography
                variant="h4"
                component="h2"
                sx={{
                  fontWeight: 300,
                  textShadow: '1px 1px 2px rgba(0,0,0,0.5)',
                  mb: 4,
                  fontSize: { xs: '1.5rem', md: '2rem' },
                }}
              >
                Shaping Tomorrow's Leaders Through Diplomacy
              </Typography>
            </motion.div>

            <motion.div
              initial={{ opacity: 0, y: 50 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: 0.6 }}
            >
              <Stack
                direction={{ xs: 'column', sm: 'row' }}
                spacing={4}
                justifyContent="center"
                sx={{ mb: 4 }}
              >
                <Stack direction="row" alignItems="center" spacing={1}>
                  <Event sx={{ fontSize: '1.2rem' }} />
                  <Typography variant="body1" sx={{ fontWeight: 500 }}>
                    March 15-17, 2024
                  </Typography>
                </Stack>
                <Stack direction="row" alignItems="center" spacing={1}>
                  <LocationOn sx={{ fontSize: '1.2rem' }} />
                  <Typography variant="body1" sx={{ fontWeight: 500 }}>
                    United Nations Headquarters
                  </Typography>
                </Stack>
                <Stack direction="row" alignItems="center" spacing={1}>
                  <People sx={{ fontSize: '1.2rem' }} />
                  <Typography variant="body1" sx={{ fontWeight: 500 }}>
                    500+ Delegates
                  </Typography>
                </Stack>
              </Stack>
            </motion.div>

            <motion.div
              initial={{ opacity: 0, y: 50 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: 0.8 }}
            >
              <Button
                variant="contained"
                size="large"
                sx={{
                  backgroundColor: 'secondary.main',
                  color: 'white',
                  px: 4,
                  py: 2,
                  fontSize: '1.1rem',
                  fontWeight: 'bold',
                  borderRadius: '30px',
                  '&:hover': {
                    backgroundColor: 'secondary.dark',
                    transform: 'translateY(-2px)',
                  },
                }}
                onClick={() => document.querySelector('#register')?.scrollIntoView({ behavior: 'smooth' })}
              >
                Register Now
              </Button>
            </motion.div>

            <motion.div
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ duration: 1, delay: 1.2 }}
              style={{ position: 'absolute', bottom: '2rem' }}
            >
              <Box
                sx={{
                  cursor: 'pointer',
                  animation: 'bounce 2s infinite',
                  '@keyframes bounce': {
                    '0%, 20%, 50%, 80%, 100%': {
                      transform: 'translateY(0)',
                    },
                    '40%': {
                      transform: 'translateY(-10px)',
                    },
                    '60%': {
                      transform: 'translateY(-5px)',
                    },
                  },
                }}
                onClick={scrollToNext}
              >
                <KeyboardArrowDown sx={{ fontSize: '3rem', color: 'white' }} />
              </Box>
            </motion.div>
          </Stack>
        </Container>
      </Box>
    </Box>
  );
};

export default HeroSection;