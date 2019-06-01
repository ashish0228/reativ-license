const organizationTree = require('../models/organizationTree.model');

exports.create = (req, res) => {
    if(!req.body) {
        return res.status(400).send({
            message: "organizationTree can not be empty"
        });
    }
    // Create a user
    const organizationTree = new organizationTree({
        FirstSet: req.body.FirstSet,
        SecondSet: req.body.SecondSet,
    });

    // Save user in the database
    organizationTree.save()
        .then(data => {
            res.send(data);
        }).catch(err => {
        res.status(500).send({
            message: err.message || "Some error occurred while creating the organizationTree."
        });
    });
};

exports.findAll = (req, res) => {
    organizationTree.find()
        .then(organizationTree => {
            res.send(organizationTree);
        }).catch(err => {
        res.status(500).send({
            message: err.message || "Some error occurred while retrieving organizationTree."
        });
    });
};

// Find a single event with a Id
exports.findOne = (req, res) => {
    Event.findById(req.body.id)
        .then(organizationTree => {
            if(!organizationTree) {
                return res.status(404).send({
                    message: "organizationTree not found with id" + req.body.id
                });
            }
            res.send(organizationTree);
        }).catch(err => {
        if(err.kind === 'ObjectId') {
            return res.status(404).send({
                message: "organizationTree not found with id " + req.body.id
            });
        }
        return res.status(500).send({
            message: "Error retrieving organizationTree with id " + req.body.id
        });
    });
};


// Update a user identified by the userId in the request
exports.update = (req, res) => {
    // Validate Request
    if(!req.body) {
        return res.status(400).send({
            message: "organizationTree content can not be empty"
        });
    }

    // Find user and update it with the request body
    organizationTree.findByIdAndUpdate(req.params.id, {
        FirstSet: req.body.FirstSet,
        SecondSet: req.body.SecondSet,
    }, {new: true})
        .then(key => {
            if(!key) {
                return res.status(404).send({
                    message: "organizationTree not found with id " + req.params.id
                });
            }
            res.send(key);
        }).catch(err => {
        if(err.kind === 'ObjectId') {
            return res.status(404).send({
                message: "organizationTree not found with id " + req.params.id
            });
        }
        return res.status(500).send({
            message: "Error updating organizationTree with id " + req.params.id
        });
    });
};

// Delete a event with the specified id in the request
exports.delete = (req, res) => {
    Event.findByIdAndRemove(req.params.id)
        .then(organizationTree=> {
            if(!organizationTree) {
                return res.status(404).send({
                    message: "organizationTree not found with id " + req.params.id
                });
            }
            res.send({message: "organizationTree deleted successfully!"});
        }).catch(err => {
        if(err.kind === 'ObjectId' || err.name === 'NotFound') {
            return res.status(404).send({
                message: "organizationTree not found with id " + req.params.id
            });
        }
        return res.status(500).send({
            message: "Could not delete organizationTree with id " + req.params.id
        });
    });
};