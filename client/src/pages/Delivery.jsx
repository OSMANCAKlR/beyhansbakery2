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
          <p>
            Please enter your postcode to check if you are eligible for
            delivery:
          </p>
          <input type="text" placeholder="Enter your post code..." value={postcode} onChange={handlePostcodeChange} />
          <button onClick={handleCheckEligibility}>Check Eligibility</button>
          {postcode && isEligible === false ? (
            <p>Sorry, we do not deliver to your area.</p>
          ) : null}
          {isEligible === true ? <p>You are eligible for delivery!</p> : null}
        </div>
      </div>
    </section>
  );
}

export default Delivery;
