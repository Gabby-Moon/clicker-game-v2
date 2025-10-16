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
      currentUpgrade: 1
    },
    {
      upgradeName: "Click Multiplier",
      description: "Multiplies score received from clicks by 1",
      currentUpgrade: 1
    }
  ])

  function increaseClick(event) {
    event.preventDefault()
    // console.log(count);
    // console.log(upgrades[0].currentUpgrade);
    // console.log(upgrades[1].currentUpgrade);
    // console.log(count + (upgrades[0].currentUpgrade * upgrades[1].currentUpgrade));

    setCount(count + (upgrades[0].currentUpgrade * upgrades[1].currentUpgrade));
  }

  function ShowMulti() {
    if (count >= 5) {
      return (
        <div>
          <h3>{upgrades[1].upgradeName}</h3>
          <p>{upgrades[1].description}</p>
        </div>
      )
    }
  }

  return (
    <>
      <Header />
      <h2>Score: {count}</h2>
      <img onClick={increaseClick} src={cube}></img>
      <div>
        <h3>{upgrades[0].upgradeName}</h3>
        <p>{upgrades[0].description}</p>
      </div>
      <ShowMulti />
      <Footer />
    </>
  )
}

export default App
