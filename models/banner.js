const mongoose = require("mongoose");

const BannerScheme = {
    name : {type:String},
    orders: {type:Number},
    avatar : {type:String},
    createAt:{
        type:Date,
        default:Date.now
    }
}

module.exports = mongoose.model("Banner",BannerScheme);