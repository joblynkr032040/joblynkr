// components/Layout.jsx
import React from 'react';
import { Outlet } from 'react-router-dom';
import Navbar from './Navbar';     // Include if used globally
import Footer from './Footer';     // Include if you want it on all pages
import Container from './Container';

const Layout = () => {
  return (
    <>
      {/* Optional: Global Navbar */}
      {/* <Navbar /> */}

      {/* Main Content */}
      <main className="min-h-screen">
        <Container>
          <Outlet />
        </Container>
      </main>

      {/* Global Footer */}
      <Footer />
    </>
  );
};

export default Layout;
