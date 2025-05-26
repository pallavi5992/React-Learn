import { Link } from "react-router-dom";
import {LOGO_URL} from "../../utils/constants"
import { useState } from "react";
const Title = () => (
  <a href="/">
    <img
      className="logo"
      alt="logo"
      src={LOGO_URL}
    />
  </a>
);
const Header = () => {
const [btnName,setBtnName] = useState("Login")
  return (
    <div className="header">
      <Title />
      <div className="nav-items">
        <ul>
          <li>Home</li>
          <li> <Link to="/about">About</Link></li>
          <li> <Link to="/contact">Contact</Link></li>
          <li>Cart</li>
          <button className="login-btn" onClick={()=>{
            btnName == "Login" ? setBtnName("Logout") : setBtnName("Login")
          }}
          
          >{btnName}</button>
        </ul>
      </div>
    </div>
  );
};
export default Header;
