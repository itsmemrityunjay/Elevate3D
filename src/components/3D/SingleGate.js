import React, {
    useRef
} from "react";
import {
    useGLTF,
    useAnimations
} from "@react-three/drei";
import model from "../../assets/3D/gate.glb";
export default function SingleGate(props) {
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
        } >
        <
        group name = "Scene" >
        <
        mesh name = "Box002001"
        castShadow receiveShadow geometry = {
            nodes.Box002001.geometry
        }
        material = {
            materials.fence
        }
        rotation = {
            [Math.PI / 2, 0, 0.324]
        }
        scale = {
            0.004
        }
        /> <
        /group> <
        /group>
    );
}

// useGLTF.preload(model);