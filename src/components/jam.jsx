import { Box, Flex, } from "@chakra-ui/react"
import { useEffect, useState } from "react"

export const Waktu = () => {
    const [time, setTime] = useState(new Date())
    
    useEffect(() => {
        const interval = setInterval(() => {
            setTime(new Date())
        }, 1000)
        return () => clearInterval(interval)
    },[])
    return(
        <Flex justifyContent={"center"} color={"#b4b4b4"} textShadow={"0px 0px 3px white"} fontSize={"25px"} fontFamily={"Rajdhani"}>  {time.toLocaleTimeString()} </Flex>
    )
}