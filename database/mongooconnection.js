const mongoose=require('mongoose');

mongoose.connect('mongodb://localhost:27017/bootstrap').then(()=>
console.log('databse connected successfully')).catch((err)=>{
    console.log(err)
});
