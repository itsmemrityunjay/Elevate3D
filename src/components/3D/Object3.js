import React, { useRef } from "react";
import { useGLTF } from "@react-three/drei";
import model from "../../assets/3D/object_3.glb";
export default function Object3(props) {
  const { nodes, materials } = useGLTF(model);
  return (
    <group {...props} dispose={null}>
      <mesh
        castShadow
        receiveShadow
        geometry={nodes.Object_1004.geometry}
        material={materials.Stone01}
        position={[1.924, 0.284, 3.739]}
        rotation={[Math.PI / 2, 0, 2.61]}
        scale={0.085}
      />{" "}
      <mesh
        castShadow
        receiveShadow
        geometry={nodes.Object_2027.geometry}
        material={materials.Stone02}
        position={[1.924, 0.284, 3.739]}
        rotation={[Math.PI / 2, 0, 2.61]}
        scale={0.085}
      />{" "}
      <mesh
        castShadow
        receiveShadow
        geometry={nodes.Object_0004.geometry}
        material={materials.Stone02}
        position={[1.088, 0.489, 3.143]}
        rotation={[Math.PI / 2, 0, 2.61]}
        scale={0.085}
      />{" "}
      <mesh
        castShadow
        receiveShadow
        geometry={nodes.Object_11007.geometry}
        material={materials.Deco02}
        position={[2.144, 0.465, 5.002]}
        rotation={[Math.PI / 2, 0, 2.61]}
        scale={0.085}
      />{" "}
      <mesh
        castShadow
        receiveShadow
        geometry={nodes.Object_12007.geometry}
        material={materials.Deco02}
        position={[2.349, 0.465, 5.103]}
        rotation={[Math.PI / 2, 0, 2.61]}
        scale={0.085}
      />{" "}
      <mesh
        castShadow
        receiveShadow
        geometry={nodes.Object_13007.geometry}
        material={materials.Deco02}
        position={[2.581, 0.465, 5.097]}
        rotation={[Math.PI / 2, 0, 2.61]}
        scale={0.085}
      />{" "}
      <mesh
        castShadow
        receiveShadow
        geometry={nodes.Object_10007.geometry}
        material={materials.Deco01}
        position={[1.91, 0.284, 3.714]}
        rotation={[Math.PI / 2, 0, 2.61]}
        scale={0.085}
      />{" "}
      <mesh
        castShadow
        receiveShadow
        geometry={nodes.Object_9004.geometry}
        material={materials.Deco02}
        position={[1.91, 0.284, 3.714]}
        rotation={[Math.PI / 2, 0, 2.61]}
        scale={0.085}
      />{" "}
      <mesh
        castShadow
        receiveShadow
        geometry={nodes.Object_3005.geometry}
        material={materials.Stone02}
        position={[1.431, 1.111, 2.9]}
        rotation={[Math.PI / 2, 0, 2.61]}
        scale={0.085}
      />{" "}
      <mesh
        castShadow
        receiveShadow
        geometry={nodes.Object_4005.geometry}
        material={materials.Stone01}
        position={[1.431, 1.111, 2.9]}
        rotation={[Math.PI / 2, 0, 2.61]}
        scale={0.085}
      />{" "}
      <mesh
        castShadow
        receiveShadow
        geometry={nodes.Object_5015.geometry}
        material={materials.Deco01}
        position={[1.431, 1.111, 2.9]}
        rotation={[Math.PI / 2, 0, 2.61]}
        scale={0.085}
      />{" "}
      <mesh
        castShadow
        receiveShadow
        geometry={nodes.Object_14008.geometry}
        material={materials.Deco02}
        position={[0.992, 0.369, 2.902]}
        rotation={[Math.PI / 2, 0, 2.61]}
        scale={0.085}
      />{" "}
      <mesh
        castShadow
        receiveShadow
        geometry={nodes.Object_15007.geometry}
        material={materials.Deco01}
        position={[0.992, 0.369, 2.902]}
        rotation={[Math.PI / 2, 0, 2.61]}
        scale={0.085}
      />{" "}
      <mesh
        castShadow
        receiveShadow
        geometry={nodes.Object_18007.geometry}
        material={materials.Deco02}
        position={[2.582, 0.945, 5.097]}
        rotation={[Math.PI / 2, 0, 2.61]}
        scale={0.085}
      />{" "}
      <mesh
        castShadow
        receiveShadow
        geometry={nodes.Object_19008.geometry}
        material={materials.Deco01}
        position={[2.582, 0.945, 5.097]}
        rotation={[Math.PI / 2, 0, 2.61]}
        scale={0.085}
      />{" "}
      <mesh
        castShadow
        receiveShadow
        geometry={nodes.Object_17007.geometry}
        material={materials.Deco01}
        position={[1.057, 1.167, 3.123]}
        rotation={[Math.PI / 2, 0, 2.61]}
        scale={0.085}
      />{" "}
      <mesh
        castShadow
        receiveShadow
        geometry={nodes.Object_6003.geometry}
        material={materials.Deco02}
        position={[0.832, 0.369, 2.63]}
        rotation={[Math.PI / 2, 0, 2.61]}
        scale={0.085}
      />{" "}
      <mesh
        castShadow
        receiveShadow
        geometry={nodes.Object_7003.geometry}
        material={materials.Deco01}
        position={[0.832, 0.369, 2.63]}
        rotation={[Math.PI / 2, 0, 2.61]}
        scale={0.085}
      />{" "}
    </group>
  );
}

// useGLTF.preload(model);
