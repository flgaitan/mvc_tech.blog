const router = require('express').Router();
const api = require('./../api')

const user = require('./user');
const comment = require('./comment');
const dashboard = require('./dashboard');
const editArticle = require('./editArticle');
const helpers = require('handlebars-helpers')();

router.use('/user', user);
router.use('/comment', Comment);
router.use('/dashboard', Dashboard);
router.use('/editArticle',EditArticle);

module.exports = router;