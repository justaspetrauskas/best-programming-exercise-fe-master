import React from "react";
import { CharacterProfile } from "../../../common/interfaces/table.interfaces";
import "./expandedInfo.css";

interface CharacterProfileProps {
  character: CharacterProfile;
}

const CharacterProfileComponent = ({ character }: CharacterProfileProps) => {
  const { image, name, gender, status, species, origin, location } = character;

  return (
    <div className="block">
      <h2 className="text-2xl font-bold mb-4 border-b border-gray-600">
        Profile
      </h2>
      <div className="flex flex-row space-x-6 h-full py-4">
        <div className="flex flex-col justify-center w-96 h-96 rounded-xl overflow-hidden">
          <img src={image} alt={name} />
        </div>
        <div className="inline-flex flex-col h-full max-h-96 justify-around">
          {/* {Object.entries(data.character)} */}
          <div className="info-field ">
            <span className="font-bold text-gray-400">Name:</span>
            <span className="font-semibold">{name}</span>
          </div>
          <div className="info-field">
            <span className="font-bold text-gray-400">Status:</span>
            <span
              className={`font-semibold px-3 py-0.5 inset-0 ${
                status === "Alive"
                  ? "bg-green-200"
                  : status === "Dead"
                  ? "bg-red-200"
                  : "bg-gray-200"
              }  rounded-lg`}
            >
              {status}
            </span>
          </div>
          <div className="info-field">
            <span className="font-bold text-gray-400">Gender:</span>
            <span className="font-semibold">{gender}</span>
          </div>
          <div className="info-field">
            <span className="font-bold text-gray-400">Species:</span>
            <span className="font-semibold">{species}</span>
          </div>
          <div className="info-field">
            <span className="font-bold text-gray-400">Origin:</span>
            <span className="font-semibold">{origin.name}</span>
          </div>
          <div className="info-field">
            <span className="font-bold text-gray-400">Last Location:</span>
            <span className="font-semibold">{location.name}</span>
          </div>
        </div>
      </div>
    </div>
  );
};

export default CharacterProfileComponent;
