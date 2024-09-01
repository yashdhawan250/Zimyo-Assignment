const { DataTypes } = require('sequelize');
const sequelize = require('../config/database');
const User = require('./User');
const Event = require('./Event');

const Ticket = sequelize.define('Ticket', {
  uniqueIdentifier: {
    type: DataTypes.STRING,
    allowNull: false,
    unique: true,
  },
});

Ticket.belongsTo(User);
Ticket.belongsTo(Event);

module.exports = Ticket;
