import logo from "./logo.svg";
import "./App.css";
import { useState } from "react";

function App() {
  const [cours, addCours] = useState([]);
  const [classList, insclass] = useState("t");

  const textChange = (event) => {
    insclass(event.target.value);
  };
  const addcourse = () => {
    const coursenew = {
      id: cours.length === 0 ? 1 : cours[cours.length - 1].id + 1,
      courceName: classList,
    };

    const newarr = [...cours, coursenew];
    addCours(newarr);
  };

  const deletCours = (coursId) => {
    const newdeletcours = cours.filter((cours) => {
      if (coursId === cours.id) return false;
      else return true;
    });
    addCours(newdeletcours);
  };
  return (
    <div>
      <input type="text" onChange={textChange}></input>
      <button onClick={addcourse}>Insert</button>

      <h2>
        {cours.map((cours, index) => {
          return (
            <div>
              <h1>const name='ee';</h1>
              <p>
                <h3>{cours.courceName} </h3>
                <button onClick={() => deletCours(cours.id)}>Delete</button>
              </p>
            </div>
          );
        })}
      </h2>
    </div>
  );
}
export default App;
