const Nav = (props) => {
    return (
        <nav className="nav-bar">
            <div className="row">
            <img src={props.logo} alt="Little Lemon"></img>
            <ul>
                <li></li>
                <li><a href="#">Home</a></li>
                <li>About</li>
            </ul>
            </div>
        </nav>
    );
  };

export default Nav;