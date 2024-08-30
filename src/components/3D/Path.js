import React, { useRef } from "react";
import { useGLTF, useAnimations } from "@react-three/drei";
import model from "../../assets/3D/path.glb";

export default function Path(props) {
  const group = useRef();
  const { nodes, materials, animations } = useGLTF(model);
  const { actions } = useAnimations(animations, group);
  return (
    <group ref={group} {...props} dispose={null}>
      <group name="Scene">
        <group
          name="Plane002"
          position={[-0.031, 0.191, 3.349]}
          scale={[0.884, 0.884, 1.089]}
        >
          <mesh
            name="Plane"
            castShadow
            receiveShadow
            geometry={nodes.Plane.geometry}
            material={materials.rock_tile_floor}
          />{" "}
          <mesh
            name="Plane_1"
            castShadow
            receiveShadow
            geometry={nodes.Plane_1.geometry}
            material={materials["Material.013"]}
          />{" "}
        </group>{" "}
      </group>{" "}
    </group>
  );
}

// useGLTF.preload(model);
