// Достаем форму регистрации
const { signupForm } = document.forms;
// Достаем форму авторизации
const { signinForm } = document.forms;
// Достаём кнопку и форму
const { addPost } = document.forms;
// Достаём кнопку и форму
const { addReview } = document.forms;
// Достаёем форму и кнопку
const { EditReview } = document.forms;
// console.log(EditReview);
// Достаёем форму и кнопку
const { EditPostForm } = document.forms;
console.log(EditPostForm);
const divContainer = document.querySelector('.container');
// console.log(divContainer);

if(signupForm) {
  signupForm.addEventListener('submit', async (event) => {
    // Останавливаем событие
    event.preventDefault()
    try {
      // Достаём данные из inputs
      const { login, email, password } = signupForm;
      // Заворачиваем в объект
      const myPost = { login: login.value, email: email.value, password: password.value}
      // Fetch:
      const response = await fetch('/signup', 
      {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify(myPost),
      })
      if(response.status !== 200) {
        const post = await response.json();
        alert(post.error);
        
      } else {
        response.json();
        alert('Пользователь успешно зарегистрирован!');
        document.location = '/signin';
      }
    } catch (error) {
      console.error(error);
    }
  });
}

if(signinForm){
  signinForm.addEventListener('submit', async (event) => {
    event.preventDefault()
    try {
      const { login, password } = signinForm;
      const myPost = { login: login.value, password: password.value}
      const response = await fetch('/signin', 
      {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify(myPost),
      })
      if(response.status !== 200) {
        // console.log(response);
        const post = await response.json();
        alert(post.error);     
      } else {
        response.json();
        // console.log(response);
        alert('Авторизация прошла успешно!');
        document.location = '/';
      }
    } catch (error) {
      console.error(error)
    }
  })
}

if(addPost) {
  addPost.addEventListener('submit', async (event) => {
    event.preventDefault()
    try {
      const { namePublic, subject, description, cover } = addPost;
      const myPost = { 
        namePublic: namePublic.value, 
        subject: subject.value,
        description: description.value,
        cover: cover.value,
      }
      const response = await fetch('/publicform', 
      {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify(myPost),
      })
      if(response.status !== 200) {
        const post = await response.json();
        alert(post.error);     
      } else {
        response.json();
        alert('Пост опубликован!');
        document.location = '/public';
      }
    } catch (error) {
      console.error(error)
    }
  })
}

if(addReview) {
  addReview.addEventListener('submit', async (event) => {
    event.preventDefault()
    try {
      const { nameBook, rating, review, cover} = addReview;
      const myPost = { 
        nameBook: nameBook.value, 
        rating: rating.value,
        review: review.value,
        cover: cover.value,
      }
      const response = await fetch('/reviewform', 
      {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify(myPost),
      })
      if(response.status !== 200) {
        const post = await response.json();
        alert(post.error);     
      } else {
        response.json();
        alert('Рецензия опубликована!');
        document.location = '/reviews';
      }
    } catch (error) {
      console.error(error)
    }
  })
}

if(divContainer) {
  divContainer.addEventListener('click', async (event) => {
    if(event.target.id === 'buttonDeletePublic') {
      try {
        const postId = event.target.closest('.PostContainer')
        const obj = { id: postId.id }
        const response = await fetch('/mypublics', {
          method: 'DELETE',
          headers: {
            'Content-Type': 'application/json',
          },
          body: JSON.stringify(obj),
        })
        const result = await response.json()
        if(result.status === 200) {
          postId.remove()
        }
      } catch (error) {
        console.error(error)
      }
    }
    if(event.target.id === 'buttonDeleteReview') {
      try {
        const reviewId = event.target.closest('.ReviewContainer')
        const obj = { id: reviewId.id }
        const response = await fetch('/myreviews', 
    {
      method: 'DELETE',
      headers: {
        'Content-Type': 'application/json',
      },
      body: JSON.stringify(obj),
    })
    const result = await response.json()
    if(result.status === 200) {
      reviewId.remove()
    }
      } catch (error) {
        console.error(error.message)
      }
    }

    if(event.target.id === 'buttonEditReviewForm') {
        const reviewchange = event.target.closest('.ReviewContainer');
      document.location = `/reviewform/editform/${reviewchange.id}` 
    }
    if(event.target.id === 'buttonEditPublicForm') {
      const reviewchange = event.target.closest('.PostContainer');
    document.location = `/publicform/editform/${reviewchange.id}` 
  }
  })
}

  if(EditReview) {
    EditReview.addEventListener('submit', async (event) => {
      // Останавливаем событие
      event.preventDefault()
      try {
        const reviewId = event.target.children[0].id
        // Достаём данные из inputs
        const { nameBook, rating, review, cover } = EditReview;
        // Заворачиваем в объект
        const myPost = { nameBook: nameBook.value, rating: rating.value, review: review.value, cover: cover.value}
        // Fetch:
        const response = await fetch(`/reviewform/editform/${reviewId}`, 
        {
          method: 'Put',
          headers: {
            'Content-Type': 'application/json',
          },
          body: JSON.stringify(myPost),
        })
        if(response.status !== 200) {
          const post = await response.json();
          alert(post.error);
          
        } else {
          response.json();
          alert('Данные успешно изменены!');
          document.location = '/myreviews';
        }
      } catch (error) {
        console.error(error);
      }
    });
  }


  if(EditPostForm) {
    EditPostForm.addEventListener('submit', async (event) => {
      // Останавливаем событие
      event.preventDefault()
      try {
        const postId = event.target.children[0].id
        // console.log(postId);
        // Достаём данные из inputs
        const { namePublic, subject, description, cover } = EditPostForm;
        // Заворачиваем в объект
        const myPost = { namePublic: namePublic.value, subject: subject.value, description: description.value, cover: cover.value}
        // Fetch:
        const response = await fetch(`/publicform/editform/${postId}`, 
        {
          method: 'Put',
          headers: {
            'Content-Type': 'application/json',
          },
          body: JSON.stringify(myPost),
        })
        if(response.status !== 200) {
          const post = await response.json();
          alert(post.error);
          
        } else {
          response.json();
          alert('Данные успешно изменены!');
          document.location = '/mypublics';
        }
      } catch (error) {
        console.error(error);
      }
    });
  }


