import React from "react";
import { Link } from "react-router-dom";
import LandingImage from "../assets/landing_image.webp";
import cay from "../assets/cay.webp"

export default function Landing() {
  return (
    <header>
      <div className="container">
        <div className="row">
          <div className="landing__wrapper">
            <div className="landing__text">
              <h2 className="landing__title">
                Homemade pastry <span className="small__text">& more</span>{" "}
              </h2>
              <p className="landing__para">
                Turkish food made with <span className="blue">love.</span>{" "}
              </p>
              <div className="landing__buttons">
                <Link to="/menu">
                  <button className="landing__button">View our menu</button>
                </Link>
                <a href="#contact__form">
                  <button className="landing__button--alt">Bulk order</button>
                </a>
              </div>
            </div>
            <div className="landing__image">
              <img src={LandingImage} className="landing__img" />
            </div>
          </div>
          <div className="menu__wrapper-title">
            <h2 className="menu__title">The Menu</h2>
            <img src={cay} alt="" className="menu__img" />
            <div className="menu__line"></div>
          </div>
        </div>
      </div>
    </header>
  );
}
