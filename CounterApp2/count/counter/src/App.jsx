import { useState } from "react";
import './App.css';

function App() {
 const [count, setCount] = useState(0)
 const [oe, setOe] = useState("Even")
 const [prime, setPrime] = useState(false)

 function decrease() {
  const updatedCount = count - 1;
  setCount(updatedCount);

  if (updatedCount % 2 === 1) {
    setOe("Odd");
  } else {
    setOe("Even");
  }

  setPrime(isPrime(updatedCount));
}

function increase() {
  const updatedCount = count + 1;
  setCount(updatedCount);

  if (updatedCount % 2 === 1) {
    setOe("Odd");
  } else {
    setOe("Even");
  }

  setPrime(isPrime(updatedCount));
}


function isPrime(num) {
  if (num < 2) {
    return false;
  }
  for (let i = 2; i <= Math.sqrt(num); i++) {
    if (num % i === 0) {
      return false;
    }
  }
  return true;
}

function resetCount (){
  setCount(0)
  setOe("Even")
  setPrime(false)
}

  return (
    <div id="main">
      <h1>Counter App</h1>
      <div className="changebtn">
        <button data-testid="minusonebtn" disabled={count===0} onClick={decrease}>-1</button>

        <button data-testid="plusonebtn" onClick={increase}>+1</button>

      <div className="reset">
        <button data-testid="resetbtn" onClick={resetCount}>Reset Count</button>
      </div>
      </div>

      <span data-testid="counter">{count}</span>
      <div>
        <span data-testid="odd-or-even">The count is: {oe}</span>
        <span data-testid="is-prime">Prime no. : {prime.toString()}</span>
      </div>
    </div>
  );

}

export default App;

