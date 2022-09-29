import React from 'react';
import { useState } from 'react';

export function AddColor() {
  // const color = "crimson";
  const [color, setColor] = useState("skyblue");
  const styles = {
    fontSize: "25px",
    backgroundColor: color,
  };
  return (
    <div>
      <input
        onChange={(event) => setColor(event.target.value)}
        style={styles}
        type="text"
        value={color} />
    </div>
  );
}
