
import { Link } from "react-router-dom";
import { useSection3Selection } from "../../context/Section3SelectionContext";

export const ExploreUsers = () => {
    const { setActiveContent, activeContent } = useSection3Selection();
  
    const handleClick = () => setActiveContent("welcome");
  
    return (
      <div className="sidebar">
        <Link to="/exploreUser">
          <span
            onClick={handleClick}
            className={activeContent === "welcome" ? "active" : ""}
          >
            <i className="ri-user-add-fill"></i>
          </span>
        </Link>
      </div>
    );
  };
  

