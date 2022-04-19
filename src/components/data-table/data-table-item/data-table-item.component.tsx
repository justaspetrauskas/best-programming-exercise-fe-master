import React, { useState } from "react";
import { Character } from "../../../common/interfaces/table.interfaces";
import TdLayout from "../table-layout-elements/td-layout";
import ExpandedCharacterInfo from "../expanded-info/ExpandedCharacterInfo";

interface DataTableItemProps {
  character: Character;
}

const DataTableItem = ({ character }: DataTableItemProps) => {
  const [expandCharacter, setExpandCharacter] = useState("1");
  const [expand, setExpand] = useState(false);

  let { name, gender, status, species, location, episode } = character;

  const handleExpandCharacter = (id: string) => {
    console.log(id);
    setExpandCharacter(id);
    setExpand(!expand);
  };

  const closeExpandedView = () => {
    //setExpandCharacter(id);
    setExpand(false);
  };

  return (
    <>
      {expand ? (
        <ExpandedCharacterInfo
          characterId={expandCharacter}
          closeExpandedView={closeExpandedView}
        />
      ) : (
        <>
          <TdLayout>
            <button
              className="bg-white ease-in-out hover:bg-[#35c9dd] transition-all text-gray-800 hover:text-white font-semibold py-2 px-4 hover:shadow-[#c7fa6c] rounded shadow mr-4"
              onClick={() => handleExpandCharacter(character.id)}
            >
              {`${expand ? "Close" : "Open"}`}
            </button>
            <p className="text-gray-900 whitespace-no-wrap">{name}</p>
          </TdLayout>
          <TdLayout>
            <p className="text-gray-900 whitespace-no-wrap">{gender}</p>
          </TdLayout>

          <TdLayout>
            <span className="relative inline-block px-3 py-1 font-semibold text-green-900 leading-tight">
              <span
                className={`relative px-2 py-1 inset-0 ${
                  status === "Dead"
                    ? "bg-red-200"
                    : status === "Alive"
                    ? "bg-green-200"
                    : "bg-slate-400"
                } rounded-full`}
              >
                {status}
              </span>
              <span className="relative"></span>
            </span>
          </TdLayout>
          <TdLayout>
            <p className="text-gray-900 whitespace-no-wrap">{species}</p>
          </TdLayout>
          <TdLayout>
            <p className="text-gray-900 whitespace-no-wrap">{location.name}</p>
          </TdLayout>
          <TdLayout>
            <p className="text-gray-900 whitespace-no-wrap">{episode.length}</p>
          </TdLayout>
        </>
      )}
    </>
  );
};

export default DataTableItem;
