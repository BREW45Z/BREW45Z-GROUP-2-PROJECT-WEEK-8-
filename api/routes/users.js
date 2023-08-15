const express = require('express');
const router = express.Router();
const {logout,profile} = require('../controllers/users');


router.post('/logout', logout)
router.get('/profile', profile)

module.exports = router;