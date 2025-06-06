import { Link  } from "react-router-dom"; 
import { useSection3Selection } from "../../context/Section3SelectionContext";

export const Logout = () => {
  const { setActiveContent, activeContent } = useSection3Selection();

  const handleClick = () => setActiveContent("logout");

  return (
    <div className="sidebar">
      <Link to="/logout">
        <span
          onClick={handleClick}
          className={activeContent === "logout" ? "active" : ""}
        >
          <i className="ri-logout-circle-line"></i>
        </span>
      </Link>
    </div>
  );
};
