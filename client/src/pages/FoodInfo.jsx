import React from "react";
import { Link, useLocation, useParams } from "react-router-dom";
import Food from "../components/ui/Food";

function FoodInfo({ addToCart, cart, foods }) {
  const { title } = useParams();

  const food = foods.find((item) => item.title === title);

  const category = food.category;

  function addFoodToCart(food) {
    const foodExists = cart.find((item) => item.id === food.id);
    if (foodExists) {
      return;
    }
    addToCart(food);
  }

  return (
    <section id="product__info">
      <div className="container">
        <div className="row">
          {foods
            .filter((food) => food.title === title)
            .map((food) => (
              <div className="food__container" key={food.id}>
                <div className="foodinfo__img--container">
                  <figure>
                    <img className="foodinfo__img" src={food.image} alt="" />
                  </figure>
                </div>
                <div className="foodinfo__description">
                  <h2 className="food__title">{food.title}</h2>
                  <span className="foodinfo__price">
                    {" "}
                    ${food.price.toFixed(2)} AUD
                  </span>
                  {cart.find((item) => item.id === food.id) ? (
                    <Link key={food.id} to={`/cart`} className="book__Link">
                      <button className="food__button--checkout">
                        Checkout
                      </button>
                    </Link>
                  ) : (
                    <button
                      className="food__button"
                      onClick={() => addFoodToCart(food)}
                    >
                      Add to cart
                    </button>
                  )}
                </div>
              </div>
            ))}
          <h2 className="otherproducts__title">You may also like</h2>
          <div className="other__products">
            {foods
              .filter(
                (food) => food.category === category && food.title !== title
              )
              .map((food) => (
                <div className="otherproducts__container" key={food.id}>
                  <Link to={`/product/${food.title}`}>
                    <div className="otherproducts__wrapper">
                      <figure>
                        <img src={food.image} alt="" />
                      </figure>
                      <p>{food.title}</p>
                    </div>
                  </Link>
                </div>
              ))}
          </div>
        </div>
      </div>
    </section>
  );
}

export default FoodInfo;
