import { useState } from "react";
import { IconButton } from "@mui/material"
import MenuIcon from '@mui/icons-material/Menu';

import { MenuBar } from "./menu_bar";

export const NavbarMenuBar = () => {
  const [open, setOpen] = useState(false)

  const handleDrawerOpen = () => {
    setOpen(true)
  }

  const handleDrawerClose = () => {
    setOpen(false)
  }
  return <>
    <IconButton
      color="default"
      aria-label="open drawer"
      edge="end"
      onClick={handleDrawerOpen}
      sx={{ ...(open && { display: 'flex' }) }}
    >
      <MenuIcon />
    </IconButton>
    <MenuBar open={open} handleDrawerClose={handleDrawerClose} />
  </>
}
