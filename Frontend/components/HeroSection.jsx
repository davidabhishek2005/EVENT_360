import React from 'react';
import { Link} from "react-scroll";

const HeroSection = () => {
  return (
    <section className='hero'>
      <img src ="../public/restauarant_event.jpg" alt = ""></img>
      <div className='item'>
        <h3> EVENT PLANNER</h3>
        <div>
          <h1>YOUR PERSONAL PLANNER</h1>
          <p>Your Dreams and Comfort are Our repsonsibility</p>
          <Link to="contact" spy ={true} smooth={true} duration={500}>BOOK NOW</Link>
        </div>
      </div>
    </section>
  )
}

export default HeroSection