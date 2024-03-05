import React, { useState, useCallback } from 'react';

const UseCallback = () => {
  const [counter, setCounter] = useState(0);


  const increment = useCallback(() => {
    setCounter((prevCounter) => prevCounter + 1);
  }, []);



  return (
    <div>
      <p>Counter: {counter}</p>
      <button onClick={increment}>Increment</button>
    </div>
  );
};

export default UseCallback;
