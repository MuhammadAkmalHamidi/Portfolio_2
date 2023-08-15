import { Box, Flex } from "@chakra-ui/react";
import { useEffect, useState } from "react";
import { useLocation, useNavigate } from "react-router-dom";

export const Navbar = () => {
    const navigate = useNavigate();
    const location = useLocation()
    const [homeActive, setHomeActive] = useState(false);
    const [aboutActive, setAboutActive] = useState(false);
    const [protFolioActive, setPortfolioActive] = useState(false);

    const navHome = () => {
        navigate('/');
    };
    const navAbout = () => {
        navigate('/about');
    };
    const navPorto = () => {
        navigate('/portfolio')
    }
    useEffect(() => {
        if (location.pathname === '/') {
            setHomeActive(true);
            setAboutActive(false);
        } else if (location.pathname === '/about') {
            setAboutActive(true);
            setHomeActive(false);
        } else if (location.pathname === '/portfolio') {
            setHomeActive(false);
            setAboutActive(false);
            setPortfolioActive(true)
        }
    }, [location]);

    return(
        <Flex zIndex={"10000"} pt={"30px"} position={"fixed"} w={"100vw"} h={"50px"} justifyContent={"end"} px={"100px"} >
            <Flex color={"#d6d6d6"} fontWeight={"thin"} align={"center"} justifyContent={"space-between"} w={"250px"}>
                <Flex w={"100px"} justifyContent={"center"} cursor={"pointer"} transition={"0.5s"} p={"10px"} borderRadius={"10px"} bgColor={homeActive ? "yellow.500" : "none"} textShadow={homeActive ? "0px 0px 5px white" : "none"} onClick={navHome}>Home</Flex>
                <Flex w={"100px"} justifyContent={"center"} cursor={"pointer"} transition={"0.5s"} p={"10px"} borderRadius={"10px"} bgColor={aboutActive ? "yellow.500" : "none"} textShadow={aboutActive ? "0px 0px 5px white" : "none"} onClick={navAbout}>Skill</Flex>
                <Flex w={"100px"} justifyContent={"center"} cursor={"pointer"} transition={"0.5s"} p={"10px"} borderRadius={"10px"} bgColor={protFolioActive ? "yellow.500" : "none"} textShadow={protFolioActive ? "0px 0px 5px white" : "none"} onClick={navPorto}>Portfolio</Flex>
            </Flex>
        </Flex>
    );
};
