import React from 'react';
import './index.css';
import App from './App';
import {library} from '@fortawesome/fontawesome-svg-core'
import { faShoppingCart, faLeftLong, faMagnifyingGlass, faBars,faXmark} from '@fortawesome/free-solid-svg-icons';
import { faFacebookF, faInstagram, faTwitter } from '@fortawesome/free-brands-svg-icons';
import ReactDOM from "react-dom";

library.add(faShoppingCart, faFacebookF, faTwitter, faInstagram, faLeftLong, faMagnifyingGlass, faBars, faXmark)


ReactDOM.render(
  <React.StrictMode>
    <App />
  </React.StrictMode>,
  document.getElementById("root")
);