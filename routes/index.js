const express = require('express')
const router = express.Router()
const passport = require('../config/passport') // 引入 Passport做驗證
const { authenticated } = require('../middleware/auth')  //引入 auth.js
const auth = require('./modules/auth')
const admin = require('./modules/admin') //新增這行，載入 admin.js
const { generalErrorHandler } = require('../middleware/error-handler')

//新增，載入 controller
const homeController = require('../controllers/home-controller')
const userController = require('../controllers/user-controller')
router.use('/auth', auth)
//後台首頁
router.use('/admin', admin)

//前台首頁
router.get('/home', authenticated, homeController.getHomes)


//登入入口
router.get('/signin', userController.signInPage)

router.post('/signin', passport.authenticate('local', { failureRedirect: '/signin', failureFlash: true }), userController.signIn) // 注意是 post

//註冊入口
router.get('/signup', userController.signUpPage)

router.post('/signup', userController.signUp) //注意用 post

//登出入口
router.get('/logout', userController.logout)

router.use('/', (req, res) => res.redirect('/home'))
router.use('/', generalErrorHandler)
module.exports = router