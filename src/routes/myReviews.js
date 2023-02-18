const express = require('express');
const router = express.Router();

const { renderMyReviews, deleteMyReview }  = require('../controllers/myReviewController');


router.get('/', renderMyReviews);
router.delete('/', deleteMyReview);





module.exports = router;