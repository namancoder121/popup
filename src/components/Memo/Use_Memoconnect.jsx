import React,{useMemo,useState} from "react";
const Use_Memoconnect = ({items}) => {
    const [count, setCount] = useState(0);
  
    const memoizedItems = useMemo(() => {
        console.log('hello')
        return items.map((item) => <li key={item}>{item}</li>);
      }, [items]);
    
  
    return (
      <div>
        
        <ul>
         {memoizedItems}
         {/* {
            items.map((item,i)=>{return(<>
            <li key={i}>{item}</li>
            </>)})
         } */}
        </ul>
        <button style={{backgroundColor:'green' , padding:"15px", borderRadius:'10px'}}onClick={() => setCount(count + 1)}>Increase Count</button>
        <p>Count: {count}</p>
      </div>
    );
  };
  export default Use_Memoconnect