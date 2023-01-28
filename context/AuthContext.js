import { NEXT_URL } from "@/config/index";
import { useRouter } from "next/router";
import { createContext, useEffect, useState } from "react";

const AuthContext = createContext();

export const AuthProvider = ({ children }) => {
  const [user, setUser] = useState();
  // const [user, setUser] = useState({ user: "rafy" });
  const [error, setError] = useState(null);
  const router = useRouter();

  useEffect(() => checkUserLoggedIn);
  // useEffect(() => {
  //   checkUserLoggedIn();
  // }, [checkUserLoggedIn]);

  // Register User
  const register = async (user) => {
    console.log(user);
  };
  // Login User // TODO 루프 에러 구간
  const login = async ({ email: identifier, password }) => {
    // strapi에서는 identifier로 받아온다.
    // console.log({ identifier, password });
    const res = await fetch(`${NEXT_URL}/api/login`, {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify({
        identifier,
        password,
      }),
    });
    const data = await res.json();
    // console.log("data in authcontext", data);

    if (res.ok) {
      setUser(data.user);
      // console.log(data.user);
      router.push("/account/dashboard");
    } else {
      setError(data.error);
    }
  };

  // Logout User
  const logout = async (user) => {
    const res = await fetch(`${NEXT_URL}/api/logout`, {
      method: "POST",
    });

    if (res.ok) {
      setUser(null);
      router.push("/");
    }
  };

  //Check if user is logged in
  const checkUserLoggedIn = async (user) => {
    const res = await fetch(`${NEXT_URL}/api/user`);
    const data = await res.json();

    if (res.ok) {
      setUser(data.user);
    } else {
      setUser(null);
    }
  };

  return (
    <AuthContext.Provider value={{ user, error, register, login, logout }}>
      {children}
    </AuthContext.Provider>
  );
};

export default AuthContext;
