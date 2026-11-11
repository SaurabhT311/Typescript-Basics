type GreetProps = {
  name: string;
};

const Greet = (props: GreetProps) => {
  return (
    <div>
      <h2>Welcome {props.name} to React with TypeScript</h2>
    </div>
  );
};

export default Greet;
