import logo from './logo.svg';
import { User } from './user';
import './App.css';

function App() {

  const users=[
    {name:'ali',age:22,status: false},
    {name:'hosain',age:33,status:true},
    {name:'lee',age:42,status:false}
              ]
return(

<div>
{users.map( (value,index) => {
return (
  //<p key={index}> {value.name}: {value.age}</p>
  <User key={index} status={value.status}  name={value.name}  age={value.age} />
) 

})}

</div>
)
}


export default App;




