import React, { useRef } from "react";
import { useGLTF, useAnimations } from "@react-three/drei";
import model from "../../assets/3D/piller.glb";

export default function Piller(props) {
  const group = useRef();
  const { nodes, materials, animations } = useGLTF(model);
  const { actions } = useAnimations(animations, group);
  return (
    <group ref={group} {...props} dispose={null}>
      <group name="Scene">
        <mesh
          name="Object_2017"
          castShadow
          receiveShadow
          geometry={nodes.Object_2017.geometry}
          material={materials.Default_OBJ}
          position={[2.74, 0.946, 6.755]}
          rotation={[-Math.PI / 2, 0, 0]}
          scale={0.357}
        />{" "}
      </group>{" "}
    </group>
  );
}

// useGLTF.preload(model);
