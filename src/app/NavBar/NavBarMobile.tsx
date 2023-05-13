"use client";

import Link from "next/link";
import { useState } from "react";
import { Menu, X } from "react-feather";
import Paths from "./Paths";

export default function NavBarMobile() {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <div className="md:hidden">
      <div
        className={`fixed inset-0 bg-neutral-950 p-2 transition-all duration-700 text-white ${
          isOpen ? "opacity-100" : "opacity-0 overflow-hidden"
        }`}
      >
        <h1 className="text-md font-black uppercase pt-2 pl-3 pb-8 text-neutral-200">
          Home Hub
        </h1>
        <Paths />
        <div className="py-2 px-3">
          <h2 className="text-lg">Lukas</h2>
        </div>
        <button
          className="w-max bg-neutral-950 rounded-full p-3"
          onClick={() => setIsOpen(!isOpen)}
        ></button>
      </div>
      <div className="fixed bottom-0 w-screen flex justify-center p-2">
        <button
          className={`w-max rounded-full p-3 mb-2 ${
            isOpen ? "bg-neutral-700" : "bg-neutral-950"
          }`}
          onClick={() => setIsOpen(!isOpen)}
        >
          <X
            className={`text-4xl text-neutral-300 transition duration-700 ${
              !isOpen ? "h-0 opacity-0" : "opacity-100"
            }`}
          />
          <Menu
            className={`text-4xl text-neutral-400 bg-neutral-950 transition duration-700 ${
              isOpen ? "h-0 opacity-0" : "opacity-100"
            }`}
          />
        </button>
      </div>
    </div>
  );
}
