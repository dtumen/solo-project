const checkUser = (req, res, next) => {
  if (req.session.userName) {
  next();
      } else {
  res.redirect('/');
    }
  };
  
    
  
  module.exports = checkUser;