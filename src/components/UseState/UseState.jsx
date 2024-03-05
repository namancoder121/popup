import React, { useState } from "react";

const UseState = () => {
  const [name, setName] = useState("");
  const [last, setLast] = useState("");
  const[fullName,setFullName]=useState('')

  function handleClick() {

   setFullName(`${name} ${last}`);
   setName('')
   setLast('')
  }

  return (
    <div>
      <label>Firstname:</label>
      <input
        value={name}
        onChange={(e) => setName(e.target.value)}
        placeholder="Enter your first Name"
      />
      {""}
      <br />
      <label>LastName:</label>{" "}
      <input
        value={last}
        onChange={(e) => setLast(e.target.value)}
        placeholder="Enter your last name "
      />
      <button onClick={handleClick}>Submit </button>
      {fullName && <p>Full Name: {fullName}</p>}
    </div>
  );
};

export default UseState;
