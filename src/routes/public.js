const express = require('express');
const router = express.Router();

const { publicPage, publicPagePost }  = require('../controllers/publicController');

router.get('/', publicPage);
router.post('/', publicPagePost);


module.exports = router;