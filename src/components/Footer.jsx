import React from 'react'
import { Link } from 'react-router-dom'

function Footer() {
  return (
    <section id="footer">
        <div className="container">
            <div className="row">
                <div className="footer__links">
                    <ul className='footer__links'>
                        <li className='footer__link'>
                            <Link to="/contact">
                            Contact Us
                            </Link>
                        </li>
                        <li className='footer__link'>
                            <Link to="/aboutus">
                            About Us
                            </Link>
                        </li>
                        <li className='footer__link'>
                            <Link to="/refunds">
                            Refund & Return Policy
                            </Link>
                        </li>
                        <li className='footer__link'>
                            <Link to="/delivery">
                            Delivery Zones
                            </Link>
                        </li>
                        <li className='footer__link'>
                            <Link to="/menu">
                            Menu
                            </Link>
                        </li>
                    </ul>
                </div>
                <p className='footer__copyright'>Copyright Beyhan's Bakery 2023 &copy; </p>
            </div>
        </div>
    </section>
  )
}

export default Footer