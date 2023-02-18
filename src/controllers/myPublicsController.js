const render = require('../utils/renderTemplate');
const Public = require('../views/Public')
const MyPublics = require('../views/Mypublics')
const Reviews = require('../views/Reviews')

// Импортим модель из БД
const { Post } = require('../../db/models');
const { Like}  = require('../../db/models');

const renderMyPublics = async (req, res) => {
  const user = req.session?.user;
  try {
    const publics = await Post.findAll({
      raw: true,
      where: { user_id: user.id },
      // include: [Like],
    });
    render(MyPublics, { user, publics }, res);
  } catch (error) {
    console.error(error)
  }
};

const MyPublicDelete = async (req, res) => {
  const user = req.session?.user;
  // console.log('===========>',req.params);
  // const { id } = req.params;
  const { id } = req.body;
  try {
    const deletePost = await Post.destroy({
      where: {id: id}
    })
    console.log('Пост успешно удалён!');
    res.json({status: 200});
  } catch (error) {
    console.error(error);
  }
};


module.exports = { renderMyPublics, MyPublicDelete }