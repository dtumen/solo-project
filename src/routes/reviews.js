const express = require('express');
const router = express.Router();

const { reviewsPage, reviewsPagePost }  = require('../controllers/reviewController');

router.get('/', reviewsPage);
router.post('/', reviewsPagePost);


module.exports = router;