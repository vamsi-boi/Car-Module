/**
 * Error Handling Middleware
 * Central error handler for the application
 */

const errorHandler = (err, req, res, next) => {
  let error = { ...err };
  error.message = err.message;

  console.error('Error:', err);

  // Mongoose bad ObjectId
  if (err.name === 'CastError') {
    const message = 'Resource not found';
    error = { message, statusCode: 404 };
  }

  // Mongoose duplicate key
  if (err.code === 11000) {
    const message = 'Duplicate field value entered';
    error = { message, statusCode: 400 };
  }

  // Mongoose validation error
  if (err.name === 'ValidationError') {
    const message = Object.values(err.errors).map(val => val.message).join(', ');
    error = { message, statusCode: 422 };
  }

  res.status(error.statusCode || 500).json({
    success: false,
    data: null,
    message: error.message || 'Server Error',
    ...(process.env.NODE_ENV === 'development' && { stack: err.stack })
  });
};

// Handle 404 - Not Found
const notFound = (req, res, next) => {
  res.status(404).json({
    success: false,
    data: null,
    message: `Route ${req.originalUrl} not found`
  });
};

module.exports = { errorHandler, notFound };