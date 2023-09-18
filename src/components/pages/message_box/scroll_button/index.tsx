import { ExpandMoreOutlined } from "@mui/icons-material"
import { IconButton, styled } from "@mui/material"
import { MutableRefObject } from "react"

const ScrollButtonBox = styled(IconButton)(({ theme }) => ({
    position: "absolute",
    width: "45px",
    height: "45px",
    background: theme.palette.brightestViolet,
    color: theme.palette.white,
    bottom: "75px",
    right: "25px",
    zIndex: "3",
    cursor: "pointer",
    ":hover": {
        background: theme.palette.brightestViolet,
        color: theme.palette.white,
        boxShadow: `0px 0px 14px 5px ${theme.palette.brightestViolet}`,
    },
}))

interface Props {
    useRef: MutableRefObject<any>
}

export const ScrollButton = ({ useRef }: Props) => {

    const scrollToDown = () => {

        console.log(useRef.current);
        useRef?.current?.scrollTo(
            0, useRef.current.scrollHeight

        )
    }

    return (
        <ScrollButtonBox aria-label="Down" size="large" onClick={scrollToDown} >
            <ExpandMoreOutlined />
        </ScrollButtonBox>
    )
}
