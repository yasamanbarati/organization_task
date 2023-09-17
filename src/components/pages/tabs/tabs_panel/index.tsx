import { HeaderCard } from "@/components/card/header_card";
import { Box, styled } from "@mui/material";
import Link from "next/link";

interface TabPanelProps {
    index: number;
    value: number;
    avatar: string;
    subheader: string;
    title: string;
    messageCount: number
}

const LinkBox = styled(Link)(() => ({
    marginTop: "24px",
    padding: '0 12px',
    width: "100%",
    maxWidth: "400px",
    display: 'block'
}))

export const TabsPanel = ({ value, index, avatar, subheader, title, messageCount }: TabPanelProps) => {

    const exploreLink = `/chat/${value}`

    return (
        <LinkBox
            href={exploreLink}
            role="tabpanel"
            hidden={value !== index}
            id={`vertical-tabpanel-${index}`}
            aria-labelledby={`vertical-tab-${index}`}
        >
            {value === index && (
                <HeaderCard
                    key={value}
                    avatar={avatar}
                    title={title}
                    subheader={subheader}
                    messageCount={messageCount} />
            )}
        </LinkBox >
    );
}
