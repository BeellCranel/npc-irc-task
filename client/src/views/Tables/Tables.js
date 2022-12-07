import React, { useState, useMemo, useCallback } from "react";

import { AgGridReact } from "ag-grid-react";
import "ag-grid-community/styles/ag-grid.css";
import "ag-grid-community/styles/ag-theme-alpine.css";

import { Block, Button, ButtonsGroup } from "../../ui-kit";
import EditFormPopup from "../../components/EditFormPopup/EditFormPopup";
import PostFormPopup from "../../components/PostFormPopup/PostFormPopup";

import { getCars } from "../../api";

const Tables = ({
  gridApi,
  currentCarInfo,
  carsIdData,
  infoCarsData,
  editPopupState,
  openEditPopupStateHandler,
  postPopupState,
  openPostPopupStateHandler,
  buttonsState,
  setButtonsState,
  deselectCarsInfo,
  deleteCarInfoHandler,
  onClose,
  editCarInfoSubmit,
  postCarInfoSubmit,
}) => {
  const [carsColumnDefs] = useState([
    {
      headerName: "Row number",
      maxWidth: 100,
      valueGetter: "node.id",
      cellRenderer: (props) => {
        if (props.value !== undefined) {
          return props.value;
        } else {
          return (
            <img
              src="https://www.ag-grid.com/example-assets/loading.gif"
              alt="loader"
            />
          );
        }
      },
    },
    { headerName: "Car Id", field: "id" },
    { field: "name" },
    { field: "price" },
    { field: "type" },
    { field: "brand" },
    { field: "buildDate" },
  ]);

  const [infoCarsColumnDefs] = useState([
    { field: "CarId", maxWidth: 130 },
    { field: "title", maxWidth: 200 },
    { field: "description" },
  ]);

  const defaultColDefCars = useMemo(() => {
    return {
      flex: 1,
      resizable: true,
      minWidth: 130,
      wrapText: true,
    };
  }, []);

  const defaultColDefCarsInfo = useMemo(() => {
    return {
      flex: 1,
      sortable: true,
      filter: true,
      resizable: true,
      wrapText: true,
    };
  }, []);

  const onGridReady = (params) => {
    getCars()
      .then((data) => {
        const dataSource = {
          rowCount: undefined,
          getRows: (params) => {
            // To make the demo look real, wait for 500ms before returning
            setTimeout(function () {
              // take a slice of the total rows
              const rowsThisPage = data.slice(params.startRow, params.endRow);
              // if on or after the last page, work out the last row.
              let lastRow = -1;
              if (data.length <= params.endRow) {
                lastRow = data.length;
              }
              // call the success callback
              params.successCallback(rowsThisPage, lastRow);
            }, 500);
          },
        };
        params.api.setDatasource(dataSource);
      })
      .catch((err) => {
        console.log(err);
      });
  };

  return (
    <>
      <EditFormPopup
        isOpen={editPopupState}
        onClose={onClose}
        currentCarInfo={currentCarInfo}
        submitHandler={editCarInfoSubmit}
        carsIdData={carsIdData}
      />
      <PostFormPopup
        isOpen={postPopupState}
        onClose={onClose}
        submitHandler={postCarInfoSubmit}
        carsIdData={carsIdData}
      />
      <Block title="Cars" subtitle="Here is a subtitle for this table">
        <div
          className="ag-theme-alpine"
          style={{
            height: 400,
          }}
        >
          <AgGridReact
            rowModelType={"infinite"}
            onGridReady={onGridReady}
            columnDefs={carsColumnDefs}
            animateRows={true}
            defaultColDef={defaultColDefCars}
          />
        </div>
      </Block>
      <Block title="Cars info" subtitle="Here is a subtitle for this table">
        <div
          className="ag-theme-alpine"
          style={{
            height: 600,
          }}
        >
          <AgGridReact
            onRowClicked={(e) => setButtonsState(false)}
            ref={gridApi}
            rowData={infoCarsData}
            rowModelType="clientSide"
            columnDefs={infoCarsColumnDefs}
            animateRows={true}
            rowSelection="single"
            popupParent={document.body}
            defaultColDef={defaultColDefCarsInfo}
            rowHeight={120}
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
          <Button
            onClick={deleteCarInfoHandler}
            type="button"
            isDisabled={buttonsState}
          >
            Delete
          </Button>
          <Button
            onClick={deselectCarsInfo}
            type="button"
            isDisabled={buttonsState}
          >
            Deselect
          </Button>
        </ButtonsGroup>
      </Block>
    </>
  );
};

export default Tables;
