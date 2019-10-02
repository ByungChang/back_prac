const express = require('express');
const { isLoggedIn, isNotLoggedIn } = require('./middlewares');

const router = express.Router();

router.get('/', (req, res, next) => {
  res.render('main', {
    title: '메인페이지',
    user: req.user,
    loginError: req.flash('loginError'),
  });
});

module.exports = router;
