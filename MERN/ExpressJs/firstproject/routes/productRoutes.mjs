import express from 'express'
import productController from '../controller/productController.mjs';

const productRouter= express.Router();


// productRouter.get("route",function)
productRouter
.get("/",productController.index)
.get("/:id",productController.singleProduct)
.post("/",productController.create)



export default productRouter;