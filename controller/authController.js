import User from "../model/user.js"
import bcrypt from "bcryptjs"
import jwt from "jsonwebtoken"

// REGISTER
export const register = async (req, res) => {
    const { name, email, password } = req.body

    try {
        const existingUser = await User.findOne({ email })

        if (existingUser) {
            return res.status(409).json({ message: "Email already exists." })
        }

        const hashedPassword = await bcrypt.hash(password, 10)

        const createdUser = await User.create({
            name,
            email,
            password: hashedPassword
        })

        res.status(201).json({
            id: createdUser._id,
            name: createdUser.name,
            email: createdUser.email
        })

    } catch (error) {
        console.error(error)
        res.status(400).json({ message: "Registration failed" })
    }
}

// LOGIN
export const login = async (req, res) => {
    const { email, password } = req.body

    try {
        const user = await User.findOne({ email })

        if (!user) {
            return res.status(404).json({ message: "Incorrect Email." })
        }

        const isMatch = await bcrypt.compare(password, user.password)

        if (!isMatch) {
            return res.status(401).json({ message: "Password Incorrect" })
        }
        
            // TOKEN

           const token = jwt.sign(
                {
                    userId: user.id,
                    email: user.email
                },
                "restaurantwebsite", // this gives token from jwt after login successful 
                { expiresIn: "1h" }
            )

            
         res.status(200).json({message: "Logged in Successfully.", token: token, user: {id:user._id, email: user.email, name: user.name}})
     

        // // success
        // res.status(200).json({
        //     // id: user._id,
        //     message: "Logged in Successfully",
        //     name: user.name,
        //     email: user.email
        // }) 
           

    } catch (error) {
        console.error(error)
        res.status(500).json({ message: "Login failed" })
    }
}
