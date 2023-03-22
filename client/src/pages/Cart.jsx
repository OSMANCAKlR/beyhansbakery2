import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import React, { useState } from "react";
import { Link } from "react-router-dom";

export default function Cart({ cart, changeQuantity, removeItem }) {
  const total = () => {
    let price = 0;
    cart.forEach((food) => {
      price += +food.price * food.quantity;
    });
    return price;
  };


  const [postcode, setPostcode] = useState();
  const [isEligible, setIsEligible] = useState(null);

  const handlePostcodeChange = (event) => {
    setPostcode(event.target.value);
  };

  const handleCheckEligibility = () => {
    // Replace this array with a list of valid postcodes for your delivery area
    const validPostcodes = ["2018", "2020", "2040", "2003"];

    if (validPostcodes.includes(postcode)) {
      setIsEligible(true);
    } else {
      setIsEligible(false);
    }
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
        <div className="cart__body" >
          {cart.map((food) => {
            return (
              <div className="food__container" key={food.id}>
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
            <p>
            Please enter your postcode to check if you are eligible for
            delivery:
          </p>
          <div className="inputButton">
          <input  className="postcode__input" placeholder="Enter your post code..." value={postcode} onChange={handlePostcodeChange} />
          <div className="search__button" onClick={handleCheckEligibility}>
          <FontAwesomeIcon icon="fa-solid fa-magnifying-glass"  />
          </div>
          </div>
          {postcode && isEligible === false ? (
            <p>Sorry, we do not deliver to your area.</p>
          ) : null}
          {isEligible === true ? <p>You are eligible for delivery!</p> : null}
            <Link to="/payment">
              <button className="btn btn__checkout">Proceed to checkout</button>
            </Link>
          </div>
        </div>
      </div>
    </section>
  );
}
