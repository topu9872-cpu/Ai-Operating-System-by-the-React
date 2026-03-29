 import React, { use } from "react";
import Card from "./Card";
const Cards = ({ promise }) => {
   const Modal = use(promise);
  
console.log(promise)
  return (
    <div className="grid justify-center md:grid-cols-2 lg:grid-cols-3 space-y-8 mt-16">
      {Modal.map((card) => (
       
       <div key={card.id}>
       <Card card={card}></Card>
   
         
       </div>
      ))}
   
    </div>
  );
};

export default Cards;
