
import './App.css';
import {useState} from 'react'
function App() {
  const [count, setCount] = useState(0)

  return (
    <div className="App">
      <h3>You Clicked {count} Times</h3>
      <button onClick={()=>{setCount(count+1)}}>Increase</button>
      <button disabled={count===0} onClick={()=>{setCount(count-1)}}>Decrease</button>
      <button onClick={()=>{setCount(0)}}>Reset</button>
    </div>
  );
}

export default App;
