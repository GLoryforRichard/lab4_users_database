const mongoose = require('mongoose');

const userSchema = new mongoose.Schema({
  username: {
    type: String,
    required: true,
    minlength: 4
  },
  email: {
    type: String,
    required: true,
    match: [/.+\@.+\..+/, 'Please fill a valid email address']
  },
  city: {
    type: String,
    required: true,
    match: [/^[a-zA-Z\s]*$/, 'City name can only contain alphabets and spaces']
  },
  website: {
    type: String,
    required: true,
    match: [/(http|https):\/\/[^\s$.?#].[^\s]*$/, 'Please fill a valid URL']
  },
  zipCode: {
    type: String,
    required: true,
    match: [/^\d{5}-\d{4}$/, 'ZIP code must be in the format DDDDD-DDDD']
  },
  phone: {
    type: String,
    required: true,
    match: [/^1-\d{3}-\d{3}-\d{4}$/, 'Phone number must be in the format 1-DDD-DDD-DDDD']
  }
});

module.exports = mongoose.model('User', userSchema);
