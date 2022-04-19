import React, { useState } from "react";
import { Episode } from "../../../common/interfaces/table.interfaces";
import Episodes from "./EpisodesComponent";

import ThLayout from "../table-layout-elements/th-layout";
import DataTablePagination from "../data-table-pagination/DataTablePagination";

interface EpisodeTableProps {
  episodeData: Episode[];
}

const episodeColumns = ["Name", "Season", "Episode"];

const EpisodeTable = ({ episodeData }: EpisodeTableProps) => {
  const [currentPage, setCurrentPage] = useState(1);
  const [episodesPerPage, setEpisodesPerPage] = useState(5);

  // Paginate episode results
  const indexOfLastEpisode = currentPage * episodesPerPage;
  const indexOfFirstEpisode = indexOfLastEpisode - episodesPerPage;
  const currentEpisodes = episodeData.slice(
    indexOfFirstEpisode,
    indexOfLastEpisode
  );

  // useEffect(() => {}, []);

  const gotToPage = (page: number) => {
    setCurrentPage(page);
  };

  console.log("Episode data", episodeData);

  return (
    <div className="block">
      <h2 className="text-2xl font-bold mb-4 border-b border-gray-600">
        Episodes
      </h2>
      <div className="py-4 max-w-xl">
        <table className="shadow-sm w-full">
          <thead>
            <tr>
              {episodeColumns.map((title, index) => (
                <ThLayout title={title} key={index} />
              ))}
            </tr>
          </thead>
          <tbody>
            <Episodes currentEpisodes={currentEpisodes} />
          </tbody>
        </table>
        <div className="px-4 w-full">
          <DataTablePagination
            pagesCount={episodeData.length / episodesPerPage}
            currentPage={currentPage}
            gotToPage={gotToPage}
          />
        </div>
      </div>
    </div>
  );
};

export default EpisodeTable;
