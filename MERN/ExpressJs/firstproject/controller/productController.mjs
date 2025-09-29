import fs from 'node:fs';
// import Product from '../models/productModel.mjs';
import Student from '../models/studentsModel.mjs';
// const data = JSON.parse(fs.readFileSync("data.json","utf-8"));
// const data = JSON.parse(fs.readFileSync("data.json", "utf-8"));
// const products = data.products;

let index =async(req, res) => {
   try {
    const products=await Student.find();

  if (products.length > 0) {
       res.status(200).json({message:"Showing our products",products:products});
    } else {
      res.status(404).json({message:"Showing our products",products:"No products found"});
    
  }
    
  } catch (error) {
    console.log(error);
    res.status(500).json({message:error.message})
  }
}

let singleProduct = (req, res) => {
  try {
    let id = req.params.id;
    let product = products.find((prd) => {
      return prd.id == id
    })
    if (product) {
      res.status(200).json({ message: "Product found Single Product", product: product });
    } else {
      res.status(404).json({ message: "No product found" });
    }
  } catch (error) {
    console.log(error);
    res.status(500).json({ message: error.message })
  }
}





const productController = {
  index,
  singleProduct
}


export default productController;