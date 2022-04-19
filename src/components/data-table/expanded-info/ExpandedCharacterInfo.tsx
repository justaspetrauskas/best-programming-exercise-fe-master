import { useQuery } from "@apollo/client";
import React from "react";
import { SINGLE_CHARACTER } from "../../../graphQL/queries";
import LoadingComponent from "../../loading/Loading.components";
import CharacterProfile from "./CharacterProfile";
import EpisodeTable from "./EpisodeTable";

import ThLayout from "../table-layout-elements/th-layout";
import TdLayout from "../table-layout-elements/td-layout";

interface ExpandedCharacterInfoProps {
  characterId: string;
  closeExpandedView: () => void;
}

const chracterDetailTable = ["Name", "Season", "Episode"];

const ExpandedCharacterInfo = ({
  characterId,
  closeExpandedView,
}: ExpandedCharacterInfoProps) => {
  const { loading, error, data } = useQuery(SINGLE_CHARACTER, {
    variables: { id: +characterId },
  });

  if (data) {
    const { image, gender, name, species, status, origin, location, episode } =
      data.character;
  }

  return (
    <td
      colSpan={6}
      className="border-b shadow-inner shadow-cyan-200/30 bg-slate-200/20 pb-8"
    >
      {loading && <LoadingComponent />}
      {data && (
        <div>
          <div className="flex flex-row justify-start p-4 ">
            <button
              className="bg-white ease-in-out hover:bg-[#35c9dd] transition-all text-gray-800 hover:text-white font-semibold py-2 px-4 hover:shadow-[#c7fa6c] rounded shadow"
              onClick={closeExpandedView}
            >
              close
            </button>
          </div>
          <div className="flex flex-row space-x-1 mx-10 justify-between">
            <CharacterProfile character={data.character} />

            <EpisodeTable episodeData={data.character.episode} />
          </div>
        </div>
      )}
    </td>
  );
};

export default ExpandedCharacterInfo;
