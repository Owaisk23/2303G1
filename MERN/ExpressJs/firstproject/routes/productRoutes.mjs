import express from 'express'
import productController from '../controller/productController.mjs';
import  { upload }  from '../cloudinaryConfig.mjs';
import userController from '../controller/userController.mjs';

const productRouter= express.Router();


// productRouter.get("route",function)
productRouter
.get("/",productController.index)
.get("/:id",productController.singleProduct)
.post("/",productController.create)
.post("/addproduct", userController.auth,upload.single("image"),productController.addProductWithImage)
//      "Route Name", Middleware1,        Middleware2             , controller function


export default productRouter;