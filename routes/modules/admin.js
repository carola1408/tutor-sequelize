const express = require('express')
const router = express.Router()
const adminController = require('../../controllers/admin-controller')
router.get('/home', adminController.getHome)
router.use('/', (req, res) => res.redirect('/admin/home'))
module.exports = router