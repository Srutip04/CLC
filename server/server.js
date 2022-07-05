const express=require('express')

const mongoose=require('mongoose')
const dotenv = require("dotenv");
const { notFound, errorHandler }=require("./middlewares/errorMiddleware");
const { resolve, join } =require( "path");
const bodyParser = require("body-parser")
const cors=require('cors')



const app=express();
app.use(bodyParser.urlencoded({ extended: true }));

app.use(express.json()); // to accept json data
app.use(cors({
  origin: "*",
  credentials: true
}))

mongoose.connect(process.env.DB_URL, {
    useNewUrlParser: true,
    useUnifiedTopology: true
 }, () => {
   console.log('Database connected');
 })

const port= process.env.PORT || 5000
const server=app.listen(port,()=>{
    console.log('started at the port')
})