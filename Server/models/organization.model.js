const mongoose = require('mongoose');

const tbl_organization = mongoose.Schema({
        name: String,
        topLevel: Boolean,
        children: [ { type: mongoose.Schema.ObjectId , ref: 'OrganizationType', required: false } ],
        keys: [ { type: mongoose.Schema.ObjectId , ref: 'KeyType', required: false } ],
        isDelete: { type: Boolean, default: false},
        isActive: { type: Boolean, default: true}
    },
    {
        timestamps: true
    });

module.exports = mongoose.model('tbl_organization', tbl_organization);