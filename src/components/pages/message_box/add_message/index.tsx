import { AttachmentOutlined, CircleOutlined, KeyboardVoiceOutlined } from "@mui/icons-material";
import { IconButton, InputBase, Paper, styled } from "@mui/material"
import { useState } from "react";

interface AddMessageProps {
    addMessage: (value: string) => void
}

const FormBox = styled(Paper)(({ theme }) => ({
    position: "absolute",
    bottom: 0,
    height: '65px',
    background: theme.palette.violet.dark,
    display: 'flex',
    justifyContent: 'space-between',
    alignItems: 'center',
    padding: '12px',
    width: '100%',
    "& .MuiButtonBase-root": {
        color: theme.palette.white,
        "& .MuiSvgIcon-root": {
            fontSize: '1.4rem',
        }
    }
}))
const InputBaseBox = styled(InputBase)(({ theme }) => ({
    background: theme.palette.brightestViolet,
    padding: '6px 12px',
    borderRadius: '6px',
    "& input": {
        color: theme.palette.white,
        fontSize: '0.87rem',
        fontWeight: '500',
        lineHeight: '15px',
        letterSpacing: '0',
        '& ::placeholder': {
            textOverflow: 'ellipsis !important',
            color: theme.palette.white,
        }
    }
}))

export const AddMessage = () => {

    const [value, setvalue] = useState("")

    const handelSubmit = (event: React.FormEvent<HTMLFormElement>) => {
        event.preventDefault();
        if (!value) return;
        setvalue("");
    };

    return (
        <FormBox>
            <IconButton aria-label="microphone">
                <KeyboardVoiceOutlined />
            </IconButton>
            <IconButton type="button" aria-label="assets" sx={{ transform: "rotateZ(124deg)" }}>
                <AttachmentOutlined />
            </IconButton>
            <InputBaseBox
                sx={{ ml: 1, flex: 1 }}
                placeholder="پیام..."
                inputProps={{ 'aria-label': 'send message' }}
            />
            <IconButton aria-label="emoji">
                <CircleOutlined />
            </IconButton>
        </FormBox>
    )
}
