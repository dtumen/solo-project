const React = require('react');
const Layout = require('./Layout');


function MyReviews({ user, reviews }) {
  const titleName = 'My Review';
  const proverka = reviews.length > 0
  return (
    <Layout user={user} title={titleName}>
      <h2>Мои рецензии:</h2>

      {proverka > 0 ? (
        reviews.map((e) => (
          <div key={e.id} className='ReviewContainer' id={e.id}>
          <p>Ссылка: {e.picture}</p>
          <h5>{e.book_name}</h5>
          <p>{e.rating}</p>
          <p>{e.review}</p>
          <button
            name={e.id}
            id= 'buttonEditReviewForm'
            type="submit"
            data-type="addbook-button"
            className="btn btn btn-info btn-primary btn-block mb-4"
          >
            Изменить свою рецензию!
          </button>
          <div className="message" />
      <button
            id= 'buttonDeleteReview'
            type="submit"
            data-type="addbook-button"
            className="btn btn btn-info btn-primary btn-block mb-4"
          >
            Удалить свою рецензию!
          </button>
          <div className="message" />
          </div>
      ))) : (
        <h5>К сожалению вы ничего не опубликовали на данный момент{"("}</h5>
      )}
    </Layout>
  );
}

module.exports = MyReviews