const render = require('../utils/renderTemplate');
const ReviewForm = require('../views/ReviewForm');
const EditReviewForm = require('../views/EditReviewForm')

// Импортим модель 
const { Review } = require('../../db/models');

const reviewFormRender = async (req, res) => {
  const user = req.session?.user;
  try {
    render(ReviewForm, {user}, res);
  } catch (error) {
    console.error(error);
  }
}

const reviewForm = async (req, res) => {
  const user = req.session?.user;
  // console.log('======>',req.body);
  const { nameBook, rating, review, cover } = req.body;
  try {
    const newPublics = await Review.create({book_name: nameBook, rating: rating, review: review, picture: cover, user_id: user.id});
    return res.status(200).json({ newPublics });
  } catch (error) {
    return res.status(500).send({ error: 'Ошибка при сохранении записи запроса в базу данных!' })
  }
}


const reviewsEditform = async (req, res) => {
  const user = req.session?.user;
  const { id } = req.params
  try {
    const review = await Review.findOne({
      raw : true,
      where : { id: id}
    })
    console.log('review ====>', review);
    render(EditReviewForm, {user, review }, res)
  } catch (error) {
    console.error(error);
  }
}

const reviewsEditPostform = async (req, res) => {
  console.log(req.body);
  const user = req.session?.user;
  const { nameBook, rating, review, cover } = req.body;
  const { id } = req.params
  try {
    const review = await Review.update(
      {
      book_name: nameBook,
      rating: rating,
      review: review,
      picture: cover,
      }, 
      {
        where : { id: id}
      }
    )
    console.log('Данные в БД успешно изменены!');
    res.json({status: 200});
  } catch (error) {
    console.error(error);
  }
}

module.exports = { reviewFormRender, reviewForm, reviewsEditform, reviewsEditPostform };