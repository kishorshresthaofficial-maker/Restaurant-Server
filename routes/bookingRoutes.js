import express from 'express'
import { createBooking, getBookingById, getBookings, updateBookingStatus } from '../controller/bookingController.js'

const router = express.Router()

router.post('/create', createBooking)
router.get('/getBookings', getBookings)
router.get('/:id', getBookingById)
router.put('/updateStatus/:id', updateBookingStatus)

export default router