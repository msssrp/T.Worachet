import { Navigate } from "react-router-dom"
const AdminRoute = ({ children }) => {
  const user = JSON.parse(localStorage.getItem("user"))
  if (!user) {
    return <Navigate to="/signin" />
  }
  if (!user.roles || !user.roles.some(role => role.name === "admin")) {
    return <Navigate to="/notallow" />
  }
  return children
}
export default AdminRoute
