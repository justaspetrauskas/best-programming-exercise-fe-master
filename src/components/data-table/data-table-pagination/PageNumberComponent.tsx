import React from "react";
import "./dataTablePagination.css";

interface PageNumberComponentProps {
  currentPage: number;
  number: number;
  gotToPage: (page: number) => void;
}
const PageNumberComponent = ({
  currentPage,
  number,
  gotToPage,
}: PageNumberComponentProps) => {
  return (
    <li className={`page-item ${currentPage === number && "active-page"} `}>
      <span className="page-link" onClick={() => gotToPage(number)}>
        {number}
      </span>
    </li>
  );
};

export default PageNumberComponent;
