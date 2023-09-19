import { styled } from "@mui/material"
import { MessageCard } from "@/components/card/message_card"
import { AddMessage } from "./add_message"
import { useEffect, useRef, useState } from "react"
import { ScrollButton } from "./scroll_button"
import { useRouter } from "next/router"
import { messageProps } from "@/services/type"
import { toast, ToastContainer } from 'react-toastify';

import "react-toastify/dist/ReactToastify.css";

const MessageBox = styled("div")(({ theme }) => ({
  position: "relative",
  backgroundImage: `url("/image.svg"), linear-gradient(${theme.palette.violet.dark}, ${theme.palette.dark})`,
  backgroundRepeat: "no-repeat",
  backgroundSize: "cover",
  display: "flex",
  flexDirection: "column",
  alignItems: "center",
  width: "100%",
  maxWidth: "400px",
  padding: "0 12px 12px",
  height: "calc(100% - 121px)",
  overflow: "auto",
  "&::-webkit-scrollbar": {
    width: "2px",
  },

  "&::-webkit-scrollbar-thumb": {
    backgroundColor: "#CCCCCC",
    borderRadius: "20px",
  },
}))
const ToastContainerBox = styled(ToastContainer)(({ theme }) => ({
  top: '0!important',
  right: '0!important',
  width: '260px!important',
}))


const messageData: messageProps = {
  text: "لورم ایپسوم متن ساختگی با تولید سادگی نامفهوم از صنعت چاپ و با استفاده از طراحان گرافیک است چاپگرها و متون بلکه روزنامه و مجله در ستون و سطرآنچنان که لازم استلورم ایپسوم متن ساختگی با تولید سادگی نامفهوم از صنعت چاپ و با استفاده از طراحان گرافیک است چاپگرها و متون بلکه روزنامه و مجله در ستون و سطرآنچنان که لازم است.",
  visibilityCount: 1,
  favoriteCount: 49,
  time: new Date("December 19, 2023 16:24:00 GMT+0330 (Iran Standard Time)"),
}

export const MessageBoxSection = () => {
  const router = useRouter()
  const value = router.query.slug

  const [message, setMessage] = useState<messageProps[]>([messageData])

  const [isMark, setIsMark] = useState(false)
  const boxRef = useRef<any>(null)

  const addMassage = (text: string) => {
    const newMessage: messageProps[] = [
      ...message,
      {
        text,
        visibilityCount: 1,
        favoriteCount: 0,
        time: new Date(),
      },
    ]
    localStorage.setItem(`chatList${value}`, JSON.stringify(newMessage))

    let messages = localStorage.getItem(`chatList${value}`) as string

    setMessage(JSON.parse(messages))
  }

  useEffect(() => {
    let messages = localStorage.getItem(`chatList${value}`) as string
    if (!messages) return
    setMessage(JSON.parse(messages))
  }, [value])

  useEffect(() => {
    boxRef?.current?.scrollTo(0, boxRef.current?.scrollHeight)
  }, [message])

  const notify = () => {
    setIsMark(!isMark)
    if (isMark) return
    else {
      toast.success('پیام مورد نظر سیو شد', {
        position: "top-right",
        autoClose: 5000,
        hideProgressBar: false,
        closeOnClick: true,
        pauseOnHover: true,
        draggable: true,
        progress: undefined,
        theme: "dark",
      });
    }

  }
  return (
    <>
      <ToastContainerBox style={{ position: 'absolute' }} />

      <MessageBox ref={boxRef}>
        {message.map((item, index) => {
          return (
            <MessageCard
              key={index}
              text={item.text}
              favoriteCount={item.favoriteCount}
              visibilityCount={item.visibilityCount}
              time={item.time}
              saveMessageFUN={notify}
            />
          )
        })}
      </MessageBox>
      <ScrollButton useRef={boxRef} />

      <AddMessage addMessage={addMassage} />
    </>
  )
}
