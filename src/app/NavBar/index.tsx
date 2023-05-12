import React from "react";
import Paths from "./Paths";

type Props = {
  navClasses?: string;
};

export default function NavBar(props: Props) {
  const { navClasses } = props;

  return (
    <nav
      className={`${navClasses} flex flex-col justify-between bg-neutral-950 h-screen text-white p-4`}
    >
      <div>
        <h1 className="text-md font-black uppercase pt-2 pl-3 pb-8 text-neutral-200">
          Home Hub
        </h1>
        <Paths />
      </div>
      <div className="py-2 px-3">
        <h2 className="text-lg">Lukas</h2>
      </div>
    </nav>
  );
}
