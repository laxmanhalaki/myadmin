const mongoose=require('mongoose');

const ProjectSchema= new mongoose.Schema({
    title:{
        type:String,
        require:true
    },
    description:{
        type:String,
        require:true
    },
    category:{
        type:String,
        require:true
    },
    technologiesUsed:{
        type:String,
        require:true
    },
    specifications:{
        type:[{type:String}],
        require:true
    },
    images:{
        type:[{type:String}],
        require:true
    }
})
const Project=new mongoose.model('Project',ProjectSchema);
module.exports=Project;