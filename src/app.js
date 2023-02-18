require('@babel/register');
require('dotenv').config();

const express = require('express');
const path = require('path');
const morgan = require('morgan');
const session = require('express-session')
const FileStore = require('session-file-store')(session)

// Импорт проверочной функции к БД
const Dbconnect = require('../db/config/dbconnect');

// Импорт middleware
const sessionControl = require('./middlewares/controlSessions')

// Импортим routes
const homeRouter = require('./routes/home');
const regRouter = require('./routes/registration');
const loginRouter = require('./routes/login');
const reviewsRouter = require('./routes/reviews');
const publicRouter = require('./routes/public');
const logoutRouter = require('./routes/logout');
const publicFormRouter = require('./routes/publicForm');
const reviewFormRouter = require('./routes/reviewForm');
const myReviewsRouter = require('./routes/myReviews');
const myPublicsRouter = require('./routes/myPublics');

// Проверяем подключение к БД
Dbconnect();

const app = express();
const { PORT, SESSION_SECRET } = process.env;

// Конфигурация для куки
const sessionConfig = {
  name: 'sid',
  store: new FileStore({}), 
  secret: SESSION_SECRET, 
  resave: false,                     
  saveUninitialized: false, 
  cookie: {
    httpOnly: true,
    maxAge: 1000 * 60 * 60 * 24 * 10, 
  },
}
// Необходимые middleware 
app.use(morgan('dev'));
app.use(express.urlencoded({ extended: true }));
app.use(express.json());
app.use(express.static(path.join(__dirname, '../public')));
app.use(session(sessionConfig));

// Подключаем middleware для контроля сессий
app.use(sessionControl);


// Для routes
app.use('/', homeRouter);
app.use('/signup', regRouter);
app.use('/signin', loginRouter);
app.use('/reviews', reviewsRouter);
app.use('/public', publicRouter);
app.use('/logout', logoutRouter);
app.use('/publicform', publicFormRouter);
app.use('/reviewform', reviewFormRouter);
app.use('/myreviews', myReviewsRouter);
app.use('/mypublics', myPublicsRouter);



app.listen(PORT, () => {
  console.log(`Сервер запущен на порту:${PORT}!`);
});
