// backend/models/Event.js

const { DataTypes } = require('sequelize');
const sequelize = require('../database'); // Ensure the correct path to database.js

const Event = sequelize.define('Event', {
    name: {
        type: DataTypes.STRING,
        allowNull: false
    },
    date: {
        type: DataTypes.DATE,
        allowNull: false
    }
    // Add more fields as necessary
});

module.exports = Event;
