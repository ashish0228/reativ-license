const User = require('../models/user.model');
const bcrypt = require('bcrypt');
const saltRounds = 10;
var jwt = require('jsonwebtoken');
var secretKey = 'key';

exports.create = (req, res) => {
    console.log('in create controller');
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

exports.findAll = (req, res) => {
    User.find()
        .then(users => {
            res.send(users);
        }).catch(err => {
        res.status(500).send({
            message: err.message || "Some error occurred while retrieving users."
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
                var token = jwt.sign({ email: user.email, role: user.role }, secretKey, {
                    expiresIn: 86400 // expires in 24 hours
                });
                res.status(200).send({ message: 'Login Successfully', result: true, token: token});
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


// Find a single user with a userId
exports.findOne = (req, res) => {
    User.findById(req.body.email)
        .then(user => {
            if(!user) {
                return res.status(404).send({
                    message: "User not found with email" + req.body.email
                });
            }
            res.send(user);
        }).catch(err => {
        if(err.kind === 'ObjectId') {
            return res.status(404).send({
                message: "User not found with email " + req.body.email
            });
        }
        return res.status(500).send({
            message: "Error retrieving user with email " + req.body.email
        });
    });
};


// Update a user identified by the userId in the request
exports.update = (req, res) => {
    // Validate Request
    if(!req.body) {
        return res.status(400).send({
            message: "User content can not be empty"
        });
    }

    // Find user and update it with the request body
    User.findByIdAndUpdate(req.params.userId, {
        email: req.body.email,
        password: req.body.password,
    }, {new: true})
        .then(user => {
            if(!user) {
                return res.status(404).send({
                    message: "User not found with id " + req.params.userId
                });
            }
            res.send(user);
        }).catch(err => {
        if(err.kind === 'ObjectId') {
            return res.status(404).send({
                message: "User not found with id " + req.params.userId
            });
        }
        return res.status(500).send({
            message: "Error updating user with id " + req.params.userId
        });
    });
};


// Delete a user with the specified userId in the request
exports.delete = (req, res) => {
    User.findByIdAndRemove(req.params.userId)
        .then(user => {
            if(!user) {
                return res.status(404).send({
                    message: "User not found with id " + req.params.userId
                });
            }
            res.send({message: "User deleted successfully!"});
        }).catch(err => {
        if(err.kind === 'ObjectId' || err.name === 'NotFound') {
            return res.status(404).send({
                message: "User not found with id " + req.params.userId
            });
        }
        return res.status(500).send({
            message: "Could not delete user with id " + req.params.userId
        });
    });
};