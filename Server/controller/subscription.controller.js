const Subscription = require('../models/subscription.model');

exports.create = (req, res) => {
    if(!req.body) {
        return res.status(400).send({
            message: "organizationTree can not be empty"
        });
    }
    // Create a user
    const subscription = new Subscription({
        CustomerID: req.body.CustomerID,
        PaymentRemaining: req.body.PaymentRemaining
    });

    // Save user in the database
    subdcription.save()
        .then(data => {
            res.send(data);
        }).catch(err => {
        res.status(500).send({
            message: err.message || "Some error occurred while creating the subscription."
        });
    });
};

exports.findAll = (req, res) => {
    organizationTree.find()
        .then(subscription => {
            res.send(subscription);
        }).catch(err => {
        res.status(500).send({
            message: err.message || "Some error occurred while retrieving subscription."
        });
    });
};

// Find a single event with a Id
exports.findOne = (req, res) => {
    Event.findById(req.body.id)
        .then(subscription => {
            if(!subscription) {
                return res.status(404).send({
                    message: "subscription not found with id" + req.body.id
                });
            }
            res.send(subscription);
        }).catch(err => {
        if(err.kind === 'ObjectId') {
            return res.status(404).send({
                message: "subscription not found with id " + req.body.id
            });
        }
        return res.status(500).send({
            message: "Error retrieving subscription with id " + req.body.id
        });
    });
};


// Update a user identified by the userId in the request
exports.update = (req, res) => {
    // Validate Request
    if(!req.body) {
        return res.status(400).send({
            message: "subscription content can not be empty"
        });
    }

    // Find user and update it with the request body
    Subscription.findByIdAndUpdate(req.params.id, {
        CustomerID: req.body.CustomerID,
        PaymentRemaining: req.body.PaymentRemaining
    }, {new: true})
        .then(key => {
            if(!key) {
                return res.status(404).send({
                    message: "subscription not found with id " + req.params.id
                });
            }
            res.send(key);
        }).catch(err => {
        if(err.kind === 'ObjectId') {
            return res.status(404).send({
                message: "subscription not found with id " + req.params.id
            });
        }
        return res.status(500).send({
            message: "Error updating subscription with id " + req.params.id
        });
    });
};