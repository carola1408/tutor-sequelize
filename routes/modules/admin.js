const express = require('express')
const router = express.Router()
// controllers
const adminController = require('../../controllers/admin-controller')
// middleware
const { authenticatedAdmin } = require('../../middleware/auth')  //引入 auth.js
// admin home
router.get('/home', authenticatedAdmin, adminController.getHome)
// admin users
router.get('/', (req, res) => res.redirect('/admin/home'))
module.exports = router