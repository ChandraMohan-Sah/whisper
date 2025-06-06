import { UpdateProfile } from "../components/UpdateProfile/UpdateProfile";
import { useTitle } from "../hooks/useTitle";

export const PageUpdateProfile = () => {
  useTitle("Update Profile")
  return (
    <div>
      <UpdateProfile />    
    </div>
  )
};




