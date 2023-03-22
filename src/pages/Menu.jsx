import React from "react";
import { Link, useParams } from "react-router-dom";
import Food from "../components/ui/Food";
import { foods } from "../data";

export default function Menu({cart , addToCart}) {

  const { id } = useParams();

  const food = foods.find((food) => +food.id === +id);

  function addFoodToCart(food) {
    const foodExists = cart.find((item) => item.id === food.id);
    if (foodExists) {
      return;
    }
    addToCart(food);
  }

  return (
    <section id="menu">
      <div className="container">
        <div className="row">
          <div className="food__header">
            <h2 className="section__title foods__header--title">All Food</h2>
            <select defaultValue="DEFAULT" id="filter">
              <option value="DEFAULT" disabled>
                Sort
              </option>
              <option value="LOW_TO_HIGH">Price, Low to High</option>
              <option value="HIGH_TO_LOW">Price, High to Low</option>
            </select>
          </div>
            <div className="foods">
            {foods
              .map((food) => (
                <div className="food__container" key={food.id}>
                  <Food food={food} key={food.id} />
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
