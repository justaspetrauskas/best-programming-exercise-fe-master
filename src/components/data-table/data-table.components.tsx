import React, { useEffect, useState } from "react";
import { TableData } from "../../common/interfaces/table.interfaces";
import DataTableItem from "./data-table-item/data-table-item.component";
import DataTableHead from "./data-table-head/DataTableHead";

interface DataTableProps {
  tableData: TableData;
}

const DataTable = ({ tableData }: DataTableProps) => {
  useEffect(() => {}, []);

  const { results } = tableData;

  return (
    <div className="inline-block min-w-full shadow rounded-lg overflow-hidden">
      <table className="min-w-full leading-normal">
        <DataTableHead />
        <tbody className="table-wrapper">
          {results.map((character) => (
            <tr key={character.id} className="bg-white font-semibold">
              <DataTableItem character={character} />
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
};

export default DataTable;
