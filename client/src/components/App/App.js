import React from "react";
import { Routes, Route, Navigate, useLocation } from "react-router-dom";

import Layout from "../../layouts/Layout/Layout";
import AdminLayout from "../../layouts/AdminLayout/AdminLayout";
import Tables from "../../views/Tables/Tables";
import Icons from "../../views/Icons/Icons";
import Typography from "../../views/Typography/Typography";

function App() {
  const [sidebarOpen, setSidebarOpen] = React.useState(false);
  const location = useLocation();
  const mainPanel = React.useRef(null);

  const sidebarOpenHandler = (e) => {
    e.preventDefault();
    setSidebarOpen(true);
    const node = document.createElement("div");
    node.id = "bodyClick";
    node.onclick = function () {
      this.parentElement.removeChild(this);
      setSidebarOpen(false);
    }
    document.body.appendChild(node);
  };

  React.useEffect(() => {
    mainPanel.current.scrollTop = 0;
    setSidebarOpen(false);
    if (
      window.innerWidth < 993 &&
      document.querySelector(".sidebar__sticker").className.indexOf("sidebar__stickerOpened") !== -1
    ) {
      document.documentElement.classList.toggle("nav-open");
      var element = document.getElementById("bodyClick");
      element.parentNode.removeChild(element);
    }
  }, [location]);

  return (
    <div className="App">
      <Routes>
        <Route path="/" element={<Layout />}>
          <Route index element={<Navigate to="/admin/tables" replace />} />
          <Route
            path="admin"
            element={<AdminLayout sidebarOpen={sidebarOpen} sidebarOpenHandler={sidebarOpenHandler} mainPanel={mainPanel} />}
          >
            <Route path="tables" element={<Tables />} />
            <Route path="icons" element={<Icons />} />
            <Route path="typography" element={<Typography />} />
          </Route>
        </Route>
      </Routes>
    </div>
  );
}

export default App;
