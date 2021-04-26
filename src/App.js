import { useState } from "react";
import "./styles.css";

export default function App() {
  const api = `https://randomuser.me/api`;

  const [user, setUser] = useState("Nothing Inside");

  const addUserHandler = async () => {
    const userData = await fetch(api, {
      method: "GET"
    });
    const userJson = await userData.json();
    console.log(userJson);
    setUser(userJson.results[0].gender);
  };
  return (
    <div>
      <h1>DOM Array Methods in React</h1>
      <button onClick={addUserHandler}>Add User</button>
      <div>{user}</div>
      <input type="text" placeholder="search" />
      <button id="sort-dsc">sort Desc</button>
      <button id="sort-asc">sort Asc</button>
      <div id="user-list"></div>
    </div>
  );
}
