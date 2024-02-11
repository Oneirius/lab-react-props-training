import "./CreditCard.css";
import visaLogo from "../assets/images/visa.png"
import masterCardLogo from "../assets/images/master-card.svg"


function CreditCard(props) {
    const {type, number, expirationMonth, expirationYear, bank, owner, bgColor} = props;
    const textColor = props.color;
    const hiddenNumber = "************"+number.slice(-4)

    const cardStyle = {
        backgroundColor: bgColor,
        color: textColor
    }

    return(
        <div className="credit-card" style={cardStyle}>
            {/*<p id="card-type">{type}</p>*/}
            <img id={type == "Visa"? "logo-visa": "logo-mastercard"} src={type == "Visa"? visaLogo: masterCardLogo} alt="visa" />
            <p id="card-number">{hiddenNumber}</p>
            <p>Expires {`${expirationMonth}/${expirationYear}     ${bank}`}</p>
            <p id="owner">{owner}</p>
        </div>
    )
}

export default CreditCard;

/*
<CreditCard type="Visa" number="0123456789018845" expirationMonth = {3} expirationYear={2021} bank="BNP" owner="Maxence Bouret" bgColor="#11aa99" color="white" />

<CreditCard type="Master Card" number="0123456789010995" expirationMonth = {3} expirationYear={2021} bank="N26" owner="Maxence Bouret" bgColor="#eeeeee" color="222222" />
*/