import {
    GradientTexture,
    Html
} from "@react-three/drei";
import {
    useRef
} from "react";
import {
    useFrame
} from "@react-three/fiber";
import styles from "../../css/3d.module.css";
const Crystal = (props) => {
    // const ref = useRef();
    // useFrame((_, delta) => {
    //   ref.current.rotation.y += 0.5 * delta;
    // });
    return ( <
        group { ...props
        } > {
            props.children
        } {
            /* <mesh scale={0.12}>
                    <octahedronGeometry />
                    <pointLight color={props.color} intensity={3} />
                    <meshPhysicalMaterial
                      roughness={0}
                      metalness={0}
                      thickness={1}
                      ior={3.2}
                      transmission={1.0}
                    >
                      <GradientTexture
                        stops={[0.5, 1]} // As many stops as you want
                        colors={props.colors} // Colors need to match the number of stops
                        size={1024} // Size is optional, default = 1024
                      />
                    </meshPhysicalMaterial>
                  </mesh> */
        } <
        /group>
    );
};

export default Crystal;