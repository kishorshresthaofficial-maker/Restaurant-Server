import express from 'express';
import { createBlog, deleteBlogs, getBlogs, getBlogsById, updateBlogs } from '../controller/blogController.js';
import { upload } from '../controller/file.js';
import multer from 'multer';

const router = express.Router(); // ✅ call the function

router.post("/create",upload.single("image"),createBlog)

router.get('/getBlogs',getBlogs);
router.get("/:id", getBlogsById);
router.delete("/:id", deleteBlogs)
// router.put("/update/:id", updateBlogs)
router.put("/update/:id", upload.single("image"), updateBlogs)

export default router; // ✅ don't forget to export