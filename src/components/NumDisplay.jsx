import Num from "./Num.jsx";

export default function NumDisplay(props) {
    const nums = props.upgrades.map(obj => {
        return (
            <Num name={obj.upgradeName} number={obj.currentUpgrade - 1} />
        )
    })

    return (
        <div id="num-display">
            {nums}
        </div>
    )
}