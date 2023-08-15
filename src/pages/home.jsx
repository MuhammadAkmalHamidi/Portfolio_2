import { Box, Flex, Image } from "@chakra-ui/react"
import img from "../assets/R-removebg-preview.png"
import { Sidebar } from "../components/sidebar"
import { Navbar } from "../components/navbar"
import { motion } from 'framer-motion'

export const Home = () => {
    return (
        <Flex bgColor={"#222222"} w={"100vw"} h={"100vh"}>
            <Sidebar />
            <Navbar />
            <Box pl={"200px"} pt={"50px"}>
                <Flex w={"100%"} h={"85vh"} align={"center"} justifyContent={"end"} px={"100px"}>
                    <motion.div
                        initial={{ opacity: 0, x: -50 }}
                        animate={{ opacity: 1, x: 0 }}
                        exit={{ opacity: 0 }}
                        transition={{ duration: 0.5 }}
                    >
                        <Box textAlign={"end"} fontFamily={"Yeseva-One"}>
                            <Box color={"white"} fontSize={"90px"} h={"75px"}>Muhammad</Box>
                            <Box color={"white"} fontSize={"90px"} h={"75px"}>Akmal</Box>
                            <Box color={"white"} fontSize={"90px"}>Hamidi</Box>
                            <Flex color={"white"} w={"100%"} justifyContent={"end"}>
                                <Box h={"2px"} w={"100px"} bgColor={"yellow.500"}></Box>
                            </Flex>
                            <Flex w={"100%"} justifyContent={"end"}>
                                <Flex fontFamily={"body"} fontWeight={"thin"} fontSize={"30px"} color={"yellow.500"}>Full Stack Development</Flex>
                            </Flex>
                        </Box>
                    </motion.div>
                    <motion.div
                        initial={{ opacity: 0, x: 50 }}
                        animate={{ opacity: 1, x: 0 }}
                        exit={{ opacity: 0 }}
                        transition={{ duration: 0.5 }}
                    >
                        <Flex align={"center"} h={"100vh"}>
                            <Image w={"600px"} h={"600px"} src={img} />
                        </Flex>
                    </motion.div>
                </Flex>
            </Box>
        </Flex>
    )
}