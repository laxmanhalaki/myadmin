import express from 'express';
import User from '../models/UserModel.js';
import path from 'path';

import multer  from 'multer';
import Product from '../models/ProductModel.js';
import Category from '../models/CategoryModel.js';
import Project from '../models/ProjectModel.js';
import upload from '../utilities/upload.js';
import { initializeApp } from "firebase/app";
import { getStorage, ref, getDownloadURL, uploadBytesResumable } from "firebase/storage";
import config from "../utilities/FirebaseConfig.js";
import EnquiryModel from '../models/EnquiryModel.js';
import {getMovie, getMovies, searchMovie} from '../public/API/ApiHandler.js'

const mainroute=express.Router();
initializeApp(config.firebaseConfig);
const storage = getStorage();
mainroute.get('/',(req,res)=>{
    res.render('index')
});
mainroute.get('/portfolio',(req,res)=>{
    res.render('portfolio')
})
mainroute.post('/project',upload.array('images'),async (req,res)=>{
    // res.render('portfolio')
    let {title,description,category,technologiesUsed,specifications,url}=req.body;
    
        let images=[];

        async function processArray(array) {
            // Map array to array of promises
            const promises = array.map(async (item) => {
              // Perform asynchronous operation
              return await someAsyncFunction(item);
            });
          
            // Wait for all promises to resolve
            console.log("promises before qawait promise all",promises)
            const results = await Promise.all(promises);
          
            // Results array now contains resolved values of all promises
            console.log(results);
          
            // Proceed with further code dependent on results
          }

          async function someAsyncFunction(item) {
            return new Promise(async(resolve) => {
                const dateTime = Date.now();

                const storageRef = ref(storage, `files/${dateTime+item.originalname}`);
               
        
                // Create file metadata including the content type
                const metadata = {
                    contentType: item.mimetype,
                };
        
                // Upload the file in the bucket storage
                const snapshot = await uploadBytesResumable(storageRef, item.buffer, metadata);
                //by using uploadBytesResumable we can control the progress of uploading like pause, resume, cancel
        
                // Grab the public url
                const downloadURL = await getDownloadURL(snapshot.ref);
                
        
                resolve(images.push(downloadURL))
            });
          }
          
          // Example usage of processArray function
          const array = req.files;
          
          processArray(array).then(async() => {
            console.log("All items processed.");
                console.log("images",images)
        try {
            let NewProject= new Project({
                title,
                description,
                category,
                technologiesUsed,
                specifications,
                images,
                url
            });
            let result=await NewProject.save();
    
            console.log("result got",result);
            res.send(result)
    
        } catch (error) {
            console.log(error);
            res.sendStatus(400);
        }
          })
    //  req.files.map(async (item)=>{
        
    // }).then(async ()=>{
    //     console.log("images",images)
    //     try {
    //         let NewProject= new Project({
    //             title,
    //             description,
    //             category,
    //             technologiesUsed,
    //             specifications,
    //             images
    //         });
    //         let result=await NewProject.save();
    
    //         console.log("result got",result);
    //         res.send(result)
    
    //     } catch (error) {
    //         console.log(error);
    //         res.sendStatus(400);
    //     }
    // }
    // )
    // console.log('body is',data);

});
mainroute.post('/enquiry',async (req,res)=>{
try {
    const newEnquiry= new EnquiryModel(req.body);
    console.log(newEnquiry);
    res.send(newEnquiry);  
} catch (error) {
    console.log(error);
}
})
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

// movie apiiis
mainroute.get('/movies/:page/:language', async (req, res) => {
	let { page, language } = req.params;
	console.log('params i got', page, language);
	try {
		const response = await getMovies(page, language);

		res.send(response.data);
	} catch (error) {
		res.send(error);
	}
});
mainroute.get('/movie/:id/:language', async (req, res) => {
	let { id, language } = req.params;
	try {
		const response = await getMovie(id, language);

		res.send(response.data);
	} catch (error) {
		res.send(error);
	}
});
mainroute.get('/search/:query/:page', async (req, res) => {
	let { query, page } = req.params;
	try {
		const response = await searchMovie(query, page);
		console.log('results', response);
		res.send(response.data);
	} catch (error) {
		res.send(error);
	}
});
export default mainroute;