const mongoose = require ("mongoose");

var Schema = mongoose.Schema;

var listing = new Schema({
  title: {
    type: String,
    required: true
  },
  address: {
    type: String,
    required: true
  },
  city: {
    type: String,
    required: true
  },
  link: {
    type: String,
    required: true
  }, 
  image: {
    type: String,
    required: true
  }
});

mongoose.models = {};

const Listing = mongoose.model('Listing', listing);

export default Listing;