import React, { useState } from 'react';
import {
  AppBar,
  Toolbar,
  Button,
  Drawer,
  IconButton,
  Box,
  Typography,
  List,
  ListItem,
  ListItemText
} from '@mui/material';
import MenuIcon from '@mui/icons-material/Menu';
import CloseIcon from '@mui/icons-material/Close';
import { Link } from 'react-router-dom';

const navLinks = [
  { label: 'Sign Up', path: '/contact' },
  { label: 'Sign In', path: '/contact' },
  // { label: 'Pricing', path: '/pricing' },
  { label: 'Blog', path: '/blog' },
  { label: 'Get in Touch', path: '/contact' },
];

const Navbar = () => {
  const [drawerOpen, setDrawerOpen] = useState(false);

  return (
    <>
      <AppBar position="relative" elevation={0} sx={{ backgroundColor: 'transparent', boxShadow: 'none', py: 1 }}>
        <Toolbar className="w-full max-w-7xl mx-auto flex justify-between items-center">
          {/* Logo */}
       <Box className="flex items-center space-x-2">
        <Link to="/" style={{ textDecoration: 'none' }}>
          <Typography
            className="rounded-xl"
            variant="h6"
            sx={{
              color: '#fff',
              background: '#2979ff',
              px: 2,
              py: 1,
              fontFamily: 'Inter, sans-serif',
              fontWeight: 700,
              fontSize: '1rem',
            }}
          >
            JobLynkr
          </Typography>
        </Link>
      </Box>

          {/* Desktop Nav Links */}
          <Box className="hidden md:flex space-x-8 text-black text-[16px] font-medium items-center">
            {/* <Button href="/pricing" color="inherit">Pricing</Button> */}
            <Button href="/blog" color="inherit">Blog</Button>
            <Button href="/contact" color="inherit">Get in Touch</Button>
            {/* <Button href="/signin" sx={{ color: '#000', fontWeight: 500 }}>Sign In</Button> */}
            <Button
              href="/contact"
              sx={{
                backgroundColor: '#0A0628',
                color: '#fff',
                fontWeight: 600,
                borderRadius: '12px',
                textTransform: 'none',
                px: 3,
                py: 1,
                '&:hover': { backgroundColor: '#1B1348' }
              }}
            >
              Start Free Trial
            </Button>
          </Box>

          {/* Mobile Hamburger */}
          <Box className="md:hidden">
            <IconButton onClick={() => setDrawerOpen(true)}>
              <MenuIcon sx={{ color: '#0A0628' }} />
            </IconButton>
          </Box>
        </Toolbar>
      </AppBar>

      {/* Drawer for Mobile */}
      <Drawer anchor="right" open={drawerOpen} onClose={() => setDrawerOpen(false)}>
        <Box
          sx={{ width: 250, padding: 2 }}
          role="presentation"
          className="flex flex-col h-full"
        >
          {/* Top Bar in Drawer */}
          <Box className="flex items-center justify-between mb-4">
            <Box className="flex items-center space-x-2">
              <Box>
                <img src="/logo192.png" alt="logo" className="w-17 h-16" />
              </Box>
              {/* <Typography variant="h6" sx={{ fontWeight: 'bold', color: '#000' }}>
                Joblinkr
              </Typography> */}
            </Box>
            <IconButton onClick={() => setDrawerOpen(false)}>
              <CloseIcon />
            </IconButton>
          </Box>

          {/* Nav Links in Drawer */}
          <List>
            {navLinks.map((item, index) => (
              <ListItem
                key={index}
                button
                component="a"
                href={item.path}
                className="text-gray-600 hover:text-black"
              >
                <ListItemText primary={item.label} primaryTypographyProps={{ fontSize: 16 }} />
              </ListItem>
            ))}
          </List>
        </Box>
      </Drawer>
    </>
  );
};

export default Navbar;
