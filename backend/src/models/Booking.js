const mongoose = require('mongoose');

/**
 * Booking Model Schema
 * Represents a car rental booking
 */
const bookingSchema = new mongoose.Schema({
  userName: {
    type: String,
    required: [true, 'User name is required'],
    trim: true,
    maxLength: [100, 'Name cannot exceed 100 characters']
  },
  userEmail: {
    type: String,
    required: [true, 'User email is required'],
    trim: true,
    lowercase: true,
    validate: {
      validator: function(v) {
        return /^\w+([.-]?\w+)*@\w+([.-]?\w+)*(\.\w{2,3})+$/.test(v);
      },
      message: 'Please provide a valid email address'
    }
  },
  userPhone: {
    type: String,
    trim: true,
    validate: {
      validator: function(v) {
        return !v || /^[0-9]{10}$/.test(v.replace(/\D/g, ''));
      },
      message: 'Please provide a valid phone number'
    }
  },
  carId: {
    type: mongoose.Schema.Types.ObjectId,
    ref: 'Car',
    required: [true, 'Car ID is required']
  },
  startDate: {
    type: Date,
    required: [true, 'Start date is required'],
    validate: {
      validator: function(v) {
        return v >= new Date().setHours(0, 0, 0, 0);
      },
      message: 'Start date must be today or in the future'
    }
  },
  endDate: {
    type: Date,
    required: [true, 'End date is required'],
    validate: {
      validator: function(v) {
        return v > this.startDate;
      },
      message: 'End date must be after start date'
    }
  },
  totalPrice: {
    type: Number,
    required: true,
    min: [0, 'Total price cannot be negative']
  },
  status: {
    type: String,
    enum: {
      values: ['pending', 'confirmed', 'cancelled', 'completed'],
      message: 'Status must be one of: pending, confirmed, cancelled, completed'
    },
    default: 'confirmed'
  },
  specialRequests: {
    type: String,
    maxLength: [500, 'Special requests cannot exceed 500 characters']
  }
}, {
  timestamps: true
});

// Index for faster queries
bookingSchema.index({ carId: 1, startDate: 1, endDate: 1 });
bookingSchema.index({ userEmail: 1 });
bookingSchema.index({ status: 1 });

module.exports = mongoose.model('Booking', bookingSchema);