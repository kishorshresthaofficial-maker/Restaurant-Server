import mongoose, { Schema } from "mongoose";

const reservationSchema = new Schema({
    fullname: String,
    contact: Number,
    guests: String,
    reservation_date: String,
    reservation_time: String,
    status: String
});

const Reservation = mongoose.model("Reservation", reservationSchema)

export default Reservation