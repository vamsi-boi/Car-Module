const express = require('express');
const router = express.Router();
const { subscribeNewsletter } = require('../controllers/newsletterController');
const { validateNewsletter } = require('../middleware/validation');

/**
 * Newsletter Routes
 * Routes for newsletter operations
 */

// @route   POST /api/newsletter
// @desc    Subscribe to newsletter
// @access  Public
router.post('/', validateNewsletter, subscribeNewsletter);

module.exports = router;