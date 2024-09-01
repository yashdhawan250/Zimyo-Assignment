const express = require('express');
const { bookTicket } = require('../controllers/ticketController');
const authMiddleware = require('../middlewares/authMiddleware');
const router = express.Router();

router.post('/book', authMiddleware, bookTicket);

module.exports = router;
