import { ApolloError } from "@apollo/client";
import React from "react";
import "./error.component.css";

interface ErrorComponentProps {
  error: ApolloError;
  goBack: () => void;
}

const ErrorComponent = ({ error, goBack }: ErrorComponentProps) => {
  console.log("Error", error.message);

  const { message } = error;

  message.includes("404");
  return (
    <div className="min-w-full shadow rounded-lg overflow-hidden h-96 flex flex-row justify-center items-center">
      {message.includes("404") && (
        <div>
          <h1 className="text-8xl text-gray-400/20 font-bold py-4">
            {message}
          </h1>
          <h2 className="text-xl text-gray-400 font-bold py-4 text-center">
            Character is probably in undiscovered parallel universe...
          </h2>
          <div className="flex flex-row mt-4 justify-center">
            <button className="reset-button " onClick={goBack}>
              Go Back
            </button>
          </div>
        </div>
      )}
    </div>
  );
};

export default ErrorComponent;
