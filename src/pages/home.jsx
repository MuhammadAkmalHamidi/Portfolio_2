import { Box, Flex, Image } from "@chakra-ui/react"
import { Sidebar } from "../components/sidebar"
import { Navbar } from "../components/navbar"
import { motion } from 'framer-motion'
import { useInView } from 'react-intersection-observer';
import img from "../assets/R-removebg-preview.png"

export const Home = () => {

    const [ref, inView] = useInView({
        triggerOnce: true,
    });


    return (
        <Flex bgColor={"#222222"} w={"100%"} h={"100%"}>
            <Sidebar />
            <Navbar />
            <Box pl={"250px"} pt={"50px"}>
                <Flex w={"100%"} h={"85vh"} align={"center"} justifyContent={"end"} px={"100px"}>
                    <motion.div
                        initial={{ opacity: 0, x: -200 }}
                        animate={{ opacity: 1, x: 0 }}
                        exit={{ opacity: 0 }}
                        transition={{ duration: 1 }}
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
                        initial={{ opacity: 0, x: 200 }}
                        animate={{ opacity: 1, x: 0 }}
                        exit={{ opacity: 0 }}
                        transition={{ duration: 1 }}
                    >
                        <Flex align={"center"} h={"100vh"}>
                            <Image src={img} />
                        </Flex>
                    </motion.div>
                </Flex>
                <Box w={"100%"} h={"400px"} mt={"60px"}>
                    <motion.div
                        ref={ref}
                        initial={{ opacity: 0, y: 50 }}
                        animate={{ opacity: inView ? 1 : 0, y: inView ? 0 : 70 }} // Change animation based on inView
                        transition={{ duration: 0.7 }}
                    >
                        <Flex justifyContent={"center"} textAlign={"center"} color={"white"}>
                            <Box>
                                <Box fontSize={"60px"} color={"yellow.600"} fontFamily={"Cuprum"} h={"100px"}>
                                    Selamat datang di website portfolio saya
                                </Box>
                                <Flex justifyContent={"center"} fontWeight={"thin"} fontSize={"25px"} fontFamily={"body"}>
                                    Lulusan SMA bukan sebuah keterbatasan.
                                </Flex>
                            </Box>
                        </Flex>
                    </motion.div>
                </Box>
            </Box>
        </Flex>
    )
}