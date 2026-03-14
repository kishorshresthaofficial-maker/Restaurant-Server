import express from 'express'
import { createReservation, getReservations } from '../controller/reservationController.js';

const router= express.Router();

router.post('/add', createReservation);
router.get('/getReservations', getReservations)

export default router;