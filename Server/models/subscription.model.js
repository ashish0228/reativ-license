const mongoose = require('mongoose');

const tbl_subscription = mongoose.Schema({
        CustomerID: String,
        PaymentRemaining: String,
        isDelete: { type: Boolean, default: false},
        isActive: { type: Boolean, default: true}
    },
    {
        timestamps: true
    });
module.exports = mongoose.model('tbl_subcription', tbl_subscription);
