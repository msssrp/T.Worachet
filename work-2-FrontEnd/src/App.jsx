import { Routes, Route, BrowserRouter } from "react-router-dom";
import Cards from "./components/Cards";
import NewRestaurant from "./components/NewRestaurant";
import EditRestaurant from "./components/EditRestaurant";
import { SearchProvider } from "./SearchContext";
function App() {
  return (
    <>
      <SearchProvider>
        <BrowserRouter>
          <Routes>
            <Route path="/" element={<Cards />} />
            <Route path="/createPlayer" element={<NewRestaurant />} />
            <Route path="/edit/:id" element={<EditRestaurant />} />
          </Routes>
        </BrowserRouter>
      </SearchProvider>
    </>
  );
}

export default App;
