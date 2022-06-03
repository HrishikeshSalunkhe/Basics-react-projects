import React, { useState, useEffect } from "react";
import Loading from "./Loading";
import Tours from "./Tours";
import './App.css';
// ATTENTION!!!!!!!!!!
// I SWITCHED TO PERMANENT DOMAIN
const url = "https://course-api.com/react-tours-project";

export default function App() {
  const [loading, setLoading] = useState(true);
  const [tours, setTours] = useState([]);
  const fetchTours = async () =>{
    setLoading(true);
    const response = fetch(url);
  };
  if(loading){
    return (<main>
      <Loading></Loading>
    </main>);
  }
  return (<main>Tours Component</main>);
}
