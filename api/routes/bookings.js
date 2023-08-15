const express = require('express');
const router = express.Router();
const {getBookings, createBookings} = require('../controllers/bookings');

router.route('/').post(createBookings).get(getBookings)



module.exports = router;