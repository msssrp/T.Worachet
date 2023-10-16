import { BrowserRouter, Route, Routes } from "react-router-dom";
import "bootstrap/dist/css/bootstrap.min.css";
import Add from "./pages/Add";
import Restaurants from "./pages/Restaurants";
import Update from "./pages/Update";
import { SearchProvider } from "./hooks/SearchContext";
import SignUp from "./pages/SignUp";
import SignIn from "./pages/SignIn";
import { AuthProvider } from "./hooks/AuthContext";
import Notallow from "./pages/Notallow";
import AdminRoute from "./hooks/auth/AdminRoute";
import Profile from "./pages/Profile";
function App() {
  return (
    <SearchProvider>
      <AuthProvider>
        <BrowserRouter>
          <div className="App">
            <Routes>
              <Route path="/" Component={Restaurants} />
              <Route path="/add" element={<AdminRoute>{<Add />}</AdminRoute>} />``
              <Route path="/update/:id" element={<AdminRoute>{<Update />}</AdminRoute>} />
              <Route path="/signUp" Component={SignUp} />
              <Route path="/signIn" Component={SignIn} />
              <Route path="/notallow" Component={Notallow} />
              <Route path="/profile" Component={Profile} />
            </Routes>
          </div>
        </BrowserRouter>
      </AuthProvider>
    </SearchProvider>
  );
}


export default App;
