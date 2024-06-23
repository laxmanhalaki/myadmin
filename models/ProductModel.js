const mongoose=require('mongoose');

const ProductSchema=new mongoose.Schema({
    id:{
        type:Number,
    },
    name:{
        type:String,
    },
    category:{
        type:String
    },
    price:{
        type:Number
    },
    url:{
        type:String
    }
})

const Product=new mongoose.model("Product",ProductSchema);
module.exports= Product;