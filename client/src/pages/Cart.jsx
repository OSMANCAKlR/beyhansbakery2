import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import React from "react";
import { Link } from "react-router-dom";

export default function Cart({ cart, changeQuantity, removeItem }) {
  const total = () => {
    let price = 0;
    cart.forEach((food) => {
      price += +food.price * food.quantity;
    });
    return price;
  };

  return (
    <section id="cart">
      <div className="row">
        <Link to="/">
          <FontAwesomeIcon
            className="cart__arrow"
            icon="fa-solid fa-left-long"
          />
        </Link>
        <h1>Cart</h1>
        <div className="cart__header">
          <p className="cart__header--text">Food</p>
          <p className="cart__header--text">Quantity</p>
          <p className="cart__header--text">Price</p>
        </div>
        <div className="cart__body">
          {cart.map((food) => {
            return (
              <div className="food__container">
                <div className="food__wrapper--cart">
                  <img src={food.image} />
                  <div className="food__information">
                    <span className="cart__title">{food.title} </span>
                    <span>${food.price.toFixed(2)}</span>
                    <button
                      className="delete__button"
                      onClick={() => removeItem(food)}
                    >
                      Remove
                    </button>
                  </div>
                </div>

                <div className="cart__input">
                  <input
                    className="cart_input"
                    type="number"
                    min={0}
                    max={99}
                    value={food.quantity}
                    onChange={(event) =>
                      changeQuantity(food, event.target.value)
                    }
                  />
                  <span className="cart__price">
                    {" "}
                    ${(food.price * food.quantity).toFixed(2)}
                  </span>
                </div>
              </div>
            );
          })}
          {cart.length === 0 && (
            <div className="cart__empty">
              <h2 className="empty__cart">
                You don't have any items in your cart
              </h2>
              <Link to="/menu">
                <button className="food__button">Browse Menu</button>
              </Link>
            </div>
          )}
          <div className="total">
            <div className="price__row">
              <span>Total </span>
              <span>${total().toFixed(2)}</span>
            </div>
            <Link to="/payment">
              <button className="btn btn__checkout">Proceed to checkout</button>
            </Link>
          </div>
        </div>
      </div>
    </section>
  );
}
