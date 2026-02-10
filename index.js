import express from 'express'
import { connectDB } from './database/db.js'
import dotenv from 'dotenv'
import authRoutes from './routes/authRoutes.js'
import menuRoutes from './routes/menuRoute.js'
import categoryRoutes from './routes/categoryRoutes.js'
import orderRoutes from './routes/orderRoutes.js'
import reservationRoutes from './routes/reservationRoute.js'
import cors from 'cors'


dotenv.config()
connectDB(); // Calling connectDB from db.js
const app = express()

app.use(cors())

app.use(express.json());

app.get('/', (req, res) => {
    res.send("Welcome to Backend")

})

app.listen(3000, () => {
    console.log("Server is running. http://localhost:3000")
})

app.use("/auth", authRoutes)
app.use("/login", authRoutes)
app.use("/menu", menuRoutes)
app.use("/category", categoryRoutes)
app.use("/orders", orderRoutes)
app.use("/reservations", reservationRoutes)

