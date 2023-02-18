const express = require('express');
const router = express.Router();

const { renderMyPublics, MyPublicDelete }  = require('../controllers/myPublicsController');
//, MyPublicDelete 
router.get('/', renderMyPublics);
router.delete('/', MyPublicDelete);


module.exports = router;