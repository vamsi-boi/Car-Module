const Booking = require('../models/Booking');
const Car = require('../models/Car');
const { validationResult } = require('express-validator');

/**
 * Booking Controller
 * Handles all booking-related operations
 */

// @desc    Create new booking
// @route   POST /api/bookings
// @access  Public
const createBooking = async (req, res, next) => {
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

    const { carId, startDate, endDate } = req.body;
    
    // Check if car exists and is available
    const car = await Car.findById(carId);
    if (!car) {
      return res.status(404).json({
        success: false,
        data: null,
        message: 'Car not found'
      });
    }
    
    if (!car.available) {
      return res.status(400).json({
        success: false,
        data: null,
        message: 'Car is not available for booking'
      });
    }

    // Check for overlapping bookings
    const startDateObj = new Date(startDate);
    const endDateObj = new Date(endDate);
    
    const overlappingBookings = await Booking.find({
      carId,
      status: { $in: ['pending', 'confirmed'] },
      $or: [
        {
          startDate: { $lte: endDateObj },
          endDate: { $gte: startDateObj }
        }
      ]
    });
    
    if (overlappingBookings.length > 0) {
      return res.status(400).json({
        success: false,
        data: null,
        message: 'Car is already booked for the selected dates'
      });
    }

    // Calculate total price
    const days = Math.ceil((endDateObj - startDateObj) / (1000 * 60 * 60 * 24));
    const totalPrice = car.pricePerDay * days;

    // Create booking
    const booking = await Booking.create({
      ...req.body,
      totalPrice,
      status: 'confirmed'
    });

    // Mark car as unavailable (demo logic)
    await Car.findByIdAndUpdate(carId, { available: false });

    // Populate car details for response
    await booking.populate('carId');
    
    res.status(201).json({
      success: true,
      data: booking,
      message: 'Booking created successfully'
    });
  } catch (error) {
    next(error);
  }
};

// @desc    Get all bookings (Admin)
// @route   GET /api/admin/bookings
// @access  Public (No auth for demo)
const getBookings = async (req, res, next) => {
  try {
    const { status, userEmail } = req.query;
    
    let query = {};
    if (status) query.status = status;
    if (userEmail) query.userEmail = { $regex: userEmail, $options: 'i' };

    const bookings = await Booking.find(query)
      .populate('carId', 'name type pricePerDay imageUrl')
      .sort({ createdAt: -1 });
    
    res.json({
      success: true,
      data: bookings,
      message: `Found ${bookings.length} bookings`
    });
  } catch (error) {
    next(error);
  }
};

module.exports = {
  createBooking,
  getBookings
};