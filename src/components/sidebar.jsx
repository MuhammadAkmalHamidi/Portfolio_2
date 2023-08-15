import { Box, Flex } from "@chakra-ui/react"
import { useEffect, useState } from "react";
import { Waktu } from "./jam";
import { AiFillInstagram, AiFillTwitterSquare, AiFillFacebook } from "react-icons/ai"

export const Sidebar = () => {
    const [time, setTime] = useState(new Date())


    return (
        <Flex justifyContent={"center"} boxShadow={"0px 0px 10px black"} position={"fixed"} py={"50px"} bgColor={"#1a1a1a"} w={"150px"} h={"100vh"}>
            <Box w={"100%"}>
                <Flex mb={"250px"} justifyContent={"center"} fontSize={"30px"} textShadow={"0px 0px 10px white"} fontWeight={"thin"} color={"#b4b4b4"}>
                    Logo
                </Flex>
                <Flex mb={"200px"} justifyContent={"center"}>
                    <Waktu />
                </Flex>
                <Box>
                    <Flex justifyContent={"center"} mb={"15px"} color={"#9b9b9b"} _hover={{transform:"scale(0.95)", transition:"0.3s"}} cursor={"pointer"}> <AiFillInstagram size={"40px"} /> </Flex>
                    <Flex justifyContent={"center"} mb={"15px"} color={"#9b9b9b"} _hover={{transform:"scale(0.95)", transition:"0.3s"}} cursor={"pointer"}> <AiFillTwitterSquare size={"40px"} /> </Flex>
                    <Flex justifyContent={"center"} mb={"15px"} color={"#9b9b9b"} _hover={{transform:"scale(0.95)", transition:"0.3s"}} cursor={"pointer"}> <AiFillFacebook size={"40px"} /> </Flex>
                </Box>
            </Box>
        </Flex>
    )
}