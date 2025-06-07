import React, { useState } from 'react';
import {
  Box,
  Container,
  Typography,
  Accordion,
  AccordionSummary,
  AccordionDetails,
  TextField,
  Stack,
  InputAdornment,
} from '@mui/material';
import { ExpandMore, Search } from '@mui/icons-material';
import { motion } from 'framer-motion';

interface FAQ {
  question: string;
  answer: string;
  category: string;
}

const FaqSection: React.FC = () => {
  const [searchTerm, setSearchTerm] = useState('');
  const [expanded, setExpanded] = useState<string | false>('panel1');

  const faqs: FAQ[] = [
    {
      question: 'What is the registration fee and what does it include?',
      answer: 'The registration fee is $125 for early bird (before Jan 15) and $150 regular. This includes all committee sessions, opening and closing ceremonies, lunch for all three days, conference materials, and a delegate certificate.',
      category: 'Registration',
    },
    {
      question: 'What should I bring to the conference?',
      answer: 'Please bring formal business attire, writing materials, name tags (provided), position papers, and any research materials. Laptops are allowed but not required. We recommend bringing a water bottle and comfortable shoes.',
      category: 'Preparation',
    },
    {
      question: 'How are committee assignments made?',
      answer: 'Committee assignments are based on your preferences, experience level, and availability. We try to accommodate first choices but cannot guarantee placement. Assignments will be sent via email 2 weeks before the conference.',
      category: 'Committees',
    },
    {
      question: 'What is the dress code for the conference?',
      answer: 'Business formal attire is required for all sessions. This means suits, dress shirts, ties, and dress shoes for all genders. Jeans, sneakers, and casual wear are not permitted during committee sessions.',
      category: 'Dress Code',
    },
    {
      question: 'Can I attend if I\'m new to Model UN?',
      answer: 'Absolutely! We welcome delegates of all experience levels. We offer beginner-friendly committees and provide resources to help new delegates prepare. Training materials will be sent after registration.',
      category: 'Experience',
    },
    {
      question: 'What COVID-19 safety measures are in place?',
      answer: 'We follow current health guidelines and venue requirements. Hand sanitizer stations are available throughout the venue. We encourage delegates to stay home if feeling unwell and offer virtual participation options if needed.',
      category: 'Health & Safety',
    },
    {
      question: 'How do I prepare my position paper?',
      answer: 'Position papers should be 1-2 pages, double-spaced, addressing your country\'s stance on committee topics. Guidelines and templates are provided after registration. Papers are due by January 31st for review.',
      category: 'Preparation',
    },
    {
      question: 'What awards are given and how are they determined?',
      answer: 'Awards include Outstanding Delegate, Distinguished Delegate, and Honorable Mention in each committee, plus Best Position Paper awards. Judging is based on research, diplomacy, speaking, and overall contribution to debate.',
      category: 'Awards',
    },
  ];

  const handleChange = (panel: string) => (event: React.SyntheticEvent, isExpanded: boolean) => {
    setExpanded(isExpanded ? panel : false);
  };

  const filteredFaqs = faqs.filter(faq =>
    faq.question.toLowerCase().includes(searchTerm.toLowerCase()) ||
    faq.answer.toLowerCase().includes(searchTerm.toLowerCase()) ||
    faq.category.toLowerCase().includes(searchTerm.toLowerCase())
  );

  return (
    <Box id="faq" sx={{ py: 8, backgroundColor: 'background.default' }}>
      <Container maxWidth="md">
        <motion.div
          initial={{ opacity: 0, y: 50 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: true }}
        >
          <Stack spacing={4} alignItems="center">
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
                Frequently Asked Questions
              </Typography>
              <Typography
                variant="h5"
                component="p"
                sx={{
                  color: 'text.secondary',
                  fontWeight: 300,
                  maxWidth: '600px',
                  mx: 'auto',
                  mb: 4,
                }}
              >
                Find answers to common questions about our Model UN conference
              </Typography>

              <TextField
                fullWidth
                variant="outlined"
                placeholder="Search FAQs..."
                value={searchTerm}
                onChange={(e) => setSearchTerm(e.target.value)}
                InputProps={{
                  startAdornment: (
                    <InputAdornment position="start">
                      <Search />
                    </InputAdornment>
                  ),
                }}
                sx={{ maxWidth: 400, mx: 'auto' }}
              />
            </Box>

            <Box sx={{ width: '100%' }}>
              {filteredFaqs.map((faq, index) => (
                <motion.div
                  key={`panel${index + 1}`}
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.5, delay: index * 0.1 }}
                  viewport={{ once: true }}
                >
                  <Accordion
                    expanded={expanded === `panel${index + 1}`}
                    onChange={handleChange(`panel${index + 1}`)}
                    sx={{
                      mb: 2,
                      borderRadius: 2,
                      '&:before': {
                        display: 'none',
                      },
                      boxShadow: 2,
                      '&.Mui-expanded': {
                        boxShadow: 4,
                      },
                    }}
                  >
                    <AccordionSummary
                      expandIcon={<ExpandMore />}
                      aria-controls={`panel${index + 1}bh-content`}
                      id={`panel${index + 1}bh-header`}
                      sx={{
                        backgroundColor: 'grey.50',
                        borderRadius: 2,
                        '&.Mui-expanded': {
                          borderBottomLeftRadius: 0,
                          borderBottomRightRadius: 0,
                        },
                      }}
                    >
                      <Stack spacing={1} sx={{ width: '100%' }}>
                        <Typography
                          variant="h6"
                          component="h3"
                          sx={{ fontWeight: 'bold', color: 'text.primary' }}
                        >
                          {faq.question}
                        </Typography>
                        <Typography
                          variant="caption"
                          sx={{ color: 'primary.main', fontWeight: 500 }}
                        >
                          {faq.category}
                        </Typography>
                      </Stack>
                    </AccordionSummary>
                    <AccordionDetails sx={{ p: 3 }}>
                      <Typography
                        variant="body1"
                        sx={{
                          color: 'text.secondary',
                          lineHeight: 1.6,
                        }}
                      >
                        {faq.answer}
                      </Typography>
                    </AccordionDetails>
                  </Accordion>
                </motion.div>
              ))}

              {filteredFaqs.length === 0 && (
                <Box textAlign="center" sx={{ py: 4 }}>
                  <Typography variant="h6" sx={{ color: 'text.secondary' }}>
                    No FAQs found matching your search.
                  </Typography>
                </Box>
              )}
            </Box>
          </Stack>
        </motion.div>
      </Container>
    </Box>
  );
};

export default FaqSection;