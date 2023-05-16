"use client";
import React from "react";
import { Responsive } from "react-grid-layout";
import TestTile from "./tiles/TestTile";
import TestTile2 from "./tiles/TestTile2";

export default function Tiles() {
  const components = {
    TestTile: TestTile,
    TestTile2: TestTile2,
  };

  const layout = [
    {
      i: "a",
      x: 0,
      y: 0,
      w: 1,
      h: 1,
      component: "TestTile",

      componentProps: { text: "Test 1x1" },
    },
    {
      i: "b",
      x: 1,
      y: 0,
      w: 2,
      h: 2,
      minW: 2,
      maxW: 2,
      minH: 2,
      maxH: 2,
      component: "TestTile2",
      componentProps: { text2: "Test 2x2" },
    },
    {
      i: "c",
      x: 4,
      y: 0,
      w: 1,
      h: 2,
      component: "TestTile",

      componentProps: { text: "Test 1x2" },
    },
  ];
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
        const Component = components[tile.component];
        return (
          <div key={tile.i} className="p-2">
            <Component
              key={tile.i}
              {...tile.componentProps}
              w={tile.w}
              h={tile.h}
            />
          </div>
        );
        // return (
        //   <div key={tile.i}>
        //     <Button on>aaa</Button>
        //   </div>
        // );
      })}
    </Responsive>
  );
}
