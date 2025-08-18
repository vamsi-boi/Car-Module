const Car = require('../models/Car');
const { validationResult } = require('express-validator');

/**
 * Car Controller
 * Handles all car-related operations
 */

// @desc    Get all cars
// @route   GET /api/cars
// @access  Public
const getCars = async (req, res, next) => {
  try {
    const { type, fuelType, minPrice, maxPrice, available } = req.query;
    
    // Build query object
    let query = {};
    
    if (type) query.type = type;
    if (fuelType) query.fuelType = fuelType;
    if (available !== undefined) query.available = available === 'true';
    
    if (minPrice || maxPrice) {
      query.pricePerDay = {};
      if (minPrice) query.pricePerDay.$gte = Number(minPrice);
      if (maxPrice) query.pricePerDay.$lte = Number(maxPrice);
    }

    const cars = await Car.find(query).sort({ createdAt: -1 });
    
    res.json({
      success: true,
      data: cars,
      message: `Found ${cars.length} cars`
    });
  } catch (error) {
    next(error);
  }
};

// @desc    Get single car
// @route   GET /api/cars/:id
// @access  Public
const getCar = async (req, res, next) => {
  try {
    const car = await Car.findById(req.params.id);
    
    if (!car) {
      return res.status(404).json({
        success: false,
        data: null,
        message: 'Car not found'
      });
    }
    
    res.json({
      success: true,
      data: car,
      message: 'Car found successfully'
    });
  } catch (error) {
    next(error);
  }
};

// @desc    Add new car (Admin)
// @route   POST /api/admin/cars
// @access  Public (No auth for demo)
const addCar = async (req, res, next) => {
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

    const car = await Car.create(req.body);
    
    res.status(201).json({
      success: true,
      data: car,
      message: 'Car added successfully'
    });
  } catch (error) {
    next(error);
  }
};

// @desc    Update car (Admin)
// @route   PATCH /api/admin/cars/:id
// @access  Public (No auth for demo)
const updateCar = async (req, res, next) => {
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

    const car = await Car.findByIdAndUpdate(
      req.params.id,
      req.body,
      { new: true, runValidators: true }
    );
    
    if (!car) {
      return res.status(404).json({
        success: false,
        data: null,
        message: 'Car not found'
      });
    }
    
    res.json({
      success: true,
      data: car,
      message: 'Car updated successfully'
    });
  } catch (error) {
    next(error);
  }
};

// @desc    Delete car (Admin)
// @route   DELETE /api/admin/cars/:id
// @access  Public (No auth for demo)
const deleteCar = async (req, res, next) => {
  try {
    const car = await Car.findByIdAndDelete(req.params.id);
    
    if (!car) {
      return res.status(404).json({
        success: false,
        data: null,
        message: 'Car not found'
      });
    }
    
    res.json({
      success: true,
      data: null,
      message: 'Car deleted successfully'
    });
  } catch (error) {
    next(error);
  }
};

module.exports = {
  getCars,
  getCar,
  addCar,
  updateCar,
  deleteCar
};