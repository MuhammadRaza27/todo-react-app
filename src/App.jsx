import { useState } from 'react'
import './App.css'

function App() {
  let [todoList, setTodoList]=useState([])

  let  saveTodoList = (event) =>{

  let todoName = event.target.todoName.value;

  if(!todoList.includes(todoName)){
    let finalTodo=[...todoList, todoName]
    setTodoList(finalTodo)
  }
  
  else{
    alert("Todo Exist...")
  }
  console.log(todoName)
    event.preventDefault();
    

  }
let list = todoList.map((value,index)=>{

  return(
    <TodoListitems value={value} key={index} indexNumber={index}
    setTodoList={setTodoList}
    todoList={todoList}/>
  )
})
  return (

    <div className='App'>
      <h1>Todo App</h1>
      <form onSubmit={saveTodoList}>
         <input type="text" name='todoName'/>
         <button>save</button>
         </form>

         <div className='outerDiv'>
          <ul>
            {list}
          </ul>
         </div>
    </div>
  )
}

export default App

function TodoListitems({value, indexNumber, todoList, setTodoList}){
  let [status , setStatus]=useState(false)
  let deleteRow=()=>{
  let finalData=todoList.filter((v,i)=>i!=indexNumber)
  setTodoList(finalData)
  }

  let checkStatus = ()=>{
    setStatus(!status)

  }
  
return(
  <li className={(status)? 'completetodo': ''} onClick={checkStatus}>{value}<span onClick={deleteRow}>&times;</span></li>
)
  
}