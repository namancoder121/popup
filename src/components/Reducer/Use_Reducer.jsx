import React, { useReducer, useState } from 'react';

const initialState = {
  items: [],
};

function reducer(state, action) {
  switch (action.type) {
    case 'ADD_ITEM':
      return {
        ...state,
        items: [...state.items, action.payload],
      };
    case 'REMOVE_ITEM':
      return {
        ...state,
        items: state.items.filter((item, index) => index !== action.payload),
      };
    default:
      return state;
  }
}

const Use_Reducer = () => {
  const [state, dispatch] = useReducer(reducer, initialState);
  const [newItemText, setNewItemText] = useState('');

  const addItem = () => {
    if (newItemText.trim() !== '') {
      dispatch({ type: 'ADD_ITEM', payload: newItemText });
      setNewItemText('');
    }
  };

  const removeItem = (index) => {
    dispatch({ type: 'REMOVE_ITEM', payload: index });
  };

  return (
    <div>
      <h2>Item List</h2>
      <ul>
        {state.items.map((item, index) => (
          <li key={index}>
            {item}
            <button style={{borderRadius:'10px',backgroundColor:'red'}} onClick={() => removeItem(index)}>Remove</button>
          </li>
        ))}
      </ul>
      <input
        type="text"
        value={newItemText}
        onChange={(e) => setNewItemText(e.target.value)}
      />
      <button style={{borderRadius:'10px',backgroundColor:'blue'}} onClick={addItem}>Add Item</button>
    </div>
  );
};

export default Use_Reducer;