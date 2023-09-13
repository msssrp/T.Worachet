import Navbar from "./components/Navbar";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import "bootstrap/dist/css/bootstrap.min.css";
import Add from "./pages/Add";
import Restaurants from "./pages/Restaurants";
import Search from "./pages/Search";
import Update from "./pages/Update";

function App() {
  return (
    <BrowserRouter>
      <Navbar />
      <div className="App">
        <Routes>
          <Route path="/" Component={Restaurants} />
          <Route path="/add" Component={Add} />
          <Route path="/search" Component={Search} />
          <Route path="/update/:id" Component={Update} />
        </Routes>
      </div>
    </BrowserRouter>
  );
}

export default App;
