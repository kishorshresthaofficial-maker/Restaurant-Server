import mongoose from "mongoose";

const adminUserSchema = new mongoose.Schema({
    name: String,
    email: String,
    password: String,
    role: String
})

const AdminUser = mongoose.model("AdminUser", adminUserSchema)

export default AdminUser;