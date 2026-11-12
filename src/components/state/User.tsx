import { useState } from "react";

type AuthUser = {
  name: string;
  email: string;
};

export const User = () => {
  //   const [user, setUser] = useState<AuthUser | null>(null); //initial is null but can be of AuthUser type
  const [user, setUser] = useState<AuthUser>({} as AuthUser); //it won't be null but can be of AuthUser type, we are using type assertion here to tell typescript that this is of AuthUser type

  const handleLogin = () => {
    setUser({
      name: "John Doe",
      email: "john.doe@example.com",
    });
  };

  //In case of type assertion, we can use the optional chaining operator to safely access properties of the user object.
  // This way, if the user is null or undefined, it won't throw an error when trying to access its properties.
  //   const handleLogout = () => {
  //     setUser(null);
  //   };

  return (
    <div>
      <button onClick={handleLogin}>Login</button>
      {/* <button onClick={handleLogout}>Logout</button> */}
      <div>User name is {user.name}</div>
      <div>User email is {user.email}</div>
    </div>
  );
};
