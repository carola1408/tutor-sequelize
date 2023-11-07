const bcrypt = require('bcryptjs') //載入 bcrypt
const db = require('../models')
const { User } = db
const userController = {
  //註冊的頁面
  signUpPage: (req, res) => {
    res.render('signup')
  },
  //處理註冊的行為
  signUp: (req, res) => {
    bcrypt.hash(req.body.password, 10)
      .then(hash => User.create({
        name: req.body.name,
        email: req.body.email,
        password: hash
      }))
      .then(() => {
        res.redirect('/home')
      })
  }
}
module.exports = userController