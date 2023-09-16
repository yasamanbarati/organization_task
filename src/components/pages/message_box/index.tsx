import { styled } from "@mui/material"
import { MessageCard } from "@/components/card/message_card"
import { AddMessage } from "./add_message"
import { useState } from "react"

const MessageBox = styled('div')(({ theme }) => ({
  backgroundImage: `url("/image.svg"), linear-gradient(${theme.palette.violet.dark}, ${theme.palette.dark})`,
  backgroundRepeat: "no-repeat",
  backgroundSize: "cover",
  height: '90%',
  display: 'flex',
  flexDirection: 'column',
  justifyContent: 'space-between',
  alignItems: 'center',
}))

export const MessageBoxSection = () => {

  const [message, setMessage] = useState<string[]>();

  const addMassage = (text: string) => {
    // setMessage([...message, text]);
  };

  return (
    <MessageBox>
      <MessageCard />
      <AddMessage />
    </MessageBox>
  )
}
