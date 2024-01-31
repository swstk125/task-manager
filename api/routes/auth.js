const router = require('express').Router();
const User = require('../../db/schema/user');

router.get('/', async(req, res) => {
    const users = User.find()
    console.log("see any users", users);
})

module.exports = router;