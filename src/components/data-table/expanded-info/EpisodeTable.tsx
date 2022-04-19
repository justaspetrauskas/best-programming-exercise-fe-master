import React, { useState } from "react";
import { Episode } from "../../../common/interfaces/table.interfaces";
import Episodes from "./EpisodesComponent";

import ThLayout from "../table-layout-elements/th-layout";

interface EpisodeTableProps {
  episodeData: Episode[];
}

const episodeColumns = ["Name", "Season", "Episode"];

const EpisodeTable = ({ episodeData }: EpisodeTableProps) => {
  const [currentPage, setCurrentPage] = useState(1);
  const [episodesPerPage, setEpisodesPerPage] = useState(5);

  console.log("Episode table", episodeData);

  // Paginate episode results
  const indexOfLastEpisode = currentPage * episodesPerPage;
  const indexOfFirstEpisode = indexOfLastEpisode - episodesPerPage;
  const currentEpisodes = episodeData.slice(
    indexOfFirstEpisode,
    indexOfLastEpisode
  );
  console.log("Current episodes", currentEpisodes);

  return (
    <div className="">
      <h2 className="text-2xl font-bold mb-4 border-b border-gray-600">
        Episodes
      </h2>
      <div className="py-4">
        <table className="shadow-sm">
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
      </div>
    </div>
  );
};

export default EpisodeTable;
