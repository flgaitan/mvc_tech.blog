const { Model, DataTypes } = require('sequelize');
const sequelize = require('../config/connection');


//create post model for "article"
class Comment extends Model {}
//set up fields and rules for model
Comment.init(
    {
        id: {
            type: DataTypes.INTEGER,
            allowNull: false,
            primaryKey: true,
            autoIncrement: true,
        },
        content: {
            type: DataTypes.TEXT,
            allowNull: false,
        },
        user_id:{
            type: DataTypes.INTEGER,
            //allowNull: false,
            references: {
                model: 'user',
                key: 'id'
            },
        },
        article_id: {
            type: DataTypes.INTEGER,
            //allowNull: false,
            references: {
                model: 'article',
                key: 'id'
            }
        }
    },
    {
        sequelize,
        timestamps: true,
        freezeTableName: true,
        underscored: true,
        modelName: 'comment'
    }
);

module.exports = Comment;
