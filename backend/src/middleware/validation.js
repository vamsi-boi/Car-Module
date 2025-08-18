const { body, param } = require('express-validator');

/**
 * Validation Middleware
 * Contains validation rules for different endpoints
 */

// Car validation rules
const validateCar = [
  body('name')
    .trim()
    .notEmpty()
    .withMessage('Car name is required')
    .isLength({ max: 100 })
    .withMessage('Car name cannot exceed 100 characters'),
  
  body('type')
    .isIn(['Sedan', 'SUV', 'Hatchback', 'Luxury', 'Sports', 'Electric'])
    .withMessage('Invalid car type'),
  
  body('pricePerDay')
    .isNumeric()
    .withMessage('Price per day must be a number')
    .custom((value) => {
      if (value < 0 || value > 50000) {
        throw new Error('Price must be between 0 and 50000');
      }
      return true;
    }),
  
  body('seats')
    .isInt({ min: 2, max: 10 })
    .withMessage('Seats must be between 2 and 10'),
  
  body('fuelType')
    .isIn(['Petrol', 'Diesel', 'CNG', 'Electric', 'Hybrid'])
    .withMessage('Invalid fuel type'),
  
  body('imageUrl')
    .isURL()
    .withMessage('Please provide a valid image URL')
    .matches(/\.(jpg|jpeg|png|webp|gif)$/i)
    .withMessage('Image URL must end with a valid image extension'),
  
  body('available')
    .optional()
    .isBoolean()
    .withMessage('Available must be a boolean value')
];

// Booking validation rules
const validateBooking = [
  body('userName')
    .trim()
    .notEmpty()
    .withMessage('User name is required')
    .isLength({ max: 100 })
    .withMessage('Name cannot exceed 100 characters'),
  
  body('userEmail')
    .trim()
    .isEmail()
    .withMessage('Please provide a valid email address')
    .normalizeEmail(),
  
  body('userPhone')
    .optional()
    .trim()
    .matches(/^[0-9\s\-\+\(\)]*$/)
    .withMessage('Please provide a valid phone number'),
  
  body('carId')
    .isMongoId()
    .withMessage('Please provide a valid car ID'),
  
  body('startDate')
    .isISO8601()
    .withMessage('Please provide a valid start date')
    .custom((value) => {
      const startDate = new Date(value);
      const today = new Date();
      today.setHours(0, 0, 0, 0);
      
      if (startDate < today) {
        throw new Error('Start date must be today or in the future');
      }
      return true;
    }),
  
  body('endDate')
    .isISO8601()
    .withMessage('Please provide a valid end date')
    .custom((value, { req }) => {
      const endDate = new Date(value);
      const startDate = new Date(req.body.startDate);
      
      if (endDate <= startDate) {
        throw new Error('End date must be after start date');
      }
      return true;
    }),
  
  body('specialRequests')
    .optional()
    .trim()
    .isLength({ max: 500 })
    .withMessage('Special requests cannot exceed 500 characters')
];

// Review validation rules
const validateReview = [
  body('reviewerName')
    .trim()
    .notEmpty()
    .withMessage('Reviewer name is required')
    .isLength({ max: 100 })
    .withMessage('Name cannot exceed 100 characters'),
  
  body('rating')
    .isInt({ min: 1, max: 5 })
    .withMessage('Rating must be between 1 and 5'),
  
  body('comment')
    .trim()
    .notEmpty()
    .withMessage('Comment is required')
    .isLength({ max: 1000 })
    .withMessage('Comment cannot exceed 1000 characters')
];

// Newsletter validation rules
const validateNewsletter = [
  body('email')
    .trim()
    .isEmail()
    .withMessage('Please provide a valid email address')
    .normalizeEmail()
];

// ID parameter validation
const validateId = [
  param('id')
    .isMongoId()
    .withMessage('Please provide a valid ID')
];

module.exports = {
  validateCar,
  validateBooking,
  validateReview,
  validateNewsletter,
  validateId
};