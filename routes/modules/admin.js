// const express = require('express')
// const router = express.Router()
// // controllers
// const adminController = require('../../controllers/admin-controller')
// // middleware
// const { authenticatedAdmin } = require('../../middleware/auth')  //引入 auth.js
// // admin home
// router.get('/home', authenticatedAdmin, adminController.getHome)
// // admin users
// router.get('/users', authenticatedAdmin, adminController.getUsers)
// router.get('/', (req, res) => res.redirect('/admin/home'))
// module.exports = router

const express = require('express')
const router = express.Router()
const adminController = require('../../controllers/admin-controller')
router.get('/tutors', adminController.getTutors)
router.use('/', (req, res) => res.redirect('/admin/tutors'))
module.exports = router