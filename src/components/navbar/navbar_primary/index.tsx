import Link from 'next/link';
import { AppBar, Avatar, Box, styled, Toolbar, Typography } from '@mui/material'
import { NavigateNext, Search } from '@mui/icons-material';
import { NavbarMenuBar } from './navbar_menubar';

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
    marginLeft: '5px',
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
  margin: '4px 18px',
  padding: '0!important',
}))

export const NavbarPrimarySection = ({ Mode }: NavbarProps) => {
  return (
    <AppBarBox>
      <ToolbarBox>

        <Search sx={{ fontSize: '1.7rem' }} />
        {Mode === true ?
          <>
            <Typography variant='h2' mx='auto'>پیام های سازمان</Typography>
            <NavbarMenuBar />
          </>
          : <HeaderBox>
            <Typography variant='h3' mx='auto' marginRight={1}>کانال سراسری</Typography>
            <Avatar
              alt="chanle image"
              src="https://reqres.in/img/faces/1-image.jpg"
              sx={{ width: 45, height: 45 }}
            />
            <Link href="/">
              <NavigateNext sx={{ fontSize: '1.7rem' }} />
            </Link>
          </HeaderBox>
        }
      </ToolbarBox>
    </AppBarBox>
  )
}
