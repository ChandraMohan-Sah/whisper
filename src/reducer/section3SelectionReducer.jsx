export const section3SelectionReducer = (state, action) => {
    const { type, payload } = action;
  
    switch (type) {
      case "SET_ACTIVE_CONTENT":
        return {
          ...state,
          activeContent: payload.content
        };
      default:
        throw new Error(`No case for type ${type} found in section3SelectionReducer`);
    }
  };