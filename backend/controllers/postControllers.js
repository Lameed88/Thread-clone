const Post = require("../models/postModel")
const User = require("../models/userModel")

const createPost = async (req, res) =>{
    try {
        const {postedBy, text, img} = req.body

        if (!postedBy || !text) {
            return res. status(400).json({message: "postedBy and text field are required"})
        }
        const user = await User.findById(postedBy)
        if (!user){
            res.status(404).json({message: "user not found"})
        }
        const maxLength = 500

        if (text.length > maxLength){
            return res.status(400).json({message: `Text must less than ${maxLength} characters`})
        }

        const newPost = new Post({postedBy, text, img}) 

        await newPost.save()

        res.status(201).json({message: "Post created successfully", newPost})

    } catch (error) {
        res.status(500).json({message: error.message})
        console.log("Error in Create post: ", error.message);
        
    }

}


const getPost = async(req, res) =>{
    try {
        const post = await Post.findById(req.params.id)

        if (!post){
            return res.status(404).json({message: "Post not found"})
        }
        res.status(200).json({post})
        
    } catch (error) {
        res.status(500).json({message: error.message})// internal server error
        console.log("Error in get Post: ", error.message);
        
    }


}



const deletePost = async (req, res) =>{
    try {
        const post = await Post.findById(req.params.id)

        if (!post){
            return res.status(404).json({message: "post not found"})
        }

        if(post.postedBy.toString() !==req.user._id.toString()){
            return res.status(401).json({message:"Unauthorized to delete this post"})
        }
        await Post.findByIdAndDelete(req.params.id)
        res.status(200).json({message: "Post deleted successfully"})

    } catch (error) {
        res.status(500).json({message: error.message})// internal server error
        console.log("Error in delete Post: ", error.message);
    }
}



const likeUnlikePost = async (req, res) =>{
try {
    const {id:postId } = req.params
    const userId = req.user._id

    const post = await Post.findById(postId)

    if(!post){
        return res.status(404).json({message: "Post not found"})

    }

    const userLikedPost = post.likes.includes(userId)

    if (userLikedPost){
        await Post.updateOne({_id:postId}, {$pull: {likes: userId}})
        res.status(200).json({message: "Post unliked successfully"})

    }else{
        post.likes.push(userId)
        await post.save()

        res.status(200).json({message: "Post liked successfully"})
    }
} catch (error) {
    res.status(500).json({message: error.message})// internal server error
    console.log("Error in like Unlike Post : ", error.message);
}
}



const replyToPost = async (req, res) =>{
    try {
        const{text} = req.body
        const postId = req.params.id
        const userId = req.user._id
        const userProfilePic = req.user.ProfilePic
        const username = req.user.username
        
        if(!text){
            return res.status(400).json({message: "Text field is required"})
        }
        const post = await Post.findById(postId)

        if(!post){
            return res.status(404).json({message: "post not found"})
        }

        const reply = {userId, text, userProfilePic, username}

        post.replies.push(reply)
        await post.save()

        res.status(200).json({message: "reply added successfully", post})
        
    } catch (error) {
        res.status(500).json({message: error.message})// internal server error
        console.log("Error in Reply to Post : ", error.message);
    }
}
       

const getFeedPost = async(req, res) => {

    try {
        const userId = req.user._id
        const user = await User.findById(userId)

        if (!user){
            return res.status(404).json({message: "User not found"})
        }
 
        const following = user.following

        const feedPosts = await Post.find({postedBy: {$in: following}}).sort({createdAt: -1})

        res.status(200).json({feedPosts})

       
 
    } catch (error) {
        res.status(500).json({message: error.message})// internal server error
        console.log("Error in Get feed Post : ", error.message);
    } 
}

module.exports = { createPost, getPost, deletePost, likeUnlikePost, replyToPost, getFeedPost }