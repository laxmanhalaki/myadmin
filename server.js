const express=require('express');
require('dotenv').config();
const path=require("path");
const hbs=require('hbs');
require('./database/mongooconnection');
const mainroute=require('./routes/mainroute');
const cors=require('cors');
const PORT=process.env.PORT || 5000;

const staticPath=path.join(__dirname,'public');
const partialPath=path.join(__dirname,'./views/partials');
const app=express();
app.use(express.json());
app.use(cors());
app.use(express.urlencoded({extended:true}));
hbs.registerPartials(partialPath)

app.use(express.static(staticPath))
app.set('view engine','hbs');
app.use(mainroute);
app.listen(PORT,()=>{
    console.log("server is running on port 3000")
})