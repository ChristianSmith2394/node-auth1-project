// Require the `restricted` middleware from `auth-middleware.js`. You will need it here!
const router = require('express').Router()
const { restricted } = require('../auth/auth-middleware')
const User = require('./users-model')
/**
  [GET] /api/users
	@@ -23,6 +24,14 @@
    "message": "You shall not pass!"
  }
 */
router.get('/', restricted, async (req, res) => {
  try{
    const users = await Users.find()
    res.json(users)
  }catch {
    next(error)
  }
})

// Don't forget to add the router to the `exports` object so it can be required in other modules
module.exports = router