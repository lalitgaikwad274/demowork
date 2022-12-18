import React, { useState, useEffect } from "react";
import { data } from "./Data";
import Item from "./Item";

const Container = ({ city }) => {
   const [dataItem, setData] = useState(data);
   useEffect(() => {
      console.log("object change");
      if (city !== "") {
         const itemData = data.filter((item) =>
            item.cityName === city ? item : null
         );
         setData(itemData);
      } else {
         setData(data);
      }
   }, [city]);

   return (
      <div className="container">
         {dataItem.map((item) => (
            <Item Data={item.DataList} city={item.cityName} />
         ))}
         {/* <h1>Welocome</h1> */}
      </div>
   );
};

export default Container;
