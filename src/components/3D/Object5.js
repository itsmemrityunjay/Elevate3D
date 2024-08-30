import React, {
    useRef
} from "react";
import {
    useGLTF
} from "@react-three/drei";
import model from "../../assets/3D/object_5.glb";

export default function Object5(props) {
    const {
        nodes,
        materials
    } = useGLTF(model);
    return ( <
        group { ...props
        }
        dispose = {
            null
        } >
        <
        mesh castShadow receiveShadow geometry = {
            nodes.Altar_Altar_Material_0.geometry
        }
        material = {
            materials.Altar_Material
        }
        position = {
            [-0.388, 0.158, -3.928]
        }
        rotation = {
            [-Math.PI, 1.076, -Math.PI]
        }
        scale = {
            0.421
        }
        /> <
        mesh castShadow receiveShadow geometry = {
            nodes.Altar_Altar_Material_0001.geometry
        }
        material = {
            materials.Altar_Material
        }
        position = {
            [-0.388, 0.158, -3.928]
        }
        rotation = {
            [0, -1.078, 0]
        }
        scale = {
            0.421
        }
        /> <
        /group>
    );
}

// useGLTF.preload(model);