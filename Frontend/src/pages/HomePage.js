import { Button, Flex } from '@chakra-ui/react'
import React, { useEffect } from 'react'
import { Link } from 'react-router-dom'
import useShowToast from '../hooks/useShowToast'

const HomePage = () => {
  const showToast = useShowToast()
  const [loading, setLoading] = useState(true)


  useEffect(() => {
    const getFeedPosts = async () =>{
      try {
        const res = await fetch("/api/posts/feed")
        const data = await res.json()
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
    <div>
        <Link to={"/markzuckerberg"}>
            <Flex w={"full"} justifyContent={"center"}>
            <Button mx={"auto"}> Click me. (Enter)</Button>
            </Flex>
        </Link>
    </div>
  )
}
 
export default HomePage