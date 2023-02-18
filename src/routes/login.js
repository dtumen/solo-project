const express = require('express');
const router = express.Router();

const { renderLogin, loginPage }  = require('../controllers/loginController');

router.get('/', renderLogin);
router.post('/', loginPage);

module.exports = router;