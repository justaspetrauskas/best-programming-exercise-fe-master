import React, { useEffect, useState } from "react";

interface DataTableSearchProps {
  input?: string;
  handleSearch: (input: string) => void;
}

const DataTableSearch = ({ handleSearch }: DataTableSearchProps) => {
  const [searchInput, setSearchInput] = useState("");

  // useEffect(() => {
  //   if (searchInput.length < 1) {
  //     console.log("No search input provided");
  //   }
  // }, [searchInput]);

  const handleSearchInput = (e: React.ChangeEvent<HTMLInputElement>) => {
    const inputValue = e.currentTarget.value;
    setSearchInput(inputValue);
    handleSearch(searchInput);
  };

  return (
    <div className="flex justify-center">
      <div className="mb-3 w-full xl:w-96 flex flex-row">
        <div className="relative flex flex-row flex-wrap items-stretch w-full mb-4 transition-shadow duration-700 hover:shadow-[0_0px_5px_0px_rgba(199,250,108,0.6)] rounded-full">
          <input
            type="search"
            className="relative flex-auto min-w-0 inline-block px-3 py-1.5 text-base font-normal text-gray-700 bg-white bg-clip-padding border border-solid border-border-[rgba(53,201,221,0.7)] rounded-l-full transition ease-in-out m-0 focus:text-gray-700 focus:bg-white focus:border-[rgba(53,201,221,1)] focus:outline-none"
            placeholder="Search for Character"
            aria-label="Search"
            onChange={handleSearchInput}
            value={searchInput}
          />
          <span className=" px-6 py-2.5 bg-[rgba(53,201,221,1)] text-white font-medium text-xs leading-tight uppercase rounded-r-full  transition flex items-center">
            <svg
              aria-hidden="true"
              focusable="false"
              data-prefix="fas"
              data-icon="search"
              className="w-4"
              role="img"
              xmlns="http://www.w3.org/2000/svg"
              viewBox="0 0 512 512"
            >
              <path
                fill="currentColor"
                d="M505 442.7L405.3 343c-4.5-4.5-10.6-7-17-7H372c27.6-35.3 44-79.7 44-128C416 93.1 322.9 0 208 0S0 93.1 0 208s93.1 208 208 208c48.3 0 92.7-16.4 128-44v16.3c0 6.4 2.5 12.5 7 17l99.7 99.7c9.4 9.4 24.6 9.4 33.9 0l28.3-28.3c9.4-9.4 9.4-24.6.1-34zM208 336c-70.7 0-128-57.2-128-128 0-70.7 57.2-128 128-128 70.7 0 128 57.2 128 128 0 70.7-57.2 128-128 128z"
              ></path>
            </svg>
          </span>
        </div>
      </div>
    </div>
  );
};

export default DataTableSearch;
