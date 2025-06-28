import React from "react";
import { Box, Typography, Link } from "@mui/material";
import EmailIcon from "@mui/icons-material/Email";

const Footer = () => {
  return (
    <footer className="bg-white py-12 border-t border-gray-200">
      <div className="max-w-7xl mx-auto px-4 grid grid-cols-1 md:grid-cols-3 gap-8 text-gray-700">
        {/* Logo & Description */}
        <Box className="space-y-4">
          <div className="flex items-center space-x-2">
            <img
              src="/Joblinkr.jpg"
              alt="LazyLines Logo"
              className="h-8 w-8"
            />
            <Typography variant="h6" className="font-bold">
              JobLinkr
            </Typography>
          </div>
          <Typography variant="body2" className="text-sm text-gray-600 leading-relaxed">
            Your personal brand partner for global jobs. We do the work — you get the interviews.
          </Typography>
          <div className="flex items-center space-x-2 text-blue-600">
            <EmailIcon fontSize="small" />
            <Link href="mailto:contact@lazylines.ai" underline="hover">
              joblinkr.connect@gmail.com
            </Link>
          </div>
        </Box>

        {/* Navigation Links */}
        <Box>
          <Typography variant="subtitle1" className="font-semibold mb-4">
            Navigation
          </Typography>
          <ul className="space-y-2 text-sm">
            {["Pricing", "Support", "Affiliate Program", "Blog", "Changelog"].map((item) => (
              <li key={item}>
                <Link href="#" underline="hover" className="text-gray-600 hover:text-gray-900">
                  {item}
                </Link>
              </li>
            ))}
          </ul>
        </Box>

        {/* Legal Links */}
        <Box>
          <Typography variant="subtitle1" className="font-semibold mb-4">
            Legal
          </Typography>
          <ul className="space-y-2 text-sm">
            {["Privacy Policy", "Terms & Conditions", "Refund Policy", "Affiliate TOS"].map((item) => (
              <li key={item}>
                <Link href="#" underline="hover" className="text-gray-600 hover:text-gray-900">
                  {item}
                </Link>
              </li>
            ))}
          </ul>
        </Box>
      </div>

      {/* Copyright */}
      <div className="text-center text-xs text-gray-400 mt-10">
        © {new Date().getFullYear()} JobLinkr. All Rights Reserved.
      </div>
    </footer>
  );
};

export default Footer;
