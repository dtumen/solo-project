const React = require('react');
const Layout = require('./Layout');

function ReviewForm({user}) {
  const titleName = 'ReviewForm';
  return (
    <Layout user={user} title={titleName}>
      <h2>Здесь можно разместить свои работы!</h2>
      <div className="login container registration">
        <form className='addReview' name="addReview" action='/reviewform' method='POST'>
          <div className="form-outline mb-4">
            <label className="form-label" htmlFor="form2Example1">
              Укажите название книги на которую хотите написать рецензию:
            </label>
            <input type="text" className="form-control" name="nameBook" placeholder="Например: Война и мир" />
          </div>
          <div className="form-outline mb-4">
            <label className="form-label" htmlFor="form2Example1">
              Какую оценку вы бы поставили данной книги:
            </label>
            <input type="text" className="form-control" name="rating" placeholder="Например: 9,4" />
          </div>
          <div className="form-outline mb-4">
            <label className="form-label" htmlFor="form2Example2">
              Ваша рецензия:
            </label>
            <textarea className="form-control" name="review" rows="3" placeholder="Например: Ваша рецензия..."/>
          </div>
          <div className="form-outline mb-4">
            <label className="form-label" htmlFor="form2Example3">
              Ссылка на обложку:
            </label>
            <input type="text" className="form-control" name="cover" placeholder="Вставьте ссылку"/>
          </div>
          <button
            type="submit"
            data-type="addbook-button"
            className="btn btn-primary btn-block mb-4"
          >
            Опубликовать
          </button>
          <div className="message" />
        </form>
      </div>

    </Layout>
  );
}

module.exports = ReviewForm;