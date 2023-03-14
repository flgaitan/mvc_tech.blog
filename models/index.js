const path = require('path')
let currentPath = path.join(__dirname)
const comment = require('./comment');
const article = require('./article');
const user = require('./user');
console.log(require('./comment'));

//article - post relationship
user.hasMany(article, {
    foreignKey: 'user_id'
});
//user - comments
user.hasMany(comment, {
    foreignKey: 'user_id'
});
//article belongs to user
article.belongsTo(user, {
    foreignKey: 'user_id',
});
//has many comments
article.hasMany(comment, {
    foreignKey: 'article_id'
});
//comment belongs to article
comment.belongsTo(article, {
    foreignKey: 'article_id'
});
//comment belongs to user
comment.belongsTo(user, {
    foreignKey: 'user_id'
});

module.exports = { article, comment, user};