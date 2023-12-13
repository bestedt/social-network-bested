// import dependencies
const mongoose = require('mongoose');
const { Schema, model } = mongoose; // Add this line

// start the user schema
const userSchema = new Schema({
  username: {
    type: String,
    unique: true,
    required: true,
    trim: true,
    index: true, // add index to username
  },
  email: {
    type: String,
    required: true,
    unique: true,
    match: /^([\w-\.]+@([\w-]+\.)+[\w-]{2,4})?$/,
    index: true, // add index to email
  },
  thoughts: [
    {
      type: Schema.Types.ObjectId,
      ref: 'Thought',
    },
  ],
  friends: [
    {
      type: Schema.Types.ObjectId,
      ref: 'User',
    },
  ],
});

// get the total count of friends on retrieval using the .virtual() function
userSchema.virtual('friendCount').get(function () {
  return this.friends.length;
});

// create the User model using the userSchema
const User = model('User', userSchema);

module.exports = User;