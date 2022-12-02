import React from "react";
import { Routes, Route, Navigate } from "react-router-dom";

import Layout from "../../layouts/Layout/Layout";
import AdminLayout from "../../layouts/AdminLayout/AdminLayout";
import Tables from "../../views/Tables/Tables";
import Icons from "../../views/Icons/Icons";
import Typography from "../../views/Typography/Typography";

function App() {
  return (
    <div className="App">
      <Routes>
        <Route path="/" element={<Layout />}>
          <Route index element={<Navigate to="/admin/tables" replace />} />
          <Route path="admin" element={<AdminLayout />}>
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
