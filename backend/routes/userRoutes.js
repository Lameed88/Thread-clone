const express = require ('express')
const { followUnFollowUser, signUpUser, loginUser, logoutUser } = require ('../controllers/userControllers')
const protectRoute = require ("../middleware/protectRoute")
const getUserProfile =require('../controllers/userControllers')
 
         
const router = express.Router()
        
router.get("/profile/:query",  getUserProfile)
router.post("/signup", signUpUser)
router.post("/login", loginUser)
router.post("/logout", logoutUser)
router.post("/follow/:id", protectRoute , followUnFollowUser) // toggle state(follow/unfollow)

module.exports = router