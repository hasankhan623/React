import logo from './logo.svg';
import './App.css';

function App() {
  const user1 = () => { return <h1> Mahdi Hasankhan</h1>}
  
  return (
   
    <div>
      <h1> test1 component</h1>
        {user1()}
        {job()}
       

    </div>
  );
}

//const getname = () =>{ return " hasankhan"}
//props
const props = {
name : 'Mohammad',
Age : 42

};

//component
const user1 = (props) => { 
  
  return  (
            <div>
            <h1> {props.Age}</h1> 
            <h2>{props.name}</h2>
           </div>
          )
 };
 const job = () =>{
  return(
    <div>;
        <h1> job name is " computer" </h1>
        <h2>2</h2>
        </div>);
      };
    
export default App;
