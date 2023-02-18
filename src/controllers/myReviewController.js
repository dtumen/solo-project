const render = require('../utils/renderTemplate');
const MyReviews = require('../views/Myreviews')

// Импортим модель из БД
const { Review } = require('../../db/models');
const { Like}  = require('../../db/models');

const renderMyReviews = async (req, res) => {
  const user = req.session?.user;
  const reviews = await Review.findAll({
    raw: true,
    where: { user_id: user.id },
    // include: [Like],
  });
  render(MyReviews, { user, reviews }, res);
};
// Удаление из БД
const deleteMyReview = async (req, res) => {
  const user = req.session?.user;
  // console.log('========>', req.body);
  const { id } = req.body;
  try {
    const deletePost = await Review.destroy({
      where: {id: id}
    })
    console.log('Рецензия успешно удалёна!');
    res.json({status: 200});
  } catch (error) {
    console.error(error);
  }
}






module.exports = { renderMyReviews, deleteMyReview }