import Navbar from "./components/Navbar";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import "bootstrap/dist/css/bootstrap.min.css";
import Add from "./pages/Add";
import Restaurants from "./pages/Restaurants";
import Update from "./pages/Update";
import { SearchProvider } from "./hooks/SearchContext";
import SignUp from "./pages/SignUp";
import SignIn from "./pages/SignIn";
function App() {
  return (
    <SearchProvider>
      <BrowserRouter>
        <div className="App">
          <Routes>
            <Route path="/" Component={Restaurants} />
            <Route path="/add" Component={Add} />``
            <Route path="/update/:id" Component={Update} />
            <Route path="/signUp" Component={SignUp} />
            <Route path="/signIn" Component={SignIn} />
          </Routes>
        </div>
      </BrowserRouter>
    </SearchProvider>
  );
}

export default App;
