import "./updateProfile.css"
import { ProfilePic } from "./UpdateProfileDrill/ProfilePic/ProfilePic";
import { EditProfileDetail } from "./UpdateProfileDrill/EditProfile/EditProfileDetail";

export const UpdateProfile = () => {
  return (
    <div className="update-profile">

        <div className="fix-top">
            <div className="header">
                <p>Update Profile</p>
            </div> <br /><hr />
        </div>

        <ProfilePic />
        <EditProfileDetail />

    </div>
  )
};

