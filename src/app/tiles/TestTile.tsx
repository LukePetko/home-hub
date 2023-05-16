"use client";
import React from "react";

type Props = {
  text: string;
  w: number;
  h: number;
};

export default function TestTile({ text, w, h }: Props) {
  if (w === 1 && h === 1) {
    return (
      <div className="flex flex-col items-center justify-center bg-gray-500 h-full p-2">
        <h3 className="font-bold text-white">Too small</h3>
      </div>
    );
  }

  return (
    <div className="flex flex-col items-center justify-center bg-gray-500 h-full p-2">
      <h1 className="text-4xl font-bold text-white">Test Tile</h1>
      <p className="text-2xl text-white">{text}</p>
    </div>
  );
}
