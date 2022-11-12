const router = require('express').Router();
const user = require('../models/user');
const bcrypt = require('bcrypt');

router.post("/register", (req, res)=> {
    if (!req.body.username || !req.body.email || !req.body.password || !req.body.name || !req.body.phone_number ) {
        return res.status(400).json({msg: "Please enter all fields"})
    }
    user.findOne({$or:[{email:req.body.email}, {username:req.body.username}]}).then(
        (data) => {
            if (data) {
                if (data.email === req.body.email) {
                    return res.status(400).json({message: "Email already in use"});
                } else if (data.username === req.body.username) {
                    return res.status(400).json({message: "Username already in use"});
                }
            } else {
                hashedPassword = bcrypt.hashSync(req.body.password, 10);
                const newUser = new user({
                    username: req.body.username,
                    email: req.body.email,
                    password: hashedPassword,
                    name: req.body.name,
                    phone_number: req.body.phone_number
                });
                newUser.save((err, data) => {
                    if (err) {
                        console.log(err);
                        res.status(500).send(err);
                    } else {
                        console.log(data);
                        res.status(200).json({message: 'Registered successfully'});
                    }
                });
            }
        }
    )
});

router.post("/login", (req, res) => {
    // Validation
    if (!req.body.email || !req.body.password) {
        res.status(400).json({message:"Please fill out all fields"});
    } else {
        // Check if user exists
        user.findOne({ email: req.body.email }, (err, data) => {
            if (err) {
                res.status(500).send(err);
            } else if (!data) {
                res.status(400).json({message:"Email address not found"});
            } else {
                // Check if password is correct
                if (bcrypt.compareSync(req.body.password, data.password)) {
                    res.status(200).json({
                        message: "Login successful",
                    })
                } else {
                    res.status(400).json({message : "Incorrect password"});
                }
            }
        });
    }
});

module.exports = router;