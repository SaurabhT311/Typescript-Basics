import type { Name } from "./Person.types";

type PersonProps = {
  name: Name
};

export const Person = (props: PersonProps) => {
  return (
    <div className="person">
      <h2>{props.name.firstName} {props.name.lastName}</h2>3
    </div>
  );
};
