// Importing my dependencies
const connection = require('../config/connection');
const { User, Thought } = require('../models');
const { users, thoughts, reactions } = require('./data');

// Connect to the database
const seedDatabase = async () => {
  try {
    // Delete existing data
    await User.deleteMany({});
    await Thought.deleteMany({});

    // Seed users
    const seededUsers = await User.create(users);

    // Seed thoughts with embedded reactions
    const seededThoughts = await Thought.create(
      thoughts.map((thought, index) => ({
        ...thought,
        username: seededUsers[0]._id,
        reactions: [reactions[index]] // Embed reaction directly into thought
      }))
    );

    console.log('Database seeded successfully!');
  } catch (error) {
    console.error('Error seeding database:', error);
  } finally {
    // Close the database connection
    await connection.close();
  }
};

// Call the function when the file is run
seedDatabase();
