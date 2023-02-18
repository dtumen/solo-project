const render = require('../utils/renderTemplate');
const Reviews = require('../views/Reviews')

// Импорти БД
const { Review } = require('../../db/models')

const reviewsPage = async (req, res) => {
  const user = req.session?.user;
  try {
    const allReviews = await Review.findAll({
      raw : true, 
      order: [['id', 'DESC']],
      attributes: ['id', 'book_name', 'rating', 'review', 'picture', 'user_id']});
    render(Reviews, {user, allReviews}, res);
  } catch (error) {
    console.error(error);
  }
}

const reviewsPagePost = async (req, res) => {
  const user = req.session?.user;
  try {
    res.redirect('/reviewform')
  } catch (error) {
    console.error(error);
  }
}



module.exports = { reviewsPage, reviewsPagePost };