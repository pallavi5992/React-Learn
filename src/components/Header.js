import { Link } from "react-router-dom";
import {LOGO_URL} from "../../utils/constants"
import { useState } from "react";
import useOnlineStatus from "../../utils/useOnlineStatus";
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

const onlineStatus = useOnlineStatus()

  return (
    <div className="header">
      <Title />
      <div className="nav-items">
        <ul>
          <li>Online Status:{onlineStatus ? "🟢":"🔴"}</li>
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
