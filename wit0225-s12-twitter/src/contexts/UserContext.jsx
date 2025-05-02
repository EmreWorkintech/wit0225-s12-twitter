import { createContext } from "react";
import { useLocalStorage } from "../hooks/useLocalStorage";

export const userContext = createContext();

export function UserContextProvider({ children }) {
  const [user, setUser] = useLocalStorage("user", null);
  const [lang, setLang] = useLocalStorage("lang", "TR");
  const [theme, setTheme] = useLocalStorage("theme", "light");

  const token = localStorage.getItem("token");

  const isLoggedIn = token ? true : false;

  function login(user) {
    setUser(user);
    localStorage.setItem("token", user.token);
  }

  function logout() {
    setUser(null);
    localStorage.removeItem("token");
  }

  function toggleTheme() {
    setTheme(theme === "light" ? "dark" : "light");
  }

  return (
    <userContext.Provider
      value={{
        user,
        lang,
        setLang,
        toggleTheme,
        theme,
        isLoggedIn,
        login,
        logout,
      }}
    >
      {children}
    </userContext.Provider>
  );
}
