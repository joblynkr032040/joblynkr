/* eslint-disable no-unused-vars */

import React from 'react';
import { Box, Card, Typography, Button, Grid, Chip } from '@mui/material';
import { motion } from 'framer-motion';
import CheckCircleIcon from '@mui/icons-material/CheckCircle';
import { useNavigate } from 'react-router-dom';
import { pricingPlans } from '../../assets/planInfo';

const PricingCard = ({ plan, index }) => {
  const navigate = useNavigate();

  return (
    <motion.div
      initial={{ opacity: 0, y: 30 }}
      whileInView={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.5, delay: index * 0.2 }}
      viewport={{ once: true }}
      style={{ height: '100%', width: '100%' }}
    >
      <Card
        sx={{
          height: '100%',
          display: 'flex',
          flexDirection: 'column',
          justifyContent: 'space-between',
          background: '#ffffff',
          color: '#000',
          p: 3,
          borderRadius: 4,
          boxShadow: plan.highlight ? 6 : 3,
          border: plan.highlight ? '2px solid #f59e0b' : '1px solid #e0e0e0',
          transition: 'all 0.3s ease',
          '&:hover': {
            transform: 'translateY(-6px)',
            boxShadow: 8,
          },
          position: 'relative',
        }}
      >
        <Box>
          <Typography variant="h5" fontWeight={600} mb={1}>
            {plan.title}
          </Typography>

          {plan.highlight && (
            <Chip
              label="Popular"
              color="warning"
              size="small"
              sx={{ position: 'absolute', top: 16, right: 16 }}
            />
          )}

          {plan.title === 'Standard' ? (
            <Box display="flex" flexDirection="column" alignItems="start" my={2}>
              <Typography variant="body1" sx={{ textDecoration: 'line-through', color: '#888' }}>
                $500
              </Typography>
              <Typography variant="h4" fontWeight={700} sx={{ color: '#d97706' }}>
                $200
              </Typography>
              <Chip label="Limited Offer" size="small" color="warning" sx={{ mt: 1 }} />
            </Box>
          ) : plan.title === 'Premium' ? (
            <Box display="flex" flexDirection="column" alignItems="start" my={2}>
              <Typography variant="body1" sx={{ textDecoration: 'line-through', color: '#888' }}>
                $500
              </Typography>
              <Typography variant="h5" fontWeight={700} sx={{ color: '#d97706' }}>
                $200 <span style={{ fontWeight: 400 }}>+ $100/interview</span>
              </Typography>
              <Typography variant="caption" sx={{ mt: 1, color: '#666' }}>
                Base fee + only pay when interviews are scheduled.
              </Typography>
              <Chip label="Pay-As-You-Succeed" size="small" color="success" sx={{ mt: 1 }} />
            </Box>
          ) : (
            <Typography variant="h4" fontWeight={700} my={2}>
              {plan.price}
            </Typography>
          )}

          <Typography variant="subtitle1" mb={2}>
            {plan.description}
          </Typography>

          <Box component="ul" sx={{ listStyle: 'none', p: 0, m: 0, mt: 2 }}>
            {plan.features.map((feature, idx) => {
              const isSubItem = feature.trim().startsWith('•');
              return (
                <li key={idx}>
                  <Box display="flex" alignItems="start" mb={1} ml={isSubItem ? 3 : 0}>
                    {!isSubItem && (
                      <CheckCircleIcon sx={{ color: 'green', fontSize: 20, mt: '2px', mr: 1 }} />
                    )}
                    <Typography
                      variant="body1"
                      sx={{
                        fontWeight: isSubItem ? 400 : 500,
                        color: isSubItem ? '#444' : 'inherit',
                        fontSize: '0.95rem',
                        lineHeight: 1.5,
                      }}
                    >
                      {feature.replace('• ', '')}
                    </Typography>
                  </Box>
                </li>
              );
            })}
          </Box>
        </Box>

        <Box mt={4}>
          <Button
            variant="contained"
            fullWidth
            sx={{
              backgroundColor: '#000',
              color: '#fff',
              '&:hover': {
                backgroundColor: '#333',
              },
              mt: 2,
            }}
            onClick={() => navigate('/contact')}
          >
            {plan.buttonText}
          </Button>
        </Box>
      </Card>
    </motion.div>
  );
};

const PricingComponent = () => {
  return (
    <Box px={2} py={5} sx={{ backgroundColor: '#f9fafb' }}>
      <Typography
        variant="h4"
        fontWeight={700}
        textAlign="center"
        mb={6}
        sx={{ fontSize: { xs: '1.8rem', md: '2.5rem' } }}
      >
        Our Plans
      </Typography>

      <Grid
        container
        spacing={4}
        justifyContent="center"
        alignItems="stretch"
        sx={{ maxWidth: '1200px', mx: 'auto' }}
      >
        {pricingPlans.map((plan, index) => (
          <Grid item xs={12} sm={6} md={4} key={index} sx={{ display: 'flex' }}>
            <PricingCard plan={plan} index={index} />
          </Grid>
        ))}
      </Grid>
    </Box>
  );
};

export default PricingComponent;
