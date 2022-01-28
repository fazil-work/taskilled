import { createContext, useLayoutEffect, useState } from "react";

export const AppContext = createContext();

export const AppContextProvider = (props) => {

  let [ user, setUser ] = useState(localStorage.getItem("taskolluser"));
  const sidebarPagesArr = ["/settings", "/assignments"];
  const noNavbarPagesArr = ["/create-assignment", "/week-details"];
  const noFooterPagesArr = ["/create-assignment", "/week-details"];
  
  const contextValues = { 
    user,
    setUser,
    sidebarPagesArr,
    noNavbarPagesArr,
    noFooterPagesArr
  };

  useLayoutEffect(() => {
    localStorage.getItem("taskolluser") === "true" ? setUser(true) : setUser(false);
  },[])

  return (
    <AppContext.Provider value={contextValues}>
      {props.children}
    </AppContext.Provider>
  );
}