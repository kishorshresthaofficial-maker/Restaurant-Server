import express from 'express'
import Menu from '../model/menu.js';
import { createMenu } from "../controller/menuController.js"
import { authMiddleware } from '../middlewares/authMiddleware.js';

const router = express.Router();

// router.post('/add', authMiddleware, createMenu)
router.post('/add', createMenu)

// router.get("/get", authMiddleware, async(req, res)=> {
router.get("/getItems", async(req, res)=> {
    try{
        // const menuItems = await Menu.find();
        const menuItems = await Menu.find().populate("category")
        res.json(menuItems)
    }
    catch(error)
    {
        console.error(error);
        res.sendStatus(400);
    }
})

router.get("/get/:id", async(req, res)=> {
    try{
        const menuItems = await Menu.findById(req.params.id)
        res.json(menuItems)
    }
    catch (error)
    {
        console.error(error);
        res.sendStatus(400)
    }
})

router.get("/category/:category", async(req, res)=> {
    try{
        const categoryId = req.params.category
        console.log(categoryId, "First console")
    const menuItems = await Menu.find({category: categoryId})
        console.log(menuItems, "Second Console")
    res.json(menuItems)
    }
    catch(error){
        console.error(error);
        res.sendStatus(400)
    }
})

router.delete("/:id", async(req, res)=>{
    try{
        const delMenu = await Menu.findByIdAndDelete(req.params.id)
        res.send("Deleted successfully")
    }
    catch(error){
        console.error(error)
        res.send("Failed to delete.")
    }
})

router.put("/update/:id", async(req, res)=>{
   try{
    const updatedMenu =  await Menu.findByIdAndUpdate(req.params.id, req.body,{new:true, runValidators:true})
    res.status(200).json(updatedMenu)
   }
   catch(error){
    console.error(error, "Failed to update")
    res.status(500).json({message: "Failed to update menu."})
   }
})



export default router