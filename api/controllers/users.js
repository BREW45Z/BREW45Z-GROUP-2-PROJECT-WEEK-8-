const User = require('../models/User');
const mongoose = require('mongoose');
const jwt = require('jsonwebtoken');

//@desc Logout User
//@route POST /api/v1/logout
//@access Private

exports.logout = (req,res)=>{
    res.cookie('token', '').json(true);
}

  
//@desc Get User Profile
//@route GET /api/v1/profile
//@access Private

exports.profile = async (req,res) => {
    mongoose.connect(process.env.MONGO_URI);
    const {token} = req.cookies;
    if (token) {
      jwt.verify(token, process.env.SECRET_KEY, {}, async (err, userData) => {
        if (err) throw err;
        const {name,email,_id} = await User.findById(userData.id);
        res.json({name,email,_id});
      });
    } else {
      res.json(null);
    }
  };