const path = require('path')
let currentPath = path.join(__dirname)
const Comment = require('./comment');
const Article = require('./article');
const User = require('./user');

console.log(require('./comment'));

//article - post relationship
User.hasMany(Article, {
    foreignKey: 'user_id'
});
//user - comments
User.hasMany(Comment, {
    foreignKey: 'user_id'
});
//article belongs to user
Article.belongsTo(User, {
    foreignKey: 'user_id',
});
//has many comments
Article.hasMany(Comment, {
    foreignKey: 'article_id'
});
//comment belongs to article
Comment.belongsTo(Article, {
    foreignKey: 'article_id'
});
//comment belongs to user
Comment.belongsTo(User, {
    foreignKey: 'user_id'
});

module.exports = { Article, Comment, User};