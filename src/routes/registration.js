const express = require('express');
const router = express.Router();

const { RegPage, renderRegistr}  = require('../controllers/registration');

router.get('/', renderRegistr);
router.post('/', RegPage);

module.exports = router;

