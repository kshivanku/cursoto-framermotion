import React from "react";

const Header = () => {
  return (
    <header>
      <div className="header-inner">
        <div className="header-inner-logo">
          <h3>cursoto</h3>
        </div>
        <div className="header-inner-nav">
          <ul>
            <li>showreel</li>
            <li className="menu">
              <p>menu</p>
              <div className="menu-icon">
                <div></div>
                <div></div>
              </div>
            </li>
          </ul>
        </div>
      </div>
    </header>
  );
};

export default Header;
