import { Button, Flex, Spinner } from '@chakra-ui/react'
import React, { useEffect, useState } from 'react'
import { Link } from 'react-router-dom'
import useShowToast from '../hooks/useShowToast'

const HomePage = () => {
  const [posts, setPosts] = useState([])
  const showToast = useShowToast()
  const [loading, setLoading] = useState(true)


  useEffect(() => {
    const getFeedPosts = async () =>{
      try {
        const res = await fetch("/api/posts/feed")
        const data = await res.json()
        console.log(data);
        if(data.error) {
          showToast("Error", data.error, "error")
          return
        }
        console.log(data);


      } catch (error) {
        console.log(error);
        showToast("Error", error.message, "error")
        
      }finally{
        setLoading(false)
      }
    }

    getFeedPosts()
  }, [showToast])


  return (
    <>
    {!loading && posts.length === 0 && <Text>Pls follow a user to see feed posts</Text>}


    {loading && (
      <Flex justifyContent={'center'}>
        <Spinner size={"xl"} color='red'/>
      </Flex>
    )}
    </>
  )
}
 
export default HomePage