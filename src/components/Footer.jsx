import React from 'react'
import "./index.css";


const Footer = () => {
  return (
    <>
    <footer>
        <div className='footer-content'>
          <img src='./restaurant.jpg' alt='Dishicon' />
          <div className='aboutone'>
            <h3>Doormat Navigation</h3>
            <ul>
              <li>
                <a href='/'>Home</a>
                <a href='/'>About</a>
                <a href='/'>Menu</a>
                <a href='/'>Reservation</a>
                <a href='/BookingPage'>Order Online</a>
                <a href='/'>Login</a>
              </li>
            </ul>
          </div>
          <div className='abouttwo'>
            <h3>Contact</h3>
            <ul>
              <li>Phone</li>
              <li>Phone</li>
              <li>Phone</li>
            </ul>
          </div>
          <div className='aboutthree'>
            <h3>Social media links</h3>
            <ul>
              <li>Phone</li>
              <li>Phone</li>
              <li>Phone</li>
            </ul>
          </div>
        </div>
      </footer>
    </>
  )
}

export default Footer