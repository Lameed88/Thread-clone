import { Flex, Image, useColorMode } from "@chakra-ui/react";
import { useRecoilValue } from "recoil";
import userAtom from "../atoms/userAtom";
import { AiFillHome } from "react-icons/ai"
import {Link, Link as RouterLink} from "react-router-dom"
// import RxAvatar from "R"

const Header = () => {
  const { colorMode, toggleColorMode } = useColorMode();
  const user = useRecoilValue(userAtom)

  return (
    <Flex justifyContent={"center"} mt={6} mb="12">
      {user && (
        <Link as={RouterLink} to="/">
          <AiFillHome size={24} />
        </Link>
      )}

      {!user && (
        <Link as= {RouterLink} 
      )}

      <Image
        alt="logo"
        w={6}
        src={colorMode === "dark" ? "/light-logo.svg" : "/dark-logo.svg"}
        onClick={toggleColorMode}
        cursor={"pointer"}
      />
    </Flex>
  );
};

export default Header;
