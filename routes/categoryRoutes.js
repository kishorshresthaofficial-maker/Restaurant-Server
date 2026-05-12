import express from 'express'
import { createCategory, deleteCategory, getAllCategory, getCategoryById, updateCategory } from '../controller/categoryController.js'
import { authMiddleware } from '../middlewares/authMiddleware.js'


const router = express.Router()

router.post("/create", createCategory)
router.get("/getCategory", getAllCategory)
router.delete("/:id", deleteCategory)
router.put("/update/:id", updateCategory)
router.get("/:id", getCategoryById)


export default router