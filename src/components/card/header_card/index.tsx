import { Avatar, Badge, CardHeader, styled, Typography } from "@mui/material"
import { ReactNode } from "react"

interface HeaderCardProps {
  avatar: string
  title: string
  messageCount: number
  subheader: string & ReactNode
}

const CardHeaderBox = styled(CardHeader)(({ theme }) => ({
  padding: '0',
  alignItems: "center",
  height: "65px",
  justifyContent: "space-between",
  "& .MuiCardHeader-avatar": {
    marginLeft: '10px',
    marginRight: '0px',
    "& .MuiAvatar-root ": {
      width: '60px',
      height: '60px',
    },
  },
  "& .MuiCardHeader-content ": {
    display: 'flex',
    flexDirection: 'column',
    flexWrap: 'nowrap',
    justifyContent: 'space-around',
    maxWidth: '280px',
    height: '100%',
  },
  "& .MuiCardHeader-title ": {
    fontSize: '1rem',
    fontWeight: '600',
    color: theme.palette.white,
  },
  "& .MuiCardHeader-subheader ": {
    fontSize: '0.85rem',
    fontWeight: '500',
    color: theme.palette.white,
    width: '99%',
    textOverflow: 'ellipsis',
    overflow: "hidden",
    whiteSpace: "nowrap"
  },
  "& .MuiCardHeader-action ": {
    width: '40px',
    height: '100%',
    display: 'flex',
    flexDirection: 'column',
    alignItems: "flex-end",
    justifyContent: "space-between",
    "& .MuiBadge-badge": {
      top: '24px',
      left: '-12px',
      right: 'auto',
      width: '25px',
      height: '25px',
      paddingTop: '2px',
      borderRadius: '50%',
      fontSize: '0.75rem',
      fontWeight: '500',
      backgroundColor: theme.palette.violet.light,
      color: theme.palette.white,
    }
  }
}))
export const HeaderCard = ({ avatar, title, subheader, messageCount }: HeaderCardProps) => {

  return <CardHeaderBox
    avatar={
      <Avatar aria-label="recipe" src={avatar} />
    }
    title={title}
    subheader={subheader}
    action={
      <>
        <Badge badgeContent={messageCount} />
        <Typography variant="body1" color='white' component='p'>11:45</Typography>
      </>
    }
  />
}
