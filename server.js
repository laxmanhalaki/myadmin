const express=require('express');
const path=require("path");
const hbs=require('hbs');
require('./database/mongooconnection');
const mainroute=require('./routes/mainroute');
const cors=require('cors');

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
app.listen(5000,()=>{
    console.log("server is running on port 3000")
})