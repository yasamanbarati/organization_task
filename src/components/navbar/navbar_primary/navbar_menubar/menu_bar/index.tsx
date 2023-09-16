import { Drawer, styled, IconButton, useTheme } from '@mui/material'
import ChevronLeftIcon from '@mui/icons-material/ChevronLeft';

interface Props {
    handleDrawerClose: () => void
    open: boolean
}

const DrawerHeader = styled('div')(({ theme }) => ({
    display: 'flex',
    alignItems: 'center',
    padding: theme.spacing(0, 1),
    ...theme.mixins.toolbar,
    justifyContent: 'flex-start',
    "& .MuiSvgIcon-root": {
        color: theme.palette.violet.dark
    }
}));
const DrawerStyle = {
    width: "269px",
    flexShrink: 0,
    position: 'absolute',
    right: '0',
    top: '-65px',
    '& .MuiDrawer-paper': {
        width: "269px",
        height: "calc( 100vh - 65px )",
        right: "-24px",
        top: "65px",
        paddingRight: "40px",
        background: "rgba(255, 255, 255, 0.6)",
        backdropFilter: "blur(16px)",
        position: "absolute"
    },
}
export const MenuBar = ({ handleDrawerClose, open }: Props) => {
    const theme = useTheme()
    return (
        <Drawer
            sx={{ ...DrawerStyle, display: open === false ? 'none' : 'block' }}
            variant="persistent"
            anchor="right"
            open={open}
        >
            <DrawerHeader sx={{ justifyContent: "flex-start" }}>
                <IconButton onClick={handleDrawerClose}>
                    <ChevronLeftIcon sx={{ fontSize: "2.5rem" }} />
                </IconButton>
            </DrawerHeader>

        </Drawer>
    )
}