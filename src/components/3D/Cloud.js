import React, { useRef } from "react";
import { useGLTF } from "@react-three/drei";
import model from "../../assets/3D/cloud.glb";

export default function Cloud(props) {
  const { nodes, materials } = useGLTF(model);
  return (
    <group {...props} dispose={null}>
      <mesh
        castShadow
        receiveShadow
        geometry={nodes.Cloud_Polygon_Blender_1_Cube005.geometry}
        material={materials["Cloud.002"]}
        position={[-3.963, 0.116, -3.18]}
        rotation={[Math.PI / 2, 0, -1.761]}
        scale={5.342}
      />{" "}
    </group>
  );
}

// useGLTF.preload(model);
