const bcrypt = require('bcrypt');
const render = require('../utils/renderTemplate');
const Login = require('../views/Login')

// Импорт User
const { User } = require('../../db/models');

const renderLogin = async (req, res) => {
try {
  render(Login, {}, res);
    } catch (error) {
  console.error(error);
  }
}

const loginPage = async (req, res) => {
  // Достаём данный из req.body;
  const { login, password } = req.body;
  try {
    // Делаем проверку в БД
    const user = await User.findOne({ raw:true, where: { login } });
    // console.log(user);
    if (!user) {
      return res.status(400).json({ error: 'Пользователь с таким login не найден' });
    }
    // Сравниваем хэш в БД с хэшем введённого пароля
    const isValidPassword = await bcrypt.compare(password, user.password);
    if (!isValidPassword) {
      return res.status(400).json({ error: 'Неправильный пароль( Попробуйте еще раз!' });
    }
    // Создаём сессию 
    console.log(`======> Успешная авторизанция! Пользователь: ${login} успешно авторизован!`);
    req.session.user = { id: user.id, name: user.login };
    req.session.save();
    return res.status(200).json({ user });
  } catch (error) {
    if(error.message === "Validation error") {
      // Ошибка для бэка
      console.log(`======> Ошибка при авторизации: Пользователь: ${login} не правильно ввел логин/пароль!`);
      // Для front
      return res.status(400).send({ error: 'Пользователь с таким login/email уже зарегистрирован!' });
    }
  }
}

module.exports = { renderLogin, loginPage }