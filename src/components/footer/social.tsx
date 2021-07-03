import React, { ReactElement, ReactNode } from "react";
import { ReactComponent as GitHub } from "../../assets/social/github.svg";
import { ReactComponent as Personal } from "../../assets/social/personal.svg";
import { ReactComponent as Twitter } from "../../assets/social/twitter.svg";

interface LinkProps {
  href: string;
  className?: string;
  children: (string | Element)[] | ReactNode;
}

const Link: React.FC<LinkProps> = ({ href, children, className }) => {
  return (
    <a
      href={href}
      target="_blank"
      rel="noreferrer"
      className={`underline ${className}`}
    >
      {children}
    </a>
  );
};

export const Social: React.FC = () => {
  const freeVector =
    "https://www.freevector.com/sunset-background-and-sea-vector-27576#";
  const vecteezy =
    "https://aa3762851b1dcba40.awsglobalaccelerator.com/free-vector/background";
  return (
    <div className="bg-purple text-white text-center flex flex-col items-center space-y-8 py-12">
      <h1 className="text-6xl font-semibold">SUNSET HILLS</h1>
      <div>
        <p>
          Vectors from: <Link href={freeVector}>FreeVector.com</Link> , and{" "}
          <Link href={vecteezy}>Vecteezy</Link>
        </p>
      </div>
      <hr className="w-3/4 mx-auto " />
      <div className="text-left w-52 flex flex-col space-y-2">
        <div className="flex items-center space-x-2">
          <GitHub className="h-8" />
          <Link href="https://github.com/eugenefrg" className="inline-block">
            /eugenefrg
          </Link>
        </div>
          <div className="flex items-center space-x-2">
          <Personal className="h-8" />
          <Link href="https://eugenefrancisr.000webhostapp.com">
            eugenefrancisr
          </Link>
        </div>
          <div className="flex items-center space-x-2">
          <Twitter className="h-8" />
          <span>@eugenefrancis_r</span>
        </div>
      </div>
    </div>
  );
};
// github linkedin personal youtube email
