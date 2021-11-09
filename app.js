const express = require('express'); 
const app = express(); 
const mongoose = require('mongoose'); 
 app.use(express.json());

 const snackRoute= require('./routes/snacks'); 
app.use('/snacks',snackRoute); 


const uploadRoute= require('./routes/fileuploads'); 
app.use('/images',uploadRoute); 

 //Routes // listening 

mongoose.connect("mongodb://localhost:27017/myowndb",() =>{ console.log("Connected to DB"); });

 app.listen(4000);  
