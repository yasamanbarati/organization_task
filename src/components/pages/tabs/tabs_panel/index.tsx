import { HeaderCard } from "@/components/card/header_card";
import { Box } from "@mui/material";
import Link from "next/link";

interface TabPanelProps {
    index: number;
    value: number;
    avatar: string;
    subheader: string;
    title: string;
    messageCount: number
}

export const TabsPanel = ({ value, index, avatar, subheader, title, messageCount }: TabPanelProps) => {

    return (
        <div
            role="tabpanel"
            hidden={value !== index}
            id={`vertical-tabpanel-${index}`}
            aria-labelledby={`vertical-tab-${index}`}
            style={{ marginTop: "24px" }}
        >
            {value === index && (
                <Link href="/[slug]" as={`/${value}`}>
                    <Box sx={{ m: 2 }}>
                        <HeaderCard
                            key={value}
                            avatar={avatar}
                            title={title}
                            subheader={subheader}
                            messageCount={messageCount} />
                    </Box>
                </Link>
            )}
        </div >
    );
}
