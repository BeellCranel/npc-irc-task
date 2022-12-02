import React from "react";
import { Outlet } from "react-router-dom";
import { useLocation } from "react-router-dom";

import Sidebar from "../../components/Sidebar/Sidebar";
import Header from "../../components/Header/Header";
import Footer from "../../components/Footer/Footer";

const AdminLayout = () => {
  const location = useLocation();
  const mainPanel = React.useRef(null);

  React.useEffect(() => {
    mainPanel.current.scrollTop = 0;
  }, [location]);

  return (
    <div className="wrapper">
      <Sidebar />
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
