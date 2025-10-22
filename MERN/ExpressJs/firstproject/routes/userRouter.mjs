import express from 'express'
import userController from '../controller/userController.mjs';

const userRouter= express.Router();

// productRouter.get("route",function)
userRouter
//get requests
.get("/",userController.index)


//post requests
.post("/signup",userController.Signup)
.post("/login",userController.Login)
.post("/sendmail",userController.sendEmail)


export default userRouter;