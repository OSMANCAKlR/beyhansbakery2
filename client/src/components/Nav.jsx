import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import React from "react";
import { Link } from "react-router-dom";
import Logo from "../assets/logo.svg";

export default function Nav({ numberOfItems }) {
  function closeMenu() {
    document.body.classList.remove("menu--open");
  }

  return (
    <nav>
      <div className="nav__container">
        <div className="logo__container">
        <Link to="/">
          <img src={Logo} alt="" className="logo" />
        </Link>
        </div>
        <ul className="nav__links">
          <li className="nav__list">
            <Link to="/" className="nav__link">
              Home
            </Link>
          </li>
          <li className="nav__list">
            <Link to="/menu" className="nav__link">
              Menu
            </Link>
          </li>
          <li className="nav__icon">
            <Link to="/cart" className="nav__link">
              <FontAwesomeIcon icon="shopping-cart" />
            </Link>
            {numberOfItems > 0 && (
              <span className="cart__length">{numberOfItems}</span>
            )}
          </li>
        </ul>
      </div>
    </nav>
  );
}
