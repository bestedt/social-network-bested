// importing my dependencies
const connection = require('../config/connection');
const { User, Thought } = require('../models');
const { users, thoughts, reactions } = require('./data');

// connecting to my database
const seedDatabase = async () => {
  try {
    // delete existing data so we can start fresh
    await User.deleteMany({});
    await Thought.deleteMany({});

    // seed users that are in my data file
    const seededUsers = await User.create(users);

    // seed thoughts with the reactions i created in my data file
    const seededThoughts = await Thought.create(
      thoughts.map((thought, index) => ({
        ...thought,
        username: seededUsers[0]._id,
        reactions: [reactions[index]] 
      }))
    );

    console.log('Database seeded successfully!');
  } catch (error) {
    console.error('Error seeding database:', error);
  } finally {
    // close the database connection
    await connection.close();
  }
};

// calling the function when the file is run
seedDatabase();
