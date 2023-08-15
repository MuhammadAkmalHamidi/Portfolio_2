import { Box } from "@chakra-ui/react";
import { Bahasa } from "./bahasa";
import { FJ } from "./FWJS";
import { Css } from "./css";
import { Node } from "./FWnode";
import { Orm } from "./orm";

export const Skill = () => {
    return (
        <Box pb={"100px"}>
            <Bahasa />
            <FJ />
            <Css />
            <Node />
            <Orm />
        </Box>
    )
}
