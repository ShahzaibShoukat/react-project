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
    return (
        <nav className="nav-bar p-1">
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
        </nav>
    );
  };

export default Nav;