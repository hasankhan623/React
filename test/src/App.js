import logo from './logo.svg';
import { User } from './user';
import './App.css';
import React,{useState} from 'react';


function App() {


const [salary,setSalary] =useState(1000)

  const users=[
    {name:'ali',age:22,status: false},
    {name:'hosain',age:33,status:true},
    {name:'lee',age:42,status:false}
              ]



const [age,setAge]=useState(0);
const handelAge=()=>{
  setAge(age-1);
}

const [count,setCount]=useState(0);
const handelClick=()=>{

  setCount(count+1);
}
const[inputvalue,setValue]=useState("Insert text")

const handelinput=(event)=>{
setValue(event.target.value)
}
 const handelWarning=(event)=>{
  setMsg(event.target.value)
 }

const [textMsg,setMsg]=useState("text massage")

const showHied=()=>{
  setStatus(!status)

}


const[status,setStatus]=useState(true)

const [textcolor,setColorText]=useState("blue")


return(
  <div>
{status && <h1 className='App'>{textMsg} </h1>}
<h1  style={{color : textcolor}}>{inputvalue}</h1>
<h1>{count}</h1>
<h1>{age}</h1>
<h1>{salary}</h1>
{users.map( (value,index) => {
return (
  //<p key={index}> {value.name}: {value.age}</p>
  <User key={index} status={value.status}  name={value.name}  age={value.age} />
) 

})}
{/* add state function */} 
<button onClick={handelClick} > Increase the number</button>
<button onClick={handelAge}>Decrease the number</button>
<button>Status</button>
<br></br>
<button onClick ={()=>setSalary(salary+500)}>Salary</button>
<input type='text' onChange={handelinput} ></input>
<button onClick={()=>{setColorText(textcolor==="blue" ? "pink":"blue")}}>color</button>
<br></br>
<input type='text' className='warning' onChange={handelWarning}></input>
<button onClick={showHied}>show/hied</button>


</div>
)
}


export default App;




