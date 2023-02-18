const express = require('express');
const router = express.Router();

const { reviewFormRender, reviewForm, reviewsEditform, reviewsEditPostform }  = require('../controllers/reviewFormController');



router.get('/', reviewFormRender);
router.post('/', reviewForm);
router.get('/editform/:id', reviewsEditform);
router.put('/editform/:id', reviewsEditPostform);

module.exports = router;