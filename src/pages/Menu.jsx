import React, { useState } from "react";
import { Link, useParams } from "react-router-dom";
import Food from "../components/ui/Food";
import { foods } from "../data";

export default function Menu({cart , addToCart, food: initialFoods}) {
  const [food, setFood] = useState(initialFoods);


  const { id } = useParams();


  function addFoodToCart(food) {
    const foodExists = cart.find((item) => item.id === food.id);
    if (foodExists) {
      return;
    }
    addToCart(food);
  }

  function filterFood(filter) {
    console.log(filter)
    if (filter === 'LOW_TO_HIGH') {
        setFood(food.slice().sort((a,b) => a.price - b.price ))
    }
    if (filter === 'HIGH_TO_LOW') {
        setFood(food.slice().sort((a,b) => b.price - a.price ))
    }
}

  return (
    <section id="menu">
      <div className="container">
        <div className="row">
          <div className="food__header">
            <h2 className="section__title foods__header--title">All Food</h2>
            <select defaultValue="DEFAULT" className="menu__select" onChange={(event) => filterFood(event.target.value)}>
              <option value="DEFAULT" disabled>
                Sort
              </option>
              <option value="LOW_TO_HIGH">Price, Low to High</option>
              <option value="HIGH_TO_LOW">Price, High to Low</option>
            </select>
          </div>
            <div className="foods">
            {food
              .map((food) => (
                <div className="food__container" key={food.id}>
                  <Link to={`/product/${food.title}`}>
                  <Food food={food} key={food.id} />
                  </Link>
                  ${food.price.toFixed(2)}
                  {cart.find((item) => item.id === food.id) ? (
                    <Link to={`/cart`} className="book__Link">
                      <button className="food__button--checkout">Checkout</button>
                    </Link>
                  ) : (
                    <button className="food__button" onClick={() => addFoodToCart(food)}>
                      Add to cart
                    </button>
                  )}
                </div>
              ))}
          </div>
        </div>
      </div>
    </section>
  );
}
