import mongoose, { Schema } from "mongoose";
const topicSchema = new Schema(
  {
    name: String,
    category: String,
    punch: String,
    date: String,
    image: String,
    reason: String,
  },
  {
    timestamps: true,
  }
);
const ProductModel =
  mongoose.models.Product || mongoose.model("Product", topicSchema);
export default ProductModel;
