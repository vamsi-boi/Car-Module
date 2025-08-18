const express = require('express');
const router = express.Router();
const { createBooking, getBookings } = require('../controllers/bookingController');
const { validateBooking } = require('../middleware/validation');

/**
 * Booking Routes
 * Routes for booking operations
 */

// @route   POST /api/bookings
// @desc    Create new booking
// @access  Public
router.post('/', validateBooking, createBooking);

// Admin routes (no authentication for demo)
// @route   GET /api/admin/bookings
// @desc    Get all bookings
// @access  Admin
router.get('/admin/bookings', getBookings);

module.exports = router;