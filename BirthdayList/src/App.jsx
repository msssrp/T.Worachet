import { useState } from "react";
import "./App.css";
import data from "./assets/data";
import List from "./components/List";

function App() {
  const [people, setPeople] = useState(data);

  const clearData = () => {
    setPeople([]);
  };

  return (
    <>
      <div className="container">
        <main>
          <h3>{people.length} birthday lists</h3>
          <List people={people} />
          <button onClick={clearData}>Clear Data</button>
        </main>
      </div>
    </>
  );
}

export default App;
