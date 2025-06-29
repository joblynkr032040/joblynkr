import mongoose from 'mongoose';

const ContactFormSchema = new mongoose.Schema({
  firstName: {
    type: String,
    required: true,
    trim: true
  },
  email: {
    type: String,
    required: true,
    lowercase: true,
    trim: true
  },
  countryCode: {
    type: String,
    required: true,
    trim: true
  },
  phoneNumber: {
    type: String,
    required: true,
    trim: true
  },
  message: {
    type: String,
    required: true
  },
  professionalBackground: {
    type: String,
    enum: ['IT', 'Design', 'Finance', 'Sales', 'Other'],
    required: true
  },
  interestedPlan: {
    type: String,
    enum: ['Standard', 'Premium', 'Custom'],
    required: false,
    trim: true
  },
  createdAt: {
    type: Date,
    default: Date.now
  }
});

export default mongoose.model('ContactForm', ContactFormSchema);
