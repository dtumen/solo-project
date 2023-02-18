const React = require('react');
const Layout = require('./Layout');

function Login({ user }) {
  const titleLogin = 'LoginForm'

  return (
    <Layout username={user} title={titleLogin}>
      <>
        <h2>Вход на сайт</h2>
        <form name="signinForm" method="POST" action="/signin">
          <div className="form-group">
            <label htmlFor="username">Логин:</label>
            <input
              id="username"
              className="form-control"
              name="login"
              type="text"
              required
              placeholder='Введите логин'
            />
          </div>
          <div className="form-group">
            <label htmlFor="password">Пароль:</label>
            <input
              id="password"
              className="form-control"
              name="password"
              type="password"
              required
              placeholder='Введите пароль'
            />
          </div>
          <button type="submit" className="btn btn-primary">
            Войти
          </button>
        </form>
        {/* <script src="/js/signin.js" /> */}
      </>
    </Layout>
  );
}

module.exports = Login;