const Person = (props) => {
    let isLegalToVote = props.age < 18 ? 'You must be 18.' : 'Please go Vote!'

    let name = props.name.length > 8 ? props.name.slice(0, 6) : props.name

    return (
        <div class='person'>
            <h2>{name}</h2>
            <p>Learn some information about this person:</p>
            <h3>{isLegalToVote}</h3>
            <h4>Hobbies</h4>
            <ul>
                {props.hobbies.map(h => <li>{h}</li>)}
            </ul>
        </div>

    )
}