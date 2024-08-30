import React, { useRef } from "react";
import { useGLTF, useAnimations } from "@react-three/drei";
import model from "../../assets/3D/object_4.glb";

export default function Object4(props) {
  const group = useRef();
  const { nodes, materials, animations } = useGLTF(model);
  const { actions } = useAnimations(animations, group);
  return (
    <group ref={group} {...props} dispose={null}>
      <group name="Scene">
        <mesh
          name="Base_low9_aiStandardSurface2_0"
          castShadow
          receiveShadow
          geometry={nodes.Base_low9_aiStandardSurface2_0.geometry}
          material={materials.aiStandardSurface2}
          position={[4.937, 0.321, -1.97]}
          scale={0.032}
        />{" "}
        <mesh
          name="Columna_low8_aiStandardSurface1_0"
          castShadow
          receiveShadow
          geometry={nodes.Columna_low8_aiStandardSurface1_0.geometry}
          material={materials.aiStandardSurface1}
          position={[4.937, 0.321, -1.97]}
          scale={[0.035, 0.058, 0.032]}
        />{" "}
      </group>{" "}
    </group>
  );
}

// useGLTF.preload(model);
