import Link from "next/link"
import { AppBar, Avatar, Box, styled, Toolbar, Typography } from "@mui/material"
import { NavigateNext, Search } from "@mui/icons-material"
import { NavbarMenuBar } from "./navbar_menubar"
import { useRouter } from "next/router"
import { useAppSelector } from "@/setup/redux/react-hooks"

interface NavbarProps {
  Mode: boolean
}

const HeaderBox = styled(Box)(({ theme }) => ({
  display: "flex",
  justifyContent: "space-between",
  alignItems: "center",
  flexDirection: "row-reverse",
  height: "100%",
  "& a": {
    height: "100%",
    display: "flex",
    alignItems: "center",
    marginLeft: "5px",
  },
}))
const AppBarBox = styled(AppBar)(({ theme }) => ({
  position: "static",
  height: "65px",
  zIndex: "10",
  background: theme.palette.violet.main,
}))
const ToolbarBox = styled(Toolbar)(() => ({
  display: "flex",
  justifyContent: "space-between",
  flexDirection: "row-reverse",
  alignItems: "center",
  margin: "4px 18px",
  padding: "0!important",
}))

export const NavbarPrimarySection = ({ Mode }: NavbarProps) => {
  const router = useRouter()
  const value = parseInt(router.query.slug as string) as number
  const data = useAppSelector((state) => state.home.UsersData)

  return (
    <AppBarBox>
      <ToolbarBox>
        <Search sx={{ fontSize: "1.7rem" }} />
        {Mode === true ? (
          <>
            <Typography variant="h2" mx="auto">
              پیام های سازمان
            </Typography>
            <NavbarMenuBar />
          </>
        ) : (
          <HeaderBox>
            {Boolean(value) && (
              <>
                <Typography variant="h3" mx="auto" marginRight={1}>
                  {data[value - 1].first_name + data[value - 1].last_name}
                </Typography>

                <Avatar
                  alt="chanle image"
                  src={data[value - 1].avatar}
                  sx={{ width: 45, height: 45 }}
                />
              </>
            )}

            <Link href="/">
              <NavigateNext sx={{ fontSize: "1.7rem" }} />
            </Link>
          </HeaderBox>
        )}
      </ToolbarBox>
    </AppBarBox>
  )
}
