export default function Upgrade(props) {
    return (
        <div className='upgrade' onClick={props.increaseUpgrade}>
            <h3>{props.upgradeName}</h3>
            <p>{props.description}</p>
        </div>
    )
}