"use client";

import React from "react";
import { usePathname } from "next/navigation";
import Link from "next/link";
import { Box, Grid, Home, Printer } from "react-feather";

export default function Paths() {
  const pathname = usePathname();

  const paths = [
    {
      name: "Dashboard",
      path: "/",
      Icon: Grid,
    },
    {
      name: "Smarthome",
      path: "/smarthome",
      Icon: Home,
    },
    {
      name: "Games",
      path: "/games",
      Icon: Box,
    },
  ];

  return (
    <div className="flex flex-col gap-3">
      {paths.map((path) => {
        const isActive = pathname === path.path;

        return (
          <Link key={path.name} href={path.path}>
            <div
              key={path.name}
              className={`flex items-center gap-2 px-3 py-2 text-xl rounded-lg hover:text-neutral-400 transition-all duration-300 ${
                isActive
                  ? "bg-neutral-700 text-neutral-300"
                  : "text-neutral-500 "
              }`}
            >
              <path.Icon size={20} />
              {path.name}
            </div>
          </Link>
        );
      })}
    </div>
  );
}
