import React from 'react'
import "./index.css";

const Main = () => {
  return (
    <>
     <main>
        <section className='intro-content'>
          <div class='intro-left'>
            <h1>Little Lemon</h1>
            <h3>Chicago</h3>
            <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.</p>
            <button> Reserve a table</button>
          </div>
          <div class='intro-right'>
            <img src='./restauranfood.jpg' alt='resturant Food' />
          </div>
        </section>
        <section className='promo-content'>
          <div className='promo-intro'>
            <div className='promo-header'>
              <h2>This Weeks Specials!!</h2>
            </div>
            <div className='promo-button'>
              <button> Online menu</button>
            </div>
          </div>
          <div className='promo-food'>
            <div className='promo-item'>
              <img src='./greek salad.jpg' alt='Greek Salad' />
              <h4>Greek salad <span>$12.99</span></h4>
              <p>The famous greek salad of crispy lettuce, peppers, olives and our Chicago style feta cheese, garnished with crunchy garlic and rosemary croutons. </p>
              <h5>Order a delivery</h5>
            </div>
            <div className='promo-item'>
              <img src='./greek salad.jpg' alt='Greek Salad' />
              <h4>Greek salad<span>$12.99</span></h4>
              <p>The famous greek salad of crispy lettuce, peppers, olives and our Chicago style feta cheese, garnished with crunchy garlic and rosemary croutons. </p>
              <h5>Order a delivery</h5>
            </div>
            <div className='promo-item'>
              <img src='./greek salad.jpg' alt='Greek Salad' />
              <h4>Greek salad<span>$12.99</span></h4>
              <p>The famous greek salad of crispy lettuce, peppers, olives and our Chicago style feta cheese, garnished with crunchy garlic and rosemary croutons. </p>
              <h5>Order a delivery</h5>
            </div>
          </div>
        </section>
        <section className='testmonials'>
          <div >
            <h1>Testimonials</h1>
            <div className='test-content'>
              <div className='ratings'>
                <h4>Rating</h4>
                <h4>Name</h4>
                <h5>Review text</h5>
              </div>
              <div className='ratings'>
                <h4>Rating</h4>
                <h4>Name</h4>
                <h5>Review text</h5>
              </div>
              <div className='ratings'>
                <h4>Rating</h4>
                <h4>Name</h4>
                <h5>Review text</h5>
              </div>
              <div className='ratings'>
                <h4>Rating</h4>
                <h4>Name</h4>
                <h5>Review text</h5>
              </div>
            </div>
          </div>
        </section>
        <section className='about-content'>
          <div className='about-left'>
            <h1>Little Lemon</h1>
            <h3>Chicago</h3>
            <p>Amet minim mollit non deserunt ullamco est sit aliqua dolor do amet sint. Velit officia consequat duis enim velit mollit. Exercitation veniam consequat sunt nostrud amet.
              Amet minim mollit non deserunt ullamco est sit aliqua dolor do amet sint. Velit officia consequat duis enim velit mollit. </p>
          </div>
          <div className="about-right">
            <img src='./restaurantchef.jpg' alt='About' />
          </div>
        </section>
      </main>
    </>
  )
}

export default Main