// my controllers for the thoughts routes
// import dependencies
const { User, Thought } = require('../models');
const thoughtsController = {
    // get all thoughts route
  getAllThoughts: async (req, res) => {
    try {
      const thoughts = await Thought.find().populate('reactions');
      res.json(thoughts);
    } catch (error) {
      res.status(500).json({ error: error.message });
    }
  },
// get thought by id route
  getThoughtById: async (req, res) => {
    try {
      const thought = await Thought.findById(req.params.id).populate('reactions');
      res.json(thought);
    } catch (error) {
      res.status(500).json({ error: error.message });
    }
  },
// create thought route
  createThought: async (req, res) => {
    try {
      const thought = await Thought.create(req.body);
      // pushing the thought id to the user's thoughts array
      const user = await User.findByIdAndUpdate(
        req.body.userId,
        { $addToSet: { thoughts: thought._id } },
        { new: true }
      );
      res.json(thought);
    } catch (error) {
      res.status(500).json({ error: error.message });
    }
  },
// update thought route using the id
  updateThought: async (req, res) => {
    try {
      const thought = await Thought.findByIdAndUpdate(req.params.id, req.body, { new: true });
      res.json(thought);
    } catch (error) {
      res.status(500).json({ error: error.message });
    }
  },
// delete thought route using the id
  deleteThought: async (req, res) => {
    try {
      const thought = await Thought.findByIdAndDelete(req.params.id);
      if (thought) {
        // Remove thought reference from the associated user's thoughts array
        await User.findByIdAndUpdate(
          thought.userId,
          { $pull: { thoughts: req.params.id } },
          { new: true }
        );
        res.json(thought);
      } else {
        res.status(404).json({ message: 'Thought not found' });
      }
    } catch (error) {
      res.status(500).json({ error: error.message });
    }
  },
// create reaction route using the thought id
  createReaction: async (req, res) => {
    try {
      const thought = await Thought.findByIdAndUpdate(
        req.params.thoughtId,
        { $push: { reactions: req.body } },
        { new: true }
      );
      res.json(thought);
    } catch (error) {
      res.status(500).json({ error: error.message });
    }
  },
// delete reaction route using the thought id and reaction id
  deleteReaction: async (req, res) => {
    try {
      const thought = await Thought.findByIdAndUpdate(
        req.params.thoughtId,
        { $pull: { reactions: { reactionId: req.params.reactionId } } },
        { new: true }
      );
      res.json(thought);
    } catch (error) {
      res.status(500).json({ error: error.message });
    }
  },
};
// export the thoughts controller
module.exports = thoughtsController;
