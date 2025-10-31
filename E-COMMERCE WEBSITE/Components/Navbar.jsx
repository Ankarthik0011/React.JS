import React from 'react'
import { Link } from 'react-router-dom'
import { ShoppingCart } from 'phosphor-react'
import logo_light from "../../assets/logo-black.png";
import logo_dark from "../../assets/logo-white.png";
import toggle_light from "../../assets/night.png";
import toggle_dark from "../../assets/day.png";

const Navbar = ({ theme, setTheme, setShowLogin }) => {

  const toggle_mode = () => {
    theme === 'light' ? setTheme('dark') : setTheme('light');
  };

  return (
    <div className='navbar'>
      {/* Left: Logo */}
      <div className="logo">
        <img src={theme === 'light' ? logo_light : logo_dark} alt="Logo" />
      </div>

      {/* Right: Links + Theme toggle */}
      <div className='right-section'>
        <div className={`links ${theme === 'light' ? "links-light" : "links-dark"}`}>
          <span className="nav-link" onClick={() => setShowLogin(true)}>
            Login
          </span>

          <Link to="/">Shop</Link>
          <Link to="/cart">
            <ShoppingCart size={28} />
          </Link>
        </div>

        <div className="theme-toggle">
          <img
            onClick={toggle_mode}
            src={theme === 'light' ? toggle_light : toggle_dark}
            alt="Toggle Theme"
          />
        </div>
      </div>
    </div>
  );
};

export default Navbar;
