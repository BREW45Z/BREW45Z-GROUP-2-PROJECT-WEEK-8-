const mongoose = require("mongoose");

// Define the schema for a Place
const placeSchema = new mongoose.Schema({
  owner: { type: mongoose.Schema.Types.ObjectId, ref: "User" }, // Reference to the User model
  title: String,
  address: String,
  photos: [String], // Array of photo URLs
  description: String,
  perks: [String], // Array of perks or amenities
  extraInfo: String,
  checkIn: Number,
  checkOut: Number,
  maxGuests: Number,
  price: Number,
});

// Create a model based on the schema
const PlaceModel = mongoose.model("Place", placeSchema);

// Export the model to be used in other parts of the application
module.exports = PlaceModel;
