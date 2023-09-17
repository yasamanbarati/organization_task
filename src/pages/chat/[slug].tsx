import { NavbarPrimarySection } from "@/components/navbar/navbar_primary"
import { MessageBoxSection } from "@/components/pages/message_box"

const ChatPage = () => {
    return (
        <>
            <NavbarPrimarySection Mode={false} />
            <MessageBoxSection />
        </>
    )
}
export default ChatPage