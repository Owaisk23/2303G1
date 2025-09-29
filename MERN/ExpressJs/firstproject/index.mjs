// const express = require('express')
import express from 'express';
import path from 'path';
import productRouter from './routes/productRoutes.mjs';
import fs from  'node:fs';
// getting-started.js
// const mongoose = require('mongoose');
import mongoose from 'mongoose';




// const data = JSON.parse(fs.readFileSync("data.json","utf-8"));
const data = JSON.parse(fs.readFileSync("data.json","utf-8"));

let products=data.products;

const app = express()
const port = 3000
app.use(express.json()); 


main().catch(err => console.log(err));

async function main() {
  await mongoose.connect('mongodb+srv://owaisahmedkhan:owais123@cluster0.mbgw7ps.mongodb.net/school');

  console.log("Database connected successfully")
  // use `await mongoose.connect('mongodb://user:password@127.0.0.1:27017/test');` if your database has auth enabled
}
// const dirname = path.resolve();
// app.get('/', (req, res) => {
//   res.send('Hello World!')
// })


// app.get('/contact', (req, res) => {
//   res.send('Hello From Contact page')
// })

// app.get('/image', (req, res) => {
  
//     res.sendFile(dirname + '/static/car.jpg');
// })

// app.use('/home', express.static(dirname, {index: '/static/index.html'}))

// Route Parameters (They are compulsory)

// app.get('/product/:id', (req, res) => {
// res.json({name:"Product no "+ req.params.id})
// })


// app.get('/posts/:id', (req, res) => {
//     let postId = req.params.id;
//     let postObj = [
//         {
//             postId: 1,
//             postTitle: "INDvsPak",
//             postDesc: "21-Sep-25 will be the match day"
//         },
//         {
//             postId: 2,
//             postTitle: "UAEvsPak",
//             postDesc: "17-Sep-25 will be the match day"
//         },
//         {
//             postId: 3,
//             postTitle: "AfgvsBan",
//             postDesc: "23-Sep-25 will be the match day"
//         },
//     ];

//     postObj.map((post) => {
//         if(post.postId == postId){
//             console.log(post)
//             postObj = post
//         }
//     })

//     res.send(postObj);

// })


// //Query Parameters (They are optional)
// app.get('/categories', (req, res) => {
// if (req.query.name) {

//   res.json({name:"Category :"+req.query.name})
// } else {
//   res.json({name:"All Categories "})

// }
// })



// //Request Body (They are used to send data to server)

// app.get('/contact', (req, res) => {
// // const name=req.body.name;
// // const age=req.body.age;
// // const city=req.body.city;
// //Destructuring
// const {name, age, city}=req.body;
//   res.json({name:name, age:age,city:city})
// })




// app.get('/products', (req, res) =>{

//   try {
//      res.status(200).json({message:"Showing our products",products:products});
    
//   } catch (error) {
//     console.log(error);
//     res.status(500).json({message:error.message})
//   }

// })

// //find product by id:
// app.get('/product/:id', (req, res) =>{
//   try {
// let id= req.params.id;
// let product = products.find((prd)=>{
//   return prd.id == id
// })
// if (product) {
//   res.status(200).json({message:"Product found",product:product});
// } else {
//   res.status(404).json({message:"No product found"});
// }
//   } catch (error) {
//     console.log(error);
//     res.status(500).json({message:error.message})
//   }
// })

// //add product :
// app.post('/addproduct', (req, res) =>{
//   try {
//     let newProduct= req.body;
//    let addProduct= products.push(newProduct);

// console.log(newProduct);
// if (addProduct) {
//   res.status(200).json({message:"Product added",product:newProduct});
// } else {
//   res.status(404).json({message:"No product found"});
// }
//   } catch (error) {
//     console.log(error);
//     res.status(500).json({message:error.message})
//   }
// })

// //Delete product

// app.delete('/deleteproduct/:id', (req, res) =>{
//   try {
//     let id = req.params.id;
//     let deletedProduct= products.find((prd)=>{
//   return prd.id == id
// })
// let filteredProducts= products.filter((item)=>{item.id == id})
// console.log(deletedProduct);
// products=filteredProducts;


// if (filteredProducts) {
//   res.status(200).json({message:"Product deleted successfully",product:deletedProduct});
// } else {
//   res.status(404).json({message:"Can't delete right now"});
// }
//   } catch (error) {
//     console.log(error);
//     res.status(500).json({message:error.message})
//   }
// })

app.use("/product",productRouter)


app.listen(port, () => {
  console.log(`Example app listening on port ${port}`)
})