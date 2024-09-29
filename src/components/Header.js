import { useState } from "react";
import Logo from '../assets/img/foodvilla.jpg';
import { Link } from "react-router-dom";

const loggedInUser = () => {
  return true;
};
// client side routing
const Header = () => {
  const [isloggedIn, setIsLoggedIn] = useState(false);
  return (
    <div className="container">
      <a href="/">
        <img className="logo" src={Logo}style={{width:'50px'}}/>
      </a>
      <div className="list-items">
        <ul>
          <Link to="/">          
          <li>Home</li>
          </Link>
          <Link to="/about">
          <li>About</li>
          </Link>
          <Link to="/contact">
          <li>Contact_Us</li>
          </Link>
          <Link to="/cart">
          <li>Cart</li>
          </Link>
          <Link to="/instamart">
          <li>instamart</li>
          </Link>
        </ul>
        <div>
          {
            // any JS expression can be written and not statement
            isloggedIn ? (
              <button className="btn"onClick={() => setIsLoggedIn(false)}>Logout</button>
            ) : (
              <button className="btn"onClick={() => setIsLoggedIn(true)}>Login</button>
            )
          }
        </div>
      </div>
    </div>
  );
};
export default Header;
