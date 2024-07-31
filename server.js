import express from 'express';
import path from "path";
import hbs from 'hbs';
import cors from 'cors';
import mainroute from './routes/mainroute.js';
import { fileURLToPath } from 'url';
import Connection from './database/mongooconnection.js';
import job from './utilities/CronService.js';
const PORT=process.env.PORT || 5000;

const filename = fileURLToPath(import.meta.url); 
const dirname = path.dirname(filename);
const staticPath=path.join(dirname,'public');
const partialPath=path.join(dirname,'./views/partials');
const app=express();
Connection();
app.use(express.json());
app.use(cors());
app.use(express.urlencoded({extended:true}));
hbs.registerPartials(partialPath)

app.use(express.static(staticPath))
app.set('view engine','hbs');
app.use(mainroute);
app.listen(PORT,()=>{
    console.log("server is running on port"+PORT)
})
job.start();