import "./App.css";
import "./components/IdCard"

function App() {
  return (
    <div className="App">
      <h1> LAB | React Training</h1>
      <IdCard
        lastName="Doe" firstName="John" gender="Male" height={178} birth={new Date("1992-07-14")} picture="https://randomuser.me/api/portraits/men/44.jpg"
      />
    </div>
  );
}

export default App;
