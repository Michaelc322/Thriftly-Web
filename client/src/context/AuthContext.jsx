import { createContext, useContext, useState } from "react";

const AuthContext = createContext();

export const AuthProvider = ({ children }) => {
  const [admin, setAdmin] = useState(() => {
    // load from localStorage if logged in before
    const saved = localStorage.getItem("admin");
    return saved ? JSON.parse(saved) : null;
  });

  const login = (email, password) => {
    // For demo: replace with your API call later
    if (email === "admin@thriftly.com" && password === "password123") {
      const user = { email };
      localStorage.setItem("admin", JSON.stringify(user));
      setAdmin(user);
      return true;
    }
    return false;
  };

  const logout = () => {
    localStorage.removeItem("admin");
    setAdmin(null);
  };

  return (
    <AuthContext.Provider value={{ admin, login, logout }}>
      {children}
    </AuthContext.Provider>
  );
};

export const useAuth = () => useContext(AuthContext);
