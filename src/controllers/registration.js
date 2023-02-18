const bcrypt = require('bcrypt');
const render = require('../utils/renderTemplate');
const Registration = require('../views/Registration');
const { User } = require('../../db/models');

const renderRegistr = async (req, res) => {
  try {
    render(Registration, {}, res);
  } catch (error) {
    console.error(error);
  }
};
const RegPage = async (req, res) => {
  // Достаем логин, email, пароль из req.body
  const { login, email, password } = req.body;
  try {
    // Проверка на корректность пароля
    if (password.length < 5) {
      return res
        .status(400)
        .send({ error: 'Пароль должен быть более 5 символов!' });
    }
    // Проверка на корректность логина, пароля, email
    if (login && email) {
      // Хешируем пароль с помошью bcrypt.hash
      const hash = await bcrypt.hash(password, 10);
      // Создаем нового пользователя в найше БД
      const newUser = await User.create({ login, email, password: hash });
      // Выводим новый пользователь в консоль на бэке
      console.log(`Пользователь: ===> ${newUser} создан успешно!`);
      res.status(200).end();
    }
  } catch (error) {

    if(error.message === "Validation error") {
      // Ошибка для бэка
      console.log('======> Ошибка при регистрации: Пользователь с таким login/email уже зарегистрирован!');
      // Для front
      return res.status(400).send({ error: 'Ошибка при регистрации: Пользователь с таким login/email уже зарегистрирован! Попробуйте еще раз!' });
    }
  }
};

module.exports = { RegPage, renderRegistr };




