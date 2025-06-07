import React from 'react';
import { Container, Typography, Card, CardContent, Stack, Box } from '@mui/material';
import {
  Timeline,
  TimelineItem,
  TimelineSeparator,
  TimelineConnector,
  TimelineContent,
  TimelineDot,
} from '@mui/lab';
import {
  EventAvailable,
  Assignment,
  HowToReg,
  Event,
  EmojiEvents,
} from '@mui/icons-material';
import { motion } from 'framer-motion';

const ConferenceTimeline: React.FC = () => {
  const timelineEvents = [
    {
      date: 'December 15, 2023',
      title: 'Registration Opens',
      description: 'Early bird registration with discounted rates begins.',
      icon: <EventAvailable sx={{ color: 'white' }} />,
      color: 'primary.main',
    },
    {
      date: 'January 31, 2024',
      title: 'Position Papers Due',
      description: 'Submit your committee position papers for review.',
      icon: <Assignment sx={{ color: 'white' }} />,
      color: 'secondary.main',
    },
    {
      date: 'February 28, 2024',
      title: 'Registration Closes',
      description: 'Final deadline for conference registration.',
      icon: <HowToReg sx={{ color: 'white' }} />,
      color: 'warning.main',
    },
    {
      date: 'March 15-17, 2024',
      title: 'Conference Dates',
      description: 'Three days of intensive committee sessions and networking.',
      icon: <Event sx={{ color: 'white' }} />,
      color: 'success.main',
    },
    {
      date: 'March 17, 2024',
      title: 'Awards Ceremony',
      description: 'Recognition and celebration of outstanding delegates.',
      icon: <EmojiEvents sx={{ color: 'white' }} />,
      color: 'error.main',
    },
  ];

  return (
    <Box id="timeline" sx={{ py: 8, backgroundColor: 'grey.50' }}>
      <Container maxWidth="lg">
        <motion.div
          initial={{ opacity: 0, y: 50 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: true }}
        >
          <Stack spacing={6} alignItems="center">
            <Box textAlign="center">
              <Typography
                variant="h2"
                component="h2"
                sx={{
                  fontWeight: 'bold',
                  mb: 2,
                  color: 'text.primary',
                }}
              >
                Important Dates
              </Typography>
              <Typography
                variant="h5"
                component="p"
                sx={{
                  color: 'text.secondary',
                  fontWeight: 300,
                  maxWidth: '600px',
                  mx: 'auto',
                }}
              >
                Stay informed about key dates and deadlines for the conference
              </Typography>
            </Box>

            <Box sx={{ width: '100%' }}>
              <Timeline
                position="alternate"
                sx={{
                  '& .MuiTimelineItem-root': {
                    minHeight: '150px',
                  },
                }}
              >
                {timelineEvents.map((event, index) => (
                  <TimelineItem key={event.title}>
                    <TimelineSeparator>
                      <motion.div
                        initial={{ scale: 0 }}
                        whileInView={{ scale: 1 }}
                        transition={{ duration: 0.5, delay: index * 0.2 }}
                        viewport={{ once: true }}
                      >
                        <TimelineDot
                          sx={{
                            backgroundColor: event.color,
                            width: 60,
                            height: 60,
                            display: 'flex',
                            alignItems: 'center',
                            justifyContent: 'center',
                          }}
                        >
                          {event.icon}
                        </TimelineDot>
                      </motion.div>
                      {index < timelineEvents.length - 1 && (
                        <TimelineConnector
                          sx={{
                            backgroundColor: 'primary.main',
                            width: 3,
                            borderRadius: 1,
                          }}
                        />
                      )}
                    </TimelineSeparator>
                    <TimelineContent>
                      <motion.div
                        initial={{ opacity: 0, x: index % 2 === 0 ? -50 : 50 }}
                        whileInView={{ opacity: 1, x: 0 }}
                        transition={{ duration: 0.8, delay: index * 0.2 }}
                        viewport={{ once: true }}
                      >
                        <Card
                          sx={{
                            maxWidth: 400,
                            mx: 'auto',
                            boxShadow: 3,
                            '&:hover': {
                              boxShadow: 6,
                              transform: 'translateY(-4px)',
                            },
                          }}
                        >
                          <CardContent>
                            <Typography
                              variant="h6"
                              component="h3"
                              sx={{
                                fontWeight: 'bold',
                                color: 'primary.main',
                                mb: 1,
                              }}
                            >
                              {event.date}
                            </Typography>
                            <Typography
                              variant="h5"
                              component="h4"
                              sx={{
                                fontWeight: 'bold',
                                mb: 1,
                                color: 'text.primary',
                              }}
                            >
                              {event.title}
                            </Typography>
                            <Typography
                              variant="body2"
                              sx={{ color: 'text.secondary' }}
                            >
                              {event.description}
                            </Typography>
                          </CardContent>
                        </Card>
                      </motion.div>
                    </TimelineContent>
                  </TimelineItem>
                ))}
              </Timeline>
            </Box>
          </Stack>
        </motion.div>
      </Container>
    </Box>
  );
};

export default ConferenceTimeline;