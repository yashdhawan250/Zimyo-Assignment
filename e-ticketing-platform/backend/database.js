// backend/database.js

const { Sequelize } = require('sequelize');

// Initialize Sequelize with SQLite for simplicity
const sequelize = new Sequelize({
    dialect: 'sqlite',
    storage: 'database.sqlite' // or another storage file name
});

module.exports = sequelize;
