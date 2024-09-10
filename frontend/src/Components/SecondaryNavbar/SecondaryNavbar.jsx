import React, { useState, useRef, useEffect } from "react";
import "./SecondaryNavbar.css";

function SecondaryNavbar({
  isSecondaryNavbarActive,
  setIsSecondaryNavbarActive,
}) {
  const [activeCategory, setActiveCategory] = useState("Menswear");
  const underlineRef = useRef(null);
  useEffect(() => {
    const activeItem = document.querySelector(".category-item.active");
    if (activeItem && underlineRef.current) {
      const { offsetLeft, clientWidth } = activeItem;
      underlineRef.current.style.width = `calc(${clientWidth}px)`;
      underlineRef.current.style.left = `calc(${offsetLeft}px)`;
    }
  }, [activeCategory]);

  useEffect(() => {
    if(isSecondaryNavbarActive){
      document.body.style.overflow = "hidden";
    }
    else{
      document.body.style.overflow = "";
    }
  }, [isSecondaryNavbarActive])

  useEffect(() => {
    function setDynamicHeight() {
      const vh = window.innerHeight * 0.01; 
      document.documentElement.style.setProperty('--vh', `${vh}px`);
    }
  
    setDynamicHeight();
  
    // Recalculate the height on resize (e.g., when the user scrolls or rotates the screen)
    window.addEventListener('resize', setDynamicHeight);
  
    return () => window.removeEventListener('resize', setDynamicHeight);
  }, []);

  return (
    <nav
      className={`secondary-navbar ${isSecondaryNavbarActive ? "active" : ""}`}
    >
      <div className="secondary-navbar-header">
        <div className="logo">KERIZIA</div>
        <i
          onClick={() => setIsSecondaryNavbarActive(false)}
          className="bx bx-x"
        ></i>
      </div>
      <div className="secondary-navbar-category">
        <ul className="category-items">
          <li
            onClick={() => setActiveCategory("Womenswear")}
            className={`category-item ${
              activeCategory === "Womenswear" ? "active" : ""
            }`}
          >
            WOMENSWEAR
          </li>
          <li
            onClick={() => setActiveCategory("Menswear")}
            className={`category-item ${
              activeCategory === "Menswear" ? "active" : ""
            }`}
          >
            MENSWEAR
          </li>
          <li
            onClick={() => setActiveCategory("Kidswear")}
            className={`category-item ${
              activeCategory === "Kidswear" ? "active" : ""
            }`}
          >
            KIDSWEAR
          </li>
          <div ref={underlineRef} className="underline"></div>
        </ul>
      </div>
      <div className="secondary-navbar-links">
        <ul className="nav-links">
          <li className="nav-link">{activeCategory} homepage</li>
          <li className="nav-link">
            <span className="link-title">20% off</span> 
            <i className='bx bx-chevron-right' ></i>
          </li>
          <li className="nav-link">
            <span className="link-title">New in</span> 
            <i className='bx bx-chevron-right' ></i>
          </li>
          <li className="nav-link">
            <span className="link-title">Brands</span> 
            <i className='bx bx-chevron-right' ></i>
          </li>
          <li className="nav-link">
            <span className="link-title">Clothing</span> 
            <i className='bx bx-chevron-right' ></i>
          </li>
          <li className="nav-link">
            <span className="link-title">Shoes</span> 
            <i className='bx bx-chevron-right' ></i>
          </li>
          <li className="nav-link">
            <span className="link-title">Accessories</span> 
            <i className='bx bx-chevron-right' ></i>
          </li>
          <li className="nav-link">
            <span className="link-title">Homeware</span> 
            <i className='bx bx-chevron-right' ></i>
          </li>
          <li className="nav-link">
            <span className="link-title">Sale</span> 
            <i className='bx bx-chevron-right' ></i>
          </li>
        </ul>
      </div>

      <div className="secondary-navbar-login-register">
        <div className="secondary-navbar-login-register-title">
          My Account
        </div>
        <div className="sign-in">
          <button>Sign In</button>
        </div>
        <div className="register">
          <button>Register</button>
        </div>
      </div>
    </nav>
  );
}

export default SecondaryNavbar;
