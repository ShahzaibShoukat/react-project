const Nav = (props) => {
    return (
        <nav className="nav-bar">
            <ul>
                <li><img src={props.logo} alt="Little Lemon"></img></li>
                <li><a href="#">Home</a></li>
                <li>About</li>
            </ul>
        </nav>
    );
  };

export default Nav;