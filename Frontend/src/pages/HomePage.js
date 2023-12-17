import { Button, Flex, Spinner, Stack, Text } from '@chakra-ui/react'
import React, { useEffect, useState } from 'react'
import { Link } from 'react-router-dom'
import useShowToast from '../hooks/useShowToast'
import Post from '../components/Post'
import { useRecoilState } from 'recoil'
import postsAtom from '../atoms/postAtom'

const HomePage = () => {
  const [posts, setPosts] = useRecoilState(postsAtom)
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
        setPosts(data)
        
      } catch (error) {
        console.log(error);
        showToast("Error", error.message, "error")
        
      }finally{
        setLoading(false)
      }
    }

    getFeedPosts()
  }, [showToast, setPosts])


  return (
    <>
    {!loading && posts.length === 0 && <Text >Pls follow a user to see feed posts</Text>}


    {loading && (
      <Flex justifyContent={'center'}>
       <Stack direction='row' spacing={4}>
  <Spinner size='xs' color='green'/>
  <Spinner size='sm' color='red'/>
  <Spinner size='md' color='blue'/>
  <Spinner size='lg' color='purple'/>
  <Spinner size='xl' color='yellow'/>
</Stack>
      </Flex>
    )}
   
    {posts.map((post) => (
    <Post key={post._id} post={post} postedBy={post.postedBy} /> 
    ))}
    </>
  )
}
 
export default HomePage