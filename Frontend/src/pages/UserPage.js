import UserHeader from "../components/UserHeader"
import UserPosts from "../components/UserPosts"


const UserPage = () => {
  return(
<>
  <UserHeader />
  <UserPosts userAvatar={"https://bit.ly/tioluwani-kolawole"}
  likes={200}
  replies={50}
  postImage={"/post1.png"}
  postTitle={"Hello, eku ojo merin nile yii o "}
  />

   <UserPosts userAvatar={"https://bit.ly/tioluwani-kolawole"}
  likes={100}
  replies={40}
  postImage={"/post3.png"}
  postTitle={"This is great"}
  
  />

<UserPosts userAvatar={"https://bit.ly/tioluwani-kolawole"}
  likes={80}
  replies={20}
  postImage={"/post2.png"}
  postTitle={"wow! awesome"} 
  
  />

 
  </>

  )
 
  
}

export default UserPage