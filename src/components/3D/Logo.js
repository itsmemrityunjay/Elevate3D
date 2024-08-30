import React, {
    Suspense,
    useRef
} from "react";
import {
    useGLTF,
    PositionalAudio
} from "@react-three/drei";
import model from "../../assets/3D/logo.glb";
// import bgSound from "../../assets/3D/bg_audio.mp3";

export default function Logo(props) {
    const {
        nodes,
        materials
    } = useGLTF(model);
    const meshRef1 = useRef(null);
    return ( <
        group { ...props
        }
        dispose = {
            null
        } > {
            /* <Suspense>
                    <PositionalAudio url={bgSound} distance={2} loop autoplay />
                  </Suspense> */
        } <
        mesh castShadow receiveShadow geometry = {
            nodes.Plane.geometry
        }
        material = {
            materials.logo_gold
        }
        rotation = {
            [Math.PI / 2, 0, 0]
        }
        ref = {
            meshRef1
        }
        /> <
        /group>
    );
}

// useGLTF.preload(model);