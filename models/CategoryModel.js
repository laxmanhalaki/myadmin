import mongoose from 'mongoose';
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
export default Category;