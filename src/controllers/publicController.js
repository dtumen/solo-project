const render = require('../utils/renderTemplate');
const Public = require('../views/Public')
const PublicForm = require('../views/PublicForm')

// Импорт бд со всеми постами
const { Post } = require('../../db/models')

const publicPage = async (req, res) => {
  const user = req.session?.user;
  try {
    const allPosts = await Post.findAll({
      raw : true, 
      order: [['id', 'DESC']], 
      attributes: ['id', 'post_name', 'subject', 'post', 'picture', 'user_id']
    });
    // console.log(allPosts);
    render(Public, {user, allPosts}, res);
  } catch (error) {
    console.error(error);
  }
}

const publicPagePost = async (req, res) => {
  const user = req.session?.user;
  try {
    res.redirect('/publicform')
  } catch (error) {
    console.error(error);
  }
}





module.exports = { publicPage, publicPagePost};