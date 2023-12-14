// route to the index.js file in the api folder
const router = require('express').Router();
const apiRoutes = require('./api');
// use the api folder
router.use('/api', apiRoutes);
// if the route is not found, send error
router.use((req, res) => {
  return res.send('Wrong route!');
});
// export the router
module.exports = router;