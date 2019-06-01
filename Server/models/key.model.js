const mongoose = require('mongoose');

const tbl_key = mongoose.Schema({
        keyId: String,
        key: String,
        reseller:String,
        resellerContact:String,
        resellerEmail:String,
        endCustomer:String,
        endCustomerEmail:String,
        userName:String,
        userEmail: String,
        comments:String,
        productId:String,
        CompanyName:String,
        ContactPerson:String,
        CompanyAddress:String,
        CompanyAccountNumber:String,
        AccountManager:String,
        Notes:String,
        isDelete: { type: Boolean, default: false},
        isActive: { type: Boolean, default: true}
    },
    {
        timestamps: true
    }
);

module.exports = mongoose.model('tbl_key', tbl_key);