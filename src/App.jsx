/* eslint-disable react/jsx-key */
/* eslint-disable react/prop-types */
import { useState } from "react";
import "./App.css";

function App() {
  // const [count, setCount] = useState(0);

const [todos,setTodo] =useState([{
    title:"my name is Vivek",
    description:"this is my Description"
  }])
  function addTodo(){

    setTodo([...todos,{
      title:"vivek",
      description:"Sarkar"
    }])
  }

  return (
    <>
    <input type="text" value={"hello"}></input>
      {/* <CoustomButton count={count} setCount={setCount}></CoustomButton> */}
      <button onClick={addTodo}> Add a todos</button>
      {todos.map((todo)=>{
          return <Todo title={todo.title} description={todo.description}></Todo>

      })}
    </>
  );
}

// function CoustomButton(props) {
//   function onClickHandler() {
//     props.setCount(props.count + 1);
//   }

//   return <button onClick={onClickHandler}>Counter {props.count}</button>;
// }

function Todo(prop){
  return <>
    <h1>{prop.title}</h1>
    <h1>{prop.description}</h1>
  </>
}

export default App;
