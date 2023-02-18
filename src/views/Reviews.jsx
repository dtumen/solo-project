const React = require('react');
const Layout = require('./Layout');

function Reviews({user, allReviews}) {
  const titleName = 'Reviews';

  return (
    <Layout user={user} title={titleName}>
      <h2>Здесь можно добавить свою рецензию на книгу!</h2>
      {user ? (
      <>
      <form name='FormReview' action='/reviews' method='POST'>
          <button
            id= 'buttonReviewForm'
            type="submit"
            data-type="addbook-button"
            className="btn btn btn-info btn-primary btn-block mb-4"
          >
            Разместить свою рецензию!
          </button>
          <div className="message" />
      </form>
      </>
      ) : (
        <>
      </>
      )}
                    {allReviews.map((el) => (
          <div className="posts" key={el.user_id}>
            <br></br>
            {/* <textarea type="link" name="link" className="form-control" id="exampleInputURL" value={el.picture.img}/> */}
            {/* <a href={el.picture}><img src={el.picture} alt={el.book_name}></img></a> */}
            <h5>{el.book_name}</h5>
            <p>Оценка: {el.rating}</p>
            <p><font style={{size:"3", color:"red",  face:"Arial" }}>{el.review}</font></p>
          </div>
        ))}
    </Layout>
  );
}

module.exports = Reviews;