const express = require ('express')
const { signUpUser, loginUser, logoutUser } = require ('../controllers/userControllers')
 
         
const router = express.Router()
        
router.post("/signup", signUpUser)
router.post("/login", loginUser)
router.get("/logout", logoutUser)


module.exports = router