import logo from './logo.svg';
import './App.css';
import {useState} from "react";

function App() {
const[cours,addCours]=useState([]);
const [classList,insclass]=useState("t");

const textChange=(event)=>{
  insclass(event.target.value)
}
const addcourse=()=>{
  const newarr=[...cours,classList]
addCours(newarr)
}

const deletCours=(coursesName1)=>{
  const newdeletcours=cours.filter(
    (cours)=>{
      if(cours===coursesName1) return false
        else return true
    }
  )
  addCours(newdeletcours)
}
  return (
   <div>
    <input type='text' onChange={textChange}></input>
    <button onClick={addcourse}>Insert</button>
    
    <h2>{cours.map((coursesName)=>{
      return(

         <div>
             <p>
                <h3>{coursesName}</h3>
                <button onClick={()=>deletCours(coursesName)}>Delete</button>
             </p>
         </div>
      )
    })

    }</h2>
</div>

)
}
export default App;
