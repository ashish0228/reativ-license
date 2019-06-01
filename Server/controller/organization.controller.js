const Organizational = require('../models/organization.model');

exports.create = (req, res) => {
    if(!req.body) {
        return res.status(400).send({
            message: "Key can not be empty"
        });
    }
    // Create a user
    const organizational = new Event({
        name: req.body.name,
        topLevel: req.body.topLevel,
        children: req.body.children,
        keys: req.body.keys
    });

    // Save user in the database
    organizational.save()
        .then(data => {
            res.send(data);
        }).catch(err => {
        res.status(500).send({
            message: err.message || "Some error occurred while creating the Organizational."
        });
    });
};

exports.findAll = (req, res) => {
    Key.find()
        .then(organizational => {
            res.send(organizational);
        }).catch(err => {
        res.status(500).send({
            message: err.message || "Some error occurred while retrieving organizational."
        });
    });
};

// Find a single event with a Id
exports.findOne = (req, res) => {
    Event.findById(req.body.id)
        .then(organizational => {
            if(!organizational) {
                return res.status(404).send({
                    message: "organizational not found with id" + req.body.id
                });
            }
            res.send(organizational);
        }).catch(err => {
        if(err.kind === 'ObjectId') {
            return res.status(404).send({
                message: "organizational not found with id " + req.body.id
            });
        }
        return res.status(500).send({
            message: "Error retrieving organizational with id " + req.body.id
        });
    });
};



// Update a user identified by the userId in the request
exports.update = (req, res) => {
    // Validate Request
    if(!req.body) {
        return res.status(400).send({
            message: "organizational content can not be empty"
        });
    }

    // Find user and update it with the request body
    User.findByIdAndUpdate(req.params.id, {
        name: req.body.name,
        topLevel: req.body.topLevel,
        children: req.body.children,
        keys: req.body.keys
    }, {new: true})
        .then(organizational => {
            if(!organizational) {
                return res.status(404).send({
                    message: "organizational not found with id " + req.params.id
                });
            }
            res.send(organizational);
        }).catch(err => {
        if(err.kind === 'ObjectId') {
            return res.status(404).send({
                message: "organizational not found with id " + req.params.id
            });
        }
        return res.status(500).send({
            message: "Error updating organizational with id " + req.params.id
        });
    });
};


// Delete a event with the specified id in the request
exports.delete = (req, res) => {
    Event.findByIdAndRemove(req.params.id)
        .then(organizational=> {
            if(!organizational) {
                return res.status(404).send({
                    message: "organizational not found with id " + req.params.id
                });
            }
            res.send({message: "organizational deleted successfully!"});
        }).catch(err => {
        if(err.kind === 'ObjectId' || err.name === 'NotFound') {
            return res.status(404).send({
                message: "organizational not found with id " + req.params.id
            });
        }
        return res.status(500).send({
            message: "Could not delete organizational with id " + req.params.id
        });
    });
};