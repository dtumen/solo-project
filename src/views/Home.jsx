const React = require('react');
const Layout = require('./Layout');

function Home({user}) {
  const titleName = 'Home';

  return (
    <Layout user={user} title={titleName}>
      <h2>Главная страница!</h2>
      {/* <div id="carouselExample" className="carousel slide">
  <div className="carousel-inner">
    <div className="carousel-item active">
      <img src="https://s1.livelib.ru/boocover/1001593410/200/b150/boocover.jpg" className="d-block w-100" alt=""/>
    </div>
    <div className="carousel-item">
      <img src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTMPI4E1doAmFvq8idyYXlZS8P5OM0J8vOiFw&usqp=CAU" className="d-block w-100" alt=""/>
    </div>
    <div className="carousel-item">
      <img src="https://u.to/yBOWHQ" className="d-block w-100" alt=""/>
    </div>
  </div>
  <button className="carousel-control-prev" type="button" data-bs-target="#carouselExample" data-bs-slide="prev">
    <span className="carousel-control-prev-icon" aria-hidden="true"></span>
    <span className="visually-hidden">Previous</span>
  </button>
  <button className="carousel-control-next" type="button" data-bs-target="#carouselExample" data-bs-slide="next">
    <span className="carousel-control-next-icon" aria-hidden="true"></span>
    <span className="visually-hidden">Next</span>
  </button>
</div> */}
    </Layout>
  );
}

module.exports = Home;