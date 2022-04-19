import { useQuery } from "@apollo/client";
import React, { useEffect, useState } from "react";
import DataTable from "../../components/data-table/data-table.components";
import LoadingComponent from "../../components/loading/Loading.components";
import ErrorComponent from "../../components/error/Error.components";
import DataTablePagination from "../../components/data-table/data-table-pagination/DataTablePagination";
import SearchBar from "../../components/data-table/data-table-search/DataTableSearch";

import { ALL_CHARACTERS } from "../../graphQL/queries";

import "./home.page.css";

const Home = () => {
  const [currentPage, setCurrentPage] = useState<number>(1);
  const [searchQuery, setSearchQuery] = useState<string | null>(null);

  //const [loadingTest, setLoadingTest] = useState<boolean>(true);

  const { loading, error, data } = useQuery(ALL_CHARACTERS, {
    variables: { page: currentPage, filter: { name: searchQuery } },
  });

  useEffect(() => {
    if (searchQuery && searchQuery.length < 1) {
      setSearchQuery(null);
      setCurrentPage(1);
    }
  }, [searchQuery]);

  const gotToPage = (number: any) => {
    if (number > 0 && number < data.characters.info.pages)
      setCurrentPage(number);
    console.log(number);
  };

  const handleSearch = (input: string) => {
    setCurrentPage(1);
    setSearchQuery(input);
  };

  return (
    <div className="container mx-auto px-4 sm:px-8">
      <div className="my-2 flex flex-col">
        <div className="py-6 text-center md:text-left">
          <h1 className="font-ricky ">Rick and Morty</h1>
        </div>
        <SearchBar handleSearch={handleSearch} />
        {loading && <LoadingComponent />}
        {data && <DataTable tableData={data.characters} />}
        {error && <ErrorComponent error={error} />}
      </div>
      {data && (
        <DataTablePagination
          dataInfo={data.characters.info}
          currentPage={currentPage}
          gotToPage={gotToPage}
        />
      )}
    </div>
  );
};

export default Home;
