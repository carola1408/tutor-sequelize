const express = require('express')
const router = express.Router()
// controllers
const adminController = require('../../controllers/admin-controller')
const { authenticatedAdmin } = require('../../middleware/auth')  //引入 auth.js
// admin users
router.get('/users', authenticatedAdmin, adminController.getUsers)


router.use('/', (req, res) => res.redirect('/admin/users'))

module.exports = router