
// made up data for testing purposes with some users and thoughts and reactions
// here are my users 
const users = [
    { username: 'TylerB', email: 'tylerB@gmail.com' },
    { username: 'BryceB', email: 'bryceB@gmail.com' },
    { username: 'BrittB', email: 'brittB@gmail.com' },
    { username: 'NoxB', email: 'noxB@gmail.com' },
    { username: 'ErinB', email: 'erinB@gmail.com' }
  ];
  //heres some thoughts 
  const thoughts = [
    { thoughtText: 'Baldurs Gate 3 deserved game of the year', username: 'TylerB' },
    { thoughtText: 'Tears of the Kingdom deserved game of the year', username: 'BryceB' },
    { thoughtText: 'Starfield deserved game of the year', username: 'BrittB' },
  ];
  // heres some reactions, let's hope this works!!
  const reactions = [
    { reactionBody: 'Starfield sucked so bad', username: 'TylerB' },
    { reactionBody: 'I really liked The Day Before...', username: 'BryceB' },
    { reactionBody: 'FF7 Rebirth is going to blow it out of the water', username: 'BrittB' },
  ];
  // exporting the users, thoughts, and reactions data
  module.exports = { users, thoughts, reactions };
  