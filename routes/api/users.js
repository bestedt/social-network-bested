// all my routes are in the routes folder, and I have an index.js file in there that imports and uses all of my routes. 

const express = require('express');
const router = express.Router();
const usersController = require('../../controllers/usersController');

router.get('/', usersController.getAllUsers);
router.get('/:id', usersController.getUserById);
router.post('/', usersController.createUser);
router.put('/:id', usersController.updateUser);
router.delete('/:id', usersController.deleteUser);
router.post('/:userId/friends/:friendId', usersController.addFriend);
router.delete('/:userId/friends/:friendId', usersController.removeFriend);

module.exports = router;
