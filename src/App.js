import "./App.css";
import Container from "./Components/Container";
import DropDown from "./Components/DropDown";
// import { data } from "./Components/Data";
import React, { useEffect, useState } from "react";
// import NavBar from "./Components/NavBar";
const NavBar = ({ getCity }) => (
   <header className="navbar">
      <div className="navbar__title navbar__item">Work</div>
      <div className="navbar__item">Home</div>
      <div className="navbar__item">
         <DropDown getCity={getCity} />
      </div>
      <div className="navbar__item">About</div>
      <div className="navbar__item">Contact</div>
   </header>
);

const App = () => {
   // useEffect(() => {
   //    localStorage.setItem("Data", data);
   // }, []);
   const [city, setCity] = useState("");
   const getCity = (name) => {
      setCity(name);
      console.log("object", name);
   };

   // const city = localStorage.getItem("cityName");
   return (
      <div>
         <NavBar getCity={getCity} />
         <h1>{city}</h1>
         <Container city={city} />
      </div>
   );
};

export default App;
