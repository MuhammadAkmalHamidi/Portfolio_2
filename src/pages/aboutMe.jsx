import { Box, Flex } from "@chakra-ui/react"
import { Sidebar } from "../components/sidebar"
import { Navbar } from "../components/navbar"
import { Skill } from "../components/skill"

export const About = () => {
    return (
        <Flex> 
            <Sidebar />
            <Box>
                <Navbar />
                <Box bgColor={"#222222"} w={"100vw"} h={"100%"}>
                    <Skill />
                </Box>
            </Box>
        </Flex>
    )
}