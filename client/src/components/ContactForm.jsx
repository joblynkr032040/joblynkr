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
  Alert,
  FormHelperText,
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

const initialForm = {
  firstName: "",
  lastName: "",
  email: "",
  countryCode: "+91",
  phoneNumber: "",
  message: "",
  professionalBackground: "",
};

const ContactForm = () => {
  const formRef = useRef(null);
  const [formData, setFormData] = useState(initialForm);
  const [formErrors, setFormErrors] = useState({});
  const [snack, setSnack] = useState({ open: false, message: "", severity: "success" });

  useEffect(() => {
    const elements = gsap.utils.toArray(".form-item");
    gsap.set(elements, { opacity: 0, y: 40 });
    ScrollTrigger.batch(elements, {
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
    setFormData((prev) => ({ ...prev, [name]: value }));
    setFormErrors((prev) => ({ ...prev, [name]: "" })); // Clear error on change
  };

  const validateForm = () => {
    const errors = {};

    if (!formData.firstName.trim()) errors.firstName = "First name is required.";
    if (!formData.lastName.trim()) errors.lastName = "Last name is required.";
    if (!formData.email.trim()) {
      errors.email = "Email is required.";
    } else if (!/\S+@\S+\.\S+/.test(formData.email)) {
      errors.email = "Enter a valid email.";
    }
    if (!formData.phoneNumber.trim()) errors.phoneNumber = "Phone number is required.";
    if (!formData.message.trim()) errors.message = "Message cannot be empty.";
    if (!formData.professionalBackground) errors.professionalBackground = "Select your background.";

    return errors;
  };

  const handleSubmit = async () => {
    const errors = validateForm();
    if (Object.keys(errors).length > 0) {
      setFormErrors(errors);
      setSnack({ open: true, message: "Please fill all required fields.", severity: "error" });
      return;
    }

    try {
      const res = await fetch(`${import.meta.env.VITE_API_BASE_URL}/contact`, {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(formData),
      });

      const data = await res.json();
      if (res.ok) {
        setSnack({ open: true, message: "Form submitted successfully!", severity: "success" });
        setFormData(initialForm);
        setFormErrors({});
      } else {
        setSnack({ open: true, message: data?.error || "Something went wrong", severity: "error" });
      }
    } catch {
      setSnack({ open: true, message: "Server error. Try again later.", severity: "error" });
    }
  };

  const inputStyle = {
    InputLabelProps: { style: { color: "#fff" } },
    InputProps: { style: { color: "#fff" } },
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
            {...inputStyle}
            error={!!formErrors.firstName}
            helperText={formErrors.firstName}
          />
          <TextField
            label="Last name"
            name="lastName"
            value={formData.lastName}
            onChange={handleChange}
            variant="outlined"
            fullWidth
            size="small"
            {...inputStyle}
            error={!!formErrors.lastName}
            helperText={formErrors.lastName}
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
            {...inputStyle}
            error={!!formErrors.email}
            helperText={formErrors.email}
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
            {...inputStyle}
          >
            {countryCodes.map(({ code, label }) => (
              <MenuItem key={code} value={code}>
                {label} {code}
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
            {...inputStyle}
            error={!!formErrors.phoneNumber}
            helperText={formErrors.phoneNumber}
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
            placeholder="Hello JobLynkr team,"
            {...inputStyle}
            error={!!formErrors.message}
            helperText={formErrors.message}
          />
        </div>

        {/* Professional Background */}
        <div className="form-item">
          <FormControl component="fieldset" error={!!formErrors.professionalBackground}>
            <FormLabel component="legend" style={{ color: "#fff" }}>
              Professional Background
            </FormLabel>
            <RadioGroup
              row
              name="professionalBackground"
              value={formData.professionalBackground}
              onChange={handleChange}
            >
              {["IT", "Design", "Finance", "Sales", "Other"].map((field) => (
                <FormControlLabel
                  key={field}
                  value={field}
                  control={<Radio style={{ color: "#fff" }} />}
                  label={field}
                />
              ))}
            </RadioGroup>
            {formErrors.professionalBackground && (
              <FormHelperText>{formErrors.professionalBackground}</FormHelperText>
            )}
          </FormControl>
        </div>

        {/* Submit Button */}
        <div className="flex gap-4 form-item">
          <Button variant="contained" color="primary" fullWidth onClick={handleSubmit}>
            Schedule My Free Career Call
          </Button>
        </div>

        {/* Snackbar */}
        <Snackbar
          open={snack.open}
          autoHideDuration={4000}
          onClose={() => setSnack((prev) => ({ ...prev, open: false }))}
          anchorOrigin={{ vertical: "top", horizontal: "center" }}
        >
          <Alert
            severity={snack.severity}
            variant="filled"
            onClose={() => setSnack((prev) => ({ ...prev, open: false }))}
            sx={{
              width: "100%",
              borderRadius: "12px",
              boxShadow: "0 4px 20px rgba(0,0,0,0.2)",
              fontSize: "1rem",
              alignItems: "center",
              backgroundColor:
                snack.severity === "success"
                  ? "#43a047"
                  : snack.severity === "error"
                  ? "#e53935"
                  : snack.severity === "warning"
                  ? "#fdd835"
                  : "#1e88e5",
              color: "#fff",
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
