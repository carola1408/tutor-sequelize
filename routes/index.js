const express = require('express')
const router = express.Router()
//首頁
router.get('/', (req, res) => {
  res.send('Hello World!')
})

//登入入口
router.get('/users/login', (req, res) => {
  res.render('login')
})

router.post('/users/login', (req, res) => {
  res.send('login')
})

//註冊入口
router.get('/users/register', (req, res) => {
  res.render('register')
})

router.post('/users/register', (req, res) => {
  res.send('register')
})

//登出入口
router.get('/users/logout', (req, res) => {
  res.send('logout')
})

module.exports = router