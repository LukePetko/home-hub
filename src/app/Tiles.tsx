"use client";
import React, { useEffect, useState } from "react";
import { Responsive } from "react-grid-layout";
import { tileTypes } from "./tiles/";
import { Tile } from "./types/tile";
import { getLayout } from "./mock/tiles";

export default function Tiles() {
  const [layout, setLayout] = useState<Tile[]>([]);

  useEffect(() => {
    setLayout(getLayout());
  }, []);

  return (
    <Responsive
      className="layout"
      layouts={{ lg: layout }}
      breakpoints={{ lg: 1200 }}
      cols={{ lg: 12 }}
      margin={[0, 0]}
      rowHeight={100}
      width={1200}
      resizeHandles={[]}
      compactType="horizontal"
    >
      {layout.map((tile) => {
        const Component = tileTypes[tile.component];
        return (
          <div key={tile.i} className="p-2">
            <Component
              key={tile.i}
              w={tile.w}
              h={tile.h}
              {...tile.componentProps}
            />
          </div>
        );
      })}
    </Responsive>
  );
}
