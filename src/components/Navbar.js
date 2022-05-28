import React, {useEffect, useState} from "react";
import { Link } from "gatsby";
import github from "img/github-icon.svg";
import logo from "img/logo.svg";
import logoInverse from "img/logo-inverse.svg";
import Button from "components/Button"

const Navbar = () => {

  const [active , setActive] = useState(false);
  const [navBarActiveClass, setNavBarActiveClass] = useState("");
  const [scroll , setScroll] = useState("");
  
  useEffect(()=>{
    window.addEventListener("scroll", changeBackground);
  },[])

  useEffect(()=> {
    active ? setNavBarActiveClass("is-active") : setNavBarActiveClass("")
  },[active]);

  const toggleHamburger = () => {
    setActive(!active);
  }

  const changeBackground = () => {
    if (window.scrollY >= 100) {
      setScroll("scrolled")
    } else {
      setScroll("")
    }
  }

  useEffect(() => {
    changeBackground()
  })


  return (
    <nav
      className={`navbar is-transparent ${scroll}`}
      role="navigation"
      aria-label="main-navigation"
    >
      <div className="container">
        <div className="navbar-brand">
          <Link to="/" className="navbar-item logo" title="Logo">
            {scroll === "scrolled" ? (
              <img src={logoInverse} alt="contourna-logo-inverse" style={{ width: "190px" }} />
            ) : (
              <img src={logo} alt="contourna-logo" style={{ width: "190px" }} />
            ) }
          </Link>
          {/* Hamburger menu */}
          <div
            className={`navbar-burger burger ${navBarActiveClass}`}
            data-target="navMenu"
            role="menuitem"
            tabIndex={0}
            onKeyPress={() => this.toggleHamburger()}
            onClick={() => this.toggleHamburger()}
          >
            <span />
            <span />
            <span />
          </div>
        </div>
        <div
          id="navMenu"
          className={`navbar-menu ${navBarActiveClass}`}
        >
          <div className="navbar-start has-text-centered">
            <Link className="navbar-item" to="/about">
              About
            </Link>
            <Link className="navbar-item" to="/blog">
              Blog
            </Link>
            <Link className="navbar-item" to="/contact">
              Contact
            </Link>
            <Button title="Get A Free Quote" path="/quote" type="primary" /> 
          </div>
        </div>
      </div>
    </nav>
  );
  
};

export default Navbar;
