const mongoose = require('mongoose');

const tbl_organizationTree = mongoose.Schema({
        FirstSet: String,
        SecondSet: String,
        isDelete: { type: Boolean, default: false},
        isActive: { type: Boolean, default: true}
    },
    {
        timestamps: true
    }
);
module.exports = mongoose.model('tbl_organtzationTree', tbl_organizationTree);
