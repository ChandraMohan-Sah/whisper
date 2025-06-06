import "./sidebar.css";
import { MessageIcon } from "../SidebarIcons/MessageIcon";
import { ExploreUsers } from "../SidebarIcons/ExploreUsers";
import { Notification  } from "../SidebarIcons/Notification";
import { Logout } from "../SidebarIcons/Logout";
import { ProfilePic } from "../SidebarIcons/ProfilePic";



const Sidebar = () => {
    return (
        <>
            <div className="top">
                <MessageIcon />
                <ExploreUsers />
                <Notification />
            </div>

            <div className="bottom">
                <Logout />
                <ProfilePic />
            </div>
        </>
    );
};

export default Sidebar;

 


  