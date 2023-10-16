import { useState, useContext, createContext, useEffect } from "react";
const AuthContext = createContext()

export const useAuthContext = () => {
  return useContext(AuthContext)
}

export const AuthProvider = ({ children }) => {
  const [user, setUser] = useState(() => {
    const storedUser = localStorage.getItem("user")
    return storedUser ? JSON.parse(storedUser) : {};
  })

  useEffect(() => {
    localStorage.setItem("user", JSON.stringify(user));
  }, [user])

  const login = (user) => setUser(user)
  const logout = () => {
    setUser(null)
    localStorage.removeItem("user")
  }
  return (
    <AuthContext.Provider value={{ user, login, logout }}>
      {children}
    </AuthContext.Provider>
  );
}; 
