import React from "react";
import { CallToAction } from "./callToAction";
import { Social } from "./social";

export const Footer: React.FC = () => {
  return (
    <div className="bg-background1 h-screen">
      <CallToAction />
      <Social />
    </div>
  );
};
