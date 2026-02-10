import Menu from "../model/menu.js"

 export const createMenu = async(req, res) => {
    try{

        const createdMenu = await Menu.create(req.body)
        res.json(createdMenu)
    }
    catch(error){
        console.error(error)
        res.sendStatus(400)
    }
}