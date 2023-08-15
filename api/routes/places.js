const express = require('express');
const router = express.Router();
const {getPlace, getPlaces, updatePlaces, getUserPlaces, createPlaces} = require('../controllers/places');

router.route('/').get(getPlaces).get(getUserPlaces).post(createPlaces)
router.route('/:id').put(updatePlaces).get(getPlace)


module.exports = router;