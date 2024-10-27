import React from "react";
import { Html, useProgress } from "@react-three/drei";

const Loader = () => {
  const { progress } = useProgress(); // Note the correct usage here

  return (
    <Html>
      <span className="canvas-load"></span>
      <p
        style={{
          fontSize: 14,
          color: "#f1f1f1",
          fontWeight: 800,
          marginTop: 130,
        }}
      >
        {progress.toFixed(2)}% {/* Use progress here */}
      </p>
    </Html>
  );
};

export default Loader;