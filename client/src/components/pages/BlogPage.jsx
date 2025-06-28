import React from 'react';
import { Box, Typography, Container } from '@mui/material';
import ConstructionIcon from '@mui/icons-material/Construction';

function BlogPage() {
  return (
    <Container maxWidth="md" sx={{ minHeight: '80vh', display: 'flex', alignItems: 'center', justifyContent: 'center' }}>
      <Box
        textAlign="center"
        p={4}
        borderRadius={4}
        bgcolor="#f5f5f5"
        boxShadow={3}
      >
        <ConstructionIcon sx={{ fontSize: 60, color: '#f57c00', mb: 2 }} />
        <Typography variant="h4" gutterBottom>
          Blog Page Under Maintenance
        </Typography>
        <Typography variant="body1" color="text.secondary">
          We're currently working on improving this section. Please check back later.
        </Typography>
      </Box>
    </Container>
  );
}

export default BlogPage;
