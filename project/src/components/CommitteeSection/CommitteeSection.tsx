import React, { useState } from 'react';
import {
  Box,
  Container,
  Typography,
  Grid,
  Card,
  CardContent,
  Stack,
  Button,
  Chip,
  ButtonGroup,
} from '@mui/material';
import {
  Security,
  Public,
  AccountBalance,
  LocalHospital,
  Science,
  Business,
} from '@mui/icons-material';
import { motion } from 'framer-motion';

interface Committee {
  id: string;
  name: string;
  description: string;
  difficulty: 'Beginner' | 'Intermediate' | 'Advanced';
  type: 'Political' | 'Economic' | 'Social' | 'Security';
  icon: React.ReactElement;
  delegates: number;
}

const CommitteeSection: React.FC = () => {
  const [filter, setFilter] = useState<string>('All');

  const committees: Committee[] = [
    {
      id: 'unsc',
      name: 'UN Security Council',
      description: 'Address global security challenges and peacekeeping operations with world powers.',
      difficulty: 'Advanced',
      type: 'Security',
      icon: <Security sx={{ fontSize: '2.5rem', color: 'primary.main' }} />,
      delegates: 15,
    },
    {
      id: 'unga',
      name: 'UN General Assembly',
      description: 'Debate international policies and resolutions affecting all member nations.',
      difficulty: 'Intermediate',
      type: 'Political',
      icon: <Public sx={{ fontSize: '2.5rem', color: 'primary.main' }} />,
      delegates: 193,
    },
    {
      id: 'ecosoc',
      name: 'Economic and Social Council',
      description: 'Focus on sustainable development, economic cooperation, and social progress.',
      difficulty: 'Intermediate',
      type: 'Economic',
      icon: <AccountBalance sx={{ fontSize: '2.5rem', color: 'primary.main' }} />,
      delegates: 54,
    },
    {
      id: 'who',
      name: 'World Health Organization',
      description: 'Tackle global health challenges and develop international health policies.',
      difficulty: 'Beginner',
      type: 'Social',
      icon: <LocalHospital sx={{ fontSize: '2.5rem', color: 'primary.main' }} />,
      delegates: 194,
    },
    {
      id: 'unep',
      name: 'UN Environment Programme',
      description: 'Address climate change, biodiversity loss, and environmental sustainability.',
      difficulty: 'Intermediate',
      type: 'Social',
      icon: <Science sx={{ fontSize: '2.5rem', color: 'primary.main' }} />,
      delegates: 193,
    },
    {
      id: 'wto',
      name: 'World Trade Organization',
      description: 'Negotiate international trade agreements and resolve commercial disputes.',
      difficulty: 'Advanced',
      type: 'Economic',
      icon: <Business sx={{ fontSize: '2.5rem', color: 'primary.main' }} />,
      delegates: 164,
    },
  ];

  const filterOptions = ['All', 'Political', 'Economic', 'Social', 'Security'];

  const filteredCommittees = filter === 'All' 
    ? committees 
    : committees.filter(committee => committee.type === filter);

  const getDifficultyColor = (difficulty: string) => {
    switch (difficulty) {
      case 'Beginner':
        return 'success';
      case 'Intermediate':
        return 'warning';
      case 'Advanced':
        return 'error';
      default:
        return 'default';
    }
  };

  return (
    <Box id="committees" sx={{ py: 8, backgroundColor: 'background.default' }}>
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
                Our Committees
              </Typography>
              <Typography
                variant="h5"
                component="p"
                sx={{
                  color: 'text.secondary',
                  fontWeight: 300,
                  maxWidth: '700px',
                  mx: 'auto',
                  mb: 4,
                }}
              >
                Choose from diverse committees addressing the most pressing global challenges
              </Typography>

              <ButtonGroup
                variant="outlined"
                sx={{ flexWrap: 'wrap', gap: 1 }}
              >
                {filterOptions.map((option) => (
                  <Button
                    key={option}
                    variant={filter === option ? 'contained' : 'outlined'}
                    onClick={() => setFilter(option)}
                    sx={{ mb: 1 }}
                  >
                    {option}
                  </Button>
                ))}
              </ButtonGroup>
            </Box>

            <Grid container spacing={4}>
              {filteredCommittees.map((committee, index) => (
                <Grid item xs={12} md={6} lg={4} key={committee.id}>
                  <motion.div
                    initial={{ opacity: 0, y: 50 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.8, delay: index * 0.1 }}
                    viewport={{ once: true }}
                  >
                    <Card
                      sx={{
                        height: '100%',
                        display: 'flex',
                        flexDirection: 'column',
                        '&:hover': {
                          transform: 'translateY(-8px)',
                          boxShadow: 8,
                        },
                      }}
                    >
                      <CardContent sx={{ flexGrow: 1, p: 3 }}>
                        <Stack spacing={2}>
                          <Box sx={{ textAlign: 'center', mb: 2 }}>
                            {committee.icon}
                          </Box>
                          
                          <Stack direction="row" spacing={1} justifyContent="center">
                            <Chip
                              label={committee.difficulty}
                              color={getDifficultyColor(committee.difficulty) as any}
                              size="small"
                            />
                            <Chip
                              label={committee.type}
                              variant="outlined"
                              size="small"
                            />
                          </Stack>

                          <Typography
                            variant="h5"
                            component="h3"
                            sx={{
                              fontWeight: 'bold',
                              textAlign: 'center',
                              color: 'text.primary',
                            }}
                          >
                            {committee.name}
                          </Typography>

                          <Typography
                            variant="body2"
                            sx={{
                              color: 'text.secondary',
                              textAlign: 'center',
                              lineHeight: 1.6,
                              flexGrow: 1,
                            }}
                          >
                            {committee.description}
                          </Typography>

                          <Stack direction="row" justifyContent="space-between" alignItems="center">
                            <Typography variant="body2" sx={{ color: 'text.secondary' }}>
                              {committee.delegates} delegates
                            </Typography>
                            <Button
                              variant="outlined"
                              size="small"
                              sx={{
                                '&:hover': {
                                  backgroundColor: 'primary.main',
                                  color: 'white',
                                },
                              }}
                            >
                              Learn More
                            </Button>
                          </Stack>
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

export default CommitteeSection;