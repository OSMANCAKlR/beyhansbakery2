import React, { useState } from "react";

function Delivery() {
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
    <section id="delivery">
      <div className="container">
        <div className="row">
          <h2 className="delivery__title">Delivery Policy</h2>
          <p className="delivery__para">
            At Beyhan's Bakery, we offer delivery services to eligible postcodes
            within Sydney. To check if your postcode is eligible for delivery,
            please use the input below and enter your postcode.
          </p>
          <div className="postcode__wrapper">
            <input
              type="text"
              placeholder="Enter your post code..."
              value={postcode}
              onChange={handlePostcodeChange}
              className="postcode__input"
              onKeyPress={(event) => event.key === "Enter" && handleCheckEligibility()}
            />
            <button className="food__button" onClick={handleCheckEligibility}>Check Eligibility</button>
            {postcode && isEligible === false ? (
               <p className="uneligible__delivery">Sorry, we do not deliver to your area.</p>
            ) : null}
            {isEligible === true ? <p className="eligible__delivery"> <span className="green"> Great! </span>We deliver to your area</p> : null}
          </div>
          <p className="delivery__para">
            If your postcode is eligible for delivery, you will be able to
            proceed with your order. If your postcode is not eligible for
            delivery, we apologize for any inconvenience and suggest that you
            visit us in-store to pick up your order.
          </p>
          <h2 className="delivery__title">Delivery Timeframe</h2>
          <p className="delivery__para">
            Our delivery times may vary depending on your location and traffic
            conditions. We will provide you with an estimated delivery time when
            you place your order, but please note that this is an estimate only
            and we cannot guarantee exact delivery times.
          </p>
          <h2 className="delivery__title">Delivery Fees</h2>
          <p className="delivery__para">
            We charge a flat rate for delivery services. The delivery fee will
            be calculated based on your location and the size of your order. The
            delivery fee will be displayed at checkout before you complete your
            purchase. If you have any questions about our delivery policy or
            need assistance with your order, please contact us at
            beyhansbakery@outlook.com. We will be happy to assist you in any way
            we can.
          </p>
        </div>
      </div>
    </section>
  );
}

export default Delivery;
