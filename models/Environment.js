const mongoose = require('mongoose');
const Schema = mongoose.Schema;

const environmentSchema = new Schema({
  map:[[Boolean]],
  exit: [Number, Number],
  obstacles: [[Number, Number]],
});

module.exports = mongoose.model('Environment', environmentSchema);
