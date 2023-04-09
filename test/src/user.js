export function User(props){
  
      if (props.status)
    return (<h1 className="warning"> {props.name}  : {props.age}</h1> )
    else
    return (<h1 className="success"> {props.name}  : {props.age}</h1> )

}
