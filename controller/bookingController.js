import Booking from "../model/booking.js";

export const createBooking = async (req, res) => {
  try {
    const { name, email, phone, bookingDate, bookingTime, numberOfGuests, message } = req.body;

    if (!name || !email || !phone || !bookingDate || !bookingTime || !numberOfGuests) {
      return res.status(400).json({ message: "All fields are required" });
    }

    // const createdBooking = await Booking.create(req.body);
    const createdBooking = await Booking.create({
      ...req.body,
      status: "Pending"
    })

    res.status(201).json(createdBooking);
  } catch (error) {
    console.error(error);
    res.status(500).json({ message: "Error creating booking" });
  }
};

export const getBookings = async (req, res) => {
  try {
    const bookings = await Booking.find();
    res.json(bookings);
  }
  catch (error) {
    console.error(error);
    res.status(500).json({ message: "Error fetching bookings" });
  }
}


export const getBookingById = async (req, res) => {
  try {
    const bookingData = await Booking.findById(req.params.id);
    res.json(bookingData);
  }
  catch (error) {
    console.error(error);
    res.status(500).json({ message: "Error fetching booking" });
  }
}

export const updateBookingStatus = async (req, res) => {
  try {
      const updatedStatus = await Booking.findByIdAndUpdate(req.params.id, { status: req.body.status }, { new: true });
      res.json(updatedStatus);

  }
  catch (error) {
    console.error(error);
    res.status(500).json({ message: "Error updating booking status" });
  } 
}