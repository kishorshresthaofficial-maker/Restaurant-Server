import express from 'express';
import { createAdminUser, deleteAdminUser, getAdminUsersById, getAllAdminUsers, updateAdminUser } from '../controller/adminUser.js';
import { get } from 'mongoose';

const router = express.Router()

router.post('/create', createAdminUser);
router.get('/getAdminUsers', getAllAdminUsers)
router.get('/:id', getAdminUsersById)
router.delete('/:id', deleteAdminUser)
router.put('/editAdmin/:id', updateAdminUser)

export default router;