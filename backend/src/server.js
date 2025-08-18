const express = require('express');
const cors = require('cors');
const morgan = require('morgan');
require('dotenv').config();

// Import database connection
const connectDB = require('./config/database');

// Import routes
const carRoutes = require('./routes/cars');
const bookingRoutes = require('./routes/bookings');
const reviewRoutes = require('./routes/reviews');
const newsletterRoutes = require('./routes/newsletter');

// Import middleware
const { errorHandler, notFound } = require('./middleware/errorHandler');

/**
 * DriveEasy Car Rental API Server
 * Express.js server with MongoDB integration
 */

// Create Express app
const app = express();

// Connect to database
connectDB();

// Middleware
app.use(morgan('combined')); // HTTP request logger

// CORS configuration
const corsOptions = {
  origin: process.env.CORS_ORIGINS ? process.env.CORS_ORIGINS.split(',') : ['http://localhost:5173', 'http://localhost:3000'],
  optionsSuccessStatus: 200 // For legacy browser support
};
app.use(cors(corsOptions));

// Body parser
app.use(express.json({ limit: '10mb' }));
app.use(express.urlencoded({ extended: true, limit: '10mb' }));

// API Routes
app.use('/api/cars', carRoutes);
app.use('/api/bookings', bookingRoutes);
app.use('/api/reviews', reviewRoutes);
app.use('/api/newsletter', newsletterRoutes);

// Admin routes (using cars route for admin endpoints)
app.use('/api/admin/cars', carRoutes);
app.use('/api/admin/bookings', bookingRoutes);

// Health check endpoint
app.get('/api/health', (req, res) => {
  res.json({
    success: true,
    data: {
      status: 'Server is running',
      timestamp: new Date().toISOString(),
      environment: process.env.NODE_ENV || 'development'
    },
    message: 'DriveEasy API is healthy'
  });
});

// Error handling middleware
app.use(notFound); // 404 handler
app.use(errorHandler); // Global error handler

// Start server
const PORT = process.env.PORT || 5000;
const server = app.listen(PORT, () => {
  console.log('\n🚗 =======================================');
  console.log('🎯 DriveEasy Car Rental API Server');
  console.log('🚀 Server running on port:', PORT);
  console.log('🌍 Environment:', process.env.NODE_ENV || 'development');
  console.log('📡 CORS enabled for:', corsOptions.origin);
  console.log('=======================================\n');
  
  // Log all available endpoints
  console.log('📋 Available API Endpoints:');
  console.log('─────────────────────────────────────');
  console.log('🔍 Health Check:');
  console.log(`   GET  http://localhost:${PORT}/api/health`);
  console.log('\n🚗 Car Endpoints:');
  console.log(`   GET    http://localhost:${PORT}/api/cars`);
  console.log(`   GET    http://localhost:${PORT}/api/cars/:id`);
  console.log(`   POST   http://localhost:${PORT}/api/admin/cars`);
  console.log(`   PATCH  http://localhost:${PORT}/api/admin/cars/:id`);
  console.log(`   DELETE http://localhost:${PORT}/api/admin/cars/:id`);
  console.log('\n📅 Booking Endpoints:');
  console.log(`   POST http://localhost:${PORT}/api/bookings`);
  console.log(`   GET  http://localhost:${PORT}/api/admin/bookings`);
  console.log('\n⭐ Review Endpoints:');
  console.log(`   GET  http://localhost:${PORT}/api/reviews`);
  console.log(`   POST http://localhost:${PORT}/api/reviews`);
  console.log('\n📧 Newsletter Endpoint:');
  console.log(`   POST http://localhost:${PORT}/api/newsletter`);
  console.log('─────────────────────────────────────\n');
});

// Handle unhandled promise rejections
process.on('unhandledRejection', (err, promise) => {
  console.error('Unhandled Rejection at:', promise, 'reason:', err.message);
  server.close(() => {
    process.exit(1);
  });
});

module.exports = app;