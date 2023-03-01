const Article = require('./Article');
const Comment = require('./Comment');
const User = require('./User');

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
    foreignKey: 'post_id'
});
//comment belongs to article
Comment.belongsTo(Article, {
    foreignKey: 'post_id'
});
//comment belongs to user
Comment.belongsTo(User, {
    foreignKey: 'user_id'
});

module.exports = { Article, Comment, User};