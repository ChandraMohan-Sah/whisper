import { useState } from "react";
import { useSection3Selection } from "../../../context/Section3SelectionContext";
import { Link } from "react-router-dom";

export const PeopleYouMayKnow = () => {

  const users = [ 
    { name: "Nishant Sah", phone: "+977 9861625334" },
    { name: "Suman Rai", phone: "+977 9841234567" },
    { name: "Alina Thapa", phone: "+977 9808765432" },
    { name: "Bibek Shrestha", phone: "+977 9812345678" },
    { name: "Ritu KC", phone: "+977 9861000000" },
  ];

  
  const { setActiveContent } = useSection3Selection();
  const [activeUserIndex, setActiveUserIndex] = useState(null);

  const handleProfileClick = (index) => {
    setActiveContent("profile");
    setActiveUserIndex(index);
  };

  const handleMessageClick = (index) => {
    setActiveContent("messages");
    setActiveUserIndex(index);
  };
 
  return (
    <div className="chat-item">
      {users.map((user, index) => (
        <div
          className={`chat-list ${activeUserIndex === index ? "active" : ""}`}
          key={index}
        >
          <div
            className="chat-profile"
            onClick={() => handleProfileClick(index)}
          >
            <img
              src="https://images.unsplash.com/photo-1519085360753-af0119f7cbe7?q=80&w=1887&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D"
              alt="Profile"
            />
          </div>

          <div
            className="chat-content"
            onClick={() => handleProfileClick(index)}
          >
            <div >
              <span >{user.name}</span>
            </div>
            <div className="chat-message">
              <span className="chat-text">{user.phone}</span>
            </div>
          </div>

          <div className="send-message">
            <Link to="/">
              <button onClick={() => handleMessageClick(index)}>
                <i className="ri-chat-3-fill"></i>
              </button>
            </Link>
          </div>
        </div>
      ))}
    </div>
  );
};
