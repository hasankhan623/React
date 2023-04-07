import logo from './logo.svg';
import './App.css';

function App() {
  const user1 = () => { return <h1> Mahdi Hasankhan</h1>}
  const age=30;
  const users =[ 
    {name:"mohammad", age: 42},
    {name :"mahdi", age :33} ,
    {name :"hasankhan", age:444}]
  return (
   
    <div>
      {users.map((value , index)=>{
        return <User name={value.name} age={value.age} /> 
      })}
        </div>  
    
  );
}

export default App;

const User = (props) => {
  return (<h2>{props.name}: {props.age}</h2>);
};