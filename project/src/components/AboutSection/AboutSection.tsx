import React from 'react';
import {
  Box,
  Container,
  Typography,
  Grid,
  Card,
  CardContent,
  Stack,
} from '@mui/material';
import {
  Language,
  People,
  School,
  EmojiEvents,
} from '@mui/icons-material';
import { motion } from 'framer-motion';

const AboutSection: React.FC = () => {
  const highlights = [
    {
      icon: <Language sx={{ fontSize: '3rem', color: 'primary.main' }} />,
      title: 'Global Perspective',
      description: 'Engage with international affairs and develop a comprehensive understanding of global challenges.',
    },
    {
      icon: <People sx={{ fontSize: '3rem', color: 'primary.main' }} />,
      title: 'Diplomatic Skills',
      description: 'Master the art of negotiation, public speaking, and cross-cultural communication.',
    },
    {
      icon: <School sx={{ fontSize: '3rem', color: 'primary.main' }} />,
      title: 'Academic Excellence',
      description: 'Enhance your research abilities and critical thinking through rigorous debate and discussion.',
    },
    {
      icon: <EmojiEvents sx={{ fontSize: '3rem', color: 'primary.main' }} />,
      title: 'Awards & Recognition',
      description: 'Compete for prestigious awards while building your resume and academic credentials.',
    },
  ];

  return (
    <Box id="about" sx={{ py: 8, backgroundColor: 'background.default' }}>
      <Container maxWidth="lg">
        <motion.div
          initial={{ opacity: 0, y: 50 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: true }}
        >
          <Stack spacing={6} alignItems="center" textAlign="center">
            <Box>
              <Typography
                variant="h2"
                component="h2"
                sx={{
                  fontWeight: 'bold',
                  mb: 2,
                  color: 'text.primary',
                }}
              >
                About Our Conference
              </Typography>
              <Typography
                variant="h5"
                component="p"
                sx={{
                  color: 'text.secondary',
                  fontWeight: 300,
                  maxWidth: '800px',
                  mx: 'auto',
                  lineHeight: 1.6,
                }}
              >
                Join us for the most prestigious Model UN conference of the year. Our conference brings together
                the brightest minds from around the world to engage in meaningful dialogue, debate critical
                global issues, and develop the diplomatic skills necessary for tomorrow's leaders. With expert
                faculty advisors, realistic simulations, and networking opportunities, this conference offers
                an unparalleled educational experience that will challenge and inspire you.
              </Typography>
            </Box>

            <Grid container spacing={4} sx={{ mt: 4 }}>
              {highlights.map((highlight, index) => (
                <Grid item xs={12} md={6} key={highlight.title}>
                  <motion.div
                    initial={{ opacity: 0, y: 50 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.8, delay: index * 0.2 }}
                    viewport={{ once: true }}
                  >
                    <Card
                      sx={{
                        height: '100%',
                        textAlign: 'center',
                        p: 2,
                        border: '1px solid',
                        borderColor: 'divider',
                        '&:hover': {
                          borderColor: 'primary.main',
                        },
                      }}
                    >
                      <CardContent>
                        <Stack spacing={2} alignItems="center">
                          <Box sx={{ mb: 2 }}>
                            {highlight.icon}
                          </Box>
                          <Typography
                            variant="h5"
                            component="h3"
                            sx={{ fontWeight: 'bold', color: 'text.primary' }}
                          >
                            {highlight.title}
                          </Typography>
                          <Typography
                            variant="body1"
                            sx={{ color: 'text.secondary', lineHeight: 1.6 }}
                          >
                            {highlight.description}
                          </Typography>
                        </Stack>
                      </CardContent>
                    </Card>
                  </motion.div>
                </Grid>
              ))}
            </Grid>
          </Stack>
        </motion.div>
      </Container>
    </Box>
  );
};

export default AboutSection;