import Greet from "./components/Greet";
import "./App.css";
import { Person } from "./components/Person";
import { PersonList } from "./components/PersonList";

function App() {
  const personName = {
    firstName: "Bruce",
    lastName: "Wayne",
  };

  const nameList = [
    { firstName: "Bruce", lastName: "Wayne" },
    { firstName: "Clark", lastName: "Kent" },
    { firstName: "Barry", lastName: "Allen" },
  ];

  return (
    <div className="App">
      <Greet name="John" messageCount={20} isLoggedIn={true} />
      <Person name={personName} />
      <PersonList names={nameList} />
    </div>
  );
}

export default App;
