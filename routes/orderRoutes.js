import express from 'express'
import { createOrder, deleteOrder, getOrders } from '../controller/orderController.js';

const router = express.Router();

router.post('/add', createOrder);
router.get('/getOrders', getOrders);
router.delete("/:id", deleteOrder);

export default router;