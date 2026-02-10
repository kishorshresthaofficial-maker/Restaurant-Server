import express from "express"
import Blog from "../model/blog.js";
import { createBlog } from "../controllers/blogControllers.js";
import { authMiddleware } from "../middlewares/authMiddleware.js";

const router = express.Router()

router.post("/create",createBlog)

router.get("/get",authMiddleware,async(req,res) => {
    try{
        const blogs = await Blog.find().populate("category")
        res.json(blogs)
    }
    catch (error){
 console.error(error);
    res.sendStatus(400);
    }
})

router.get("/get/:id",async(req,res) => {
    try{
        const blogs = await Blog.findById(req.params.id)
        res.json(blogs)
    }
    catch (error){
 console.error(error);
    res.sendStatus(400)
    }
})

router.get("/category/:category",async(req,res) => {
    try{
        const categoryId  = req.params.category
       const blogs = await Blog.find({category: categoryId})

        res.json(blogs)
    }
    catch (error){
 console.error(error);
    res.sendStatus(400)
    }
})



router.delete("/:id",async(req,res) => {
    try{
        const blogs = await Blog.findByIdAndDelete(req.params.id)
        res.send("Deleted successsfully")
    }
    catch (error){
 console.error(error);
    res.send("Blog not deleted")
    }
})

router.put("/update/:id",async(req,res)=> {

    try{
        const updatedBlog = await Blog.findByIdAndUpdate(req.params.id,req.body,{new:true,runValidators:true})
        res.status(200).json(updatedBlog)
    }
    catch(error){
        console.error(error,"error updating blog")
        res.status(500).json({message : "not updated"})
    }

})

export default router