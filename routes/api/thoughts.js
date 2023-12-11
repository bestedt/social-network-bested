// all routes for /api/thoughts linked to the thoughtsController
const express = require('express');
const router = express.Router();
const thoughtsController = require('../../controllers/thoughtsController');

router.get('/', thoughtsController.getAllThoughts);
router.get('/:id', thoughtsController.getThoughtById);
router.post('/', thoughtsController.createThought);
router.put('/:id', thoughtsController.updateThought);
router.delete('/:id', thoughtsController.deleteThought);
router.post('/:thoughtId/reactions', thoughtsController.createReaction);
router.delete('/:thoughtId/reactions/:reactionId', thoughtsController.deleteReaction);

module.exports = router;
