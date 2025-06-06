import "./messageHeader.css"
import { useSection3Selection } from "../../../../context/Section3SelectionContext";

export const MessageHeader = () => {
    const { setActiveContent } = useSection3Selection();

    const handleProfileClick = (index) => {
        setActiveContent("profile");
    };


    const style = {
        color: "white"
    }

    return (
        <div className="msg-header">
            <div className="msg-profile-detail">
                <img src="https://images.unsplash.com/photo-1508341591423-4347099e1f19?q=80&w=1887&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D" alt="" />
                    <p style={style}>Nishant Chahar</p>
            </div>
            <div className="msg-profile-action">
                <i className="ri-phone-fill"></i>
                <i className="ri-video-on-fill"></i>
                <i className="ri-information-2-fill" onClick={handleProfileClick}></i>
            </div>
        </div>
    )
};

