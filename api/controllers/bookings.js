const {getUserDataFromReq} = require('../utils/extractdata');
const mongoose = require('mongoose');

//@desc Create Bookings
//@route POST /api/v1/bookings
//@access Private
exports.createBookings = async (req, res) => {

  mongoose.connect(process.env.MONGO_URI);
  const userData = await getUserDataFromReq(req);
  const {
    place,checkIn,checkOut,numberOfGuests,name,phone,price,
  } = req.body;
  Booking.create({
    place,checkIn,checkOut,numberOfGuests,name,phone,price,
    user:userData.id,
  }).then((doc) => {
    res.json(doc);
  }).catch((err) => {
    throw err;
  });
}


//@desc GET Bookings
//@route GET /api/v1/bookings
//@access Private
exports.getBookings = async (req,res) => {
  mongoose.connect(process.env.MONGO_URI);
  const userData = await getUserDataFromReq(req);
  res.json( await Booking.find({user:userData.id}).populate('place') );
};
