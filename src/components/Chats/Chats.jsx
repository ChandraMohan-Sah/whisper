import "./chats.css"
import { ChatsHeader } from "./ChatsDrill/ChatsHeader/ChatsHeader";
import { OneToOneChat } from "./ChatsDrill/OneToOneChat/OneToOneChat";


export const Chats = () => {


  return (
    <>
      <div className="chat-header">
        <div className="header">
          <p>Whisper</p>
        </div><br /><hr />

        <ChatsHeader />
      </div>


      <div className="chat-item">
        <OneToOneChat />
      </div>
    </>
  )
};



