import mongoose from "mongoose"
export const connectDB = async ()=> {

    // const url ="mongodb+srv://admin:admin@goodfood.4ialrpw.mongodb.net/?appName=GoodFood"
    const url = process.env.MONGODB_URL
    try {
        const connection = await mongoose.connect(url);
        console.log("Database connected successfully");
    }
    catch(error)
    {
        console.error("Error in database connection.", error);
    }
}
