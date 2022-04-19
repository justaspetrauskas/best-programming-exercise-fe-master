import React from "react";
import PageNumberComponent from "./PageNumberComponent";
import { Info } from "../../../common/interfaces/table.interfaces";

import "./dataTablePagination.css";

interface DataTablePaginationProps {
  dataInfo: Info;
  currentPage: number;
  gotToPage: (page: number) => void;
  rowsPerPage?: number;
}

const DataTablePagination = ({
  dataInfo,
  currentPage,
  gotToPage,
}: DataTablePaginationProps) => {
  const pageNumbers = [];

  const { pages } = dataInfo;

  for (let i = 1; i <= pages; i++) {
    pageNumbers.push(i);
  }
  console.log(dataInfo);
  return (
    <div className="flex flex-row my-6 justify-around items-center">
      <button
        className={`control-button ${currentPage > 1 && "hover:bg-gray-100"} `}
        onClick={() => gotToPage(currentPage - 1)}
        disabled={currentPage < 2}
      >
        <svg
          className="h-5 w-5"
          xmlns="http://www.w3.org/2000/svg"
          viewBox="0 0 20 20"
          fill="currentColor"
          aria-hidden="true"
        >
          <path
            fillRule="evenodd"
            d="M12.707 5.293a1 1 0 010 1.414L9.414 10l3.293 3.293a1 1 0 01-1.414 1.414l-4-4a1 1 0 010-1.414l4-4a1 1 0 011.414 0z"
            clipRule="evenodd"
          />
        </svg>
        <span className="">Back</span>
      </button>
      <ul className="flex flex-row items-center space-x-1">
        {pageNumbers.length >= 5
          ? pageNumbers
              .slice(
                currentPage < 3 ? 0 : currentPage - 3,
                currentPage > pages - 3 ? 0 : currentPage + 3
              )
              .map((number) => (
                <PageNumberComponent
                  key={number}
                  currentPage={currentPage}
                  number={number}
                  gotToPage={gotToPage}
                />
              ))
          : pageNumbers.map((number) => (
              <PageNumberComponent
                key={number}
                currentPage={currentPage}
                number={number}
                gotToPage={gotToPage}
              />
            ))}
      </ul>
      <button
        className={`control-button ${
          currentPage < pages && "hover:bg-gray-100"
        } `}
        onClick={() => gotToPage(currentPage + 1)}
      >
        <span className="">Next</span>
        <svg
          className="h-5 w-5"
          xmlns="http://www.w3.org/2000/svg"
          viewBox="0 0 20 20"
          fill="currentColor"
          aria-hidden="true"
        >
          <path
            fillRule="evenodd"
            d="M7.293 14.707a1 1 0 010-1.414L10.586 10 7.293 6.707a1 1 0 011.414-1.414l4 4a1 1 0 010 1.414l-4 4a1 1 0 01-1.414 0z"
            clipRule="evenodd"
          />
        </svg>
      </button>
    </div>
  );
};

export default DataTablePagination;
