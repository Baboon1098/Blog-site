const User = require('./User');
const Post = require('./Post');
const Comments = require('./comments');

User.hasMany(Post, {
  foreignKey: 'user_id',
  onDelete: 'CASCADE'
});

Post.belongsTo(User, {
  foreignKey: 'user_id'
});

Post.hasMany(Comments, {
  foreignKey: 'post_id'
});

Comments.belongsTO(User, {
  foreignKey: 'user_id'
});

module.exports = { User, Post, Comments };
