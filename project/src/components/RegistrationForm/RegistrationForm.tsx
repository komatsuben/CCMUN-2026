import React from 'react';
import {
  Box,
  Container,
  Typography,
  Card,
  CardContent,
  TextField,
  Button,
  Grid,
  FormControl,
  InputLabel,
  Select,
  MenuItem,
  FormControlLabel,
  Checkbox,
  Stack,
  Alert,
} from '@mui/material';
import { useForm, Controller } from 'react-hook-form';
import { motion } from 'framer-motion';

interface FormData {
  firstName: string;
  lastName: string;
  email: string;
  phone: string;
  school: string;
  grade: string;
  experience: string;
  committee1: string;
  committee2: string;
  committee3: string;
  dietaryRestrictions: string;
  emergencyContact: string;
  emergencyPhone: string;
  agreement: boolean;
}

const RegistrationForm: React.FC = () => {
  const {
    control,
    handleSubmit,
    formState: { errors },
    reset,
  } = useForm<FormData>();

  const [submitted, setSubmitted] = React.useState(false);

  const committees = [
    'UN Security Council',
    'UN General Assembly',
    'Economic and Social Council',
    'World Health Organization',
    'UN Environment Programme',
    'World Trade Organization',
  ];

  const experienceLevels = [
    'First-time delegate',
    '1-2 conferences',
    '3-5 conferences',
    '6+ conferences',
    'Experienced chair/staff',
  ];

  const onSubmit = (data: FormData) => {
    console.log('Registration data:', data);
    setSubmitted(true);
    // Here you would typically send the data to your backend
    setTimeout(() => {
      setSubmitted(false);
      reset();
    }, 3000);
  };

  return (
    <Box id="register" sx={{ py: 8, backgroundColor: 'grey.50' }}>
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
                Register Now
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
                Secure your spot at the premier Model UN conference of 2024
              </Typography>
            </Box>

            <Card sx={{ width: '100%', maxWidth: 800 }}>
              <CardContent sx={{ p: 4 }}>
                {submitted ? (
                  <Alert severity="success\" sx={{ mb: 2 }}>
                    Thank you for registering! We'll send you a confirmation email shortly.
                  </Alert>
                ) : null}

                <form onSubmit={handleSubmit(onSubmit)}>
                  <Grid container spacing={3}>
                    <Grid item xs={12} sm={6}>
                      <Controller
                        name="firstName"
                        control={control}
                        rules={{ required: 'First name is required' }}
                        render={({ field }) => (
                          <TextField
                            {...field}
                            fullWidth
                            label="First Name"
                            error={!!errors.firstName}
                            helperText={errors.firstName?.message}
                          />
                        )}
                      />
                    </Grid>

                    <Grid item xs={12} sm={6}>
                      <Controller
                        name="lastName"
                        control={control}
                        rules={{ required: 'Last name is required' }}
                        render={({ field }) => (
                          <TextField
                            {...field}
                            fullWidth
                            label="Last Name"
                            error={!!errors.lastName}
                            helperText={errors.lastName?.message}
                          />
                        )}
                      />
                    </Grid>

                    <Grid item xs={12} sm={6}>
                      <Controller
                        name="email"
                        control={control}
                        rules={{
                          required: 'Email is required',
                          pattern: {
                            value: /^[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,}$/i,
                            message: 'Invalid email address',
                          },
                        }}
                        render={({ field }) => (
                          <TextField
                            {...field}
                            fullWidth
                            label="Email"
                            type="email"
                            error={!!errors.email}
                            helperText={errors.email?.message}
                          />
                        )}
                      />
                    </Grid>

                    <Grid item xs={12} sm={6}>
                      <Controller
                        name="phone"
                        control={control}
                        rules={{ required: 'Phone number is required' }}
                        render={({ field }) => (
                          <TextField
                            {...field}
                            fullWidth
                            label="Phone Number"
                            error={!!errors.phone}
                            helperText={errors.phone?.message}
                          />
                        )}
                      />
                    </Grid>

                    <Grid item xs={12} sm={6}>
                      <Controller
                        name="school"
                        control={control}
                        rules={{ required: 'School name is required' }}
                        render={({ field }) => (
                          <TextField
                            {...field}
                            fullWidth
                            label="School/University"
                            error={!!errors.school}
                            helperText={errors.school?.message}
                          />
                        )}
                      />
                    </Grid>

                    <Grid item xs={12} sm={6}>
                      <Controller
                        name="grade"
                        control={control}
                        rules={{ required: 'Grade/Year is required' }}
                        render={({ field }) => (
                          <TextField
                            {...field}
                            fullWidth
                            label="Grade/Year"
                            error={!!errors.grade}
                            helperText={errors.grade?.message}
                          />
                        )}
                      />
                    </Grid>

                    <Grid item xs={12}>
                      <Controller
                        name="experience"
                        control={control}
                        rules={{ required: 'Experience level is required' }}
                        render={({ field }) => (
                          <FormControl fullWidth error={!!errors.experience}>
                            <InputLabel>MUN Experience</InputLabel>
                            <Select {...field} label="MUN Experience">
                              {experienceLevels.map((level) => (
                                <MenuItem key={level} value={level}>
                                  {level}
                                </MenuItem>
                              ))}
                            </Select>
                          </FormControl>
                        )}
                      />
                    </Grid>

                    <Grid item xs={12} sm={4}>
                      <Controller
                        name="committee1"
                        control={control}
                        rules={{ required: 'First choice is required' }}
                        render={({ field }) => (
                          <FormControl fullWidth error={!!errors.committee1}>
                            <InputLabel>1st Choice Committee</InputLabel>
                            <Select {...field} label="1st Choice Committee">
                              {committees.map((committee) => (
                                <MenuItem key={committee} value={committee}>
                                  {committee}
                                </MenuItem>
                              ))}
                            </Select>
                          </FormControl>
                        )}
                      />
                    </Grid>

                    <Grid item xs={12} sm={4}>
                      <Controller
                        name="committee2"
                        control={control}
                        render={({ field }) => (
                          <FormControl fullWidth>
                            <InputLabel>2nd Choice Committee</InputLabel>
                            <Select {...field} label="2nd Choice Committee">
                              {committees.map((committee) => (
                                <MenuItem key={committee} value={committee}>
                                  {committee}
                                </MenuItem>
                              ))}
                            </Select>
                          </FormControl>
                        )}
                      />
                    </Grid>

                    <Grid item xs={12} sm={4}>
                      <Controller
                        name="committee3"
                        control={control}
                        render={({ field }) => (
                          <FormControl fullWidth>
                            <InputLabel>3rd Choice Committee</InputLabel>
                            <Select {...field} label="3rd Choice Committee">
                              {committees.map((committee) => (
                                <MenuItem key={committee} value={committee}>
                                  {committee}
                                </MenuItem>
                              ))}
                            </Select>
                          </FormControl>
                        )}
                      />
                    </Grid>

                    <Grid item xs={12}>
                      <Controller
                        name="dietaryRestrictions"
                        control={control}
                        render={({ field }) => (
                          <TextField
                            {...field}
                            fullWidth
                            label="Dietary Restrictions"
                            multiline
                            rows={2}
                            placeholder="Please list any dietary restrictions or allergies"
                          />
                        )}
                      />
                    </Grid>

                    <Grid item xs={12} sm={6}>
                      <Controller
                        name="emergencyContact"
                        control={control}
                        rules={{ required: 'Emergency contact is required' }}
                        render={({ field }) => (
                          <TextField
                            {...field}
                            fullWidth
                            label="Emergency Contact Name"
                            error={!!errors.emergencyContact}
                            helperText={errors.emergencyContact?.message}
                          />
                        )}
                      />
                    </Grid>

                    <Grid item xs={12} sm={6}>
                      <Controller
                        name="emergencyPhone"
                        control={control}
                        rules={{ required: 'Emergency contact phone is required' }}
                        render={({ field }) => (
                          <TextField
                            {...field}
                            fullWidth
                            label="Emergency Contact Phone"
                            error={!!errors.emergencyPhone}
                            helperText={errors.emergencyPhone?.message}
                          />
                        )}
                      />
                    </Grid>

                    <Grid item xs={12}>
                      <Controller
                        name="agreement"
                        control={control}
                        rules={{ required: 'You must agree to the terms' }}
                        render={({ field }) => (
                          <FormControlLabel
                            control={
                              <Checkbox
                                {...field}
                                checked={field.value || false}
                                color="primary"
                              />
                            }
                            label="I agree to the terms and conditions, code of conduct, and understand the registration fee policy."
                          />
                        )}
                      />
                      {errors.agreement && (
                        <Typography variant="caption\" color="error\" sx={{ ml: 1 }}>
                          {errors.agreement.message}
                        </Typography>
                      )}
                    </Grid>

                    <Grid item xs={12}>
                      <Button
                        type="submit"
                        variant="contained"
                        size="large"
                        fullWidth
                        sx={{
                          py: 2,
                          fontSize: '1.1rem',
                          fontWeight: 'bold',
                          backgroundColor: 'secondary.main',
                          '&:hover': {
                            backgroundColor: 'secondary.dark',
                          },
                        }}
                      >
                        Register for Conference
                      </Button>
                    </Grid>
                  </Grid>
                </form>
              </CardContent>
            </Card>
          </Stack>
        </motion.div>
      </Container>
    </Box>
  );
};

export default RegistrationForm;