import { ExpandMoreOutlined } from "@mui/icons-material"
import { IconButton, styled } from "@mui/material"

const ScrollButtonBox = styled(IconButton)(({ theme }) => ({
    position: "fixed",
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

export const ScrollButton = () => {

    const scrollToDown = () => {
        window.scrollTo({
            top: 0,
            behavior: 'smooth'
        })
    }

    return (
        <ScrollButtonBox aria-label="Down" size="large" onClick={scrollToDown} >
            <ExpandMoreOutlined />
        </ScrollButtonBox>
    )
}
