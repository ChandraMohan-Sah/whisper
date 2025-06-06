
import { Chats } from "../components/Chats/Chats";
import { useTitle } from "../hooks/useTitle";

export const PageChats = () => {
  useTitle("Chats")
  return (
    <div >
      <Chats />    
    </div>
  )
};

