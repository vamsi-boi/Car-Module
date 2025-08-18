const mongoose = require('mongoose');

/**
 * Car Model Schema
 * Represents a car available for rental
 */
const carSchema = new mongoose.Schema({
  name: {
    type: String,
    required: [true, 'Car name is required'],
    trim: true,
    maxLength: [100, 'Car name cannot exceed 100 characters']
  },
  type: {
    type: String,
    required: [true, 'Car type is required'],
    enum: {
      values: ['Sedan', 'SUV', 'Hatchback', 'Luxury', 'Sports', 'Electric'],
      message: 'Car type must be one of: Sedan, SUV, Hatchback, Luxury, Sports, Electric'
    }
  },
  pricePerDay: {
    type: Number,
    required: [true, 'Price per day is required'],
    min: [0, 'Price cannot be negative'],
    max: [50000, 'Price cannot exceed 50000']
  },
  seats: {
    type: Number,
    required: [true, 'Number of seats is required'],
    min: [2, 'Car must have at least 2 seats'],
    max: [10, 'Car cannot have more than 10 seats']
  },
  fuelType: {
    type: String,
    required: [true, 'Fuel type is required'],
    enum: {
      values: ['Petrol', 'Diesel', 'CNG', 'Electric', 'Hybrid'],
      message: 'Fuel type must be one of: Petrol, Diesel, CNG, Electric, Hybrid'
    }
  },
  imageUrl: {
    type: String,
    required: [true, 'Image URL is required'],
    validate: {
      validator: function(v) {
        return /^https?:\/\/.+\.(jpg|jpeg|png|webp|gif)$/i.test(v);
      },
      message: 'Please provide a valid image URL'
    }
  },
  available: {
    type: Boolean,
    default: true
  },
  features: [{
    type: String,
    trim: true
  }]
}, {
  timestamps: true
});

// Index for faster queries
carSchema.index({ type: 1, fuelType: 1, pricePerDay: 1 });
carSchema.index({ available: 1 });

module.exports = mongoose.model('Car', carSchema);