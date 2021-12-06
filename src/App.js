
import './App.css';
import { useState } from 'react';

function App() {


  const [count, setCount] = useState(0)

  const increment = (e)=>{
    
    setCount(count+1)

  }

  const decrement = (e)=>{
    setCount(count-1)
  }


  return (

    <div className="App">

      <h1>COUNTER APP</h1>

      <h1>{count}</h1>

     
      <button  onClick={increment}>+</ button>

      <button onClick={decrement}>-</button>
     
    </div>
  );
}

export default App;
