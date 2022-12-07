import React, { useState, useEffect, useRef } from "react";
import { Routes, Route, Navigate } from "react-router-dom";

import Layout from "../../layouts/Layout/Layout";
import AdminLayout from "../../layouts/AdminLayout/AdminLayout";
import Tables from "../../views/Tables/Tables";
import Icons from "../../views/Icons/Icons";
import Typography from "../../views/Typography/Typography";

import {
  getCars,
  postCar,
  editCar,
  deleteCar,
  getCarsInfo,
  postCarInfo,
  editCarInfo,
  deleteCarInfo,
} from "../../api/";

function App() {
  const [sidebarState, setSidebarState] = useState(false);
  const [editPopupState, setEditPopupState] = useState(false);
  const [postPopupState, setPostPopupState] = useState(false);
  const [buttonsState, setButtonsState] = useState(true);
  const [currentCarInfo, setCurrentCarInfo] = useState();
  const [carsIdData, setCarsIdData] = useState();
  const [infoCarsData, setInfoCarsData] = useState();

  const gridApi = useRef();

  useEffect(() => {
    getCars()
      .then((data) => {
        setCarsIdData(data.map((item) => item.id));
      })
      .catch((e) => {
        console.log(e);
      });
    getCarsInfoHandler();
  }, []);

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
    const selectedNode = gridApi.current.api.getSelectedNodes()[0];
    setCurrentCarInfo(selectedNode.data);
    setEditPopupState(true);
  };

  const openPostPopupStateHandler = () => {
    setPostPopupState(true);
  };

  const getCarsInfoHandler = () => {
    getCarsInfo()
      .then((infoCarsData) => {
        setInfoCarsData(infoCarsData);
      })
      .catch((err) => {
        console.log(err);
      });
  };

  const postCarInfoSubmit = (current, data) => {
    postCarInfo(data)
      .then((data) => {
        getCarsInfoHandler();
        closeAllPopup();
      })
      .catch((err) => {
        console.log(err);
      });
  };

  const editCarInfoSubmit = (current, data) => {
    if (
      (parseInt(data.editCarId) === current.CarId) &
        (data.editTitle === current.title) &&
      data.editDescription === current.description
    ) {
      closeAllPopup();
      return;
    }

    let result = {};

    if (parseInt(data.editCarId) !== current.CarId) {
      result.CarId = parseInt(data.editCarId);
    }
    if (data.editTitle !== current.title) {
      result.title = data.editTitle;
    }
    if (data.editDescription !== current.description) {
      result.description = data.editDescription;
    }
    editCarInfo(current.id, result)
      .then((data) => {
        getCarsInfoHandler();
        closeAllPopup();
      })
      .catch((err) => {
        console.log(err);
      });
  };

  const deleteCarInfoHandler = () => {
    const selectedNode = gridApi.current.api.getSelectedNodes()[0];
    const id = selectedNode.data.id;

    deleteCarInfo(id)
      .then(() => {
        getCarsInfoHandler();
        closeAllPopup();
        setButtonsState(true);
      })
      .catch((err) => {
        console.log(err);
      });
  };

  const deselectCarsInfo = () => {
    setButtonsState(true);
    setCurrentCarInfo(null);
    gridApi.current.api.deselectAll();
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
                  gridApi={gridApi}
                  currentCarInfo={currentCarInfo}
                  carsIdData={carsIdData}
                  infoCarsData={infoCarsData}
                  editPopupState={editPopupState}
                  openEditPopupStateHandler={openEditPopupStateHandler}
                  postPopupState={postPopupState}
                  openPostPopupStateHandler={openPostPopupStateHandler}
                  buttonsState={buttonsState}
                  setButtonsState={setButtonsState}
                  deselectCarsInfo={deselectCarsInfo}
                  deleteCarInfoHandler={deleteCarInfoHandler}
                  onClose={closeAllPopup}
                  editCarInfoSubmit={editCarInfoSubmit}
                  postCarInfoSubmit={postCarInfoSubmit}
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
