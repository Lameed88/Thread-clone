import { Flex, Image, useColorMode } from "@chakra-ui/react";
import { useRecoilValue } from "recoil";
import userAtom from "../atoms/userAtom";
import { AiFillHome } from "react-icons/ai"
import {Link, Link as RouterLink} from "react-router-dom"
import { useState } from "react";
import {RxAvatar} from "react-icons/rx"

const Header = () => {
  const { colorMode, toggleColorMode } = useColorMode();
  const user = useRecoilValue(userAtom)
  const [authScreen, setAuthScreen] = useState(false)

  return (
    <Flex justifyContent={"center"} mt={6} mb="12">
      {user && (
        <Link as={RouterLink} to="/">
          <AiFillHome size={24} />
        </Link>
      )}

      {!user && (
        <Link as= {RouterLink} to={"/auth"} onClick={() => setAuthScreen("login")}>
          login
        </Link>
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
