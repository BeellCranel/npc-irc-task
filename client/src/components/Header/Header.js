import React from "react";
import { useLocation } from "react-router-dom";
import "./Header.scss"

import routes from "../../vendor/routes";

const Header = () => {
  const location = useLocation();

  const getBrandText = () => {
    for (let i = 0; i < routes.length; i++) {
      if (location.pathname.indexOf(routes[i].layout + routes[i].path) !== -1) {
        return routes[i].name;
      }
    }
    return "Brand";
  };

  return (
    <div className="header">
      <div className="header__title">{getBrandText()}</div>
    </div>
  );
};

export default Header;
