const express = require('express')
const router = express.Router();

const {
    GetCartItems
} = require('../controllers/cart.js')

router.route('/').get(GetCartItems)



module.exports = router;