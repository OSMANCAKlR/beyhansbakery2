import React, { useState } from "react";
import { Link } from "react-router-dom";
import { foods } from "../data";
import { categories } from "../data";
import Food from "./ui/Food";

export default function Featured({ type }) {
  const [selectedFood, setSelectedFood] = useState(null);

  const handleFoodButtonClick = (foods) => {
    if (selectedFood === foods) {
      setSelectedFood(null);
    } else {
      setSelectedFood(foods);
    }

  };


  return (
    <section id="featured">
      <div className="container">
        <div className="row">
          <div className="title__column">
            <h2 className="column__title">{type} categories</h2>
          </div>
          <div className="food__wrapper">
            {categories
              .filter((food) => food.type === type)
              .slice(0, 4)
              .map((food) => (
                <div className="food__container" key={food.id}>
                  <Food
                    food={food}
                    key={food.id}
                  />
                  <Link key={food.category} to={`/${food.category}`}>
                  <button className="food__button" onClick={() => handleFoodButtonClick(food)}>See more</button>
                  </Link>
                </div>
                
              ))}
              
          </div>
        </div>
      </div>
    </section>
  );
}
