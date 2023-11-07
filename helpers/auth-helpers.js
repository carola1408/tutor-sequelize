const getUser = req => {
  // return req.user || { role: 'student' }
  return req.user || null || { role: 'student' }
}

const ensureAuthenticated = req => {
  return req.isAuthenticated()
}
module.exports = {
  getUser,
  ensureAuthenticated
}