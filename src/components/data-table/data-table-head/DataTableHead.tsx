import React from "react";
import ThLayout from "../table-layout-elements/th-layout";

const dataTitles = [
  "Name",
  "Gender",
  "Status",
  "Species",
  "Last Location",
  "Episodes",
];

const DataTableHead = () => {
  return (
    <thead>
      <tr>
        {dataTitles.map((title, index) => (
          <ThLayout title={title} key={index} />
        ))}
      </tr>
    </thead>
  );
};

export default DataTableHead;
