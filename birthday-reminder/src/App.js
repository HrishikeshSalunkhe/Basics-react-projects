import React, { useState } from "react";
import "./App.css";
import data from "./data";
import List from "./List";

export default function App() {
  // Creating a State Variable
  let [birthdayPeoples, setBirthdayPeoples] = useState(data);
  //   console.log(data);
//   console.log(birthdayPeoples);
  function handleClick() {
      setBirthdayPeoples([]);
    // console.log("Button CLicked");
  }
  return (
    <main>
      <section className="container">
        <h3>{birthdayPeoples.length} birthdays today</h3>
        <List birthdayPeoples ={birthdayPeoples}></List>
        <button onClick={handleClick}>Clear All</button>
      </section>
    </main>
  );
}
