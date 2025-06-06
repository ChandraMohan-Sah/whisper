
import "./section3.css";
import { useSection3Selection } from "../context/Section3SelectionContext";

import { BlankSection } from "../components/layout/BlankSection";
import { UserProfileSection } from "../components/UserProfile/UserProfileSection";
import { MessageSection } from "../components/MessageUsers/MessageSection";


export const Section3 = () => {
  const { activeContent } = useSection3Selection();

  const contentMap = {
    welcome: <BlankSection />,
    profile: <UserProfileSection />,
    messages: <MessageSection />,
  };

  return (
    <div className="section3">
      {contentMap[activeContent]}
    </div>
  );
};



























