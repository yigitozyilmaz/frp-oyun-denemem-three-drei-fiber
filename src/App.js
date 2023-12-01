import React, { useState, Suspense } from "react";
import Web3 from "web3";
import { Canvas, useLoader } from "@react-three/fiber";
import HdrFile from "./components/background.hdr";
import {
  Environment,
  CameraControls,
  Edges,
  Sphere,
  Cylinder,
  Loader,
  OrbitControls,
} from "@react-three/drei";
import { FBXLoader } from "three/examples/jsm/loaders/FBXLoader";
import contractABI from "./abis/RandomGenerator.json";
import Bina from "./map.js";
import "./App.css";

function App() {
  const [randomNumber, setRandomNumber] = useState(0);

  async function handleGetRandomResult() {
    if (window.ethereum) {
      const contractAddress = "0xEE92A2796E3E4984D93cDc31DdeA0670d95468cb";
      const HMY_RPC_URL = "https://api.s0.b.hmny.io/";
      const web3 = new Web3(HMY_RPC_URL);
      const contract = new web3.eth.Contract(contractABI.abi, contractAddress);

      try {
        let result = await contract.methods.getRandomResult().call();
        let result2 = parseInt(result);
        setRandomNumber(result2);
      } catch (error) {
        console.error("Error calling the contract:", error);
      }
    }
  }

  return (
    <>
      <Canvas
        camera={{
          fov: 45,
          near: 0.1,
          far: 2000,
          position: [200, 200, 200],
        }}
      >
        <CameraControls makeDefault />
        <Bina />
      </Canvas>
      <div id="deneme">
        {" "}
        <button onClick={handleGetRandomResult}>zar</button>
        <p>atılan zar: {randomNumber}</p>
      </div>
    </>
  );
}

export default App;
