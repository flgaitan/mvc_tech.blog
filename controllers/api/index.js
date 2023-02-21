const router = require('express').Router();

const user = require('./userRoutes');
const comment = require('./commentRoutes');
const dashboard = require('./dashboardRoutes');
const editArticle = require('./editArticleRoutes');
var helpers = require('handlebars-helpers')();

router.use('/users', user);
router.use('/comment', comment);
router.use('/dashboard', dashboard);
router.use('/edit',editArticle);

module.exports = router;