import React, { useState, useMemo, useCallback } from "react";

import { AgGridReact } from "ag-grid-react";
import "ag-grid-community/styles/ag-grid.css";
import "ag-grid-community/styles/ag-theme-alpine.css";

import { Block, Button, ButtonsGroup } from "../../ui-kit";
import EditFormPopup from "../../components/EditFormPopup/EditFormPopup";
import PostFormPopup from "../../components/PostFormPopup/PostFormPopup";

const Tables = ({
  gridCarsApi,
  carsData,
  currentCar,
  infoCarsData,
  editPopupState,
  openEditPopupStateHandler,
  postPopupState,
  openPostPopupStateHandler,
  buttonsState,
  setButtonsState,
  deselectCars,
  deleteCar,
  onClose,
  editCarSubmit,
  postCarSubmit,
}) => {
  const [carsColumnDefs] = useState([
    { field: "id" },
    { field: "name" },
    { field: "price" },
    { field: "type" },
    { field: "brand" },
    { field: "buildDate" },
  ]);

  const [infoCarsColumnDefs] = useState([
    { field: "CarId" },
    { field: "title" },
    { field: "description" },
  ]);

  const defaultColDef = useMemo(() => {
    return {
      flex: 1,
      sortable: true,
      filter: true,
      resizable: true,
      minWidth: 130,
      wrapText: true,
    };
  }, []);

  return (
    <>
      <EditFormPopup
        isOpen={editPopupState}
        onClose={onClose}
        currentCar={currentCar}
        submitHandler={editCarSubmit}
      />
      <PostFormPopup
        isOpen={postPopupState}
        onClose={onClose}
        submitHandler={postCarSubmit}
      />
      <Block title="Cars" subtitle="Here is a subtitle for this table">
        <div
          className="ag-theme-alpine"
          style={{
            height: "300px",
          }}
        >
          <AgGridReact
            onRowClicked={(e) => setButtonsState(false)}
            ref={gridCarsApi}
            rowData={carsData}
            columnDefs={carsColumnDefs}
            animateRows={true}
            rowSelection="single"
            popupParent={document.body}
            defaultColDef={defaultColDef}
          />
        </div>
        <ButtonsGroup>
          <Button onClick={openPostPopupStateHandler} type="button">
            Post
          </Button>
          <Button
            onClick={openEditPopupStateHandler}
            type="button"
            isDisabled={buttonsState}
          >
            Edit
          </Button>
          <Button onClick={deleteCar} type="button" isDisabled={buttonsState}>
            Delete
          </Button>
          <Button
            onClick={deselectCars}
            type="button"
            isDisabled={buttonsState}
          >
            Deselect
          </Button>
        </ButtonsGroup>
      </Block>
      <Block title="Cars info" subtitle="Here is a subtitle for this table">
        <div
          className="ag-theme-alpine"
          style={{
            height: "300px",
          }}
        >
          <AgGridReact
            rowData={infoCarsData}
            columnDefs={infoCarsColumnDefs}
            animateRows={true}
            popupParent={document.body}
            defaultColDef={defaultColDef}
            rowHeight={120}
          />
        </div>
      </Block>
    </>
  );
};

export default Tables;
