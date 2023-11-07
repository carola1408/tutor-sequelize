// Include packages and define server related variables
const express = require('express')
const exphbs = require('express-handlebars') // 引入 express-handlebars
const flash = require('connect-flash') //自訂訊息
const session = require('express-session') //使用 session
const passport = require('./config/passport') // 引入Passport
const methodOverride = require('method-override')
const routes = require('./routes')

const app = express()
const PORT = 3000
const SESSION_SECRET = 'secret'
// 註冊 Handlebars 樣板引擎，並指定副檔名為 .hbs
app.engine('hbs', exphbs({ defaultLayout: 'main', extname: '.hbs' }))

// 設定使用 Handlebars 做為樣板引擎
app.set('view engine', 'hbs')
//使用 body-parser
app.use(express.urlencoded({ extended: true }))
app.use(methodOverride('_method'))
app.use(session({ secret: SESSION_SECRET, resave: false, saveUninitialized: false }))
app.use(passport.initialize()) // 增加這行，初始化 Passport
app.use(passport.session()) // 增加這行，啟動 session 功能
app.use(flash()) // 掛載套件
app.use((req, res, next) => {
  res.locals.success_messages = req.flash('success_messages')  // 設定 success_msg 訊息
  res.locals.error_messages = req.flash('error_messages')  // 設定 warning_msg 訊息
  res.locals.warning_msg = req.flash('warning_msg')  // 設定 warning_msg 訊息
  next()
})

app.use(routes)
app.listen(PORT, () => {
  console.log(`App is running on http://localhost:${PORT}`)
})
