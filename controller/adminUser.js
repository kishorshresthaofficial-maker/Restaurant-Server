import AdminUser from "../model/adminusers.js";

export const createAdminUser = async (req, res) => {
    try {
        const { name, email, password, role } = req.body;

        if (!name || !email || !password || !role) {
            return res.status(400).json({ message: "All fields are required" })
        }
        const createdAdminUser = await AdminUser.create({
            ...req.body
        })
    } catch (error) {
        res.status(500).json({ message: "Error creating admin user" })
    }
}

export const getAllAdminUsers = async (req, res) => {
    try {
        const adminUsers = await AdminUser.find()
        res.json(adminUsers)
    }
    catch (error) {
        console.log(error)
    }   
}

export const getAdminUsersById = async (req, res) => {
    try {
        const adminById =await AdminUser.findById(req.params.id)
        res.json(adminById)
    }
    catch (error) {
        console.log(error)
    }
}

export const deleteAdminUser = async (req, res) => {
    try {
        const delAdminUser = await AdminUser.findByIdAndDelete(req.params.id);
       
        if(!delAdminUser) {
            return res.status(404).json*=({ message: "User Not Found"}) 
        }
        res.json({ message: "User Deleted Successfully" })
    }
    catch (error) {
        console.log(error)
    }
}

export const updateAdminUser = async (req, res) => {
    try {
        const editAdminUser = await AdminUser.findByIdAndUpdate(req.params.id, req.body, { new: true});
        res.json(editAdminUser);
    }
    catch (error) {
        console.log(error)
    }   
}