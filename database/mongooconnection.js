import mongoose from 'mongoose';

const URL=process.env.MODE == 'PRODUCTION'?`mongodb+srv://${process.env.MYUSERNAME}:${process.env.PASSWORD}@cluster0.hf3quln.mongodb.net/CommonDB`:'mongodb://localhost:27017/bootstrap';
const Connection=()=>{
    mongoose.connect(URL).then(()=>
        console.log('databse connected successfully')).catch((err)=>{
            console.log(err)
        });
}
export default Connection;

