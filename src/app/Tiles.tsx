"use client";
import React from "react";
import { Responsive } from "react-grid-layout";

export default function Tiles() {
  const layout = [
    { i: "a", x: 0, y: 0, w: 1, h: 2, static: true },
    { i: "b", x: 1, y: 0, w: 2, h: 2, minW: 2, maxW: 2, minH: 2, maxH: 2 },
    { i: "c", x: 4, y: 0, w: 1, h: 2 },
  ];
  return (
    <Responsive
      className="layout"
      layouts={{ lg: layout }}
      breakpoints={{ lg: 1200 }}
      cols={{ lg: 12 }}
      margin={[0, 0]}
      rowHeight={30}
      width={1200}
      resizeHandles={[]}
    >
      <div key="a" className="bg-black text-white">
        a
      </div>
      <div key="b" className="p-1">
        <div className="bg-black text-white h-full rounded-lg p-2">b</div>
      </div>
      <div key="c">c</div>
    </Responsive>
  );
}
