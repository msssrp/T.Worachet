<<<<<<< HEAD
import { Routes , Route , BrowserRouter} from "react-router-dom"
import Cards from "./components/Cards"
import NewPlayer from "./components/NewPlayer"
import EditPlayer from "./components/EditPlayer"
function App() {
 

  return (
    <>
    <BrowserRouter>
     <Routes>
      <Route path='/' element={<Cards/>}/>
      <Route path='/createPlayer' element={<NewPlayer/>}/>
      <Route path='/edit/:id' element={<EditPlayer/>}/>
     </Routes>
     </BrowserRouter>
=======
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
>>>>>>> 70c360bab8d7c244e6b9894335b3a9bb68e0f6cd
    </>
  );
}

export default App;
