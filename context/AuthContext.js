import { createContext, useState } from "react";

const AuthContext = createContext();

export const AuthProvider = ({ children }) => {
  const [user, setUser] = useState();
  // const [user, setUser] = useState({ user: "rafy" });
  const [error, setError] = useState(null);

  // Register User
  const register = async (user) => {
    console.log(user);
  };
  // Login User
  const login = async ({ email: identifier, password }) => {
    // strapi에서는 identifier로 받아온다.
    console.log({ identifier, password });
  };
  // Logout User
  const logout = async ({ email: identifier, password }) => {
    console.log({ identifier, password });
  };

  //Check if user is logged in
  const checkUserLoggedIn = async (user) => {
    console.log("Check");
  };

  return (
    <AuthContext.Provider value={{ user, error, register, login, logout }}>
      {children}
    </AuthContext.Provider>
  );
};

export default AuthContext;
