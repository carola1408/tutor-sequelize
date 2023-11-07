const getUser = req => {
  // return req.user || { role: 'student' }
  return req.user || null || { role: 'student' }
}


module.exports = {
  getUser
}