const express = require('express')
const router = express.Router()
//新增，載入 controller
const homeController = require('../controllers/home-controller')
const admin = require('./modules/admin') //新增這行，載入 admin.js
//後台
router.use('/admin', admin)

//首頁
router.get('/home', homeController.getHomes)


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

router.use('/', (req, res) => res.redirect('/home'))
module.exports = router