import React, {
  useState,
  useRef,
  useEffect,
  useMemo,
  useCallback,
  memo,
} from "react";
import Block from "../../components/Block/Block";
import { BASE_URL } from "../../api/api";

import { AgGridReact } from "ag-grid-react";
import "ag-grid-community/styles/ag-grid.css";
import "ag-grid-community/styles/ag-theme-alpine.css";

const MyComp = (params) => {
  const renderCountRf = useRef(1);

  return <>{params.value}</>;
};

const Tables = () => {
  const [rowData, setRowData] = useState();
  const gridApi = useRef();

  const [columnDefs, setColumnDefs] = useState([
    { field: "name" },
    { field: "price" },
    { field: "type" },
    { field: "brand" },
    { field: "buildDate" },
  ]);

  const defaultColDef = useMemo(
    () => ({
      flex: 1,
      sortable: true,
      filter: true,
      cellRenderer: memo(MyComp),
    }),
    []
  );

  const cellClickedListener = useCallback((e) => {
    console.log("cellClicked", e);
  });

  const getCars = async () => {
    try {
      let result = await fetch(`${BASE_URL}/cars`, {
        method: "GET",
        headers: {
          Accept: "application/json",
          "Content-Type": "application/json",
        },
      });
      let data = await result.json();
      setRowData(data);
    } catch (e) {
      console.log(e);
    }
  };

  useEffect(() => {
    getCars();
    // setInterval(() => {
    //   getCars();
    // }, 3000);
  }, []);

  // const pushMeClicked = useCallback((e) => {
  //   gridApi.current.api.deselectAll();
  // });

  return (
    <>
      <Block>
        <div
          className="ag-theme-alpine"
          style={{
            height: "300px",
          }}
        >
          <AgGridReact
            ref={gridApi}
            onCellClicked={cellClickedListener}
            rowData={rowData}
            columnDefs={columnDefs}
            defaultColDef={defaultColDef}
            rowSelection="multiple"
            animateRows={true}
            popupParent={document.body}
          />
        </div>
      </Block>
    </>
  );
};

export default Tables;
