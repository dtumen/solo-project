// Middleware для контроля сессий.
// Для того, чтобы при переходе на любую страницу отображался req.session
const sessionControl = ((req, res, next) => {
  console.log('my middleware,  ===>>> req.session:', req.session);
  next();
});

module.exports = sessionControl;