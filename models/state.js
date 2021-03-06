// jshint esnext: true

const mongoose = require('mongoose');
const Schema = mongoose.Schema;

let stateSchema =  new Schema({

  name: {
    type: String,
    required: true
  },

  created_at: {
    type: Date,
    default: Date.now
  },

  updated_at: {
    type: Date,
    default: Date.now
  }

});

module.exports = mongoose.model('State', stateSchema);
