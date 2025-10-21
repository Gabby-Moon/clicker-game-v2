import React from 'react';
import './App.css'
import cube from "../public/image/cube.png";
import Header from "./Header.jsx";
import Footer from "./Footer.jsx";
import Upgrade from './components/Upgrade.jsx';

function App() {
  const [count, setCount] = React.useState(0);
  const [upgrades, setUpgrade] = React.useState([
    {
      upgradeName: "Add Click",
      description: "Increases score received from clicks by 1",
      currentUpgrade: 1
    },
    {
      upgradeName: "Click Multiplier",
      description: "Increase score Multiplier received from clicks by 1",
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

  function increaseAddUpgrade(event) {
    event.preventDefault()
    setUpgrade([
      {
        upgradeName: "Add Click",
        description: "Increases score received from clicks by 1",
        currentUpgrade: upgrades[0].currentUpgrade + 1
      },
      {
        upgradeName: "Click Multiplier",
        description: "Increase score Multiplier received from clicks by 1",
        currentUpgrade: upgrades[1].currentUpgrade
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

  function ShowMulti() {
    if (count >= 10) {
      return (
        <div className='upgrade' onClick={increaseMultiUpgrade}>
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
      <Upgrade upgradeName={upgrades[0].upgradeName} description={upgrades[0].description} increaseUpgrade={increaseAddUpgrade} />
      {count > 10 && <Upgrade upgradeName={upgrades[1].upgradeName} description={upgrades[1].description} increaseUpgrade={increaseMultiUpgrade} />}
      <Footer />
    </>
  )
}

export default App
