const React = require('react');
const Layout = require('./Layout');

function NotFound({username}) {
  const titleName = 'Not Found';

  return (
    <Layout username={username} title={titleName}>
      <p className="lead">Страница не найдена - 404</p>
    </Layout>
  );
}

module.exports = NotFound;