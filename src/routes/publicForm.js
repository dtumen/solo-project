const express = require('express');
const router = express.Router();

const { publicFormRender, publicForm, postsEditform, postEditPostform }  = require('../controllers/publicFormController');



router.get('/', publicFormRender);
router.post('/', publicForm);
router.get('/editform/:id', postsEditform);
router.put('/editform/:id', postEditPostform);

module.exports = router;