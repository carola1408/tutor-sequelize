const express = require('express')
const router = express.Router()

const passport = require('passport')

router.get('/google', passport.authenticate('google', {
  scope: ['email', 'profile']
}))

router.get('/auth/google/callback', passport.authenticate('google', {
  successRedirect: '/', //passport會驗證是否成功,是的話就導向首頁
  failureRedirect: '/users/login' //失敗則倒回登入頁面
}))

module.exports = router