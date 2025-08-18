const express = require('express');
const router = express.Router();
const { getReviews, addReview } = require('../controllers/reviewController');
const { validateReview } = require('../middleware/validation');

/**
 * Review Routes
 * Routes for review operations
 */

// @route   GET /api/reviews
// @desc    Get all reviews
// @access  Public
router.get('/', getReviews);

// @route   POST /api/reviews
// @desc    Add new review
// @access  Public
router.post('/', validateReview, addReview);

module.exports = router;