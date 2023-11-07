const express = require('express')
const router = express.Router()
//新增，載入 controller
const admin = require('./modules/admin') //新增這行，載入 admin.js
const homeController = require('../controllers/home-controller')
const userController = require('../controllers/user-controller')
const { generalErrorHandler } = require('../middleware/error-handler')

//後台首頁
router.use('/admin', admin)

//前台首頁
router.get('/home', homeController.getHomes)


//登入入口
router.get('/users/login', (req, res) => {
  res.render('login')
})

router.post('/users/login', (req, res) => {
  res.send('login')
})

//註冊入口
router.get('/signup', userController.signUpPage)

router.post('/signup', userController.signUp) //注意用 post

//登出入口
router.get('/users/logout', (req, res) => {
  res.send('logout')
})

router.use('/', (req, res) => res.redirect('/home'))
router.use('/', generalErrorHandler)
module.exports = router