import React from 'react';
import './App.css'

function App() {
  const [count, setCount] = React.useState(0);

  function increaseClick() {
    setCount(count + 1);
  }
  return (
    <>
      <img onClick={increaseClick}></img>
    </>
  )
}

export default App
