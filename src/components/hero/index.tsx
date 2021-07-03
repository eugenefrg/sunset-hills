import React from "react";
// import { ReactComponent as Sun } from "../../assets/hero/sun.svg";
// import { ReactComponent as Sea } from "../../assets/hero/sea.svg";
import Sun from "../../assets/hero/sun.svg";
import Sea from "../../assets/hero/sea.svg";
import { ReactComponent as MidRockLeft } from "../../assets/hero/midRockLeft.svg";
import { ReactComponent as MidRockRight } from "../../assets/hero/midRockRight.svg";
import { ReactComponent as BaseRock } from "../../assets/hero/baseRock.svg";

export const HeroPage: React.FC = () => {
  return (
    <div className="bg-background1 h-screen">
      <div className="sea-sunset">
        <div className="sun justify-center w-full absolute h-screen w-screen">
            <img src={Sun} className="mx-auto h-full w-full object-cover"/>
        </div>
        <div className="sea flex items-end w-full absolute h-screen">
            <img src={Sea} className="opacity-90 h-1/2 w-full object-cover"/>
        </div>
          <div className="midRock absolute h-screen w-full">
              <div className="flex h-full items-center">
                  <div className="my-full h-1/4 inline-block w-full flex space-between">
                      <MidRockLeft className="h-full inline"/>
                      <MidRockRight className="h-full inline ml-auto"/>
                  </div>
              </div>
          </div>
          <div className="baseRock absolute h-screen w-full">
              <div className="flex h-full items-end">
                  <div className="my-full h-2/3 w-full flex items-end">
                      <BaseRock className="w-full inline"/>
                  </div>
              </div>
          </div>
          <div className="absolute h-screen w-full p-32">
              <div className="space-y-6">
                  <h1 className="text-6xl font-bold text-white">Sunset Hills</h1>
                  <div>
                      <p className="text-2xl font-semibold text-white">when given an array of buildings, and the </p>
                      <p className="text-2xl font-semibold text-white">sun is to the left side, visualise which </p>
                      <p className="text-2xl font-semibold text-white">
                          buildings or it’s parts of buildings are sunlit.
                      </p>
                  </div>
              </div>
          </div>
      </div>
    </div>
  );
};
