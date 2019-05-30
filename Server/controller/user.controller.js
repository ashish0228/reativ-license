const User = require('../models/user.model');
const bcrypt = require('bcrypt');
const saltRounds = 10;

exports.create = (req, res) => {
    let hash = bcrypt.hashSync(req.body.password, saltRounds);
    req.body.password = hash;
    if(!req.body) {
        return res.status(400).send({
            message: "user can not be empty"
        });
    }
    // Create a user
    const user = new User({
        email: req.body.email,
        password: req.body.password,
    });

    // Save user in the database
    user.save()
        .then(data => {
            res.send(data);
        }).catch(err => {
        res.status(500).send({
            message: err.message || "Some error occurred while creating the user."
        });
    });
};



exports.login = (req, res) => {
    User.findOne({'email': req.body.email})
        .then(user => {
            if(!user) {
                return res.status(404).send({
                    message: "User not found with email " + req.body.email
                });
            }
            let hash = bcrypt.compareSync(req.body.password, user.password);
            if(hash) {
                res.send(user);
            } else {
               res.send({message: 'EmailId Password not match'}) ;
            }
        }).catch(err => {
        if(err.kind === 'ObjectId') {
            return res.status(404).send({
                message: "User not found with id " + req.body.email
            });
        }
        return res.status(500).send({
            message: "Error retrieving user with id " + req.body.email
        });
    });
};