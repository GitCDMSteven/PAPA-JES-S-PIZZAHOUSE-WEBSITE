import "./header.css";
import logo from "../../assets/images/logo.png";
import openMenu from "../../assets/images/open-menu.svg";
import closeMenu from "../../assets/images/close-menu.svg";
import { NavLink } from "react-router-dom";
import ResetLocation from "../../helpers/ResetLocation";
import headerMenu from "../../data/header-menu";

const Header = ({ isNavOpen, setIsNavOpen, hideMenu }) => {
  const showModal = () => {
    setIsNavOpen(!isNavOpen);
  };

  return (
    <header aria-labelledby="title" className="header">
      <nav
        className="header__nav flex-container flex-row txt-center"
        aria-label="Header Menu">
        <NavLink
          onClick={() => {
            ResetLocation();
            hideMenu();
          }}
          to="/"
          className="logo-styling flex-container flex-row txt-center txt-white">
          <img
            width="100"
            height="100"
            className="logo"
            src={logo}
            alt=""
            aria-hidden="true"
          />
          <h1 id="title" translate="no">
            PAPA JES’S PIZZAHOUSE <span>American Style</span>
          </h1>
        </NavLink>
        <ul
          id="main-menu"
          className={`header__nav__menu flex-row pop-font ${
            isNavOpen ? "active" : ""
          }`}>
          {headerMenu.map(({ to, label }) => (
            <li key={to}>
              <NavLink
                onClick={() => {
                  ResetLocation();
                  hideMenu();
                }}
                className={({ isActive }) =>
                  `txt-white ${
                    isActive && label !== "Home" ? "header-active-link" : ""
                  }`
                }
                aria-current={({ isActive }) => (isActive ? "page" : undefined)}
                to={to}>
                {label}
              </NavLink>
            </li>
          ))}
        </ul>
        <button
          className="header__nav__hamburger"
          aria-label={isNavOpen ? "Close menu" : "Open menu"}
          aria-expanded={isNavOpen}
          aria-controls="main-menu"
          onClick={showModal}>
          <img
            width="80"
            height="80"
            src={isNavOpen ? closeMenu : openMenu}
            alt=""
          />
        </button>
      </nav>
    </header>
  );
};

export default Header;