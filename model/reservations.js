import mongoose, { Schema } from "mongoose";

const reservationSchema = new Schema({
    customer: String,
    contact: Number,
    guests: Number,
    date: String,
    status: String
});

const Reservation = mongoose.model("Reservations", reservationSchema)

export default Reservation