const Review = require('../models/Review');
const { validationResult } = require('express-validator');

/**
 * Review Controller
 * Handles all review-related operations
 */

// @desc    Get all reviews
// @route   GET /api/reviews
// @access  Public
const getReviews = async (req, res, next) => {
  try {
    const { rating, verified } = req.query;
    
    let query = {};
    if (rating) query.rating = Number(rating);
    if (verified !== undefined) query.verified = verified === 'true';

    const reviews = await Review.find(query)
      .sort({ createdAt: -1 })
      .limit(20);
    
    res.json({
      success: true,
      data: reviews,
      message: `Found ${reviews.length} reviews`
    });
  } catch (error) {
    next(error);
  }
};

// @desc    Add new review
// @route   POST /api/reviews
// @access  Public
const addReview = async (req, res, next) => {
  try {
    // Check for validation errors
    const errors = validationResult(req);
    if (!errors.isEmpty()) {
      return res.status(422).json({
        success: false,
        data: null,
        message: 'Validation failed',
        errors: errors.array()
      });
    }

    const review = await Review.create(req.body);
    
    res.status(201).json({
      success: true,
      data: review,
      message: 'Review added successfully'
    });
  } catch (error) {
    next(error);
  }
};

module.exports = {
  getReviews,
  addReview
};