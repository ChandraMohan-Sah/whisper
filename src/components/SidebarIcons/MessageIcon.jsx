
import { Link } from "react-router-dom"; 
import { useSection3Selection } from "../../context/Section3SelectionContext";

export const MessageIcon = () => {
  const { setActiveContent, activeContent } = useSection3Selection();

  const handleClick = () => setActiveContent("messages");

  return (
    <div className="sidebar">
      <Link to="/">
        <span
          onClick={handleClick}
          className={activeContent === "messages" ? "active" : ""}
        >
          <i className="ri-chat-1-fill"></i>
        </span>
      </Link>
    </div>
  );
};


