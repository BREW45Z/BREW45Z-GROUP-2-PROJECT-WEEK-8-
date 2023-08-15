const mongoose = require('mongoose');
const Place = require('../models/Place');
const jwtSecret = process.env.SECRET_KEY;

//@desc Create places
//@route POST /api/v1/places
//@access Private
exports.createPlaces = async (req,res)=>{
    mongoose.connect(process.env.MONGO_URI);
    const {token} = req.cookies;
    const {
   e
    } = req.body;
    jwt.verify(token, jwtSecret, {}, async (err, userData) => {
      if (err) throw err;
      const placeDoc = await Place.create({
        owner:userData.id,price,
        title,address,photos:addedPhotos,description,
        perks,extraInfo,checkIn,checkOut,maxGuests,
      });
      res.json(placeDoc);
    });
}


//@desc Get User places
//@route GET /api/v1/places
//@access Private
exports.getUserPlaces = async (req, res) =>{
    mongoose.connect(process.env.MONGO_URI);
    const {token} = req.cookies;
    jwt.verify(token, jwtSecret, {}, async (err, userData) => {
      const {id} = userData;
      res.json( await Place.find({owner:id}) );
    });
}


//@desc Get All places
//@route GET /api/v1/places
//@access Private
exports.getPlaces = async (req, res)=>{
    mongoose.connect(process.env.MONGO_URI);
    res.json( await Place.find() );
}


//@desc Get place by id
//@route GET /api/v1/places/:id
//@access Private
exports.getPlace = async (req,res)=>{
    mongoose.connect(process.env.MONGO_URI);
    const {id} = req.params;
    res.json(await Place.findById(id));
}



//@desc Update places
//@route PUT /api/v1/places/:id
//@access Private
exports.updatePlaces = async (req, res) =>{
    mongoose.connect(process.env.MONGO_URI);
    const {token} = req.cookies;
    const {
      id, title,address,addedPhotos,description,
      perks,extraInfo,checkIn,checkOut,maxGuests,price,
    } = req.body;
    jwt.verify(token, process.env.SECRET_KEY, {}, async (err, userData) => {
      if (err) throw err;
      if (!placeDoc) {
        res.status(404).json({ error: 'Place not found' });
        return;
      }
      const placeDoc = await Place.findById(userData.id);
      if (userData.id === placeDoc.owner.toString()) {
        placeDoc.set({
          title,address,photos:addedPhotos,description,
          perks,extraInfo,checkIn,checkOut,maxGuests,price,
        });
        await placeDoc.save();
        res.json('ok');
      
    }})}