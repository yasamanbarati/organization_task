import { styled } from "@mui/material"
import { MessageCard } from "@/components/card/message_card"
import { AddMessage } from "./add_message"
import { useState } from "react"
import { ScrollButton } from "./scroll_button"

const MessageBox = styled('div')(({ theme }) => ({
  position: "relative",
  backgroundImage: `url("/image.svg"), linear-gradient(${theme.palette.violet.dark}, ${theme.palette.dark})`,
  backgroundRepeat: "no-repeat",
  backgroundSize: "cover",
  display: 'flex',
  flexDirection: 'column',
  justifyContent: 'space-between',
  alignItems: 'center',
  width: '100%',
  maxWidth: '400px',
  padding: '0 12px',
  height: 'calc(100% - 65px)',
  // overflow: 'scroll',
  // '&::-webkit-scrollbar': {
  //   width: '4px',
  // },
  // '&::-webkit-scrollbar-track': {
  //   boxShadow: 'inset 0 0 6px #fff',
  // },
  // '&::-webkit-scrollbar-thumb': {
  //   backgroundColor: '#CCCCCC',
  //   borderRadius: '20px',
  // },
}))

export const MessageBoxSection = () => {

  const [message, setMessage] = useState<string[]>();

  const addMassage = (text: string) => {
    // setMessage([...message, text]);
  };

  return (
    <MessageBox>
      <ScrollButton />
      <MessageCard />
      <AddMessage />
    </MessageBox>
  )
}
