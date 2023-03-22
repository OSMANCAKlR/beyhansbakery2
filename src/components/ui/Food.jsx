import React from "react";

export default function Food({ food, onClick, hideButton }) {
  return (
    <div className="food">
      <img src={food.image} alt="" />
      <h3 className="food__title">{food.title}</h3>
    </div>
  );
}
