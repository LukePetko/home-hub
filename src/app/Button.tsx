"use client";

import React from "react";

type Props = {
  on: boolean;
  children: React.ReactNode;
};

export default function Button(props: Props) {
  const { on, children } = props;

  const f = () => {
    fetch(
      `http://homeassistant.local:8123/api/services/light/turn_${
        on ? "on" : "off"
      }`,
      {
        method: "POST",
        headers: {
          Authorization: process.env.NEXT_PUBLIC_HOME_ASSISTANT_TOKEN,
        },
        body: JSON.stringify({ entity_id: "light.table_lamp_color" }),
      }
    );
  };

  return <button onClick={f}>{children}</button>;
}
