import Orders from '../model/orders.js'
import router from "../routes/authRoutes.js"

export const createOrder = async(req, res)=> {
    try{
        const createdOrder = await Orders.create(req.body)
        res.json(createdOrder)
    }
    catch(error){
        console.log(error)
        res.sendStatus(400)
    }
}

export const getOrders = async(req, res)=> {
    try{
     const orders = await Orders.find()
     res.json(orders)
    }
    catch(error)
    {
        console.log(error)
    }
}
