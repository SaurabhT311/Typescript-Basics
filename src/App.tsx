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
import { ThemeContextProvider } from "./components/context/ThemeContext";
import { Box } from "./components/context/Box";
import { UserContextProvider } from "./components/context/UserContext";
import { User } from "./components/context/User";
import { DomRef } from "./components/ref/DomRef";
import { MutableRef } from "./components/ref/MutableRef";
import { CounterComponent } from "./components/class/CounterComponent";
import { Private } from "./components/auth/Private";
import { Profile } from "./components/auth/Profile";
import { List } from "./components/generics/List";
import { RandomNumber } from "./components/restriction/RandomNumber";
import { Toast } from "./components/templateLiterals/Toast";
import { CustomButton } from "./components/html/CustomButton";

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
      <Button
        handleClick={(event, id) => {
          console.log("Button Clicked!", event, id);
        }}
      />
      <Input
        value=""
        handleChange={(event) => {
          console.log(event);
        }}
      />
      <Container styles={{ border: "1px solid black", padding: "1rem" }} />
      <Counter />
      <ThemeContextProvider>
        <Box />
      </ThemeContextProvider>
      <UserContextProvider>
        <User />
      </UserContextProvider>
      <DomRef />
      <MutableRef />
      <CounterComponent message="The count value is" />
      <Private isLoggedIn={false} component={Profile} />
      <List
        items={["batman", "superman", "flash"]}
        onClick={(item) => console.log(item)}
      />
      <List items={[1, 2, 2]} onClick={(item) => console.log(item)} />
      <List
        items={[
          { id: 1, firstName: "Bruce", lastName: "Wayne" },
          { id: 2, firstName: "Clark", lastName: "Kent" },
          { id: 3, firstName: "Barry", lastName: "Allen" },
        ]}
        onClick={(item) => console.log(item)}
        renderItem={(user) => <span>{user.firstName}</span>}
      />
      <RandomNumber value={-10} isNegative />
      <Toast position="center" />
      <CustomButton variant="primary" onClick={() => console.log("clicked")}>
        Primary Button
      </CustomButton>
    </div>
  );
}

export default App;
