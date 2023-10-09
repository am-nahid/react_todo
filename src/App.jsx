// import { useState } from 'react'
// import reactLogo from './assets/react.svg'
// import viteLogo from '/vite.svg'
// import './App.css'

// function App() {
//   const [count, setCount] = useState(0)

//   return (
//     <>
//       <div>
//         <a href="https://vitejs.dev" target="_blank">
//           <img src={viteLogo} className="logo" alt="Vite logo" />
//         </a>
//         <a href="https://react.dev" target="_blank">
//           <img src={reactLogo} className="logo react" alt="React logo" />
//         </a>
//       </div>
//       <h1>Vite + React</h1>
//       <div className="card">
//         <button onClick={() => setCount((count) => count + 1)}>
//           count is {count}
//         </button>
//         <p>
//           Edit <code>src/App.jsx</code> and save to test HMR
//         </p>
//       </div>
//       <p className="read-the-docs">
//         Click on the Vite and React logos to learn more
//       </p>
//     </>
//   )
// }

// export default App



import { useState, useEffect } from 'react';
import './App.css';

function App() {
  const initialList = JSON.parse(localStorage.getItem("todos")) || [];
  const [input,setInput] = useState("")
  const [list, setList] = useState(initialList)
 
  useEffect(()=>{
    localStorage.setItem("todos", JSON.stringify(list) )
  },[list])


  const handleKeyPress = (e) => {
  
    if (e.key === "Enter") {
      
      handleAddList();
    }
};

  const handleAddList=(e)=>{
    // e.preventDefault()
    if(input.trim()!==""){
    let newList = {
        id:new Date().getTime().toString(),
        name: input,
        completed:false
    }
   setList([ newList,...list])
    setInput("")
  }
}

  const inputHandler=(e)=>{
    setInput(e.target.value)  
 }

  const handleReset=()=>{
    setList([])
    localStorage.removeItem("todos"); 
}

const handleComplete=(item)=>{
  console.log(item)
  // let markComplete = list.filter(todo=>todo.id===item.id).map(todo=>todo.completed=true)
//    setList(...list, markComplete)
  let markComplete = list.map(todo=>{
    if(todo.id===item.id){
      return {...todo,completed:true}
    }
    return todo
  })
  // setList(markComplete)

  const updateCompleteList= [
    markComplete.find((todo) => todo.id === item.id),
    ...markComplete.filter((todo) => todo.id !== item.id),
  ];

  setList(updateCompleteList);
}


const currentTodo = list.filter(item=>item.completed===false)
const completedTodo = list.filter(item=>item.completed===true)

  return (
    <div className="App">
        <header>
            <h1>Todo-list</h1>
            <button onClick={handleReset}> Reset</button>
        </header>

        <section>
         <input type='text' placeholder='enter your todo here' onChange={inputHandler}  value={input} onKeyDown={handleKeyPress} />
         <button onClick={handleAddList}>Add</button>
        </section>

      <article>
        <div className='todo_cntr'>
        <div className='currentTodo'>
        <h2>Todo lists</h2>
        <ul>
          
        {
        currentTodo.length === 0 ? (
          <div className='message'>Your Todo lists will be added here</div>
            ) : (
                currentTodo.map((item)=>{
                    return(
                        <li key={item.id} onClick={()=>handleComplete(item)}>
                            {item.name}
                        </li>
                    )
                })
            )
              }
        </ul>
        </div>

        
      <div className='completedTodos'>
        <h2>Completed</h2>
        <ul>
        {
             completedTodo.length === 0 ? (
              <div className='message'>Your completed tasks will be displayed here</div>
            ) : (
            completedTodo.map((item)=>{
                return(
                    <li key={item.id} >
                        {item.name}
                    </li>
                )
            })
            )
        }
        </ul>
        </div>
        </div>
        </article>

    </div>
  );
}

export default App;
