// import dependencies
const mongoose = require('mongoose');
const Schema = mongoose.Schema;
const dateFormat = require('../utils/dateFormat'); // Add this line

// here is the reaction schema
const reactionSchema = new Schema({
  reactionId: {
    type: mongoose.Types.ObjectId,
    default: () => new mongoose.Types.ObjectId()
  },
  reactionBody: {
    type: String,
    required: true,
    maxlength: 280
  },
  username: {
    type: String,
    required: true
  },
  createdAt: {
    type: Date,
    default: Date.now,
    get: timestamp => dateFormat(timestamp)
  }
});

// export the reaction schema
module.exports = reactionSchema;
