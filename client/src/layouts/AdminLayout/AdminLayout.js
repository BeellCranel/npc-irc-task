import React from "react";
import { Outlet, useLocation } from "react-router-dom";

import Sidebar from "../../components/Sidebar/Sidebar";
import Header from "../../components/Header/Header";
import Footer from "../../components/Footer/Footer";

const AdminLayout = ({ sidebarState, openSidebarHandler, setSidebarState }) => {
  const location = useLocation();
  const mainPanel = React.useRef(null);
  React.useEffect(() => {
    mainPanel.current.scrollTop = 0;
    setSidebarState(false);
    if (
      window.innerWidth < 993 &&
      document
        .querySelector(".sidebar__sticker")
        .className.indexOf("sidebar__stickerOpened") !== -1
    ) {
      document.documentElement.classList.toggle("nav-open");
      var element = document.getElementById("bodyClick");
      element.parentNode.removeChild(element);
    }
  }, [location]);

  return (
    <div className="wrapper">
      <Sidebar
        sidebarOpen={sidebarState}
        sidebarOpenHandler={openSidebarHandler}
      />
      <div className="main-panel" ref={mainPanel}>
        <Header />
        <div className="content">
          <Outlet />
        </div>
        <Footer />
      </div>
    </div>
  );
};

export default AdminLayout;
