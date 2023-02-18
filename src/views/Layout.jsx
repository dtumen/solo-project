const React = require('react');

function Layout({ children, title, user, allPosts }) {
  return (
    <html lang="ru">
      <head>
        <meta charSet="UTF-8" />
        <meta httpEquiv="X-UA-Compatible" content="IE=edge" />
        <meta name="viewport" content="width=device-width, initial-scale=1.0" />

        <title>{title}</title>
        <link
          rel="stylesheet"
          href="https://stackpath.bootstrapcdn.com/bootstrap/4.5.2/css/bootstrap.min.css"
          integrity="sha384-JcKb8q3iqJ61gNV9KGb8thSsNjpSL0n8PARn9HuZOnIxN0hoP+VmmDGMN5t9UJ0Z"
          crossOrigin="anonymous"
        />
        <link rel="stylesheet" type="text/css" href="/css/styles.css" />
        <script defer src="/js/application.js"></script>
      </head>
      <body>
      <div className="container">
          <nav className="navbar navbar-expand-sm bg-light">
            <img src="img/logo.jpeg" alt="logo" style={{maxWidth: '77px'}} />
            <ul className="navbar-nav">
              <li className="nav-item">
                <a className="nav-link" href="/">
                  Главная
                </a>
              </li>
              {user ? (
                                  <>
                                  <li className="nav-item">
                  <a className="nav-link" href="/reviews">
                    Рецензии
                  </a>
                </li>
                <li className="nav-item">
                    <a className="nav-link" href="/public">
                      Публикации пользователей
                    </a>
                  </li>
                  {/* <li className="nav-item">        
                  <p>{user}</p>
                  </li> */}
                  <li className="nav-item">
                    <a className="nav-link" href="/myreviews">
                      Мои рецензии
                    </a>
                  </li>
                  <li className="nav-item">
                    <a className="nav-link" href="/mypublics">
                      Мои посты
                    </a>
                  </li>
                  <li className="nav-item">
                    <a className="nav-link" href="/logout">
                    Выйти
                    </a>
                  </li>
                  </>
              ) : (
                  <><li className="nav-item">
                    <a className="nav-link" href="/reviews">
                      Рецензии
                    </a>
                  </li><li className="nav-item">
                      <a className="nav-link" href="/public">
                        Публикации пользователей
                      </a>
                    </li><li className="nav-item">
                      <a className="nav-link" href="/signin">
                        Войти
                      </a>
                    </li><li className="nav-item">
                      <a className="nav-link" href="/signup">
                        Регистрация
                      </a>
                    </li></>
              )}
            </ul>
          </nav>
          {children}
          </div>
      </body>
    </html>
  );
}

module.exports = Layout;