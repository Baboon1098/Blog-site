const { Model, DataTypes } = require('sequelize');
const sequelize = require('../config/connection');
const bcrypt = require('bcrypt');

class User extends Model {}

User.init({
  id: {
    type: DataTypes.INTEGER,
    allowNull: false,
    primaryKey: true,
    autoIncrement: true,
  },
  name: {
    type: DataTypes.STRING,
    allowNull: false,
  },
  email: {
    type: DataTypes.STRING,
    allowNull: false,
    unique: true,
    validate: {
      isEmail: true,
    },
  },
  password: {
    type: DataTypes.STRING,
    allowNull: false,
    validate: {
      isLongEnough(value) {
        if (value.length < 8) {
          throw new Error('Password must be at least 8 characters long.');
        }
      },
    },
  },
}, {
  sequelize,
  timestamps: false,
  freezeTableName: true,
  underscored: true,
  modelName: 'user',
});


// Add the hooks after the model has been initialized
User.addHook('beforeCreate', async (newUserData) => {
  newUserData.password = await bcrypt.hash(newUserData.password, 10);
  return newUserData;
});

User.addHook('beforeUpdate', async (updatedUserData) => {
  updatedUserData.password = await bcrypt.hash(updatedUserData.password, 10);
  return updatedUserData;
});

module.exports = User;
