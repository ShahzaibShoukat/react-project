import { useState } from "react";

const Test = () => {
  const [number, setNumber] = useState(1);
  function increment() {
    setNumber((prevNumber) => prevNumber + 1);
  }
    return(
      <div className="text-center page-height">
        <h1>React Unit testing</h1>
        <h1>Number : {number}</h1>
        <h1 data-testid="currentNumber"> {number} </h1> 
        <button data-testid="addOne" onClick={increment}>
            Add one 
        </button>
      </div>
    )
  };

export default Test;