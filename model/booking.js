import mongoose from "mongoose";

const bookingSchema = new mongoose.Schema({
    name: String,
    email: String,
    phone: String,
    bookingDate: Date,
    bookingTime: String,
    numberOfGuests: Number,
    status: {
        type: String,
        default: "pending"
    },
    message: String
})

const Booking = mongoose.model("Booking", bookingSchema)

export default Booking;