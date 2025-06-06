import "./messageSection.css"
import { MessageHeader } from "./MessageUsersDrill/MessageHeader/MessageHeader";
import { MessageContainer } from "./MessageUsersDrill/MessageContainer/MessageContainer";
import { MessageFooter } from "./MessageUsersDrill/MessageFooter/MessageFooter";

export const MessageSection = () => {
    return (
        <div className="msg-section">
            <div className="main-section" >
                <div className="cover-profile-section">
                    <MessageHeader />
                    <MessageContainer />
                    <MessageFooter />
                </div>
            </div>
        </div>
    )
};


 