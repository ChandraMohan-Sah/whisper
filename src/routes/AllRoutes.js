
import { Routes, Route } from "react-router-dom";
import {
  PageExploreUserSection,
  PageUpdateProfile,
  PageChats,
} from "../pages";

export const AllRoutes = () => {
  return (
    <Routes>
      <Route path="/" element={<PageChats />} />
      <Route path="/exploreUser" element={<PageExploreUserSection />} />
      <Route path="/updateProfile" element={<PageUpdateProfile />} />
    </Routes>
  );
};



 
















