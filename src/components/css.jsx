import { Box, CircularProgress, Flex, Progress } from "@chakra-ui/react";
import { motion } from 'framer-motion'
import { useInView } from 'react-intersection-observer';

export const Css = () => {

    const [ref, inView] = useInView({
        triggerOnce: true,
    });

    return (
        <motion.div
            ref={ref}
            initial={{ opacity: 0, y: 50 }}
            animate={{ opacity: inView ? 1 : 0, x: inView ? 0 : 100 }} // Change animation based on inView
            transition={{ duration: 1.5 }}
        >
            <Box pt={"200px"} pl={"170px"}>
                <Box fontSize={"40px"} color={"yellow.500"} fontWeight={"thin"}>CSS Framework</Box>
                <Box mt={"50px"} fontWeight={"thin"}>
                    <Flex color={"white"} pl={"20px"} fontSize={"20px"} gap={"100px"} alignItems="center">
                        <Box w={"150px"} pr="10px">Bootstrap</Box>
                        <Box w={"500px"} boxShadow={"0px 0px 5px gold"} border={"1px solid"} borderColor={"yellow.500"} borderRadius={"20px"} h={"5px"}>
                            <Box w={"50%"} h={"100%"} bgColor={"yellow.500"}></Box>
                        </Box>
                    </Flex>
                    <Flex color={"white"} pl={"20px"} fontSize={"20px"} gap={"100px"} alignItems="center">
                        <Box w={"150px"} pr="10px">Chakra</Box>
                        <Box w={"500px"} boxShadow={"0px 0px 5px gold"} border={"1px solid"} borderColor={"yellow.500"} borderRadius={"20px"} h={"5px"}>
                            <Box w={"90%"} h={"100%"} bgColor={"yellow.500"}></Box>
                        </Box>
                    </Flex>
                    <Flex color={"white"} pl={"20px"} fontSize={"20px"} gap={"100px"} alignItems="center">
                        <Box w={"150px"} pr="10px">Tailwind</Box>
                        <Box w={"500px"} boxShadow={"0px 0px 5px gold"} border={"1px solid"} borderColor={"yellow.500"} borderRadius={"20px"} h={"5px"}>
                            <Box w={"20%"} h={"100%"} bgColor={"yellow.500"}></Box>
                        </Box>
                    </Flex>
                </Box>
            </Box>
        </motion.div>
    )
}