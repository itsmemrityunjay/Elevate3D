import React, {
    useRef
} from "react";
import {
    useGLTF,
    useAnimations
} from "@react-three/drei";
import model from "../../assets/3D/fountain.glb";

export default function Fountain(props) {
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
        group name = "Sketchfab_model"
        position = {
            [0, 0.944, -0.272]
        }
        rotation = {
            [-Math.PI / 2, 0, 0]
        } >
        <
        group name = "7f9fdc217aa2478c9a318e8ced50ae9cfbx"
        rotation = {
            [Math.PI / 2, 0, 0]
        }
        scale = {
            0.01
        } >
        <
        group name = "RootNode" >
        <
        group name = "BezierCurve"
        position = {
            [58.78, -58.055, 24.153]
        }
        rotation = {
            [-Math.PI, 0, Math.PI / 2]
        } >
        <
        mesh name = "BezierCurve__0"
        castShadow receiveShadow geometry = {
            nodes.BezierCurve__0.geometry
        }
        material = {
            materials["fShape.002"]
        }
        rotation = {
            [-0.038, 0, 0]
        }
        /> <
        /group> <
        group name = "BezierCurve001"
        position = {
            [57.12, -51.862, 28.89]
        }
        rotation = {
            [-Math.PI, 0, Math.PI / 2]
        }
        scale = {
            0.316
        } >
        <
        mesh name = "BezierCurve001__0"
        castShadow receiveShadow geometry = {
            nodes.BezierCurve001__0.geometry
        }
        material = {
            materials.BezierCurve__0
        }
        /> <
        /group> <
        group name = "BezierCurve002"
        position = {
            [-0.662, 65.058, 43.123]
        }
        rotation = {
            [0, -0.513, -Math.PI / 2]
        }
        scale = {
            0.204
        } >
        <
        mesh name = "BezierCurve002__0"
        castShadow receiveShadow geometry = {
            nodes.BezierCurve002__0.geometry
        }
        material = {
            materials["fShape.002"]
        }
        position = {
            [0, -1.06, 0.688]
        }
        rotation = {
            [0.018, 0, 0]
        }
        /> <
        /group> <
        group name = "BezierCurve003"
        position = {
            [-13.39, 71.203, 16.431]
        }
        rotation = {
            [Math.PI, -0.814, Math.PI / 2]
        }
        scale = {
            0.204
        } >
        <
        mesh name = "BezierCurve003__0"
        castShadow receiveShadow geometry = {
            nodes.BezierCurve003__0.geometry
        }
        material = {
            materials["fShape.002"]
        }
        position = {
            [0, -1.489, -0.096]
        }
        rotation = {
            [0.018, 0, 0]
        }
        /> <
        /group> <
        group name = "BezierCurve004"
        position = {
            [8.95, 91.413, 26.76]
        }
        rotation = {
            [Math.PI, 1.474, Math.PI / 2]
        }
        scale = {
            0.204
        } >
        <
        mesh name = "BezierCurve004__0"
        castShadow receiveShadow geometry = {
            nodes.BezierCurve004__0.geometry
        }
        material = {
            materials["fShape.002"]
        }
        position = {
            [0, -0.949, 0.077]
        }
        rotation = {
            [0.018, 0, 0]
        }
        /> <
        /group> <
        group name = "Mesh_0"
        rotation = {
            [-0.027, 0, 0]
        } >
        <
        mesh name = "Mesh_0_Material_0_0"
        castShadow receiveShadow geometry = {
            nodes.Mesh_0_Material_0_0.geometry
        }
        material = {
            materials["Marble Material.001"]
        }
        /> <
        mesh name = "Mesh_0_Material_0_0001"
        castShadow receiveShadow geometry = {
            nodes.Mesh_0_Material_0_0001.geometry
        }
        material = {
            materials["Marble Material.001"]
        }
        /> <
        /group> <
        /group> <
        /group> <
        /group> <
        mesh name = "Circle"
        castShadow receiveShadow geometry = {
            nodes.Circle.geometry
        }
        material = {
            materials["waterftmat.003"]
        }
        position = {
            [0, -0.535, 0]
        }
        scale = {
            3.496
        }
        /> <
        mesh name = "Cylinder"
        castShadow receiveShadow geometry = {
            nodes.Cylinder.geometry
        }
        material = {
            materials["Marble Material.001"]
        }
        position = {
            [0.079, -0.602, 0]
        }
        scale = {
            [1.287, 0.183, 1.287]
        }
        /> <
        /group> <
        /group>
    );
}

// useGLTF.preload(model);