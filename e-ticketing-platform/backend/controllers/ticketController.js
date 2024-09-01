const Ticket = require('../models/Ticket');
const Event = require('../models/Event');
const { v4: uuidv4 } = require('uuid');

exports.bookTicket = async (req, res) => {
  const { eventId } = req.body;
  try {
    const event = await Event.findByPk(eventId);
    if (!event) {
      return res.status(404).json({ message: 'Event not found' });
    }
    const ticket = await Ticket.create({
      uniqueIdentifier: uuidv4(),
      EventId: eventId,
      UserId: req.user.id,
    });
    res.status(201).json({ message: 'Ticket booked', ticket });
  } catch (err) {
    res.status(500).json({ error: 'Something went wrong' });
  }
};
