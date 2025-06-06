import { Link } from "react-router-dom"; 
import { useSection3Selection } from "../../context/Section3SelectionContext";

export const ProfilePic = () => {

  const { setActiveContent } = useSection3Selection();
  const handleWelcomeClick = () => {
      setActiveContent("profile"); // Updates global state
  };


  return (
      <div className="sidebar">
        <Link to="/updateProfile" >
          <img
            src="https://images.unsplash.com/photo-1519058082700-08a0b56da9b4?q=80&w=1887&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D"
            alt=" "
            onClick={handleWelcomeClick}
            style={{ cursor: "pointer" }} // Optional: show pointer cursor on hover
          />
        </Link>
      </div>
    );
  };







