import React from "react";
import { Box, Typography, Link } from "@mui/material";
import EmailIcon from "@mui/icons-material/Email";

const Footer = () => {
  const currentYear = new Date().getFullYear();

  return (
    <footer className="bg-white border-t border-gray-200 py-12 text-gray-700">
      <div className="max-w-7xl mx-auto px-4 grid gap-10 grid-cols-1 md:grid-cols-3">
        {/* Logo + About */}
        <Box component="section" className="space-y-4">
          <div className="flex items-center gap-2">
            <img
              src="/officialLogo.png"
              alt="JobLynkr Logo"
              className="h-8 w-8"
            />
            <Typography variant="h6" className="font-bold">
              JobLynkr
            </Typography>
          </div>
          <Typography
            variant="body2"
            className="text-sm text-gray-600 leading-relaxed"
          >
            Your personal brand partner for global jobs.
            <br /> We do the work — you get the interviews.
          </Typography>
          <address className="not-italic flex items-center gap-2 text-blue-600">
            <EmailIcon fontSize="small" />
            <Link href="mailto:contact@lazylines.ai" underline="hover">
              email coming soon...
            </Link>
          </address>
        </Box>

        {/* Navigation */}
        <nav aria-label="Footer Navigation">
          <Typography variant="subtitle1" className="font-semibold mb-4">
            Navigation
          </Typography>
          <ul className="space-y-2 text-sm">
            {[
              // { label: "Pricing", href: "#" },
              { label: "Support", href: "/contact" },
              { label: "Affiliate Program", href: "#" },
              { label: "Blog", href: "/blog" },
              { label: "Changelog", href: "#" },
            ].map((item) => (
              <li key={item.label}>
                <Link
                  href={item.href}
                  underline="hover"
                  className="text-gray-600 hover:text-gray-900"
                >
                  {item.label}
                </Link>
              </li>
            ))}
          </ul>
        </nav>

        {/* Legal */}
        <nav aria-label="Legal">
          <Typography variant="subtitle1" className="font-semibold mb-4">
            Legal
          </Typography>
          <ul className="space-y-2 text-sm">
            {[
              { label: "Privacy Policy", href: "#" },
              { label: "Terms & Conditions", href: "#" },
              { label: "Refund Policy", href: "#" },
              { label: "Affiliate TOS", href: "#" },
            ].map((item) => (
              <li key={item.label}>
                <Link
                  href={item.href}
                  underline="hover"
                  className="text-gray-600 hover:text-gray-900"
                >
                  {item.label}
                </Link>
              </li>
            ))}
          </ul>
        </nav>
      </div>

      {/* Copyright */}
      <div className="mt-10 text-center text-xs text-gray-400">
        © {currentYear} JobLynkr. All rights reserved.
      </div>
    </footer>
  );
};

export default Footer;
