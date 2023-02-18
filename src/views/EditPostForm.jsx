const React = require('react');
const Layout = require('./Layout');

function EditPostForm({user, post }) {
  const titleName = 'PublicFrom';
  return (
    <Layout user={user} title={titleName}>
      <div className="login container registration">
        <form className='addPost' 
        name="EditPostForm" 
        action={`/publicform/editform/${post.id}`}
        method='POST'>
          <div name='editReviewForm' id={post.id}>
          <div className="form-outline mb-4">
            <label className="form-label" htmlFor="form2Example1">
              Укажите название вашей работы:
            </label>
            <input type="text" 
            className="form-control" 
            name="namePublic" 
            placeholder="Например: Пророк" 
            value={post.post_name}
            />
          </div>
          <div className="form-outline mb-4">
            <label className="form-label" htmlFor="form2Example1">
              К какому жанру относится ваша работа:
            </label>
            <input type="text" 
            className="form-control" 
            name="subject" 
            placeholder="Например: Стихотворение" 
            value={post.subject}
            />
          </div>
          <div className="form-outline mb-4">
            <label className="form-label" htmlFor="form2Example2">
              Ваша работа:
            </label>
            <textarea className="form-control" 
            name="description" 
            rows="3" 
            placeholder="Например: Духовной жаждою томим..."
            value={post.post}
            />
          </div>
          <div className="form-outline mb-4">
            <label className="form-label" htmlFor="form2Example3">
              Ссылка на обложку:
            </label>
            <input type="text" 
            className="form-control" 
            name="cover" 
            placeholder="Вставьте ссылку"
            value={post.picture}
            />
          </div>
          <button
           name='EditPostFormButton'
            type="submit"
            data-type="addbook-button"
            className="btn btn-primary btn-block mb-4"
          >
            Опубликовать
          </button>
          <div className="message" />
          </div>
        </form>
      </div>

    </Layout>
  );
}

module.exports = EditPostForm;