import React from "react";
import { NavLink } from "react-router-dom";

import "./header.css";

const Header = () => {
  return (
    <div className="header d-flex">
      <h3>
        <NavLink to="/">Star DB</NavLink>
      </h3>
      <ul className="d-flex">
        <li>
          <NavLink to="/people" activeClassName="now">
            People
          </NavLink>
        </li>
        <li>
          <NavLink to="/planets" activeClassName="now">
            Planets
          </NavLink>
        </li>
        <li>
          <NavLink to="/starships" activeClassName="now">
            Starships
          </NavLink>
        </li>
      </ul>
    </div>
  );
};

export default Header;
