const React = require('react');
const Layout = require('./Layout');

function EditReviewForm({user, review}) {
  console.log('EditReviewForm===>', review);
  const titleName = 'EditReviewForm';
  return (
    <Layout user={user} title={titleName}>
      <div  className="login container registration" >
        <form className='EditReview' 
        name="EditReview" 
        action={`/reviewform/editform/${review.id}`}
        method='POST'>
          <div name='editReviewForm' id={review.id}>
          <div className="form-outline mb-4 ">
            <label className="form-label" htmlFor="form2Example1">
              Укажите название книги на которую хотите написать рецензию:
            </label>
            <input 
            type="text" 
            className="form-control" 
            name="nameBook" 
            placeholder="Например: Война и мир"
            value={review.book_name}
             />
          </div>
          <div className="form-outline mb-4">
            <label className="form-label" htmlFor="form2Example1">
              Какую оценку вы бы поставили данной книги:
            </label>
            <input 
            type="text" 
            className="form-control" 
            name="rating" 
            placeholder="Например: 9,4" 
            value={review.rating}
            />
          </div>
          <div className="form-outline mb-4">
            <label className="form-label" htmlFor="form2Example2">
              Ваша рецензия:
            </label>
            <textarea 
            className="form-control" 
            name="review" 
            rows="3" 
            placeholder="Например: Ваша рецензия..."
            value={review.review}
            />
          </div>
          <div className="form-outline mb-4">
            <label className="form-label" htmlFor="form2Example3">
              Ссылка на обложку:
            </label>
            <input 
            type="text" 
            className="form-control" 
            name="cover" 
            placeholder="Вставьте ссылку"
            value={review.picture}
            />
          </div>
          <button
          name='EditReviewFormButton'
            type="submit"
            data-type="addbook-button"
            className="btn btn-primary btn-block mb-4"
          >
            Изменить
          </button>
          <div className="message" />

          </div>
        </form>
      </div>

    </Layout>
  );
}

module.exports = EditReviewForm;