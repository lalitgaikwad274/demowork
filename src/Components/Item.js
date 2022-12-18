import React from "react";

const Item = ({ Data, city }) => {
   return (
      <>
         {Data.map((item) => (
            <div className="box">
               <div className="imageContainer">
                  <img src={item.imagesrc} alt="" />
               </div>
               <div className="textContainer">
                  <h3>{item.location}</h3>
                  <h2>{city}</h2>
               </div>
            </div>
         ))}
      </>
   );
};

export default Item;
