import "./oneToOneChat.css";
import { useSection3Selection } from "../../../../context/Section3SelectionContext";
import { useState } from "react";

const dummyChats = [
  { name: "Nishant Sah", message: "Exam aairaxa padhai ni garr fu...", time: "07:45" },
  { name: "Pratik Sharma", message: "Yo weekend k garxau?", time: "09:15" },
  { name: "Aayush K.C.", message: "Ma notes pathaidinchu!", time: "10:22" },
  { name: "Ritika Joshi", message: "Kal class chhaina ni?", time: "11:07" },
  { name: "Bibek Bhandari", message: "Ho feri group work xa!", time: "12:50" },
  { name: "Sushmita Lama", message: "Form bharna birsiyau ta!", time: "13:30" },
  { name: "Sanjay Karki", message: "Ma class gayera awchu!", time: "14:15" },
  { name: "Nirajan Rai", message: "Yo assignment deadline kahile ho?", time: "15:05" },
  { name: "Asmita Shrestha", message: "Timi le photo pathau hai!", time: "16:40" },
  { name: "Ramesh Thapa", message: "Maile notice herera bhanchu", time: "17:55" },
  { name: "Sanjay Karki", message: "Ma class gayera awchu!", time: "14:15" },
  { name: "Nirajan Rai", message: "Yo assignment deadline kahile ho?", time: "15:05" },
  { name: "Asmita Shrestha", message: "Timi le photo pathau hai!", time: "16:40" },
  { name: "Ramesh Thapa", message: "Maile notice herera bhanchu", time: "17:55" },
];



export const OneToOneChat = () => {
  const { setActiveContent } = useSection3Selection();
  const [activeChatIndex, setActiveChatIndex] = useState(null); // local active chat

  const handleClick = (index) => {
    setActiveContent("messages");
    setActiveChatIndex(index);
  };

  return (
    <>
      {dummyChats.map((chat, index) => (
        <div
          className={`chat-list ${activeChatIndex === index ? "active" : ""}`}
          key={index}
          onClick={() => handleClick(index)}
        >
          <div className="chat-profile">
            <img
              src="https://images.unsplash.com/photo-1496345875659-11f7dd282d1d?q=80&w=2070&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D"
              alt="Profile"
            />
          </div>

          <div className="chat-content">
            <div className="chat-header-item">
              <span className="chat-name">{chat.name}</span>
              <div className="chat-header-end">
                <span className="chat-time">{chat.time}</span>
              </div>
            </div>

            <div className="chat-message">
              <span className="chat-ticks-seen">✔✔</span>
              <span className="chat-text">{chat.message}</span>
            </div>
          </div>
        </div>
      ))}
    </>
  );
};


