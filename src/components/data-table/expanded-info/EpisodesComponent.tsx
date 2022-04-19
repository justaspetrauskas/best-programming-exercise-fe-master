import React from "react";
import { Episode } from "../../../common/interfaces/table.interfaces";

import TdLayout from "../table-layout-elements/td-layout";

interface EpisodesComponentProps {
  currentEpisodes: Episode[];
}

const EpisodesComponent = ({ currentEpisodes }: EpisodesComponentProps) => {
  return (
    <>
      {currentEpisodes.map((episode) => (
        <tr
          key={episode.id}
          className="bg-white hover:bg-slate-200/60 transition-all hover:cursor-pointer"
        >
          <TdLayout>
            <p className="text-gray-900 whitespace-no-wrap">{episode.name}</p>
          </TdLayout>
          <TdLayout>
            <p className="text-gray-900 whitespace-no-wrap">
              {episode.episode.split("E")[0].slice(1, 3)}
            </p>
          </TdLayout>
          <TdLayout>
            <p className="text-gray-900 whitespace-no-wrap">
              {episode.episode.split("E")[1]}
            </p>
          </TdLayout>
        </tr>
      ))}
    </>
  );
};

export default EpisodesComponent;
