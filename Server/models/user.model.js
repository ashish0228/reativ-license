const mongoose = require('mongoose');

const Tbl_User = mongoose.Schema({
        email: String,
        password: String,
        isDelete: { type: Boolean, default: false},
        isActive: { type: Boolean, default: true}
    },
    {
        timestamps: true
    }
);

module.exports = mongoose.model('tbl_user', Tbl_User);
