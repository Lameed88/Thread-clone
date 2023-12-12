import {
  Avatar,
  Flex,
  Text,
  Image,
  Box,
  Divider,
  Button,
} from "@chakra-ui/react";
import Actions from "../components/Actions";
import { BsThreeDots } from "react-icons/bs";
import { useState, useEffect } from "react";
import React from "react";
import Comments from "../components/Comments";

const [user, setUser] = useState(null)

useEffect(() => {
  
}, [])


const PostPage = () => {
  const [liked, setLiked] = useState(false);
  return (
    <>
      <Flex
        w={"full"}
        gap={3}
        justifyContent={"space-between"}
        alignItems={"center"}
      >
        <Flex alignItems={"center"}>
          <Avatar src="/aliumusa.jpeg" size={"md"} mr={2} />
          <Text fontSize={"sm"}>Aliu musa</Text>
          <Image src="verified.png" h={4} w={4} ml={2} />
        </Flex>

        <Flex alignItems={"center"} gap={4}>
          <Text
            fontSize={{ base: "xs", md: "sm" }}
            textAlign={"right"}
            w={36}
            color={"gray.light"}
          >
            2days
          </Text>
          <BsThreeDots />
        </Flex>
      </Flex>
      <Text my={3}>Hello gbogbo aye!!!</Text>

      <Box
        overflow={"hidden"}
        borderRadius={6}
        border={"1px solid"}
        borderColor={"gray.light"}
      >
        <Image src="/post1.png" w={"full"} />
      </Box>
      <Flex>
        <Actions liked={liked} setLiked={setLiked} />
      </Flex>
      <Flex gap={2} color={"gray.light"} fontSize={"sm"} alignItems={"center"}>
        <Text>300 Replies</Text>
        <Box w={0.5} h={0.5} borderRadius={"full"} bg={"green"}></Box>
        <Text>{21 + (liked ? 1 : 0)} likes</Text>
      </Flex>
      <Divider my={4} />

      <Flex justifyContent={"space-between"}>
        <Flex alignItems={"center"} gap={2}>
          <Text fontSize={"2xl"}>👌</Text>
          <Text>Get the app to like, reply and post.</Text>
        </Flex>
        <Button>Get</Button>
      </Flex>
    
      <Divider my={4} />

      {/* <Comments
        likes={12}
        username={"Ryan Florence"}
        userAvatar={"https://bit.ly/ryan-florence"}
        createdAt={"3 mins ago"}
        Comments={"welcome back online bro"}
      /> */}
     
    </>
  );
};

export default PostPage;
