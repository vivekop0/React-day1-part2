import { useState } from 'react'

import './App.css'

function App() {
  const [count, setCount] = useState(0)
 
  return (
    <>
      
      <h1>Counter App {count}</h1>
      <div className="card">
        <button onClick={()=>
    setCount(count+1)
  }>
          count is 
        </button>
       
        <button onClick={() => setCount((count) => count -1)}>
          Remove
        </button>
       
      </div>
     
    </>
  )
}

export default App
