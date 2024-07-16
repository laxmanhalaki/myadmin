import mongoose from 'mongoose';

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
    },
    url:{
        type:String
    }
})
const Project=new mongoose.model('Project',ProjectSchema);

export default Project;