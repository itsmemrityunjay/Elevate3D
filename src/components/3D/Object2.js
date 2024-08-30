import React, { useRef } from "react";
import { useGLTF, useAnimations } from "@react-three/drei";
import model from "../../assets/3D/object_2.glb";
export default function Object2(props) {
  const group = useRef();
  const { nodes, materials, animations } = useGLTF(model);
  const { actions } = useAnimations(animations, group);
  return (
    <group ref={group} {...props} dispose={null}>
      <group name="Scene">
        <mesh
          name="Cone"
          castShadow
          receiveShadow
          geometry={nodes.Cone.geometry}
          material={materials["Gold.001"]}
          position={[-5.617, 1.753, 5.566]}
          rotation={[0, 0.386, 0]}
        />{" "}
        <mesh
          name="Body_Material001_0003"
          castShadow
          receiveShadow
          geometry={nodes.Body_Material001_0003.geometry}
          material={materials.marble_01}
          position={[-5.62, 0.306, 5.563]}
          rotation={[-Math.PI / 2, 0, 0]}
          scale={[0.218, 0.218, 0.182]}
        />{" "}
        <mesh
          name="Cube_Material001_0003"
          castShadow
          receiveShadow
          geometry={nodes.Cube_Material001_0003.geometry}
          material={materials["Material.010"]}
          position={[-5.62, 0.239, 5.563]}
          rotation={[-Math.PI / 2, 0, 0]}
          scale={[0.218, 0.218, 0.182]}
        />{" "}
      </group>{" "}
    </group>
  );
}
// useGLTF.preload(model);
