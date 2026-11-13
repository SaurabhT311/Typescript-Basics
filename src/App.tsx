import Greet from "./components/Greet";
import "./App.css";
import { Person } from "./components/Person";
import { PersonList } from "./components/PersonList";
import { Status } from "./components/Status";
import { Heading } from "./components/Heading";
import { Oscar } from "./components/Oscar";
import { Button } from "./components/Button";
import { Input } from "./components/Input";
import { Container } from "./components/Container";
import { Counter } from "./components/state/Counter";
import {ThemeContextProvider} from "./components/context/ThemeContext"
import {Box} from "./components/context/Box"
import {UserContextProvider} from "./components/context/UserContext"
import {User} from "./components/context/User"

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
      {/* <Greet name="John" messageCount={20} />
      <Person name={personName} />
      <PersonList names={nameList} />
      <Status status="success" />
      <Heading>PlaceHolder Text</Heading>
      <Oscar>
        <Heading>Oscar goes to Leonardo Di Caprio</Heading>
      </Oscar> */}
      {/* <Button handleClick={(event, id) => {console.log("Button Clicked!", event, id)}} />
      <Input value ="" handleChange={(event) => {console.log(event)}} />
      <Container styles={{border: "1px solid black", padding: "1rem"}} />
      <Counter /> */}
      <ThemeContextProvider>
        <Box />
      </ThemeContextProvider>
      <UserContextProvider>
        <User />
      </UserContextProvider>
    </div>
  );
}

export default App;
