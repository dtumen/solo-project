const React = require('react');
const Layout = require('./Layout');

function PublicForm({user }) {
  const titleName = 'PublicFrom';
  return (
    <Layout user={user} title={titleName}>
      <h2>Здесь можно разместить свои работы!</h2>
      <div className="login container registration">
        <form className='addPost' name="addPost" action='/publicform' method='POST'>
          <div className="form-outline mb-4">
            <label className="form-label" htmlFor="form2Example1">
              Укажите название вашей работы:
            </label>
            <input type="text" className="form-control" name="namePublic" placeholder="Например: Пророк" />
          </div>
          <div className="form-outline mb-4">
            <label className="form-label" htmlFor="form2Example1">
              К какому жанру относится ваша работа:
            </label>
            <input type="text" className="form-control" name="subject" placeholder="Например: Стихотворение" />
          </div>
          <div className="form-outline mb-4">
            <label className="form-label" htmlFor="form2Example2">
              Ваша работа:
            </label>
            <textarea className="form-control" name="description" rows="3" placeholder="Например: Духовной жаждою томим..."/>
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

module.exports = PublicForm;