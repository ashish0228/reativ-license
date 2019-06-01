const Event = require('../models/eventlog.model');

exports.create = (req, res) => {
     if(!req.body) {
        return res.status(400).send({
            message: "event can not be empty"
        });
    }
    // Create a user
    const event = new Event({
        ProductKey: req.body.ProductKey,
        Product: req.body.Product,
        Events: req.body.Events
    });

    // Save user in the database
    event.save()
        .then(data => {
            res.send(data);
        }).catch(err => {
        res.status(500).send({
            message: err.message || "Some error occurred while creating the event."
        });
    });
};


exports.findAll = (req, res) => {
    Event.find()
        .then(event => {
            res.send(event);
        }).catch(err => {
        res.status(500).send({
            message: err.message || "Some error occurred while retrieving event."
        });
    });
};

// Find a single event with a Id
exports.findOne = (req, res) => {
    Event.findById(req.body.id)
        .then(event => {
            if(!event) {
                return res.status(404).send({
                    message: "event not found with id" + req.body.id
                });
            }
            res.send(event);
        }).catch(err => {
        if(err.kind === 'ObjectId') {
            return res.status(404).send({
                message: "event not found with id " + req.body.id
            });
        }
        return res.status(500).send({
            message: "Error retrieving event with id " + req.body.id
        });
    });
};


// Update a user identified by the userId in the request
exports.update = (req, res) => {
    // Validate Request
    if(!req.body) {
        return res.status(400).send({
            message: "Event content can not be empty"
        });
    }

    // Find user and update it with the request body
    User.findByIdAndUpdate(req.params.id, {
        ProductKey: req.body.ProductKey,
        Product: req.body.Product,
        Events: req.body.Events
    }, {new: true})
        .then(event => {
            if(!event) {
                return res.status(404).send({
                    message: "Event not found with id " + req.params.id
                });
            }
            res.send(event);
        }).catch(err => {
        if(err.kind === 'ObjectId') {
            return res.status(404).send({
                message: "Event not found with id " + req.params.id
            });
        }
        return res.status(500).send({
            message: "Error updating user with id " + req.params.id
        });
    });
};

// Delete a event with the specified id in the request
exports.delete = (req, res) => {
    Event.findByIdAndRemove(req.params.id)
        .then(event=> {
            if(!event) {
                return res.status(404).send({
                    message: "Event not found with id " + req.params.id
                });
            }
            res.send({message: "Event deleted successfully!"});
        }).catch(err => {
        if(err.kind === 'ObjectId' || err.name === 'NotFound') {
            return res.status(404).send({
                message: "Event not found with id " + req.params.id
            });
        }
        return res.status(500).send({
            message: "Could not delete Event with id " + req.params.id
        });
    });
};