const { User } = require('../models')

const adminController = {
  getUsers: (req, res, next) => {
    // 查詢所有使用者
    return User.findAll({
      raw: true
    })
      .then(users => res.render('admin/users', { users }))
      .catch(err => next(err))

  },


}
module.exports = adminController