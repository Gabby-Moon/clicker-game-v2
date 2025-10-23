import React from 'react';
import './App.css'
import cube from "../public/image/cube.png";
import cube2 from "../public/image/cube2.jpg";
import Header from "./components/Header.jsx";
import Footer from "./components/Footer.jsx";
import Upgrade from './components/Upgrade.jsx';
import NumDisplay from './components/NumDisplay.jsx';

function App() {
  const [count, setCount] = React.useState(0);
  const [upgrades, setUpgrade] = React.useState([
    {
      upgradeName: "Add Click",
      description: "Increases score received from clicks by 1",
      currentUpgrade: 0
    },
    {
      upgradeName: "Click Multiplier",
      description: "Increase score Multiplier received from clicks by 1",
      currentUpgrade: 1
    }
  ])

  function increaseClick(event) {
    event.preventDefault()
    setCount(count + (upgrades[0].currentUpgrade * upgrades[1].currentUpgrade));
  }

  function increaseAddUpgrade(event) {
    event.preventDefault()
    setUpgrade([
      {
        currentUpgrade: upgrades[0].currentUpgrade + 1
      },
      {
        ...upgrades[1]
      }
    ]);
  }

  function increaseMultiUpgrade(event) {
    event.preventDefault()
    setUpgrade([
      {
        ...upgrades[0]
      },
      {
        ...upgrades[1],
        currentUpgrade: upgrades[1].currentUpgrade + 1
      }
    ]);
  }

  return (
    <>
      <Header />
      <h2>Score: {count}</h2>
      <NumDisplay upgrades={upgrades} />
      <img onClick={increaseClick} src={cube2} id="miku"></img>
      <Upgrade upgradeName={upgrades[0].upgradeName} description={upgrades[0].description} increaseUpgrade={increaseAddUpgrade} />
      {count === 10 && <Upgrade upgradeName={upgrades[1].upgradeName} description={upgrades[1].description} increaseUpgrade={increaseMultiUpgrade} />}
      <Footer />
    </>
  )
}

export default App
