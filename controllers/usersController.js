// my usersController.js is used to handle all of the functions for my users routes. I have a function for each of the CRUD operations, as well as two functions for adding and removing friends. I have also imported my User and Thought models so that I can use them in my functions. I have also exported my usersController so that I can use it in my routes.
// import dependencies
const { User, Thought } = require('../models');
//get all users route
const usersController = {
  getAllUsers: async (req, res) => {
    try {
      const users = await User.find().populate('thoughts').populate('friends');
      res.json(users);
    } catch (error) {
      res.status(500).json({ error: error.message });
    }
  },
// get user by id route
  getUserById: async (req, res) => {
    try {
      const user = await User.findById(req.params.id).populate('thoughts').populate('friends');
      res.json(user);
    } catch (error) {
      res.status(500).json({ error: error.message });
    }
  },
// create user route
  createUser: async (req, res) => {
    try {
      const user = await User.create(req.body);
      res.json(user);
    } catch (error) {
      res.status(500).json({ error: error.message });
    }
  },
// update user route using the id
  updateUser: async (req, res) => {
    try {
      const user = await User.findByIdAndUpdate(req.params.id, req.body, { new: true });
      res.json(user);
    } catch (error) {
      res.status(500).json({ error: error.message });
    }
  },
// delete user route using the id`
  deleteUser: async (req, res) => {
    try {
      const user = await User.findByIdAndDelete(req.params.id);
      if (user) {
        // remove user's associated thoughts so they don't remain in the database after the user is deleted
        await Thought.deleteMany({ _id: { $in: user.thoughts } });
        res.json(user);
      } else {
        res.status(404).json({ message: 'User not found' });
      }
    } catch (error) {
      res.status(500).json({ error: error.message });
    }
  },
// add friend route using the id, lots of routes in this project use the id
  addFriend: async (req, res) => {
    try {
      const user = await User.findByIdAndUpdate(
        req.params.userId,
        { $addToSet: { friends: req.params.friendId } },
        { new: true }
      );
      res.json(user);
    } catch (error) {
      res.status(500).json({ error: error.message });
    }
  },
// remove friend route using the id
  removeFriend: async (req, res) => {
    try {
      const user = await User.findByIdAndUpdate(
        req.params.userId,
        { $pull: { friends: req.params.friendId } },
        { new: true }
      );
      res.json(user);
    } catch (error) {
      res.status(500).json({ error: error.message });
    }
  },
};
// export the usersController
module.exports = usersController;
