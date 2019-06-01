const Key = require('../models/key.model');

exports.create = (req, res) => {
    if(!req.body) {
        return res.status(400).send({
            message: "Key can not be empty"
        });
    }
    // Create a user
    const key = new Key({
        keyId: req.body.keyId,
        key: req.body.key,
        reseller: req.body.reseller,
        resellerContact: req.body.resellerContact,
        resellerEmail: req.body.resellerEmail,
        endCustomer: req.body.endCustomer,
        endCustomerEmail: req.body.endCustomerEmail,
        userName: req.body.userName,
        userEmail: req.body.userEmail,
        comments: req.body.comments,
        productId: req.body.productId,
        CompanyName: req.body.CompanyName,
        ContactPerson: req.body.ContactPerson,
        CompanyAddress: req.body.CompanyAddress,
        CompanyAccountNumber: req.body.CompanyAccountNumber,
        AccountManager: req.body.AccountManager,
        Notes: req.body.Notes,
    });

    // Save user in the database
    key.save()
        .then(data => {
            res.send(data);
        }).catch(err => {
        res.status(500).send({
            message: err.message || "Some error occurred while creating the key."
        });
    });
};

exports.findAll = (req, res) => {
    Key.find()
        .then(event => {
            res.send(event);
        }).catch(err => {
        res.status(500).send({
            message: err.message || "Some error occurred while retrieving key."
        });
    });
};


// Find a single event with a Id
exports.findOne = (req, res) => {
    Event.findById(req.body.id)
        .then(key => {
            if(!key) {
                return res.status(404).send({
                    message: "key not found with id" + req.body.id
                });
            }
            res.send(key);
        }).catch(err => {
        if(err.kind === 'ObjectId') {
            return res.status(404).send({
                message: "key not found with id " + req.body.id
            });
        }
        return res.status(500).send({
            message: "Error retrieving key with id " + req.body.id
        });
    });
};



// Update a user identified by the userId in the request
exports.update = (req, res) => {
    // Validate Request
    if(!req.body) {
        return res.status(400).send({
            message: "Key content can not be empty"
        });
    }

    // Find user and update it with the request body
    User.findByIdAndUpdate(req.params.id, {
        keyId: req.body.keyId,
        key: req.body.key,
        reseller: req.body.reseller,
        resellerContact: req.body.resellerContact,
        resellerEmail: req.body.resellerEmail,
        endCustomer: req.body.endCustomer,
        endCustomerEmail: req.body.endCustomerEmail,
        userName: req.body.userName,
        userEmail: req.body.userEmail,
        comments: req.body.comments,
        productId: req.body.productId,
        CompanyName: req.body.CompanyName,
        ContactPerson: req.body.ContactPerson,
        CompanyAddress: req.body.CompanyAddress,
        CompanyAccountNumber: req.body.CompanyAccountNumber,
        AccountManager: req.body.AccountManager,
        Notes: req.body.Notes,
    }, {new: true})
        .then(key => {
            if(!key) {
                return res.status(404).send({
                    message: "Key not found with id " + req.params.id
                });
            }
            res.send(key);
        }).catch(err => {
        if(err.kind === 'ObjectId') {
            return res.status(404).send({
                message: "Key not found with id " + req.params.id
            });
        }
        return res.status(500).send({
            message: "Error updating Key with id " + req.params.id
        });
    });
};

// Delete a event with the specified id in the request
exports.delete = (req, res) => {
    Event.findByIdAndRemove(req.params.id)
        .then(key=> {
            if(!key) {
                return res.status(404).send({
                    message: "Key not found with id " + req.params.id
                });
            }
            res.send({message: "Key deleted successfully!"});
        }).catch(err => {
        if(err.kind === 'ObjectId' || err.name === 'NotFound') {
            return res.status(404).send({
                message: "Key not found with id " + req.params.id
            });
        }
        return res.status(500).send({
            message: "Could not delete Key with id " + req.params.id
        });
    });
};