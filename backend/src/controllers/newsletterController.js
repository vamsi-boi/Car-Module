const NewsletterSubscriber = require('../models/NewsletterSubscriber');
const { validationResult } = require('express-validator');

/**
 * Newsletter Controller
 * Handles newsletter subscription operations
 */

// @desc    Subscribe to newsletter
// @route   POST /api/newsletter
// @access  Public
const subscribeNewsletter = async (req, res, next) => {
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

    const { email } = req.body;
    
    // Check if email already exists
    const existingSubscriber = await NewsletterSubscriber.findOne({ email });
    if (existingSubscriber) {
      if (existingSubscriber.active) {
        return res.status(400).json({
          success: false,
          data: null,
          message: 'Email is already subscribed to our newsletter'
        });
      } else {
        // Reactivate inactive subscription
        existingSubscriber.active = true;
        await existingSubscriber.save();
        
        return res.json({
          success: true,
          data: existingSubscriber,
          message: 'Newsletter subscription reactivated successfully'
        });
      }
    }

    const subscriber = await NewsletterSubscriber.create({ email });
    
    res.status(201).json({
      success: true,
      data: subscriber,
      message: 'Successfully subscribed to newsletter'
    });
  } catch (error) {
    next(error);
  }
};

module.exports = {
  subscribeNewsletter
};