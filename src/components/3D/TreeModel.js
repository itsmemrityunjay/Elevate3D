import React, {
    useEffect,
    useRef
} from "react";
import {
    useGLTF,
    useAnimations
} from "@react-three/drei";
import model from "../../assets/3D/tree.glb";

export default function TreeModel(props) {
    const group = useRef();
    const {
        nodes,
        materials,
        animations
    } = useGLTF(model);
    const {
        actions
    } = useAnimations(animations, group);
    return ( <
        group ref = {
            group
        } { ...props
        }
        dispose = {
            null
        } > { /* <pointLight position={[-0.7, 1.2, 2]} intensity={1} color="gold" /> */ } <
        group name = "Scene" >
        <
        mesh name = "Object_2008"
        castShadow receiveShadow geometry = {
            nodes.Object_2008.geometry
        }
        material = {
            materials.color_15506754
        }
        position = {
            [-0.687, 0.169, 1.994]
        }
        rotation = {
            [-Math.PI, 0, 0]
        }
        scale = {
            0.01
        }
        /> <
        /group> <
        /group>
    );
}

// useGLTF.preload(model);