import express from 'express'
import productController from '../controller/productController.mjs';
import { upload } from '../cloudinaryConfig.mjs';

const productRouter= express.Router();


// productRouter.get("route",function)
productRouter
.get("/",productController.index)
.get("/:id",productController.singleProduct)
.post("/",productController.create)
.post("/addproduct",upload.single("image"),productController.addProductWithImage)



export default productRouter;