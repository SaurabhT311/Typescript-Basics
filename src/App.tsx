import Greet from "./components/Greet";
import "./App.css";
import { Person } from "./components/Person";
import { PersonList } from "./components/PersonList";
import { Status } from "./components/Status";
import { Heading } from "./components/Heading";
import { Oscar } from "./components/Oscar";

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
      <Greet name="John" messageCount={20} />
      <Person name={personName} />
      <PersonList names={nameList} />
      <Status status="success" />
      <Heading>PlaceHolder Text</Heading>
      <Oscar>
        <Heading>Oscar goes to Leonardo Di Caprio</Heading>
      </Oscar>
    </div>
  );
}

export default App;
