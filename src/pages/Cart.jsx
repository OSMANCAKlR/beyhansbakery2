import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import React, { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import { loadStripe } from "@stripe/stripe-js";
import Stripe from 'stripe';
import DatePicker from "react-datepicker";
import "react-datepicker/dist/react-datepicker.css";

export default function Cart({ cart, changeQuantity, removeItem }) {
  const [totalAmount, setTotalAmount] = useState(0);
  const [selectedDate, setSelectedDate] = useState(null);
  const [isEligible, setIsEligible] = useState(null);
  const [isDateSelected, setIsDateSelected] = useState(false);

  useEffect(() => {
    let amount = 0;
    cart.forEach((item) => {
      amount += item.price * item.quantity;
    });
    setTotalAmount(amount * 100);
  }, [cart]);

  console.log(totalAmount);
  console.log(cart)
  
  let stripePromis

  const total = () => {
    let price = 0;
    cart.forEach((food) => {
      price += +food.price * food.quantity;
    });
    return price;
  };

  const [postcode, setPostcode] = useState();
 

  const handlePostcodeChange = (event) => {
    setPostcode(event.target.value);
  };

  const handleCheckEligibility = () => {
    // Replace this array with a list of valid postcodes for your delivery area
    const validPostcodes = [
      "2015", // Alexandria
      "2019", // Banksmeadow
      "2015", // Beaconsfield
      "2023", // Bellevue Hill
      "2026", // Bondi
      "2019", // Botany
      "2024", // Bronte
      "2021", // Centennial Park
      "2036", // Chifley
      "2031", // Clovelly
      "2034", // Coogee
      "2010", // Darlinghurst
      "2028", // Double Bay
      "2030", // Dover Heights
      "2032", // Daceyville
      "2027", // Edgecliff
      "2011", // Elizabeth Bay
      "2042", // Enmore
      "2043", // Erskineville
      "2036", // Hillsdale
      "2033", // Kensington
      "2032", // Kingsford
      "2036", // La Perouse
      "2036", // Little Bay
      "2036", // Malabar
      "2035", // Maroubra
      "2020", // Mascot
      "2036", // Matraville
      "2021", // Paddington
      "2035", // Pagewood
      "2036", // Phillip Bay
      "2027", // Point Piper
      "2011", // Potts Point
      "2022", // Queens Park
      "2031", // Randwick
      "2016", // Redfern
      "2029", // Rose Bay
      "2018", // Rosebery
      "2021", // Rushcutters Bay
      "2010", // Surry Hills
      "2026", // Tamarama
      "2030", // Vaucluse
      "2017", // Waterloo
      "2030", // Watsons Bay
      "2024", // Waverley
      "2017",  // Zetland
      "2018" //Eastlakes
    ];

    if (validPostcodes.includes(postcode)) {
      setIsEligible(true);
    } else {
      setIsEligible(false);
    }
  };


  const redirectToCheckout = async () => {
    const stripe = await loadStripe(process.env.REACT_APP_STRIPE_KEY);
    stripe.redirectToCheckout({
      lineItems: cart.map(item => ({
          quantity: item.quantity,
          price: item.price_api
      })),
      mode: "payment",
      successUrl: `${window.location.origin}/success`,
      cancelUrl: `${window.location.origin}`,
      shippingAddressCollection: {
        allowedCountries: ['AU'],
      },
      billingAddressCollection: "auto",
    });
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
             
              {isEligible && (
        <div className="cart__delivery">
          <p>Please select a delivery date:</p>
          <DatePicker
            selected={selectedDate}
            onChange={(date) => setSelectedDate(date)}
            minDate={new Date()}
            showDisabledMonthNavigation
          />
        </div>
      )}
       <button onClick={redirectToCheckout} className="btn btn__checkout">Proceed to checkout</button>
          </div>
        </div>
      </div>
    </section>
  );
}
