const mongoose = require('mongoose');

/**
 * Review Model Schema
 * Represents customer reviews and testimonials
 */
const reviewSchema = new mongoose.Schema({
  reviewerName: {
    type: String,
    required: [true, 'Reviewer name is required'],
    trim: true,
    maxLength: [100, 'Name cannot exceed 100 characters']
  },
  rating: {
    type: Number,
    required: [true, 'Rating is required'],
    min: [1, 'Rating must be at least 1'],
    max: [5, 'Rating cannot exceed 5']
  },
  comment: {
    type: String,
    required: [true, 'Comment is required'],
    trim: true,
    maxLength: [1000, 'Comment cannot exceed 1000 characters']
  },
  verified: {
    type: Boolean,
    default: false
  }
}, {
  timestamps: true
});

// Index for faster queries
reviewSchema.index({ rating: -1, createdAt: -1 });

module.exports = mongoose.model('Review', reviewSchema);