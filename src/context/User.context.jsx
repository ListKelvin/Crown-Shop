import { createContext, useState, useEffect } from "react";
import {
  onAuthStateChangedListener,
  creatUserDocumentFromAuth,
} from "../utils/firebase/firebase.utils";
export const UserContext = createContext({
  currentUser: null,
  setCurrentUser: () => null,
});

export const UserProvider = ({ children }) => {
  const [currentUser, setCurrentUser] = useState(null);

  useEffect(() => {
    const unSubcribe = onAuthStateChangedListener((user) => {
      if (user) {
        creatUserDocumentFromAuth(user);
      }
      setCurrentUser(user);
    });
    return unSubcribe;
  }, []);
  const value = {
    currentUser,
    setCurrentUser,
  };
  return <UserContext.Provider value={value}> {children}</UserContext.Provider>;
};
