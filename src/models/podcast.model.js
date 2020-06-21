const mongoose = require('mongoose');
const moment = require('moment');

const podcastSchema = new mongoose.Schema({
  title: {
    type: String,
    required: true,
  },
  author: {
    type: String,
    required: true,
  },
  description: {
    type: String,
    required: true,
  },
  date: {
    type: String,
    default: moment().calendar(),
  },
  link: {
    type: String,
    required: true,
  },
});

module.exports = mongoose.model('Podcasts', podcastSchema);
