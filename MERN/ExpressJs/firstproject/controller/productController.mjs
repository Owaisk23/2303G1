import fs from 'node:fs';
import Product from '../models/productModel.mjs';
// import Student from '../models/studentsModel.mjs';
// const data = JSON.parse(fs.readFileSync("data.json","utf-8"));
// const data = JSON.parse(fs.readFileSync("data.json", "utf-8"));
// const products = data.products;

let index = async (req, res) => {
  try {
    const products = await Product.find();

    if (products.length > 0) {
      res.status(200).json({ message: "Showing our products", products: products });
    } else {
      res.status(404).json({ message: "Showing our products", products: "No products found" });

    }

  } catch (error) {
    console.log(error);
    res.status(500).json({ message: error.message })
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

let create = async (req, res) => {
  try {
    const {
      title,
      description,
      price,
      discountPercentage,
      rating,
      stock,
      brand,
      category,
      thumbnail,
      images
    } = req.body;


    const product = new Product({
      title,
      description,
      price,
      discountPercentage,
      rating,
      stock,
      brand,
      category,
      thumbnail,
      images
    });

    // mongoose method to save data to database
    const addProd = await product.save();
    // mongodb method to save data to database
    // let addProd = await Product.insertOne(product);

    res.status(201).json({
      message: "Product created successfully",
      product: addProd
    });

  } catch (error) {
    console.log(error);

    if (error.name === "ValidationError") {
      return res.status(400).json({ message: error.message });
    }

    res.status(500).json({ message: error.message });
  }
};

let addProductWithImage = async (req, res) => {
  try {
    console.log(req.file)
    console.log(req.file.path);
    let newProduct = new Product({
      title: req.body.title,
      description: req.body.description,
      price: req.body.price,
      discountPercentage: req.body.discountPercentage,
      rating: req.body.rating,
      stock: req.body.stock,
      brand: req.body.brand,
      category: req.body.category,
      thumbnail: req.file.path,
      images: req.file.path

    });

    let addprod = await Product.insertOne(newProduct);
    if (!addprod) {
      res.status(404).json({ message: "Failed to add product" });
    } else {

      res.status(200).json({
        message: "Product added successfully",
        product: addprod,
      })
    }
  } catch (error) {
    console.log(error);
    res.status(500).json({ message: "Internal server errror" });
  }
}



const productController = {
  index,
  singleProduct,
  create,
  addProductWithImage
}


export default productController;