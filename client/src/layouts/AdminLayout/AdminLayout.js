import React from "react";
import { Outlet } from "react-router-dom";

import Sidebar from "../../components/Sidebar/Sidebar";
import Header from "../../components/Header/Header";
import Footer from "../../components/Footer/Footer";

const AdminLayout = ({ sidebarOpen, sidebarOpenHandler, mainPanel }) => {
  return (
    <div className="wrapper">
      <Sidebar
        sidebarOpen={sidebarOpen}
        sidebarOpenHandler={sidebarOpenHandler}
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
