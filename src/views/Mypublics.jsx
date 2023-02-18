const React = require('react');
const Layout = require('./Layout');


function MyPublics({ user, publics }) {
  const titleName = 'My Publics';
  const proverka = publics.length > 0
  return (
    <Layout user={user} title={titleName}>
      <h2>Мои публикации:</h2>
      {proverka > 0 ? (
        publics.map((e) => (
          <div key={e.id} className="PostContainer" id={e.id}>
          <p>Ссылка: {e.picture}</p>
          <h5>{e.post_name}</h5>
          <p>{e.subject}</p>
            <div>
          <div>{e.post.split('\n').map((el)=> <p key={e.id}><font style={{size:"3", color:"red",  face:"Arial" }}>{el}</font></p>)}</div>
          {/* <div className="d-grid gap-2 d-md-flex justify-content-md-end"> */}
          <button
            name = 'buttonEditPublicForm'
            id= 'buttonEditPublicForm'
            type="submit"
            data-type="addbook-button"
            className="btn btn btn-info btn-primary btn-block mb-4"
          >
            Изменить свою публикацию!
          </button>
          <div className="message" />
      <button
            id= 'buttonDeletePublic'
            type="submit"
            data-type="addbook-button"
            className="btn btn btn-info btn-primary btn-block mb-4"
          >
            Удалить свою публикацию!
          </button>
          <div className="message" />
      {/* </form> */}
          </div>
        </div>
        // </div>
      ))) : (
        <h5>К сожалению вы ничего не опубликовали на данный момент{"("}</h5>
      )}
    </Layout>
  );
};

module.exports = MyPublics