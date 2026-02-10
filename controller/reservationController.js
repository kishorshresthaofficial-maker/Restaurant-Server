import Reservation from "../model/reservations.js"

export const createReservation = async(req, res) => {
    try{
        const createdReservation = await Reservation.create(req,body);
        res.json(createdReservation)
    }
    catch(error)
    {
        console.log(error)
    }
}