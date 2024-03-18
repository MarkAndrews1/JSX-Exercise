const Tweet = (props) => {
    return (
        <div class="tweet">
            <div class="tweet-header">
            <h3>{props.username}</h3>
            <small>{props.name}</small>
            <br/>
            <small>{props.date}</small>
            </div>
            <div class="tweet-story">
            <p>{props.tweet}</p>
            </div>
        </div>
    )
}