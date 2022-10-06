import React from 'react';
import MyList from './MyList';
import './App.css';

function App() {
  const todos = [
    "Buy ice cream", 
    "Eat ice cream", 
    "Go to the gym"
  ];
  return (
    <div>
      <MyList theList={todos} />
    </div>
  );
}

export default App;