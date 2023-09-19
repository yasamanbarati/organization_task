import { HeaderCard } from "@/components/card/header_card"
import { messageProps, TabCardProps } from "@/services/type"
import { styled } from "@mui/material"
import Link from "next/link"
import { useEffect, useState } from "react"

const LinkBox = styled(Link)(() => ({
    marginTop: "24px",
    padding: "0 12px",
    width: "100%",
    maxWidth: "400px",
    display: "block",
}))

const defaultMessage =
    "لورم ایپسوم متن ساختگی با تولید سادگی نامفهوم از صنعت چاپ و با استفاده از طراحان گرافیک است چاپگرها و متون بلکه روزنامه و مجله در ستون و سطرآنچنان که لازم استلورم ایپسوم متن ساختگی با تولید سادگی نامفهوم از صنعت چاپ و با استفاده از طراحان گرافیک است چاپگرها و متون بلکه روزنامه و مجله در ستون و سطرآنچنان که لازم است."

export const TabCard = ({
    value,
    avatar,
    title,
}: TabCardProps) => {
    const [lastMessage, setlaseMessage] = useState<messageProps>()
    const [messageCount, setMessageCount] = useState<number>(1)

    const exploreLink = `/chat/${value}`

    useEffect(() => {
        const messages = JSON.parse(
            localStorage.getItem(`chatList${value}`) as string
        )
        if (messages) {
            setlaseMessage(messages[messages.length - 1])
            setMessageCount(messages.length)
        }

    }, [value])

    return (
        <LinkBox
            href={exploreLink}>
            <HeaderCard
                key={value}
                avatar={avatar}
                title={title}
                subheader={lastMessage?.text ?? defaultMessage}
                time={lastMessage?.time as string ?? '2023-12-16T23:54:00.000Z'}
                messageCount={messageCount}
            />
        </LinkBox>
    )
}
