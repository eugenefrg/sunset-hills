import React from "react";
import Sun from "../../assets/callToAction/sun.svg";
import { ReactComponent as CityView } from "../../assets/callToAction/cityView.svg";
import "../common.scss";

export const CallToAction: React.FC = () => {
  const goToRepo = (): void => {
    window.open("https://github.com/eugenefrg/sunset-hills", "_blank");
  };

  return (
    <div
      className="bg-orange h-3/5 bg-top bg-no-repeat"
      style={{ backgroundImage: `url(${Sun})`, backgroundSize: "100% " }}
    >
      <div className="h-3/5 absolute">
        <CityView />
      </div>
      <div className="absolute h-3/5 w-full">
        <div className="text-center flex justify-center items-center w-full h-full">
          <div className="overlayed">
            <h2 className="text-white text-4xl font-bold drop-shadow-lg">
              Want to know more?
            </h2>
            <div className="py-6">
              <p className="text-white text-xl font-semibold">
                Learn more about the project in it’s
              </p>
              <p className="text-white text-xl font-semibold">
                github page or click the button below
              </p>
            </div>
            <button
              onClick={() => {
                goToRepo();
              }}
              className="text-white font-semibold bg-purple p-5 rounded-md hover:bg-purple-light"
            >
              <p>Github Repository</p>
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};
