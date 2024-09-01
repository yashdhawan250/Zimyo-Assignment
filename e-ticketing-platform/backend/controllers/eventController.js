const Event = require('../models/Event');

exports.getAllEvents = async (req, res) => {
  try {
    const events = await Event.findAll();
    res.json(events);
  } catch (err) {
    res.status(500).json({ error: 'Something went wrong' });
  }
};

exports.createEvent = async (req, res) => {
  const { name, date, venue } = req.body;
  try {
    const event = await Event.create({ name, date, venue });
    res.status(201).json({ message: 'Event created', event });
  } catch (err) {
    res.status(500).json({ error: 'Something went wrong' });
  }
};
