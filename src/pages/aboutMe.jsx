import { Box, Flex } from "@chakra-ui/react"
import { Sidebar } from "../components/sidebar"
import { Navbar } from "../components/navbar"

export const About = () => {
    return(
        <Flex>
            <Sidebar />
            <Box  bgColor={"#222222"} w={"100vw"} h={"100vh"}>
                <Navbar />
            </Box>
        </Flex>
    )
}