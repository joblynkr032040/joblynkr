/* eslint-disable no-unused-vars */

import React, { useEffect, useRef, useState } from "react";
import {
  TextField,
  Button,
  MenuItem,
  Radio,
  RadioGroup,
  FormControlLabel,
  FormLabel,
  FormControl,
  createTheme,
  ThemeProvider,
  Snackbar,
  Alert
} from "@mui/material";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import { countryCodes } from "../assets/Code";

gsap.registerPlugin(ScrollTrigger);

const whiteTextTheme = createTheme({
  palette: {
    mode: "dark",
    primary: { main: "#ffffff" },
    text: { primary: "#ffffff" },
  },
});

const ContactForm = () => {
  const formRef = useRef(null);
  const [formData, setFormData] = useState({
    firstName: "",
    lastName: "",
    email: "",
    countryCode: "+91",
    phoneNumber: "",
    message: "",
    professionalBackground: ""
  });

  const [snack, setSnack] = useState({ open: false, message: '', severity: 'success' });

  useEffect(() => {
    const formElements = gsap.utils.toArray(".form-item");
    gsap.set(formElements, { opacity: 0, y: 40 });

    ScrollTrigger.batch(formElements, {
      onEnter: (batch) =>
        gsap.to(batch, {
          opacity: 1,
          y: 0,
          stagger: 0.15,
          duration: 0.8,
          ease: "power3.out",
        }),
      start: "top 85%",
      once: true,
    });
  }, []);

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData((prev) => ({
      ...prev,
      [name]: value,
    }));
  };

  const handleSubmit = async () => {
    const payload = {
      firstName: formData.firstName,
      lastName: formData.lastName,
      email: formData.email,
      countryCode: formData.countryCode,
      phoneNumber: formData.phoneNumber,
      message: formData.message,
      professionalBackground: formData.professionalBackground
    };

    try {
      const res = await fetch(`${import.meta.env.VITE_API_BASE_URL}/contact`, {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(payload)
      });

      const data = await res.json();

      if (res.ok) {
        setSnack({ open: true, message: "Form submitted successfully!", severity: 'success' });
        setFormData({
          firstName: "",
          lastName: "",
          email: "",
          countryCode: "+91",
          phoneNumber: "",
          message: "",
          professionalBackground: ""
        });
      } else {
        setSnack({ open: true, message: data.error || "Something went wrong", severity: 'error' });
      }
    } catch (err) {
      setSnack({ open: true, message: "Server error. Try again later.", severity: 'error' });
    }
  };

  return (
    <ThemeProvider theme={whiteTextTheme}>
      <div ref={formRef} className="text-white space-y-6">
        {/* Full Name */}
        <div className="flex gap-4 form-item">
          <TextField
            label="First name"
            name="firstName"
            value={formData.firstName}
            onChange={handleChange}
            variant="outlined"
            fullWidth
            size="small"
            InputLabelProps={{ style: { color: "#fff" } }}
            InputProps={{ style: { color: "#fff" } }}
          />
          <TextField
            label="Last name"
            name="lastName"
            value={formData.lastName}
            onChange={handleChange}
            variant="outlined"
            fullWidth
            size="small"
            InputLabelProps={{ style: { color: "#fff" } }}
            InputProps={{ style: { color: "#fff" } }}
          />
        </div>

        {/* Email */}
        <div className="form-item">
          <TextField
            label="Email"
            name="email"
            value={formData.email}
            onChange={handleChange}
            variant="outlined"
            fullWidth
            size="small"
            placeholder="name@example.com"
            InputLabelProps={{ style: { color: "#fff" } }}
            InputProps={{ style: { color: "#fff" } }}
          />
        </div>

        {/* Phone Number */}
        <div className="flex gap-4 form-item">
          <TextField
            select
            label="Code"
            name="countryCode"
            value={formData.countryCode}
            onChange={handleChange}
            size="small"
            className="w-32"
            InputLabelProps={{ style: { color: "#fff" } }}
            InputProps={{ style: { color: "#fff" } }}
          >
            {countryCodes.map((option) => (
              <MenuItem key={option.code} value={option.code}>
                {option.label} {option.code}
              </MenuItem>
            ))}
          </TextField>
          <TextField
            label="Phone number"
            name="phoneNumber"
            value={formData.phoneNumber}
            onChange={handleChange}
            variant="outlined"
            fullWidth
            size="small"
            placeholder="0203 0407291"
            InputLabelProps={{ style: { color: "#fff" } }}
            InputProps={{ style: { color: "#fff" } }}
          />
        </div>

        {/* Message */}
        <div className="form-item">
          <TextField
            label="Message"
            name="message"
            value={formData.message}
            onChange={handleChange}
            variant="outlined"
            fullWidth
            size="small"
            multiline
            rows={4}
            placeholder="Hello JobLinkr team,"
            InputLabelProps={{ style: { color: "#fff" } }}
            InputProps={{ style: { color: "#fff" } }}
          />
        </div>

        {/* Professional Background */}
        <div className="form-item">
          <FormControl component="fieldset">
            <FormLabel component="legend" style={{ color: "#fff" }}>
              Professional Background
            </FormLabel>
            <RadioGroup
              row
              name="professionalBackground"
              value={formData.professionalBackground}
              onChange={handleChange}
            >
              <FormControlLabel value="IT" control={<Radio style={{ color: "#fff" }} />} label="IT" />
              <FormControlLabel value="Design" control={<Radio style={{ color: "#fff" }} />} label="Design" />
              <FormControlLabel value="Finance" control={<Radio style={{ color: "#fff" }} />} label="Finance" />
              <FormControlLabel value="Sales" control={<Radio style={{ color: "#fff" }} />} label="Sales" />
              <FormControlLabel value="Other" control={<Radio style={{ color: "#fff" }} />} label="Other" />
            </RadioGroup>
          </FormControl>
        </div>

        {/* Buttons */}
        <div className="flex gap-4 form-item">
          <Button variant="contained" color="primary" fullWidth onClick={handleSubmit}>
            Send message
          </Button>
          {/* <Button variant="outlined" color="primary" fullWidth>
            Schedule a call
          </Button> */}
        </div>

        {/* Snackbar for feedback */}
       <Snackbar
  open={snack.open}
  autoHideDuration={4000}
  onClose={() => setSnack({ ...snack, open: false })}
  anchorOrigin={{ vertical: 'bottom', horizontal: 'center' }}
  TransitionProps={{ onExited: () => setSnack({ ...snack, open: false }) }}
>
  <Alert
    severity={snack.severity}
    variant="filled"
    onClose={() => setSnack({ ...snack, open: false })}
    sx={{
      width: '100%',
      borderRadius: '12px',
      boxShadow: '0 4px 20px rgba(0,0,0,0.2)',
      fontSize: '1rem',
      alignItems: 'center',
      backgroundColor:
        snack.severity === 'success' ? '#43a047' :
        snack.severity === 'error' ? '#e53935' :
        snack.severity === 'warning' ? '#fdd835' : '#1e88e5',
      color: '#fff'
    }}
    iconMapping={{
      success: <span>✅</span>,
      error: <span>❌</span>,
      warning: <span>⚠️</span>,
      info: <span>ℹ️</span>,
    }}
  >
    {snack.message}
  </Alert>
</Snackbar>

      </div>
    </ThemeProvider>
  );
};

export default ContactForm;
