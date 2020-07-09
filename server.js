//Nasome P.V.R.D.V.
//IT18011494
const express = require('express');
const app=express();

const cors =require('cors');
const bodyParser = require('body-parser');
const mongoose=require('mongoose');

mongoose.connect('mongodb://localhost/newDB',{useNewUrlParser:true})

const db=mongoose.connection
db.on('error',(error)=>console.error(error))
db.once('open',()=>console.log('connected to database'))

app.use(bodyParser.json());
app.use(cors());



const toursimrouter = require('./routes/Tourism.js')

app.use('/expressapi',toursimrouter)

app.listen(3500,()=>console.log('server started'))





