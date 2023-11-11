const bcrypt = require('bcryptjs') //載入 bcrypt
const db = require('../models')
const { User } = db
const userController = {
  //註冊的頁面
  signUpPage: (req, res) => {
    res.render('signup')
  },
  //處理註冊的行為
  signUp: (req, res, next) => {
    // 確認資料裡面沒有一樣的 email，若有，就建立一個 Error 物件並拋出 
    User.findOne({ where: { email: req.body.email } })
      .then(user => {
        if (user) throw new Error('Email already exists!')
        return bcrypt.hash(req.body.password, 10) // 前面加 return
      })
      .then(hash => User.create({  //上面錯誤狀況都沒發生，就把使用者的資料寫入資料庫
        name: req.body.name,
        email: req.body.email,
        password: hash,
        role: 'student', // 設定角色為學生
      }))
      .then(() => {
        req.flash('success_messages', '成功註冊學生帳號！') //並顯示成功訊息
        res.redirect('/signin')
      })
      .catch(err => next(err))
  },
  signInPage: (req, res) => {
    res.render('signin')
  },
  signIn: (req, res) => {
    req.flash('success_messages', '成功登入！')
    res.redirect('/tutors')
  },
  logout: (req, res) => {
    req.flash('success_messages', '登出成功！')
    req.logout()
    res.redirect('/signin')
  }
}
module.exports = userController