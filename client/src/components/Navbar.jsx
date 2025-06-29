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
  { label: 'Home', path: '/' },
  { label: 'Blog', path: '/blog' },
  { label: 'Get in Touch', path: '/contact' },
  { label: 'Sign Up', path: '/contact' },
  { label: 'Sign In', path: '/contact' },
];

const Navbar = () => {
  const [drawerOpen, setDrawerOpen] = useState(false);

  return (
    <>
      <AppBar
        position="relative"
        elevation={0}
        sx={{ backgroundColor: 'transparent', boxShadow: 'none', py: 1 }}
      >
        <Toolbar className="w-full max-w-7xl mx-auto flex justify-between items-center">
          {/* Logo */}
          <Box className="flex items-center space-x-2">
            <Link to="/" style={{ textDecoration: 'none' }}>
              <Typography
                variant="h6"
                sx={{
                  color: '#fff',
                  background: '#2979ff',
                  px: 2,
                  py: 1,
                  fontFamily: 'Inter, sans-serif',
                  fontWeight: 700,
                  fontSize: '1rem',
                  borderRadius: '8px'
                }}
              >
                JobLynkr
              </Typography>
            </Link>
          </Box>

          {/* Desktop Nav Links */}
          <Box className="hidden md:flex space-x-8 text-black text-[16px] font-medium items-center">
            {navLinks.slice(0, 3).map((item, index) => (
              <Link to={item.path} key={index}>
                <Button color="inherit">{item.label}</Button>
              </Link>
            ))}

            {/* CTA Button */}
            <Link to="/contact">
              <Button
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
            </Link>
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
        <Box sx={{ width: 250, padding: 2 }} className="flex flex-col h-full">
          {/* Drawer Top Bar */}
          <Box className="flex items-center justify-between mb-4">
            <Box className="flex items-center space-x-2">
              <img src="/logo192.png" alt="logo" className="w-12 h-12" />
            </Box>
            <IconButton onClick={() => setDrawerOpen(false)}>
              <CloseIcon />
            </IconButton>
          </Box>

          {/* Drawer Nav Links */}
          <List>
            {navLinks.map((item, index) => (
              <ListItem
                key={index}
                disablePadding
                onClick={() => setDrawerOpen(false)}
              >
                <Link to={item.path} className="w-full">
                  <ListItemText
                    primary={item.label}
                    primaryTypographyProps={{
                      fontSize: 16,
                      sx: {
                        px: 2,
                        py: 1,
                        color: '#555',
                        '&:hover': { color: '#000' }
                      }
                    }}
                  />
                </Link>
              </ListItem>
            ))}
          </List>
        </Box>
      </Drawer>
    </>
  );
};

export default Navbar;
