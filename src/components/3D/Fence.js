import React, { useRef } from "react";
import { useGLTF, useAnimations } from "@react-three/drei";
import model from "../../assets/3D/fence.glb";

export default function Fence(props) {
  const group = useRef();
  const { nodes, materials, animations } = useGLTF(model);
  const { actions } = useAnimations(animations, group);
  return (
    <group ref={group} {...props} dispose={null}>
      <group name="Scene">
        <mesh
          name="13080_Wrought_Iron_fence_with_brick_v1_L2"
          castShadow
          receiveShadow
          geometry={nodes["13080_Wrought_Iron_fence_with_brick_v1_L2"].geometry}
          material={materials.fence}
          position={[3.449, 0.063, 6.755]}
          scale={0.007}
        />{" "}
      </group>{" "}
    </group>
  );
}

// useGLTF.preload(model);
