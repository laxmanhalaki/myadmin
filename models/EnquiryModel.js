import mongoose from 'mongoose';
 
const EnquirySchema=new mongoose.Schema({
    name:{
        type:String,
        required:true
    },
    email:{
        type:String,
        required:true
    },
    subject:{
        type:String,
        required:true
    },
    message:{
        type:String,
        required:true
    }
})

const EnquiryModel=new mongoose.model('Enquiry',EnquirySchema);
export default EnquiryModel;