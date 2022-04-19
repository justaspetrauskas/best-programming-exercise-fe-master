import React, { useEffect, useState } from "react";
import PageNumberComponent from "./PageNumberComponent";
import { Info } from "../../../common/interfaces/table.interfaces";

import "./dataTablePagination.css";

interface DataTablePaginationProps {
  pagesCount: number;
  currentPage: number;
  gotToPage: (page: number) => void;
  rowsPerPage?: number;
}

const DataTablePagination = ({
  pagesCount,
  currentPage,
  gotToPage,
}: DataTablePaginationProps) => {
  const pagesNumbers: number[] = [];
  for (let i = 1; i <= pagesCount - 1; i++) {
    pagesNumbers.push(i);
  }

  return (
    <div className="flex flex-row my-6 justify-center space-x-1 items-center w-full">
      <button
        className={` ${
          currentPage < 2 ? "disabled-control" : "control-button"
        } `}
        onClick={() => gotToPage(currentPage - 1)}
        disabled={currentPage < 2}
      >
        <svg
          className="h-5 w-5 mr-2"
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
        {pagesCount > 5 && (
          <>
            <PageNumberComponent
              currentPage={currentPage}
              number={1}
              gotToPage={gotToPage}
            />
            {pagesNumbers
              .slice(
                currentPage < 4 ? 0 : currentPage - 4,
                currentPage > pagesNumbers.length - 4
                  ? pagesNumbers.length
                  : currentPage + 4
              )
              .map((number) => {
                if (number > 1 && number < pagesNumbers.length) {
                  if (
                    number === currentPage + 4 ||
                    number === currentPage - 3
                  ) {
                    return (
                      <PageNumberComponent key={number} notANumber={true} />
                    );
                  }

                  return (
                    <PageNumberComponent
                      key={number}
                      currentPage={currentPage}
                      number={number}
                      gotToPage={gotToPage}
                    />
                  );
                }
              })}
            {pagesCount <= 5 &&
              pagesNumbers.map((number) => (
                <PageNumberComponent
                  key={number}
                  currentPage={currentPage}
                  number={number}
                  gotToPage={gotToPage}
                />
              ))}
            <PageNumberComponent
              currentPage={currentPage}
              number={pagesNumbers.length}
              gotToPage={gotToPage}
            />
          </>
        )}
      </ul>
      <button
        className={` ${
          currentPage > pagesNumbers.length - 1
            ? "disabled-control"
            : "control-button"
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
