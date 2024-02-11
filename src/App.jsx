import "./App.css";
import IdCard from "./components/IdCard.jsx";
import Greetings from "./components/Greetings.jsx";
import Random from "./components/Random.jsx";
import BoxColor from "./components/BoxColor.jsx";
import CreditCard from "./components/CreditCard.jsx";
import Ratings from "./components/Ratings.jsx";

function App() {
  return (
    <div>
      <h1> LAB | React Training</h1>
      <IdCard
        lastName="Doe"
        firstName="John"
        gender="Male"
        height={178}
        birth={new Date("1992-07-14")}
        picture="https://randomuser.me/api/portraits/men/44.jpg"
      />
      <br />
      <Greetings language="de" name="Ludwig" />
      <Greetings language="fr" name="Francois" />
      <br />
      <Random min={1} max={6} />
      <Random min={1} max={100} />
      <br />
      <BoxColor r={255} g={0} b={0} />
      <BoxColor r={128} g={255} b={0} />
      <br />
      <div id="cards">
        <CreditCard
          type="Visa"
          number="0123456789018845"
          expirationMonth={3}
          expirationYear={2021}
          bank="BNP"
          owner="Maxence Bouret"
          bgColor="#11aa99"
          color="white"
        />
        <CreditCard
          type="Master Card"
          number="0123456789010995"
          expirationMonth={3}
          expirationYear={2021}
          bank="N26"
          owner="Maxence Bouret"
          bgColor="#eeeeee"
          color="222222"
        />
        <CreditCard
          type="Visa"
          number="0123456789016984"
          expirationMonth={12}
          expirationYear={2019}
          bank="Name of the Bank"
          owner="Firstname Lastname"
          bgColor="#ddbb55"
          color="white"
        />
      </div>
      <br />
      <div>
        <Ratings score="0"/>
        <Ratings score="1.49"/>
        <Ratings score="1.5"/>
        <Ratings score="3"/>
        <Ratings score="4"/>
        <Ratings score="5"/>
      </div>
    </div>
  );
}

export default App;
