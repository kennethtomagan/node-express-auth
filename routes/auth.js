const router = require('express').Router();
const User = require('../model/User');
const {registerValidation} = require('../validation');


router.post('/register', async (req, res) => {
    // Validate Data before create user
    const {error} = registerValidation(req.body)
    if(error) return res.status(400).send(error.details[0].message);
    // Checking if the user is already in database

    const user = new User({
        name: req.body.name,
        email: req.body.email,
        password: req.body.password
    });

    try {
        const savedUser = await user.save();
        res.send(savedUser);

    } catch (err) {
        res.status(400).send(err);
    }
})


// router.post('/login')

module.exports = router;