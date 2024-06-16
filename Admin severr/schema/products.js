const mongoose=require('mongoose')
const Schema=mongoose.Schema

const productSchema=new Schema({
    
    productName: String,
    
    description: String,
    
    stock: Number,
    
    price: Number,
    
    category: String,
    
    image: Buffer,
    
    createdAt:{
        type:Date,
        default:Date.now
    },
    updatedAt:{
        type:Date,
        default:Date.now
    }
});

const Product = mongoose.model('Product', productSchema);
module.exports=Product;