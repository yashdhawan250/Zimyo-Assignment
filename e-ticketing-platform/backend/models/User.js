// backend/models/User.js

const { DataTypes } = require('sequelize');
const sequelize = require('../database'); // adjust the path as needed

const User = sequelize.define('User', {
    username: {
        type: DataTypes.STRING,
        allowNull: false
    },
    password: {
        type: DataTypes.STRING,
        allowNull: false
    }
    // add other fields as necessary
});

module.exports = User;
