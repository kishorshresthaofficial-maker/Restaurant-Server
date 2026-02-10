import express from 'express'
import { createCategory, getAllCategory } from '../controller/categoryController.js'
import { authMiddleware } from '../middlewares/authMiddleware.js'


const router = express.Router()

router.post("/create", createCategory)
router.get("/getCategory", getAllCategory)

export default router