

//express var

const express = require('express');
const app = express();
app.use(express.json());

app.use(express.static('website'));




// Setup empty JS object to act as endpoint for all routes
 let projectData = {};


 //running the needed local place first for database
app.post('/Database', (req,res)=>{
    projectData = req.body;
    res.json({msg:'done'});



});

//getting data as saved in the server
app.get('/Getdata', (req,res)=>
{
res.json (projectData);
});


// Setup Server
app.listen(8000,function () {
    console.log('Up and running');
});