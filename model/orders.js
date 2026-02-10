import mongoose, { Schema } from "mongoose";

const orderSchema = new Schema({
    name: String,
    customer: String,
    contact: Number,
    price: Number,
    status: String
})

const Order = mongoose.model("Orders", orderSchema)
export default Order

