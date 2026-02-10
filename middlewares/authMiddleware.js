import jwt from 'jsonwebtoken';
export const authMiddleware = (req, res, next)=>{
    const authHeader = req.headers.authorization

    try{
        const token = authHeader.split(" ")[1]
        req.user = jwt.verify(token,"restaurantwebsite" )
        next()
    }
    catch(error)
    {
        return res.status(401).json({message: "Token not valid"})
    }
}