import mongoose from "mongoose";
// const Schema= mongoose.Schema;
const { Schema } = mongoose;
const productSchema = new Schema({
  title: { type: String, required: [true, "Title is Required"] },


});
const Product = mongoose.model("Product", productSchema);
export default Product;