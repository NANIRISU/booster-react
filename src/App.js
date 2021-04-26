import { useState } from "react";
import "./styles.css";

export default function App() {
  const api = `https://randomuser.me/api`;

  const [user, setUser] = useState([]);

  const addUserHandler = async () => {
    const userData = await fetch(api, {
      method: "GET"
    });
    const userJson = await userData.json();
    console.log(userJson.results[0]);
    //user.push(userJson.results[0]);
    const newUser = [...user, userJson.results[0]];

    setUser(newUser);
  };
  return (
    <div className="main-container">
      <h1>DOM Array Methods in React</h1>
      <div className="header-btns">
        <button onClick={addUserHandler}>Add User</button>
        <input type="text" placeholder="search" />
        <button id="sort-dsc">sort Desc</button>
        <button id="sort-asc">sort Asc</button>
      </div>
      <div>
        {user.map((userobj, index) => (
          <div key={index} className="header-data">
            <div className="data-name">
              {" "}
              {userobj.name.title} {userobj.name.first} {userobj.name.last}
            </div>
            <ol>
              <li>{userobj.email} </li>
              <li>{userobj.gender} </li>
            </ol>
          </div>
        ))}
      </div>

      <div id="user-list"></div>
    </div>
  );
}
