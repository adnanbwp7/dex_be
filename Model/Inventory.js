const mongoose = require("mongoose");

const InventorySchema = new mongoose.Schema({

    name:{
        type:String,
        required:true,
    },
    category:{
        type:String,
        required:true,

    },
    minPrice:{
        type:String,
        required:true,

    },
    dynamicPrice:{
        type:Number,
        required:true,

    },
    quantity:{
        type:Number,
        required:true,

    },
    addedAt:{
        type:Date,
        default:Date.now()
    },
    image:{
        type:String
    },
    size:{
        type:Number,
        required:true,
    }
    
})


const InventoryModel = mongoose.model("inventory", InventorySchema);

module.exports = InventoryModel;