const express = require('express');
const {
    StripePurchase
} = require('../controllers/APIRequests.js')

const router = express.Router();

router.route('/').post(StripePurchase);

module.exports = router;