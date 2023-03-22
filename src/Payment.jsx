import { useEffect, useState } from "react";


function Payment({ cart }) {
  const [totalAmount, setTotalAmount] = useState(0);

  useEffect(() => {
    let amount = 0;
    cart.forEach((item) => {
      amount += item.price * item.quantity;
    });
    setTotalAmount(amount * 100);
  }, [cart]);

  console.log(totalAmount)

 

  return (
    <div className="container">
      <div className="row">
        <h1 className="checkout__title">Checkout! Price ${totalAmount / 100} </h1>
        <button id="checkout-button">Checkout</button>
      </div>
    </div>
  );
}

export default Payment;
