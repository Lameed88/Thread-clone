import {
  Avatar,
  Box,
  Flex,
  Image,
  Menu,
  MenuButton,
  MenuDivider,
  MenuGroup,
  MenuItem,
  MenuList,
  Text,
} from "@chakra-ui/react";
import { BsThreeDots } from "react-icons/bs";
import { Link, Navigate, useNavigate } from "react-router-dom";
import Reactions from "./Actions";
import { useEffect, useState } from "react";
import useShowToast from "../hooks/useShowToast";
import { formatDistanceToNow } from "date-fns";

const Posts = ({ post, postedBy }) => {
  const [liked, setLiked] = useState(false);
  const [user, setUser] = useState(null);

  const navigate = useNavigate();
  const showToast = useShowToast();

  useEffect(() => {
    const getUser = async () => {
      try {
        const res = await fetch(`/api/users/profile/${postedBy}`);
        const data = await res.json();
        console.log(data);
        setUser(data);
        if (data.error) {
          showToast("Error", data.error, "error");
          return;
        }
      } catch (error) {
        showToast("Error", error.message, "error");
        setUser(null);
      }
    };

    getUser();
  }, [postedBy, showToast]);

  if (!user) return null;

  return (
    <Link to={`/${user.username}/post/${post._id}`}>
      <Flex gap={3} mb={4} py={5}>
        <Flex flexDir={"column"} alignItems={"center"}>
          <Avatar
            src={user.profilePic}
            name={`${user.name} ${user.namename}`}
            size={"md"}
            onClick={(e) => {
              e.preventDefault();
              navigate(`/${user.username}`);
            }}
          />
          <Box w={"1px"} h={"full"} bg={"gray.light"} my={2}></Box>
          <Box pos={"relative"} w={"full"}>
            {post.replies.length === 0 && (
              <Text textAlign={"center"}>😂😎</Text>
            )}

            {post.replies[0] && (
              <Avatar
                src={post.replies[0].userProfilePic}
                name={post.replies[0].username}
                size={"xs"}
                pos={"absolute"}
                top={"0"}
                left={"15px"}
                padding={"2px"}
              />
            )}
            {post.replies[1] && (
              <Avatar
                src={post.replies[1].userProfilePic}
                name={post.replies[1].username}
                size={"xs"}
                pos={"absolute"}
                top={"0"}
                left={"15px"}
                padding={"2px"}
              />
            )}

            {post.replies[2] && (
              <Avatar
                src={post.replies[2].userProfilePic}
                name={post.replies[2].username}
                size={"xs"}
                pos={"absolute"}
                top={"0"}
                left={"15px"}
                padding={"2px"}
              />
            )}
          </Box>
        </Flex>

        <Flex flex={1} flexDir={"column"} gap={2}>
          <Flex w={"full"} justifyContent={"space-between"}>
            <Flex alignItems={"center"} w={"full"}>
              <Text>{user.username}</Text>
              <Image src="/verified.png" ml={1} w={4} h={4} />
            </Flex>
            <Flex
              alignItems={"center"}
              gap={4}
              onClick={(e) => {
                e.preventDefault();
                Navigate(`/${user.username}`);
              }}
            >
              <Text fontSize={"xs"} w={36} textAlign={"right"}>
                {formatDistanceToNow(new Date(post.createdAt))} Ago
              </Text>
              <Menu>
                <MenuButton>
                  <BsThreeDots cursor={"pointer"} />
                </MenuButton>
                <MenuList>
                  <MenuGroup>
                    <MenuItem color={"gray.light"}>Mute</MenuItem>
                  </MenuGroup>
                  <MenuDivider />
                  <MenuGroup>
                    <MenuItem color={"red"}>Block</MenuItem>
                    <MenuItem color={"gray.light"}>Hide</MenuItem>
                  </MenuGroup>
                  <MenuDivider />
                  <MenuGroup>
                    <MenuItem color={"red"}>Report</MenuItem>
                  </MenuGroup>
                </MenuList>
              </Menu>
            </Flex>
          </Flex>

          <Text fontSize={"sm"}>{post.text}</Text>
          {post.Img && (
            <Box
              overflow={"hidden"}
              borderRadius={6}
              border={"1px solid"}
              borderColor={"gray.light"}
            >
              <Image src={post.Img} width={"full"} />
            </Box>
          )}
          <Flex gap={3} my={1}>
            <Reactions post={post}/>
          </Flex>

          
        </Flex>
      </Flex>
    </Link>
  );
};

export default Posts;
