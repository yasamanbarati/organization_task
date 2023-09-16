import { AppBar, Avatar, Box, styled, Toolbar, Typography } from '@mui/material'
import SearchIcon from '@mui/icons-material/Search';
import { NavbarMenuBar } from './navbar_menubar';
import Link from 'next/link';
import { NavigateNext } from '@mui/icons-material';

interface NavbarProps {
  Mode: boolean
}

const HeaderBox = styled(Box)(({ theme }) => ({
  display: 'flex',
  justifyContent: 'space-between',
  alignItems: 'center',
  flexDirection: 'row-reverse',
  height: '100%',
  "& a": {
    height: '100%',
    display: 'flex',
    alignItems: 'center',
    marginLeft: '15px',
  }
}))
const AppBarBox = styled(AppBar)(({ theme }) => ({
  position: "static",
  height: "65px",
  zIndex: "10",
  background: theme.palette.violet.main
}))
const ToolbarBox = styled(Toolbar)(() => ({
  display: 'flex',
  justifyContent: 'space-between',
  flexDirection: 'row-reverse',
  alignItems: 'center',
  margin: '0 18px',
  padding: '0!important',
}))

export const NavbarPrimarySection = ({ Mode }: NavbarProps) => {
  return (
    <AppBarBox>
      <ToolbarBox>

        <SearchIcon sx={{ fontSize: '2rem' }} />
        {Mode === true ?
          <>
            <Typography variant='h1' mx='auto'>پیام های سازمان</Typography>
            <NavbarMenuBar />
          </>
          : <HeaderBox>
            <Typography variant='h2' mx='auto' marginRight={2}>کانال سراسری</Typography>
            <Avatar
              alt="chanle image"
              src="https://reqres.in/img/faces/1-image.jpg"
              sx={{ width: 45, height: 45 }}
            />
            <Link href="/">
              <NavigateNext fontSize='large' />
            </Link>
          </HeaderBox>
        }
      </ToolbarBox>
    </AppBarBox>
  )
}
