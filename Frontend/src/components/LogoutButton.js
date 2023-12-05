import { Button } from "@chakra-ui/react"
import { FiLogOut } from "react-icons/fi"


const LogoutButton = () => {
  return (
    <Button position={"fixed"} top={"30px"} right={"30px"} size={"sm"}>
        <FiLogOut size={20}/>
    </Button>
  )
}

export default LogoutButton