import { Link } from "react-router-dom";
import restauranfood1 from "../images/restauranfood1.jpg"

const Hero = () => {
    return (
        <header>
          <div className="container py-3">
            <div className="grid-2">
              <div>
                <h1 className="on-primary-color hero-logo">LITTLE LEMON</h1>
                <h2 className="highlight-light-color logo-margin-top">Chicago</h2>
                <p className="highlight-light-color mt-1">Voted the #1 Restaurant in Chicago, Little Lemon is 
                  only about offering the very best restaurant experience possible for our 
                  valuable customers</p>
                <div className="my-2">
                  <Link className="btn" to="/reservation">Reserve a Table</Link>
                </div>
              </div>
              <div><img src={restauranfood1} className="radius" width="100%"></img></div>
            </div>
          </div>
        </header>
    );
  };

export default Hero;