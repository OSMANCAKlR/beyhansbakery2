import { useEffect, useState } from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Nav from "./components/Nav";
import Cart from "./pages/Cart";
import FoodInfo from "./pages/FoodInfo";
import Home from "./pages/Home";
import Menu from "./pages/Menu";
import {foods} from "./data"
import Payment from "./Payment"
import Completion from "./Completion"

function App() {

  const [cart, setCart] = useState([]);

  function addToCart(food) {
    setCart([...cart, { ...food, quantity: 1 }]);
  }

  function changeQuantity(food, quantity) {
    setCart(
      cart.map((item) => {
        return item.id === food.id
          ? {
              ...item,
              quantity: +quantity,
            }
          : item;
      })
    );
  }

  function removeItem(item) {
    setCart(cart.filter(food => food.id !== item.id))
  }

  function numberOfItems() {
    let counter = 0;
    cart.forEach(item => {
      counter += item.quantity
    })
    return counter
  }
  useEffect(() => {
  }, [cart]);


  return (
    <Router>

    <div className="App">
      <Nav numberOfItems={numberOfItems()}/>
      <Routes>
      <Route path="/" element={<Home />} />
      <Route path="/menu" element={<Menu foods={foods} cart={cart} addToCart={addToCart} />} />
      <Route path='/:id' element={<FoodInfo foods={foods} addToCart={addToCart} cart={cart} />} />
      <Route path="/cart" element={<Cart foods={foods} cart={cart} changeQuantity={changeQuantity} removeItem={removeItem}/>} />
      <Route path="/payment" element={<Payment/>}/>
      <Route path="/completion" element={<Completion/>}/>

      </Routes>
    </div>
    </Router>
  );
}

export default App;
