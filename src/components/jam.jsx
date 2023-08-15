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
        <Flex justifyContent={"center"} color={"yellow.500"} textShadow={"0px 0px 5px gold"} fontSize={"25px"} fontFamily={"Rajdhani"}>  {time.toLocaleTimeString()} </Flex>
    )
}