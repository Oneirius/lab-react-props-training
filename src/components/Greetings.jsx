import "./Greetings.css";

function Greetings(props) {
    const language = props.language;
    const name = props.name;
    let greeting = "";
    switch(language) {
        case "de":
            greeting = "Hallo, ";
            break;
        case "fr":
            greeting = "Bonjour, ";
    }
    return(
        <div>
            <p className = "greeting">{`${greeting}${name}`}</p>
        </div>
    )
}

export default Greetings;