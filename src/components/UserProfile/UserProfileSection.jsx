import "./userProfileSection.css"
import { ProfileCoverSection } from "./UserProfileDrill/ProfileCoverSection/ProfileCoverSection";
import { ProfileDetailSection } from "./UserProfileDrill/ProfileDetailSection/ProfileDetailSection"; 
import { ProfileFriendHeader } from "./UserProfileDrill/ProfileFriendHeader/ProfileFriendHeader";
import { ProfileSearchFriend } from "./UserProfileDrill/ProfileSearchFriend/ProfileSearchFriend";
import { ProfileFriendDetail } from "./UserProfileDrill/ProfileFriendDetail/ProfileFriendDetail";

export const UserProfileSection = () => {
    return (
        <div className="profile-section">
            <div className="profile-section-main">
                <ProfileCoverSection />
                <ProfileDetailSection />
                <ProfileFriendHeader />
                <ProfileSearchFriend />
                <ProfileFriendDetail />
            </div>
        </div>
    )
};






