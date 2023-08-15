import { Box, Flex } from "@chakra-ui/react"
import { useNavigate } from "react-router-dom"

export const Navbar = () => {
    const navigate = useNavigate()

    const home = () => {
        navigate('/')
    }
    const about = () => {
        navigate('/about')
    }
    return(
        <Flex position={"fixed"} w={"100%"} h={"50px"} justifyContent={"end"} px={"100px"} >
            <Flex color={"#d6d6d6"} fontWeight={"thin"} align={"center"} justifyContent={"space-between"} w={"250px"}>
                <Flex onClick={home}>Home</Flex>
                <Flex onClick={about}>About Me</Flex>
                <Flex>Portfolio</Flex>
            </Flex>
        </Flex>
    )
}