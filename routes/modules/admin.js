const express = require('express')
const router = express.Router()
const adminController = require('../../controllers/admin-controller')
const { authenticatedAdmin } = require('../../middleware/auth')  //引入 auth.js
router.get('/home', authenticatedAdmin, adminController.getHome)
router.use('/', (req, res) => res.redirect('/admin/home'))
module.exports = router