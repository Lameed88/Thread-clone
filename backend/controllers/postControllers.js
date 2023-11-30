const User = require("../models/userModel")

const createPost = async (req, res) =>{
    try {
        const {postedBy, text, img} = req.body

        if (!postedBy || !text) {
            return res. status(400).json({message: "postedBy and text field are required"})
        }
        const user = await User .findById(postedBy)
        if (!user){
            res.status(404).json({message: "user not found"})
        }

    } catch (error) {
        res.status(500).json({message: error.message})
        console.log("Error in Create post: ", error.message);
        
    }

}
module.exports = { createPost }