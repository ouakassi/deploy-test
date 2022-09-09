import { useState } from "react";
import { NavLink, Link } from "react-router-dom";
import { motion } from "framer-motion";
import useWindowHeight from "../../hooks/useWindowHeight";

import "./Header.css";

const NAV_ITEMS = [
  {
    name: "",
    icon: "uil uil-estate",
  },
  {
    name: "projects",
    icon: "uil uil-folder-open",
  },
  {
    name: "blog",
    icon: "uil uil-files-landscapes-alt",
  },
  {
    name: "about",
    icon: "uil uil-user-square",
  },
  {
    name: "login",
    icon: "uil uil-user",
  },
];

const LOGO_NAME = Array.from("uakassi");

const Header = () => {
  const [toggleNav, setToggleNav] = useState(false);

  const windowHeight = useWindowHeight();

  const handleClick = (state) => {
    setToggleNav(state);
  };

  return (
    <motion.header
      initial={{ y: -30, opacity: 0 }}
      animate={{ y: 0, opacity: 1 }}
      transition={{ delay: 0.2, duration: 0.5 }}
      className={`header ${windowHeight >= 40 ? "headerShadow" : ""}`}
      id="header"
    >
      <nav className="nav">
        <Link to="/">
          <motion.div
            whileHover={{ scale: 1.05 }}
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            className="nav__logo"
          >
            <img src="./images/logo.svg" alt="" />
            <motion.span
              initial={{ opacity: 0, y: 100 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 1 }}
            >
              {LOGO_NAME.map((letter) => {
                return letter;
              })}
            </motion.span>
          </motion.div>
        </Link>
        <div
          // show the navbar
          className={`nav__menu ${toggleNav ? "show-menu " : "hide-nav"}`}
          id="#nav-menu"
        >
          <ul className="nav__list grid">
            {NAV_ITEMS.map(({ name, icon }, i) => {
              return (
                <li className="nav__item" key={i}>
                  <NavLink
                    onClick={() => handleClick(false)}
                    to={`/${name}`}
                    className="nav__link"
                  >
                    <i className={`${icon} nav__icon`} />
                    <span>{name === "" ? "home" : name}</span>
                  </NavLink>
                </li>
              );
            })}
          </ul>
          <i
            className="uil uil-times nav__close"
            onClick={() => handleClick(false)}
          />
        </div>
        <div className="nav__btns">
          <div className="nav__toggle" onClick={() => handleClick(true)}>
            <i className="uil uil-apps"></i>
          </div>
        </div>
      </nav>
    </motion.header>
  );
};

export default Header;
