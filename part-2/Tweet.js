

const Tweet = (props) => {
    return (
        <div class="tweet">
            <h1> Tweet from {props.username} at {props.date}</h1>
            <p>{props.msg}</p>
            <p>Wtitten by {props.name}</p>
        </div>
    )
}
