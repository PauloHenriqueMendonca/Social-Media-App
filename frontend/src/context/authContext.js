import { createContext, useEffect, useState } from "react";
import User from "../assetImages/user.png";


export const AuthContext = createContext();

export const AuthContextProvider = ({children}) => {
  const [currentUser, setCurrentUser] = useState(
    JSON.parse(localStorage.getItem("user")) || null
  );

  const login = () => {
    //TODO:
    setCurrentUser({
      id: 1,
      name: "Paulo Pereira",
      profilePic:{User},
    });
  };

  useEffect(() => {
    localStorage.setItem("user", JSON.stringify(currentUser));
  }, [currentUser]);

  return (
    <AuthContext.Provider value = {{ currentUser, login }}>
      {children}
    </AuthContext.Provider>
  );

};