import React from "react";
import Sun from "../../assets/callToAction/sun.svg";

export const CallToAction: React.FC = () => {
    return (
        <div className="bg-orange h-3/5 bg-bottom"
             style={{backgroundImage:`url(${Sun})`, backgroundSize:"100% "}}>
            {/*<div className="h-full">*/}
            {/*    <img src={Sun} className="h-full w-full"/>*/}
            {/*</div>*/}
        </div>
    );
};
