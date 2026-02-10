import mongoose from "mongoose";
const { Schema } = mongoose;

const menuSchema = new Schema({
    title : {
        type: String,
        required: true
    },
    image: String,
    description: String,
    category: {
        type: mongoose.Schema.Types.ObjectId,
        ref : "Category"
    },
    price : Number
});

const Menu = mongoose.model("Menu", menuSchema)

export default Menu





