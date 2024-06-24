const express=require('express');
const User=require('../models/UserModel')
const path=require('path')
const mainroute=new express.Router();
const multer  = require('multer');
const Product = require('../models/ProductModel');
const Category = require('../models/CategoryModel');
const Project = require('../models/ProjectModel');
const upload = require('../utilities/upload');


mainroute.get('/',(req,res)=>{
    res.render('index')
});
mainroute.get('/portfolio',(req,res)=>{
    res.render('portfolio')
})
mainroute.post('/project',upload.array('images'),async (req,res)=>{
    // res.render('portfolio')
    let {title,description,category,technologiesUsed,specifications}=req.body;
    let images=[];
    req.files.map((item)=>{
        images.push("/uploads/"+item.filename)
    })
    try {
        let NewProject= new Project({
            title,
            description,
            category,
            technologiesUsed,
            specifications,
            images
        });
        let result=await NewProject.save();

        console.log("result got",result);
        res.send(result)

    } catch (error) {
        console.log(error);
        res.sendStatus(400);
    }
    // console.log('body is',data);

});
mainroute.get('/projects',async(req,res)=>{
  try {
    const projects=await Project.find();
    res.send({status:200,projects})
  } catch (error) {
    console.log(error);
    res.sendStatus(400);
  }
    
})
mainroute.get('/dashboard',(req,res)=>{
    res.render('dashboard')
})
mainroute.get('/tables',(req,res)=>{
    res.render('tables')
})
mainroute.get('/billing',(req,res)=>{
    res.render('billing')
})
mainroute.get('/notifications',(req,res)=>{
    res.render('notifications')
})
mainroute.get('/profile',async(req,res)=>{
    const users=await User.find();
    res.render('profile',{users})
})
mainroute.get('/users/:name',async(req,res)=>{
    let name=req.params.name;
    console.log(name);
    const users=await User.find({name});
    res.send({status:200,users})
})

mainroute.get('/products',async(req,res)=>{
    
    const products=await Product.find();
    res.send({status:200,products})
})
mainroute.get('/categories',async(req,res)=>{
    
    const categories=await Category.find();
    res.send({status:200,categories})
})
mainroute.get('/products/:category',async(req,res)=>{
    const category=req.params.category;
    
    const products=await Product.find({category:category});
    res.send({status:200,products})
})
mainroute.get('/users/:name',async(req,res)=>{
    let name=req.params.name;
    console.log(name);
    const users=await User.find({name}); 
    res.send({status:200,users})
})
mainroute.get('/sign_in',(req,res)=>{
    res.render('sign_in')
})
mainroute.get('/sign_up',(req,res)=>{
    res.render('sign_up')
})
mainroute.post('/sign_up',async(req,res)=>{

    const {name,email,password}=req.body;

    const newUser= new User({
        name,
        email,
        password
    })
    try {
        const result=await newUser.save();
        res.send(result);
        
    } catch (error) {
        res.send(error)
    }

   
})
module.exports=mainroute;