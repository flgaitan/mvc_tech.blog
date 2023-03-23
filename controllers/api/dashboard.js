const sequelize = require('../../config/connection');
const router = require('express').Router();
const { Article, User } = require('../../models');
const withAuth = require('../../utils/auth');
var helpers = require('handlebars-helpers')();


//post article
router.post('/', withAuth, (req, res) => {
    try {
        console.log('dashboardroute');
        Article.create({
            title: req.body.title,
            content: req.body.content,
            user_id: req.session.user_id
        })
        .then(newArticle => {
            res.json(newArticle);
        })
    } catch (err) {
        res.status(400).json(err);
    }
});

module.exports = router;