const mongoose=require('mongoose');
const CategorySchema=new mongoose.Schema({
    id:{
        type:Number
    },
    name:{
        type:String
    },
    img:{
        type:String
    }
})
const Category=new mongoose.model('Category',CategorySchema);
module.exports=Category;