import mongoose from 'mongoose';

const userSchema=new mongoose.Schema({
    name:{
        type:String,
        required:true
    },
    email:{
        type:String,
        required:true
    },
    password:{
        required:true,
        type:String
    }
}) ;
const User= new mongoose.model('USer',userSchema);
export default User;