import "./App.css";
import { Environment, useGLTF, PresentationControls } from "@react-three/drei";
import char from "./char.glb";
import React, { useEffect, useState, Suspense } from "react";

function Char() {
  const char = useGLTF(char);
  char.scene.scale.set(10, 10, 10);

  return (
    <>
      <Environment preset="city" />
      <primitive
        object={char.scene}
        position-y={0}
        position-x={0}
        position-z={0}
      ></primitive>
    </>
  );
}

export default Char;
