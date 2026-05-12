import mongoose from mongoose

const specialItems = new mongoose.Schema({
    title: String,
    image: String,
    content: String,
    status: String,
    postedDate: String
})

const Special = mongoose.model("Special", specialItems)

export default Special;