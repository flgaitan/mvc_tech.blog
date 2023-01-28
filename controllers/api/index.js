const router = require('express').Router();
const userRoutes = require('./user-routes');
//const articleRoutes = require('../api/');

router.use('/users', userRoutes);
//router.use('/projects', projectRoutes);

module.exports = router;