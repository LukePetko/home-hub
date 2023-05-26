export const getLayout = () => [
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
