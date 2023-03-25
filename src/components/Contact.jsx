import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import React, { useRef } from 'react';
import emailjs from '@emailjs/browser';

export default function Contact() {

  const form = useRef();

  const sendEmail = (e) => {
    e.preventDefault();

    emailjs.sendForm('service_wcleo09', 'template_2yqpv69', form.current, 'tkNlfjfT1j78Ostkc')
      .then((result) => {
          console.log(result.text);
          form.current.reset();
      }, (error) => {
          console.log(error.text);
      });
  };

  return (
    <section id="contact__form">
      <div className="container">
        <div className="row">
          <div className="form">
            <form ref={form} onSubmit={sendEmail}>
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
                    name="user_name"
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
                    name="user_phone"
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
                    name="user_email"
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
                    name="user_date"
                  />
                </div>
                <div className="text_input_box">
                  <span className="customer__order--title">
                  Please describe your custom order
                  </span>
                  <textarea
                    className="order__input"
                    name="message"
                  />
                </div>
              </div>
              <span className="line"></span>
              <div className="form__bottom">
                <button type="submit" value="Send" className="landing__button">Send</button>
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
