const express = require('express');
const { register, login } = require('../controllers/authController');
const { body } = require('express-validator');

const router = express.Router();

router.post('/register', [
  body('username').not().isEmpty(),
  body('password').isLength({ min: 6 }),
  body('email').isEmail(),
], register);

router.post('/login', login);

module.exports = router;
