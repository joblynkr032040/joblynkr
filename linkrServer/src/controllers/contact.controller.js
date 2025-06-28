import ContactForm from "../modals/ContactFormSchema.js"
import { sendEmail } from '../utils/sendEmail.js';
import { clientEmailHtml } from '../utils/clientEmailHtml.js';
import { adminEmailHtml } from '../utils/adminEmailHtml.js';

export const submitContactForm = async (req, res) => {
  try {
    const {
      firstName,
      email,
      countryCode,
      phoneNumber,
      message,
      professionalBackground
    } = req.body;

    const newEntry = new ContactForm({
      firstName,
      email,
      countryCode,
      phoneNumber,
      message,
      professionalBackground
    });

    const response = await newEntry.save();

    if (!response) {
      return res.status(500).json({
        error: "Failed to save contact form"
      });
    }

    res.status(201).json({ message: 'Form submitted successfully.' });

    const fullPhone = `${countryCode} ${phoneNumber}`;

    const clientHtml = clientEmailHtml({
      firstName,
      email,
      phoneNumber: fullPhone,
      professionalBackground,
      message
    });

    const adminHtml = adminEmailHtml({
      firstName,
      email,
      phoneNumber: fullPhone,
      professionalBackground,
      message
    });

    try {
      await sendEmail(email, 'We Received Your Request', clientHtml);
    } catch (emailErr) {
      console.error('Failed to send email to user:', emailErr);
    }

    try {
      await sendEmail(process.env.ADMIN_EMAIL, 'New Contact Form Submission', adminHtml);
    } catch (adminEmailErr) {
      console.error('Failed to send email to admin:', adminEmailErr);
    }

  } catch (error) {
    console.error('Error saving contact form:', error);
    res.status(500).json({ error: 'Server error. Try again later.' });
  }
};
