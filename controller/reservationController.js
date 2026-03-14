import Reservation from '../model/reservation.js'

export const createReservation = async(req, res) => {
    try {
        const createdReservation = await Reservation.create(req.body);
        res.status(201).json(createdReservation);
    }
    catch (error) {
    console.log(error);
    res.status(500).json({ message: "Reservation failed" });
  }
}


export const getReservations = async(req, res)=> {
    try{
     const reservations = await Reservation.find()
     res.json(reservations)
    }
    catch(error)
    {
        console.log(error)
    }
}



