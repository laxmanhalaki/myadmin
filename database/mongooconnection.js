const mongoose=require('mongoose');
const URL=process.env.MODE == 'PRODUCTION'?`mongodb+srv://${process.env.USERNAME}:${process.env.PASSWORD}@cluster0.hf3quln.mongodb.net/CommonDB`:'mongodb://localhost:27017/bootstrap'

mongoose.connect(URL).then(()=>
console.log('databse connected successfully')).catch((err)=>{
    console.log(err)
});
