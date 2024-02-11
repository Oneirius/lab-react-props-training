import "./IdCard.css";

function IdCard(props) {
    const firstName = props.firstName;
    const lastName = props.lastName;
    const gender = props.gender;
    const height = props.height;
    let birth = props.birth;
    birth = birth.toLocaleDateString('en-us', {weekday: "long", year: "numeric", month:"short", day:"numeric"});
    const picture = props.picture;

    return (
        <div className="container-idcard">
            <div >
                <img src={picture} alt="portrait" />
            </div>
            <div>
                <p className="category">First Name: <span className="data">{`${firstName}`}</span> </p>
                <p className="category">Last Name: <span className="data">{`${lastName}`}</span> </p>
                <p className="category">Gender: <span className="data">{`${gender}`}</span> </p>
                <p className="category">Height: <span className="data">{`${height}`}</span> </p>
                <p className="category">Birth: <span className="data">{`${birth}`}</span> </p>
                
            </div>
        </div>
    )
}

export default IdCard;