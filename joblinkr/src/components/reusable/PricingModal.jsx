import React from 'react';
import { Box, Card, CardContent, Typography, Button, Grid, Chip } from '@mui/material';

const pricingPlans = [
  {
    title: 'Standard',
    price: '$0',
    description: 'Perfect for job seekers starting out',
    features: [
      'Resume creation',
      'Cover letter creation',
      '1 free mock interview',
      'LinkedIn profile creation'
    ],
    buttonText: 'Get started for free',
    highlight: false,
    background: '#fff',
    color: '#000'
  },
  {
    title: 'Premium',
    price: '$100+',
    description: 'Ideal for interview-ready clients',
    features: [
      'Job application support',
      '$100 per interview call received'
    ],
    buttonText: 'Get started with Premium',
    highlight: true,
    background: '#f9f9f9',
    color: '#000'
  },
  {
    title: 'Project',
    price: 'Custom',
    description: 'Showcase your technical skills with live projects',
    features: [
      'Normal Project: $60',
      'Standard Project: $130',
      'Elite Project: $170',
      'Project explanation included'
    ],
    buttonText: 'Start your project',
    highlight: false,
    background: '#000',
    color: '#fff'
  }
];


const PricingCard = ({ plan }) => (
  <Card
    sx={{
      background: plan.background,
      color: plan.color,
      p: 3,
      minHeight: 500,
      borderRadius: 3,
      boxShadow: plan.highlight ? 6 : 2,
      border: plan.highlight ? '2px solid #d97706' : 'none',
      position: 'relative'
    }}
  >
    <CardContent>
      <Typography variant="h5" fontWeight={600} mb={1}>{plan.title}</Typography>
      {plan.highlight && <Chip label="Popular" color="warning" size="small" sx={{ position: 'absolute', top: 16, right: 16 }} />}
      <Typography variant="h4" fontWeight={700} my={2}>{plan.price}</Typography>
      <Typography variant="subtitle1" mb={2}>{plan.description}</Typography>
      <Box component="ul" sx={{ listStyle: 'none', p: 0, m: 0, lineHeight: 2 }}>
        {plan.features.map((feature, idx) => (
          <li key={idx}>
            <Typography variant="body1">{'\u2713'} {feature}</Typography>
          </li>
        ))}
      </Box>
    </CardContent>
    <Box px={3} pb={3}>
      <Button
        variant="contained"
        fullWidth
        sx={{
          backgroundColor: plan.color === '#fff' ? '#fff' : '#000',
          color: plan.color === '#fff' ? '#000' : '#fff',
          '&:hover': {
            backgroundColor: plan.color === '#fff' ? '#e0e0e0' : '#333'
          },
          mt: 2
        }}
      >
        {plan.buttonText}
      </Button>
    </Box>
  </Card>
);

const PricingComponent = () => {
  return (
    <Box px={4} py={8}>
      <Grid container spacing={4} justifyContent="center">
        {pricingPlans.map((plan, index) => (
          <Grid item xs={12} md={4} key={index}>
            <PricingCard plan={plan} />
          </Grid>
        ))}
      </Grid>
    </Box>
  );
};

export default PricingComponent;
