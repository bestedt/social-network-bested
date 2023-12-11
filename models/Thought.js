// import dependencies
const mongoose = require('mongoose');
const { Schema, model } = mongoose; // Add this line
const dateFormat = require('../utils/dateFormat');
const reactionSchema = require('./Reaction'); 

//start the thought schema
const thoughtSchema = new Schema({
  thoughtText: {
    type: String,
    required: true,
    minlength: 1,
    maxlength: 280
  },
  createdAt: {
    type: Date,
    default: Date.now,
    get: timestamp => dateFormat(timestamp)
  },
  username: {
    type: String,
    required: true
  },
  reactions: [reactionSchema]
});

// get the total count of reactions on retrieval using the .virtual() function
thoughtSchema.virtual('reactionCount').get(function () {
  return this.reactions.length;
});

// create the Thought model using the thoughtSchema
const Thought = model('Thought', thoughtSchema);

module.exports = Thought;
