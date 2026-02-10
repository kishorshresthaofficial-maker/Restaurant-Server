import express from 'express'
import { createReservation } from '../controller/reservationController.js';

const router= express.Router();

router.post('/add', createReservation);

export default router;