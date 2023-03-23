import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import React from "react";

export default function Contact() {
  return (
    <section id="contact__form">
      <div className="container">
        <div className="row">
          <div className="form">
            <form action="">
              <div className="form__title--wrapper">
                <h1 className="form__title">Contact us</h1>
                <p className="form__para">
                Craving something unique? Our bakery is here to make your sweet dreams come true! Whether you need a custom cake, cupcakes, or any other baked goods, we'd love to hear about your vision. Fill out the form below to tell us about your special request, and we'll get in touch with you shortly to discuss the details.
                </p>
              </div>
              <div className="form__wrapper">
                <div className="input__box">
                  <span className="input__title">What is your full name?</span>
                  <input
                    className="name__input"
                    type="text"
                    placeholder="John Smith"
                    required
                  />
                </div>
                <div className="input__box">
                  <span className="input__title">
                    What is your mobile number?
                  </span>
                  <input
                    className="number__input"
                    type="number"
                    placeholder="xxx xxx xxx"
                  />
                </div>
                <div className="input__box">
                  <span className="input__title">
                    What is your email address?
                  </span>
                  <input
                    type="email"
                    className="email__input"
                    placeholder="example@example.com"
                  />
                </div>
                <div className="input__box">
                  <span className="input__title">
                    When would you like your order?
                  </span>
                  <input
                    type="date"
                    className="date__input"
                    placeholder="Select a date"
                  />
                </div>
                <div className="text_input_box">
                  <span className="customer__order--title">
                  Please describe your custom order
                  </span>
                  <textarea
                    className="order__input"
                  />
                </div>
              </div>
              <span className="line"></span>
              <div className="form__bottom">
                <button className="landing__button">Send</button>
                <div className="social__links">
                  <div className="social__link">
                    <a href="">
                        <FontAwesomeIcon icon="fa-brands fa-facebook-f" />
                    </a>
                  </div>
                  <div className="social__link">
                    <a href="">
                      <FontAwesomeIcon icon="fa-brands fa-twitter" />
                    </a>
                  </div>
                  <div className="social__link">
                    <a href="">
                    <FontAwesomeIcon icon="fa-brands fa-instagram" />
                    </a>
                  </div>
                </div>
              </div>
            </form>
          </div>
        </div>
      </div>
    </section>
  );
}
