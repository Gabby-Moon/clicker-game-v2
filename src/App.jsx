import React from 'react';
import './App.css'
import cube from "../public/image/cube.png";
import Header from "./Header.jsx";
import Footer from "./Footer.jsx";

function App() {
  const [count, setCount] = React.useState(0);
  const [upgrades, func] = React.useState([
    {
      upgradeName: "Add Click",
      description: "Increases score received from clicks by 1",
      currentUpgrade: 0
    },
    {
      upgradeName: "Click Multiplier",
      description: "Multiplies score received from clicks by 1",
      currentUpgrade: 1
    }
  ])

  function increaseClick(event) {
    event.preventDefault()
    setCount(count + (upgrades[0].currentUpgrade * upgrades[1].currentUpgrade));
  }

  return (
    <>
      <Header />
      <h2>Score: {count}</h2>
      <img onClick={increaseClick} src={cube}></img>
      <Footer />
    </>
  )
}

export default App
