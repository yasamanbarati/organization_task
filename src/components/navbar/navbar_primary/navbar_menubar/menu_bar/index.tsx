import { Drawer, styled, IconButton, useTheme, Avatar, Box, Typography } from '@mui/material'
import ChevronLeftIcon from '@mui/icons-material/ChevronLeft';
import { stringAvatar } from '@/helper/avatarStringMaker';

interface Props {
    handleDrawerClose: () => void
    open: boolean
}

const DrawerHeader = styled('div')(({ theme }) => ({
    display: 'flex',
    alignItems: 'center',
    justifyContent: 'space-between',
    flexDirection: 'row-reverse',
    padding: '12px',
    ...theme.mixins.toolbar,
    "& .MuiSvgIcon-root": {
        color: theme.palette.violet.dark
    },
    "& .MuiBox-root": {
        display: 'flex',
        alignItems: 'center',
        flexDirection: "column",
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
        height: "100vh",
        right: "-24px",
        top: "60px",
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
            <DrawerHeader>
                <IconButton onClick={handleDrawerClose}>
                    <ChevronLeftIcon sx={{ fontSize: "2.5rem" }} />
                </IconButton>

                <Box>
                    <Avatar {...stringAvatar('Yasaman Barati')} />
                    <Typography variant='h3' color='white' component='h3' mt={1}>Yasaman Barati</Typography>
                </Box>

            </DrawerHeader>
            <Box>

            </Box>
        </Drawer>
    )
}