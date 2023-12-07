import { useEffect, useState } from "react";
import UserHeader from "../components/UserHeader";
import UserPosts from "../components/UserPosts";
import { useParams } from "react-router-dom";
import useShowToast from "../hooks/useShowToast";

const UserPage = () => {
  const [user, setUser] = useState(null);
  const { username } = useParams();
  const showToast = useShowToast();
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const getUser = async () => {
      try {
        const res = await fetch(`/api/users/profile/${username}`);
        const data = await res.json();

        if (data.error) {
          showToast("Error", data.error, "error");
          return;
        }
        setUser(data);

      } catch (error) {
        showToast("Error", error, "error");
      }finally{
        setLoading(false)
      }
    };
    getUser();
  }, [username, showToast]);

  if (!user && ) return null;

  return (
    <>
      <UserHeader user={user} />
      <UserPosts
        userAvatar={"https://bit.ly/tioluwani-kolawole"}
        likes={200}
        replies={50}
        postImage={"/post1.png"}
        postTitle={"Hello, eku ojo merin nile yii o "}
      />

      <UserPosts
        userAvatar={"https://bit.ly/tioluwani-kolawole"}
        likes={100}
        replies={40}
        postImage={"/post3.png"}
        postTitle={"This is great"}
      />

      <UserPosts
        userAvatar={"https://bit.ly/tioluwani-kolawole"}
        likes={80}
        replies={20}
        postImage={"/post2.png"}
        postTitle={"wow! awesome"}
      />
    </>
  );
};
  
export default UserPage;
