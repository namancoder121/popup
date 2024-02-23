import React, { useState } from "react";
import Use_Memoconnect from "./Use_Memoconnect";

const Use_Memo = () => {
//   const [items, setItems] = useState(["Apple", "Banana", "Orange"])
  const [items, setItems] = useState(Array.from({ length: 10000 }, (_, i) => `Item ${i + 1}`));

  return (
    <div>
      
      <br/>
      
    <Use_Memoconnect items={items}/>
      
    <button  style={{backgroundColor:'blue' , padding:"15px", borderRadius:'10px'}}
        onClick={() => setItems([...items, `New Item ${items.length + 1}`])}
      >
        Add Item
      </button>
    </div>
  );
};

export default Use_Memo;
