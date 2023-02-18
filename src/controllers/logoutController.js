const bcrypt = require('bcrypt');
const checkUser = require('../middlewares/checkUser');

const logoutUser = (checkUser, (req, res) => {

  req.session.destroy(() => {
  res.clearCookie('sid');
  res.redirect('/');
    });
  });

  module.exports = logoutUser