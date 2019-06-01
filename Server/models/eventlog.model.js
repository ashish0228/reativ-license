const mongoose = require('mongoose');


const tbl_event = mongoose.Schema({
        ProductKey: String,
        Product:String,
        Events:Array,
        isDelete: { type: Boolean, default: false},
        isActive: { type: Boolean, default: true}
    },
    {
        timestamps: true
    }
);

module.exports = mongoose.model('tbl_event', tbl_event);
