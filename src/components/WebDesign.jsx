import { OrbitControls, Stage } from "@react-three/drei";
import { Canvas } from "@react-three/fiber";
import React, { Suspense } from "react";
import styled from "styled-components";
import Mac from "./Mac";

const Desc = styled.div`
  width: 200px;
  height: 70px;
  padding: 20px;
  background-color: white;
  border-radius: 10px;
  position: absolute;
  top: 100px;
  right: 100px;

  @media only screen and (max-width: 768px) {
    top: 0;
    bottom: 0;
    left: 0;
    right: 0;
    margin: auto;
  }
`;

const WebDesign = () => {
  return (
    <>
    <Canvas>
      <Suspense fallback={null}>
        <Stage environment="city" intensity={0.9}>
          {/* Adjust the initial position of the camera and the scale prop as needed */}
          <Mac position={[0, 2.96, 0]} scale={[0.48, 0.48, 0.48]} />
        </Stage>
        <OrbitControls enableZoom={false} autoRotate />
      </Suspense>
    </Canvas>
    {/* ... */}
  </>
  );
};

export default WebDesign;
