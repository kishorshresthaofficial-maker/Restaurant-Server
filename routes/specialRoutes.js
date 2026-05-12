import express from "express";
import multer from "multer";
import path from "path";

const router = express.Router()

router.post('/upload', upload.single('file'), function (req, res){
    try {
        res.status(200).json({
            message: "File Uploaded",
            file: req.file
        });

    }catch (error)
    {
        res.status(500).json({ error: error.message });
    }
})

export default router;