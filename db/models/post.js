'use strict';
const { Model } = require('sequelize');
module.exports = (sequelize, DataTypes) => {
  class Post extends Model {
    /**
     * Helper method for defining associations.
     * This method is not a part of Sequelize lifecycle.
     * The `models/index` file will call this method automatically.
     */
    static associate(models) {
      this.hasMany(models.Like, { foreignKey: 'post_id' });
      this.belongsTo(models.User, { foreignKey: 'user_id' });
    }
  }
  Post.init({
    post_name: {
      type: DataTypes.TEXT,
      allowNull: false,
    },
    subject: DataTypes.TEXT,
    post: {
      type: DataTypes.TEXT,
      allowNull: false,
    }, 
    picture: DataTypes.TEXT,
    user_id: DataTypes.INTEGER
  }, {
    sequelize,
    modelName: 'Post',
  });
  return Post;
};