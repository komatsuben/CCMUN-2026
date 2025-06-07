import React, { useState } from 'react';
import {
  Box,
  Container,
  Grid,
  Typography,
  TextField,
  Button,
  IconButton,
  Stack,
  Link,
  Divider,
} from '@mui/material';
import {
  Facebook,
  Twitter,
  Instagram,
  LinkedIn,
  Email,
  Phone,
  LocationOn,
  Send,
} from '@mui/icons-material';
import { motion } from 'framer-motion';

const Footer: React.FC = () => {
  const [email, setEmail] = useState('');
  const [subscribed, setSubscribed] = useState(false);

  const handleNewsletterSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    console.log('Newsletter subscription:', email);
    setSubscribed(true);
    setEmail('');
    setTimeout(() => setSubscribed(false), 3000);
  };

  const socialLinks = [
    { icon: <Facebook />, url: 'https://facebook.com', label: 'Facebook' },
    { icon: <Twitter />, url: 'https://twitter.com', label: 'Twitter' },
    { icon: <Instagram />, url: 'https://instagram.com', label: 'Instagram' },
    { icon: <LinkedIn />, url: 'https://linkedin.com', label: 'LinkedIn' },
  ];

  const quickLinks = [
    { label: 'About Conference', href: '#about' },
    { label: 'Committees', href: '#committees' },
    { label: 'Registration', href: '#register' },
    { label: 'FAQ', href: '#faq' },
    { label: 'Contact Us', href: '#contact' },
  ];

  const scrollToSection = (href: string) => {
    const element = document.querySelector(href);
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' });
    }
  };

  return (
    <Box
      component="footer"
      sx={{
        backgroundColor: 'primary.main',
        color: 'white',
        pt: 6,
        pb: 2,
      }}
    >
      <Container maxWidth="lg">
        <Grid container spacing={4}>
          <Grid item xs={12} md={4}>
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8 }}
              viewport={{ once: true }}
            >
              <Stack spacing={3}>
                <Typography
                  variant="h5"
                  component="h3"
                  sx={{ fontWeight: 'bold', mb: 2 }}
                >
                  Model UN Conference 2024
                </Typography>
                <Typography variant="body2" sx={{ lineHeight: 1.6 }}>
                  Join us for the most prestigious Model UN conference of the year.
                  Connect with delegates worldwide, engage in meaningful diplomacy,
                  and develop leadership skills that will last a lifetime.
                </Typography>
                <Stack direction="row" spacing={1}>
                  {socialLinks.map((social) => (
                    <IconButton
                      key={social.label}
                      href={social.url}
                      target="_blank"
                      rel="noopener noreferrer"
                      sx={{
                        color: 'white',
                        backgroundColor: 'rgba(255, 255, 255, 0.1)',
                        '&:hover': {
                          backgroundColor: 'rgba(255, 255, 255, 0.2)',
                          transform: 'translateY(-2px)',
                        },
                      }}
                      aria-label={social.label}
                    >
                      {social.icon}
                    </IconButton>
                  ))}
                </Stack>
              </Stack>
            </motion.div>
          </Grid>

          <Grid item xs={12} md={4}>
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: 0.2 }}
              viewport={{ once: true }}
            >
              <Stack spacing={3}>
                <Typography
                  variant="h6"
                  component="h3"
                  sx={{ fontWeight: 'bold' }}
                >
                  Quick Links
                </Typography>
                <Stack spacing={1}>
                  {quickLinks.map((link) => (
                    <Link
                      key={link.label}
                      component="button"
                      variant="body2"
                      onClick={() => scrollToSection(link.href)}
                      sx={{
                        color: 'rgba(255, 255, 255, 0.8)',
                        textDecoration: 'none',
                        textAlign: 'left',
                        '&:hover': {
                          color: 'white',
                          textDecoration: 'underline',
                        },
                      }}
                    >
                      {link.label}
                    </Link>
                  ))}
                </Stack>

                <Box>
                  <Typography
                    variant="h6"
                    component="h3"
                    sx={{ fontWeight: 'bold', mb: 2 }}
                  >
                    Contact Information
                  </Typography>
                  <Stack spacing={1}>
                    <Stack direction="row" alignItems="center" spacing={1}>
                      <Email sx={{ fontSize: '1.2rem' }} />
                      <Link
                        href="mailto:info@modelun2024.org"
                        sx={{ color: 'rgba(255, 255, 255, 0.8)' }}
                      >
                        info@modelun2024.org
                      </Link>
                    </Stack>
                    <Stack direction="row" alignItems="center" spacing={1}>
                      <Phone sx={{ fontSize: '1.2rem' }} />
                      <Typography variant="body2" sx={{ color: 'rgba(255, 255, 255, 0.8)' }}>
                        +1 (555) 123-4567
                      </Typography>
                    </Stack>
                    <Stack direction="row" alignItems="center" spacing={1}>
                      <LocationOn sx={{ fontSize: '1.2rem' }} />
                      <Typography variant="body2" sx={{ color: 'rgba(255, 255, 255, 0.8)' }}>
                        UN Headquarters, New York
                      </Typography>
                    </Stack>
                  </Stack>
                </Box>
              </Stack>
            </motion.div>
          </Grid>

          <Grid item xs={12} md={4}>
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: 0.4 }}
              viewport={{ once: true }}
            >
              <Stack spacing={3}>
                <Typography
                  variant="h6"
                  component="h3"
                  sx={{ fontWeight: 'bold' }}
                >
                  Stay Updated
                </Typography>
                <Typography variant="body2" sx={{ color: 'rgba(255, 255, 255, 0.8)' }}>
                  Subscribe to our newsletter for conference updates, important
                  announcements, and MUN resources.
                </Typography>
                <Box
                  component="form"
                  onSubmit={handleNewsletterSubmit}
                  sx={{ display: 'flex', flexDirection: 'column', gap: 2 }}
                >
                  <TextField
                    fullWidth
                    variant="outlined"
                    placeholder="Enter your email"
                    value={email}
                    onChange={(e) => setEmail(e.target.value)}
                    required
                    sx={{
                      '& .MuiOutlinedInput-root': {
                        backgroundColor: 'rgba(255, 255, 255, 0.1)',
                        color: 'white',
                        '& fieldset': {
                          borderColor: 'rgba(255, 255, 255, 0.3)',
                        },
                        '&:hover fieldset': {
                          borderColor: 'rgba(255, 255, 255, 0.5)',
                        },
                        '&.Mui-focused fieldset': {
                          borderColor: 'white',
                        },
                      },
                      '& .MuiInputBase-input::placeholder': {
                        color: 'rgba(255, 255, 255, 0.7)',
                      },
                    }}
                  />
                  <Button
                    type="submit"
                    variant="contained"
                    endIcon={<Send />}
                    sx={{
                      backgroundColor: 'secondary.main',
                      color: 'white',
                      '&:hover': {
                        backgroundColor: 'secondary.dark',
                      },
                    }}
                  >
                    {subscribed ? 'Subscribed!' : 'Subscribe'}
                  </Button>
                </Box>
              </Stack>
            </motion.div>
          </Grid>
        </Grid>

        <Divider sx={{ my: 4, backgroundColor: 'rgba(255, 255, 255, 0.2)' }} />

        <Box
          sx={{
            display: 'flex',
            justifyContent: 'space-between',
            alignItems: 'center',
            flexDirection: { xs: 'column', sm: 'row' },
            gap: 2,
          }}
        >
          <Typography variant="body2" sx={{ color: 'rgba(255, 255, 255, 0.8)' }}>
            © 2024 Model UN Conference. All rights reserved.
          </Typography>
          <Stack direction="row" spacing={3}>
            <Link
              href="#"
              variant="body2"
              sx={{
                color: 'rgba(255, 255, 255, 0.8)',
                textDecoration: 'none',
                '&:hover': {
                  color: 'white',
                  textDecoration: 'underline',
                },
              }}
            >
              Privacy Policy
            </Link>
            <Link
              href="#"
              variant="body2"
              sx={{
                color: 'rgba(255, 255, 255, 0.8)',
                textDecoration: 'none',
                '&:hover': {
                  color: 'white',
                  textDecoration: 'underline',
                },
              }}
            >
              Terms of Service
            </Link>
          </Stack>
        </Box>
      </Container>
    </Box>
  );
};

export default Footer;