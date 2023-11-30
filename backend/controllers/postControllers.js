const createPost = async (req, res) =>{
    try {
        const {postedBy, text, img} = req.body

        if (!postedBy || !text) {
            return res. status(400).json({message: "postedBy and text field are required"})
        }
        
    } catch (error) {
        
    }

}
module.exports = { createPost }