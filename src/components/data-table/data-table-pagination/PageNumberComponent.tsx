import React from "react";
import "./dataTablePagination.css";

interface PageNumberComponentProps {
  currentPage?: number;
  number?: number;
  gotToPage?: (page: number) => void;
  notANumber?: boolean;
}
const PageNumberComponent = ({
  currentPage,
  number,
  gotToPage,
  notANumber = false,
}: PageNumberComponentProps) => {
  return (
    <li
      className={`page-item ${
        currentPage === number && !notANumber && "active-page"
      } `}
    >
      {number && gotToPage && (
        <span className="page-link" onClick={() => gotToPage(number)}>
          {number}
        </span>
      )}
      {notANumber && <span className="page-link">...</span>}
    </li>
  );
};

export default PageNumberComponent;
