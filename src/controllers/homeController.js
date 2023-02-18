const render = require('../utils/renderTemplate');
const Home = require('../views/Home')

const homePage = async (req, res) => {
  const user = req.session?.user;
  try {
    render(Home, {user}, res);
  } catch (error) {
    console.log(error);
  }
}

module.exports = homePage;
