"use client";

import Link from "next/link";
import { useState } from "react";
import { Menu, X } from "react-feather";
import Paths from "./Paths";

export default function NavBarMobile() {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <div className="md:hidden fixed bottom-0 flex flex-col w-screen justify-center items-center">
      <div
        className={`w-screen h-screen bg-neutral-950 p-2 transition-all duration-700 text-white ${
          isOpen ? "opacity-100" : "opacity-0 overflow-hidden"
        }`}
      >
        <h1 className="text-md font-black uppercase pt-2 pl-3 pb-8 text-neutral-200">
          Home Hub
        </h1>
        <Paths />
        <div className="pt-8 pb-2 px-3">
          <h2 className="text-lg">Lukas</h2>
        </div>
        <button
          className="w-max bg-neutral-950 rounded-full p-3"
          onClick={() => setIsOpen(!isOpen)}
        ></button>
      </div>
      <button
        className="fixed bottom-2 w-max bg-neutral-950 rounded-full p-3 mb-2"
        onClick={() => setIsOpen(!isOpen)}
      >
        <X className="text-4xl text-neutral-400 bg-neutral-950 transition duration-700" />
        <Menu className="text-4xl text-neutral-400 bg-neutral-950 transition duration-700" />
      </button>
    </div>
  );
}
