import React, { useState } from "react";
import "./DropDown.css";

const DropDown = ({ getCity }) => {
   const [open, setOpen] = React.useState(false);
   const [city, setCity] = useState("");
   const handleOpen = (e) => {
      setOpen(!open);
      setCity(e.target.value);
      //   console.log("city", e.target.value);
      //   if (city !== "") {
      //      localStorage.setItem("cityName", city);
      //      setCity("");
      //   }
      if (e.target.value !== "") getCity(e.target.value);
   };

   return (
      <div className="dropdown">
         <button onClick={handleOpen} value="">
            Location
         </button>
         {open ? (
            <ul className="menu">
               <li className="menu-item">
                  <button onClick={handleOpen} value="Pune">
                     Pune
                  </button>
               </li>
               <li className="menu-item">
                  <button onClick={handleOpen} value="Noida">
                     Noida
                  </button>
               </li>
               <li className="menu-item">
                  <button onClick={handleOpen} value="Nashik">
                     Nashik
                  </button>
               </li>
            </ul>
         ) : null}
      </div>
   );
};

export default DropDown;
