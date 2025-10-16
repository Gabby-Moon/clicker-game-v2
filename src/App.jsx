import React from 'react';
import './App.css'
import cube from "../public/image/cube.png";
import Header from "./Header.jsx";
import Footer from "./Footer.jsx";

function App() {
  const [count, setCount] = React.useState(0);

  function increaseClick() {
    setCount(count + 1);
  }
  return (
    <>
      <Header />
      <img onClick={increaseClick} src={cube}></img>
      <Footer />
    </>
  )
}

export default App
