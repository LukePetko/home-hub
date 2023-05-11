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
          Authorization:
            "Bearer eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpc3MiOiJkYWNkNTI1MGQ0ODQ0OWJhYmM0YjUwNTliZGQwYzRhYSIsImlhdCI6MTY4MzY1Mjg4OSwiZXhwIjoxOTk5MDEyODg5fQ.oGygASsrSiOsI3Iyjb161VNEApPBv589QoJYDn-jUqI",
        },
        body: JSON.stringify({ entity_id: "light.table_lamp_color" }),
      }
    );
  };

  return <button onClick={f}>{children}</button>;
}
