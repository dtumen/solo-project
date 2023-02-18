const React = require('react');
const Layout = require('./Layout');

function PublicAll({user}) {
  const titleName = 'Publication';

  return (
    <Layout user={user} title={titleName}>

    </Layout>
    );
  }
  module.exports = PublicAll