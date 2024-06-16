const express=require('express')
const app=express()
require('dotenv').config()
const bodyParser=require('body-parser')
const mongoose=require('mongoose')
const cors=require('cors');

app.use(bodyParser.json());
app.use(cors());
mongoose.connect(process.env.Database_URL,{useNewUrlParser:true})
const db=mongoose.connection
db.on('error',(error)=>{
    console.error(error)
})
db.once('open',()=>{
    console.log('Connected to Database Successfuly')
})

app.listen(4000,(req,res)=>{
    console.log('server running at port : ',4000);
})


const userRouter=require('./routes/userRoutes');
app.use('/users',userRouter);

const productRouter=require('./routes/productRoutes');
app.use('/products',productRouter);

const categoryRouter=require('./routes/categoryRoutes');
app.use('/categories',categoryRouter);

const emailRouter=require('./routes/emailRoutes');
app.use('/email',emailRouter);
