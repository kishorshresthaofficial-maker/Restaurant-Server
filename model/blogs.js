import mongoose from "mongoose";

const blogSchema = new mongoose.Schema({
    title: String,
    image: String,
    description: String,
    status: String,
    postedDate: {
    type: Date,
    default: Date.now
}
})

const Blog = mongoose.model('Blog', blogSchema)

export default Blog

