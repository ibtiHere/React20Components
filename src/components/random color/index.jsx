import React, { useState } from "react";

const RandomColor = () => {
  const [typeOfColor, setTypeOfColor] = useState("hex");
  const [color, setColor] = useState("#000000");

  const utility = (length) => {
    return Math.floor(Math.random() * length);
  };

  const handleRandomColor = () => {
    // Generate a random color in any format (HEX, RGB)
    const randomColor = "#" + Math.floor(Math.random() * 16777215).toString(16);
    setColor(randomColor);
  };

  const handleRGB = () => {
    // Generate a random RGB color
    const rgbColor = `rgb(${utility(256)}, ${utility(256)}, ${utility(256)})`;
    setColor(rgbColor);
  };

  const handleHEX = () => {
    // Generate a random HEX color
    const hex = [1, 2, 3, 4, 5, 6, 7, 8, 9, "A", "B", "C", "D", "E", "F"];
    let hexColor = "#";
    for (let i = 0; i < 6; i++) {
      hexColor += hex[utility(hex.length)];
    }
    setColor(hexColor);
  };

  return (
    <div
      style={{
        width: "100vw",
        height: "100vh",
        background: color,
      }}
    >
      <button className="btn" onClick={() => setTypeOfColor("hex")}>
        Create HEX Color
      </button>
      <button onClick={() => setTypeOfColor("rgb")}>Create RGB Color</button>
      <button onClick={typeOfColor === "hex" ? handleHEX : handleRGB}>
        Generate Random Color
      </button>

      <div
        style={{
          display: "flex",
          justifyContent: "center",
          alignItems: "center",
          color: "black",
          fontSize: "50px",
          marginTop: "50px",
        }}
      >
        <h3>{typeOfColor === "rgb" ? "RGB color" : "HEX Color"}</h3>
      </div>
      <h1> {color}</h1>
    </div>
  );
};

export default RandomColor;
