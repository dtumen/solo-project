const React = require('react');
const Layout = require('./Layout');

function Public({user, allPosts }) {
  const titleName = 'Publication';
  console.log('==========>',allPosts);

  return (
    <Layout user={user} posts = {allPosts} title={titleName}>
      <h2>Здесь можно разместить свои работы!</h2>
      {user ? (
      <>
      <form name='FormPublic' action='/public' method='POST'>
          <button
            id= 'buttonPublicForm'
            type="submit"
            data-type="addbook-button"
            className="btn btn btn-info btn-primary btn-block mb-4"
          >
            Разместить свою публикацию!
          </button>
          <div className="message" />
      </form>
      </>
      ) : (
        <>
      </>
      )}
              {allPosts.map((el) => (
          <div className="posts" key={el.user_id}>
            <br></br>
            {/* <textarea type="link" name="link" className="form-control" id="exampleInputURL" value={el.picture.img}/> */}
            {/* <a href={el.picture}><img src={el.picture} alt={el.post_name}></img></a> */}
            <h5>{el.post_name}</h5>
            <p>{el.subject}</p>
            <div>{el.post.split('\n').map((e)=> <p key={el.id}><font style={{size:"3", color:"red",  face:"Arial" }}>{e}</font></p>)}</div>
          </div>
        ))}
    </Layout>
  );
}

module.exports = Public;