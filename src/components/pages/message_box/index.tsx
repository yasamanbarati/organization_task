import { styled } from '@mui/material'
import { MessageCard } from '@/components/card/message_card'
import { AddMessage } from './add_message'
import { useEffect, useRef, useState } from 'react'
import { ScrollButton } from './scroll_button'
import { useRouter } from 'next/router'
import { messageProps, messagePropsEmpty } from '@/services/type'
import { useAppSelector } from '@/setup/redux/react-hooks'

const MessageBox = styled('div')(({ theme }) => ({
  position: 'relative',
  backgroundImage: `url("/image.svg"), linear-gradient(${theme.palette.violet.dark}, ${theme.palette.dark})`,
  backgroundRepeat: 'no-repeat',
  backgroundSize: 'cover',
  display: 'flex',
  flexDirection: 'column',
  justifyContent: 'space-between',
  alignItems: 'center',
  width: '100%',
  maxWidth: '400px',
  padding: '0 12px 12px',
  height: 'calc(100% - 121px)',
  overflow: 'auto',
  '&::-webkit-scrollbar': {
    width: '2px',
  },

  '&::-webkit-scrollbar-thumb': {
    backgroundColor: '#CCCCCC',
    borderRadius: '20px',
  },
}))

const messageData: messageProps = {
  text: 'لورم ایپسوم متن ساختگی با تولید سادگی نامفهوم از صنعت چاپ و با استفاده از طراحان گرافیک است چاپگرها و متون بلکه روزنامه و مجله در ستون و سطرآنچنان که لازم استلورم ایپسوم متن ساختگی با تولید سادگی نامفهوم از صنعت چاپ و با استفاده از طراحان گرافیک است چاپگرها و متون بلکه روزنامه و مجله در ستون و سطرآنچنان که لازم است.',
  visibilityCount: 1,
  favoriteCount: 49,
  time: new Date('December 17, 2023 03:24:00 GMT+0330 (Iran Standard Time)'),
}

export const MessageBoxSection = () => {
  const router = useRouter()
  console.log(router.query.slug)
  const value = router.query.slug

  const [message, setMessage] = useState<messageProps[]>([messageData])
  const boxRef = useRef<any>(null)

  const addMassage = (text: string) => {
    const newMessage: messageProps[] = [
      ...message,
      {
        text,
        visibilityCount: 1,
        favoriteCount: 0,
        time: new Date()
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

  return (
    <>
      <MessageBox ref={boxRef}>
        <ScrollButton useRef={boxRef} />
        {message.map((item, index) => {
          return (
            <MessageCard
              key={index}
              text={item.text}
              favoriteCount={item.favoriteCount}
              visibilityCount={item.visibilityCount}
              time={item.time}
            />
          )
        })}
      </MessageBox>

      <AddMessage addMessage={addMassage} />
    </>
  )
}
