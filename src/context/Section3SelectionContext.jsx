import { createContext, useContext, useReducer } from "react";
import { section3SelectionReducer } from "../reducer/section3SelectionReducer"; // Import the reducer

const initialState = {
  activeContent: "welcome"
};

const Section3SelectionContext = createContext(initialState);

export const Section3SelectionProvider = ({ children }) => {
  // Corrected: Pass the reducer function, not the context
  const [state, dispatch] = useReducer(section3SelectionReducer, initialState);

  const setActiveContent = (content) => {
    dispatch({
      type: "SET_ACTIVE_CONTENT",
      payload: { content }
    });
  };

  const value = {
    activeContent: state.activeContent,
    setActiveContent
  };

  return (
    <Section3SelectionContext.Provider value={value}>
      {children}
    </Section3SelectionContext.Provider>
  );
};

export const useSection3Selection = () => useContext(Section3SelectionContext);