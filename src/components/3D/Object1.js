import React, { useRef } from "react";
import { useGLTF, useAnimations } from "@react-three/drei";
import model from "../../assets/3D/object_1.glb";
export default function Object1(props) {
  const group = useRef();
  const { nodes, materials, animations } = useGLTF(model);
  const { actions } = useAnimations(animations, group);
  return (
    <group ref={group} {...props} dispose={null}>
      <group name="Scene">
        <mesh
          name="Object_0003"
          castShadow
          receiveShadow
          geometry={nodes.Object_0003.geometry}
          material={materials.aiStandardSurface1SG}
          position={[-2.875, 0.169, 5.835]}
          scale={0.044}
        />{" "}
        <mesh
          name="Object_1003"
          castShadow
          receiveShadow
          geometry={nodes.Object_1003.geometry}
          material={materials.aiStandardSurface2SG}
          position={[-2.875, 0.169, 5.835]}
          scale={0.044}
        />{" "}
        <mesh
          name="Object_2025"
          castShadow
          receiveShadow
          geometry={nodes.Object_2025.geometry}
          material={materials.aiStandardSurface3SG}
          position={[-2.875, 0.169, 5.835]}
          scale={0.044}
        />{" "}
      </group>{" "}
    </group>
  );
}

// useGLTF.preload(model);
