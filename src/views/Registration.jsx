const React = require('react');
const Layout = require('./Layout');

function Registration({ user }) {
  const titleRegistr = 'Registration'

  return (
    <Layout username={user} title={titleRegistr}>
      <>
        <h2>Регистрация</h2>
        <form name="signupForm" method="POST" action="/signup">
          <div className="form-group">
            <label htmlFor="username">Логин:</label>
            <input
              id="username"
              className="form-control"
              name="login"
              type="text"
              required
              pattern="[A-Za-z]\w+"
              minLength={4}
              title="Латинские буквы, цифры и _"
              placeholder='Придумайте логин'
            />
          </div>
          <div className="form-group">
            <label htmlFor="email">Email:</label>
            <input
              id="email"
              className="form-control"
              name="email"
              type="text"
              pattern="^[A-Z0-9a-z._%+-]+@[A-Z0-9a-z.-]+\.[A-Za-z]{2,}$"
              required
              placeholder='Например dog@mai.ru'
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
              minLength={5}
              placeholder='Придумайте пароль'
            />
          </div>
          <button type="submit" className="btn btn-primary">
            Зарегистрироваться
          </button>
        </form>
        {/* <script src='/js/signup.js'/> */}
      </>
    </Layout>
  );
}

module.exports = Registration;