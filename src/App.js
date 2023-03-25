import { useEffect, useState } from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Nav from "./components/Nav";
import Cart from "./pages/Cart";
import FoodInfo from "./pages/FoodInfo";
import Home from "./pages/Home";
import Menu from "./pages/Menu";
import {foods} from "./data"
import Delivery from "./pages/Delivery";
import Products from "./pages/Products";
import "@stripe/stripe-js"
import Footer from "./components/Footer";
import Contact from "./components/Contact";
import AboutUs from "./pages/AboutUs";
import RefundPolicy from "./pages/RefundPolicy";
import Success from "./pages/Success";

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
      <Route path="/menu" element={<Menu food={foods} cart={cart} addToCart={addToCart} />} />
      <Route path='/:id' element={<Products foods={foods} addToCart={addToCart} cart={cart} />} />
      <Route path="/product/:title" element={<FoodInfo foods={foods} addToCart={addToCart} cart={cart} />} />
      <Route path="/delivery" element={<Delivery/>} />
      <Route path="/cart" element={<Cart foods={foods} cart={cart} changeQuantity={changeQuantity} removeItem={removeItem}/>} />
      <Route path="/contact" element={<Contact/>} />
      <Route path="/aboutus" element={<AboutUs/>} />
      <Route path="/refunds" element={<RefundPolicy/>} />
      <Route path="/success" element={<Success/>} />
      </Routes>
      <Footer />
    </div>
    </Router>
  );
}

export default App;
