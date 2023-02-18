const render = require('../utils/renderTemplate');
const PublicForm = require('../views/PublicForm')
const EditPostForm = require('../views/EditPostForm')

// Импортим модель 
const { Post } = require('../../db/models');

const publicFormRender = async (req, res) => {
  const user = req.session?.user;
  try {
    render(PublicForm, {user}, res);
  } catch (error) {
    console.error(error);
  }
}

const publicForm = async (req, res) => {
  const user = req.session?.user;
  // console.log('======>',req.body);
  const { namePublic, subject, description, cover } = req.body;
  try {
    const newPublics = await Post.create({post_name: namePublic, subject: subject, post: description, picture: cover, user_id: user.id});
    return res.status(200).json({ newPublics });
  } catch (error) {
    return res.status(500).send({ error: 'Ошибка при сохранении записи запроса в базу данных!' })
  }
}

const postsEditform = async (req, res) => {
  const user = req.session?.user;
  const { id } = req.params
  try {
    const post = await Post.findOne({
      raw : true,
      where : { id: id}
    })
    console.log('post ====>', post);
    render(EditPostForm, {user, post }, res)
  } catch (error) {
    console.error(error);
  }
}

const postEditPostform = async (req, res) => {
  console.log(req.body);
  const user = req.session?.user;
  const { namePublic, subject, description, cover } = req.body;
  const { id } = req.params
  try {
    const post = await Post.update(
      {
        post_name: namePublic,
        subject: subject,
        post: description,
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

module.exports = { publicFormRender, publicForm, postsEditform, postEditPostform };