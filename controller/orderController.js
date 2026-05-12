
import Order from '../model/orders.js'
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

export const deleteOrder = async (req, res) => {
  try {
    const delOrder = await Order.findByIdAndDelete(req.params.id);

    if (!delOrder) {
      return res.status(404).json({ message: "Order item not found" });
    }

    res.json({ message: "Deleted successfully" });
  } catch (error) {
    console.error(error);
    res.status(500).json({ message: "Failed to delete." });
  }
};