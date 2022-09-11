// api-routes.js
// Initialize express router
let router = require('express').Router();
// Set default API response
router.get('/', function (req, res) {
    res.json({
        status: 'API Its Working',
        message: 'Welcome to RESTHub crafted with love!',
    });
});

// Import controller
var controller = require('../controllers/Controller');

// routes
router.route('/')
    .post(controller.index)
// Export API routes
module.exports = router;