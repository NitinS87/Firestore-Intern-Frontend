import React from "react";
import { DataGrid } from "@mui/x-data-grid";

const MainTable = ({ data }) => {
  // console.log(data);
  const columns = [
    {
      field: "id",
      headerName: "ID",
      width: 70,
    },
    { field: "first_name", headerName: "First Name", width: 130 },
    { field: "last_name", headerName: "Last Name", width: 130 },
    { field: "email", headerName: "Email", width: 200 },
    { field: "gender", headerName: "Gender", width: 80 },
    {
      field: "age",
      headerName: "Age",
      type: "number",
      width: 90,
    },
    { field: "country", headerName: "Country", width: 130 },
    { field: "university", headerName: "University", width: 200 },
    {
      field: "year_of_grad",
      headerName: "Year of Graduation",
      type: "number",
      width: 130,
    },
  ];

  return (
    <div style={{ height: 640, width: "80%" }} className="mx-auto mt-4">
      {data.length > 2 ? (
        <DataGrid
          className="px-3"
          rows={data
            .sort(function (a, b) {
              return a.id - b.id;
            })
            .map((item, index) => {
              // console.log(item);
              return { id: index + 1, ...item };
            })}
          columns={columns}
          pageSize={10}
          rowsPerPageOptions={[10]}
          autoHeight
        />
      ) : (
        <DataGrid
          className="px-3"
          rows={data.map((item, index) => {
            // console.log(item);
            return { id: index + 1, ...item };
          })}
          columns={columns}
          pageSize={10}
          rowsPerPageOptions={[10]}
          autoHeight
        />
      )}
    </div>
  );
};

export default MainTable;
