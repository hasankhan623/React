import logo from './logo.svg';
import './App.css';
import {useState} from "react";

function App() {

 const[courseList,changeText]=useState([]);

const [insertText,settext]=useState("");

const settext2=(event)=>{
  settext(event.target.value)

}

const showText=()=>{
  changeText(insertText)

const newcourseList=[...courseList,insertText]
changeText(newcourseList)

};

const deletecourse=(namecours)=>{
const newdeletcours=courseList.filter(

(courses)=>{

  if (courses===namecours)return false
  else return true
}

)
changeText(newdeletcours)
};
  return (
    
  <div>

   
<input type="text" onChange={settext2}></input>
<button  onClick={showText}>Insert</button>
{courseList.map((courses)=>{
return (
<div>
<h1>{courses}</h1> 
<button onClick={()=>deletecourse(courses)}>Delete</button>
</div>
)

})}

  </div>
  );
}

export default App;
