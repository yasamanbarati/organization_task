import { AppBar, styled, Toolbar, Typography } from '@mui/material'
import SearchIcon from '@mui/icons-material/Search';
import { NavbarMenuBar } from './navbar_menubar';

const AppBarBox = styled(AppBar)(() => ({
  position: 'static',
}))
const ToolbarBox = styled(Toolbar)(() => ({
  display: 'flex',
  justifyContent: 'space-between',
  alignItems: 'center',
  padding: '0 24px'
}))

export const NavbarPrimarySection = () => {
  return (
    <AppBarBox>
      <ToolbarBox>

        <SearchIcon />

        <Typography variant='h1'>پیام های سازمان</Typography>

        <NavbarMenuBar />

      </ToolbarBox>
    </AppBarBox>
  )
}
