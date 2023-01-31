import { Link } from "react-router-dom";

const Nav = () => {
    let menuButton = () => {
        var x = document.getElementById("myTopnav");
        if (x.className === "topnav") {
          x.className += " responsive";
        } else {
          x.className = "topnav";
        }
      }
      const navLinks = document.querySelectorAll(".topnav a");
      for (let i = 0; i < navLinks.length; i++) {
        navLinks[i].addEventListener("click", function() {
          for (let j = 0; j < navLinks.length; j++) {
            navLinks[j].classList.remove("active");
          }
          this.classList.add("active");
        });
      }
    return (
        <nav>
          <div className="container d-flex jc-space-between">
            <img src="/logo.svg" className="ms-1" alt="Little lemon"></img>
            <div className="nav-bar">
              <div className="topnav" id="myTopnav">
                <Link className="active" to="/">Home</Link>
                <Link to="/about">About</Link>
                <Link to="/menu">Menu</Link>
                <Link to="/reservation">Reservation</Link>
                <Link to="/order-online">Order Online</Link>
                <Link to="/login">Login</Link>
                <a className="icon" onClick={menuButton}>
                    <i className="fa fa-bars"></i>
                </a>
              </div>
            </div>
          </div>
        </nav>
    );
  };

export default Nav;