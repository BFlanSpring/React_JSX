const Person = (props) => {
    const { age, name, hobbies } = props;
    const voteTxt = age >= 18
        ? "Go Vote!"
        : "Go study!";

    const MAX_LENGTH = 6;
    const hobbiesLIs = hobbies.map((hobby, index) => <li key={index}>{hobby}</li>);

    return (
        <div>
            <p>
                <b>Learn some information about this person</b>
            </p>
            <ul>
                <li>Name: {name.slice(0, MAX_LENGTH)}</li>
                <li>Age: {age}</li>
                <ul>
                    Hobbies:
                    {hobbiesLIs}
                </ul>
            </ul>
            <h3>{voteTxt}</h3>
        </div>
    );
}
