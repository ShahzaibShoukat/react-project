import { Link } from "react-router-dom";

const Main = () => {
    return (
        <main>
          <section className="highlight p-3">
            <div className="container">
              <div className="d-flex-wrap jc-space-between ai-center m-1">
                <h1>This Week Specials!</h1>
                <Link className="btn mb-1" to="/menu">View Menu</Link>
              </div>
              <div className="grid-3 jc-space-between">
                <div className="dish-card">
                  <img src="http://localhost:3000/greek-salad.jpg" alt="Greek Salad" />
                  <div className="p-1">
                    <div className="d-flex jc-space-between mb-1">
                      <strong>Greek Salad</strong>
                      <strong className="secondary-orange-color">$12.99</strong>
                    </div>
                    <p className="mb-1">The famous greek salad of crispy lettuce, 
                      peppers, olives and our Chicago style feta cheese, 
                      garnished with crunchy garlic and rosemary croutons.</p>
                    <Link to="/menu">Order for delivery!</Link>
                  </div>
                </div>
                <div className="dish-card">
                  <img src="http://localhost:3000/brushetta.jpg" alt="Brushetta" />
                  <div className="p-1">
                    <div className="d-flex jc-space-between mb-1">
                      <strong>Brushetta</strong>
                      <strong className="secondary-orange-color">$7.99</strong>
                    </div>
                    <p className="mb-1">Our Bruschetta is made from grilled bread that has been smeared with 
                      garlic and seasoned with salt and olive oil. Toppings of tomato, veggies,
                       beans, cured pork, or cheese are examples of variations. In Italy,
                        a brustolina grill is frequently used to create bruschetta.</p>
                    <Link to="/menu">Order for delivery!</Link>
                  </div>
                </div>
                <div className="dish-card">
                  <img src="http://localhost:3000/grilled-fish.jpg" alt="Grilled Fish" />
                  <div className="p-1">
                    <div className="d-flex jc-space-between mb-1">
                      <strong>Grilled Fish</strong>
                      <strong className="secondary-orange-color">$15.99</strong>
                    </div>
                    <p className="mb-1">Lorem ipsum dolor sit amet, consectetur adipiscing elit. Aliquam sed cursus..</p>
                    <Link to="/menu">Order for delivery!</Link>
                  </div>
                </div>
              </div>
            </div>
          </section>
          <section className="testimonials p-3">
            <div className="container">
              <h1 className="text-center m-1">Testimonials</h1>
              <div className="grid-4 jc-center">
                <div className="comments p-1">
                  <img src="http://localhost:3000/comment1.jpg"  width="100%"/>
                  <p><strong>Heather Ellis</strong></p>
                  <p>The food at this place is amazing, the staff were great. 
                    Really enjoyed the night here. 2 starters, 2 mains, 
                    2 sides and 2 bottles of wine for under £70. Happy days.</p>
                  <div className="stars">
                    <span><img src="http://localhost:3000/star.png"  width="100%"/></span>
                    <span><img src="http://localhost:3000/star.png"  width="100%"/></span>
                    <span><img src="http://localhost:3000/star.png"  width="100%"/></span>
                    <span><img src="http://localhost:3000/star.png"  width="100%"/></span>
                    <span><img src="http://localhost:3000/star.png"  width="100%"/></span>
                  </div>
                </div>
                <div className="comments p-1">
                  <img src="http://localhost:3000/comment2.jpg"  width="100%"/>
                  <p><strong>Bill Jensen</strong></p>
                  <p>Amazing food, exceptional service and hospitality, 
                    beautiful restaurant as a whole</p>
                  <div className="stars">
                    <span><img src="http://localhost:3000/star.png"  width="100%"/></span>
                    <span><img src="http://localhost:3000/star.png"  width="100%"/></span>
                    <span><img src="http://localhost:3000/star.png"  width="100%"/></span>
                    <span><img src="http://localhost:3000/star.png"  width="100%"/></span>
                    <span><img src="http://localhost:3000/star-unchecked.png"  width="100%"/></span>
                  </div>
                </div>
                <div className="comments p-1">
                  <img src="http://localhost:3000/comment3.jpg"  width="100%"/>
                  <p><strong>Bill Jensen</strong></p>
                  <p>This place is lovely clean very friendly and helpful staff 
                    it gets busy and you can see them rushing abit but they never rush you off your table</p>
                  <div className="stars">
                    <span><img src="http://localhost:3000/star.png"  width="100%"/></span>
                    <span><img src="http://localhost:3000/star.png"  width="100%"/></span>
                    <span><img src="http://localhost:3000/star.png"  width="100%"/></span>
                    <span><img src="http://localhost:3000/star.png"  width="100%"/></span>
                    <span><img src="http://localhost:3000/star.png"  width="100%"/></span>
                  </div>
                </div>
                <div className="comments p-1">
                  <img src="http://localhost:3000/comment4.jpg"  width="100%"/>
                  <p><strong>Deanna Rowe</strong></p>
                  <p>Very impressed with everything - busy for 7pm on a Wednesday evening!
                    Excellent service, really delicious food (great menu with some different things to try)</p>
                  <div className="stars">
                    <span><img src="http://localhost:3000/star.png"  width="100%"/></span>
                    <span><img src="http://localhost:3000/star.png"  width="100%"/></span>
                    <span><img src="http://localhost:3000/star.png"  width="100%"/></span>
                    <span><img src="http://localhost:3000/star.png"  width="100%"/></span>
                    <span><img src="http://localhost:3000/star-unchecked.png"  width="100%"/></span>
                  </div>
                </div>
              </div>
            </div>
          </section>
          <section className="about py-3">
            <div className="container">
              <h1 className="text-center mb-1">About Us</h1>
              <div className="grid-2 jc-center">
                <div>
                <h1 className="on-primary-color hero-logo">LITTLE LEMON</h1>
                <h2 className="logo-margin-top primary-color">Chicago</h2>
                <p className="mt-1">Lorem ipsum dolor sit amet, consectetur adipiscing elit. 
                Nulla id tristique diam. Etiam quis odio eget elit ullamcorper ornare. 
                Fusce scelerisque porta nulla, ut luctus risus laoreet accumsan. 
                Donec eros urna, consectetur a mattis sit amet</p>
                </div>
                <div>
                  <img src="http://localhost:3000/mario-adrian.jpg" className="radius shadow" width="100%"></img>
                </div>
              </div>
            </div>
          </section>
        </main>
    );
  };

export default Main;