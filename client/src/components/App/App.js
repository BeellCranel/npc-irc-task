import React, { useState, useEffect, useRef } from "react";
import { Routes, Route, Navigate } from "react-router-dom";

import Layout from "../../layouts/Layout/Layout";
import AdminLayout from "../../layouts/AdminLayout/AdminLayout";
import Tables from "../../views/Tables/Tables";
import Icons from "../../views/Icons/Icons";
import Typography from "../../views/Typography/Typography";

import { getCars, getCarsInfo } from "../../api/";

function App() {
  const [sidebarState, setSidebarState] = useState(false);
  const [editPopupState, setEditPopupState] = useState(false);
  const [postPopupState, setPostPopupState] = useState(false);
  const [buttonsState, setButtonsState] = useState(true);

  const [carsData, setCarsData] = useState();
  const [currentCar, setCurrentCar] = useState();
  const [infoCarsData, setInfoCarsData] = useState();

  const gridCarsApi = useRef();

  const closeAllPopup = () => {
    setEditPopupState(false);
    setPostPopupState(false);
  };

  const openSidebarHandler = () => {
    setSidebarState(true);
    const node = document.createElement("div");
    node.id = "bodyClick";
    node.onclick = function () {
      this.parentElement.removeChild(this);
      setSidebarState(false);
    };
    document.body.appendChild(node);
  };

  const openEditPopupStateHandler = () => {
    const selectedNode = gridCarsApi.current.api.getSelectedNodes()[0];
    setCurrentCar(selectedNode.data);
    setEditPopupState(true);
  };

  const openPostPopupStateHandler = () => {
    setPostPopupState(true);
  };

  const deselectCars = () => {
    const selectedNode = gridCarsApi.current.api.getSelectedNodes()[0];
    console.log(selectedNode.data);
    setButtonsState(true);
    gridCarsApi.current.api.deselectAll();
  };

  const deleteCar = () => {
    setButtonsState(true);
    gridCarsApi.current.api.deselectAll();
  };

  useEffect(() => {
    Promise.all([getCars(), getCarsInfo()])
      .then(([carsData, infoCarsData]) => {
        setCarsData(carsData);
        setInfoCarsData(infoCarsData);
      })
      .catch((err) => {
        console.log(err);
      });
  }, []);

  const editCarSubmit = (data) => {
    alert("SUCCESS!! :-)\n\n" + JSON.stringify(data, null, 4));
  };

  const postCarSubmit = (data) => {
    alert("SUCCESS!! :-)\n\n" + JSON.stringify(data, null, 4));
  };

  return (
    <div className="App">
      <Routes>
        <Route path="/" element={<Layout />}>
          <Route index element={<Navigate to="/admin/tables" replace />} />
          <Route
            path="admin"
            element={
              <AdminLayout
                sidebarState={sidebarState}
                openSidebarHandler={openSidebarHandler}
                setSidebarState={setSidebarState}
              />
            }
          >
            <Route
              path="tables"
              element={
                <Tables
                  gridCarsApi={gridCarsApi}
                  carsData={carsData}
                  currentCar={currentCar}
                  infoCarsData={infoCarsData}
                  editPopupState={editPopupState}
                  openEditPopupStateHandler={openEditPopupStateHandler}
                  postPopupState={postPopupState}
                  openPostPopupStateHandler={openPostPopupStateHandler}
                  buttonsState={buttonsState}
                  setButtonsState={setButtonsState}
                  deselectCars={deselectCars}
                  deleteCar={deleteCar}
                  onClose={closeAllPopup}
                  editCarSubmit={editCarSubmit}
                  postCarSubmit={postCarSubmit}
                />
              }
            />
            <Route path="icons" element={<Icons />} />
            <Route path="typography" element={<Typography />} />
          </Route>
        </Route>
      </Routes>
    </div>
  );
}

export default App;
