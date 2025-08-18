const express = require('express');
const router = express.Router();
const {
  getCars,
  getCar,
  addCar,
  updateCar,
  deleteCar
} = require('../controllers/carController');
const { validateCar, validateId } = require('../middleware/validation');

/**
 * Car Routes
 * Public routes for car operations
 */

// @route   GET /api/cars
// @desc    Get all cars with optional filtering
// @access  Public
router.get('/', getCars);

// @route   GET /api/cars/:id
// @desc    Get single car by ID
// @access  Public
router.get('/:id', validateId, getCar);

// Admin routes (no authentication for demo)
// @route   POST /api/admin/cars
// @desc    Add new car
// @access  Admin
router.post('/admin/cars', validateCar, addCar);

// @route   PATCH /api/admin/cars/:id
// @desc    Update car
// @access  Admin
router.patch('/admin/cars/:id', [...validateId, ...validateCar], updateCar);

// @route   DELETE /api/admin/cars/:id
// @desc    Delete car
// @access  Admin
router.delete('/admin/cars/:id', validateId, deleteCar);

module.exports = router;