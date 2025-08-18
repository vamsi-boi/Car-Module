const mongoose = require('mongoose');

/**
 * Newsletter Subscriber Model Schema
 * Represents newsletter email subscriptions
 */
const newsletterSubscriberSchema = new mongoose.Schema({
  email: {
    type: String,
    required: [true, 'Email is required'],
    unique: true,
    trim: true,
    lowercase: true,
    validate: {
      validator: function(v) {
        return /^\w+([.-]?\w+)*@\w+([.-]?\w+)*(\.\w{2,3})+$/.test(v);
      },
      message: 'Please provide a valid email address'
    }
  },
  active: {
    type: Boolean,
    default: true
  }
}, {
  timestamps: true
});

// Index for faster queries
newsletterSubscriberSchema.index({ email: 1 });
newsletterSubscriberSchema.index({ active: 1 });

module.exports = mongoose.model('NewsletterSubscriber', newsletterSubscriberSchema);