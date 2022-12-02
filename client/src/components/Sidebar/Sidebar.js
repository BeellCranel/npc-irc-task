import React from "react";
import { NavLink } from "react-router-dom";
import clsx from "clsx";
import "./Sidebar.scss";

import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faTableList,
  faIcons,
  faNewspaper,
} from "@fortawesome/free-solid-svg-icons";

import logo from "../../vendor/img/reactlogo.png";

const Sidebar = () => {
  return (
    <div className="sidebar">
      <div className="sidebar__background" />
      <div className="sidebar__wrapper">
        <img className="sidebar__logo" src={logo} alt="logo" />
        <div className="sidebar__title">technical task</div>
      </div>
      <nav className="nav sidebar__nav">
        <ul className="list">
          <li>
            <NavLink
              to="/admin/tables"
              className={({ isActive }) =>
                clsx("navLink", {
                  navLink__active: isActive,
                })
              }
            >
              <FontAwesomeIcon icon={faTableList} size="lg" />
              table list
            </NavLink>
          </li>
          <li>
            <NavLink
              to="/admin/icons"
              className={({ isActive }) =>
                clsx("navLink", {
                  navLink__active: isActive,
                })
              }
            >
              <FontAwesomeIcon icon={faIcons} size="lg" />
              icons
            </NavLink>
          </li>
          <li>
            <NavLink
              to="/admin/typography"
              className={({ isActive }) =>
                clsx("navLink", {
                  navLink__active: isActive,
                })
              }
            >
              <FontAwesomeIcon icon={faNewspaper} size="lg" />
              typography
            </NavLink>
          </li>
        </ul>
      </nav>
    </div>
  );
};

export default Sidebar;
