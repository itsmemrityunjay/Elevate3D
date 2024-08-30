import { Plane } from "@react-three/drei";
import TreeModel from "./TreeModel";
import Logo from "./Logo";
import Path from "./Path";
import Fountain from "./Fountain";
import FenceAndGateAssembly from "./FenceAndGateAssembly";
import Clouds from "./Clouds";
import Trees from "./Trees";
import Object1 from "./Object1";
import Object2 from "./Object2";
import Object3 from "./Object3";
import Object4 from "./Object4";
import Object5 from "./Object5";
import CrystalsAssembly from "./CrystalsAssembly";
const WorldModel = ({ switchMode }) => {
  return (
    <>
      <Plane args={[30, 30]} rotation={[-Math.PI / 2, 0, 0]}>
        <meshBasicMaterial color="#FFFFFF" />
      </Plane>{" "}
      <CrystalsAssembly switchMode={switchMode} />{" "}
      <Path position={[-0.8, -0.2, -0.5]} />{" "}
      <FenceAndGateAssembly position={[0, 0, 6.5]} />{" "}
      <Fountain
        position={[-5, 0.45, -0.5]}
        scale={0.5}
        rotation={[0, Math.PI / 4, 0]}
      />{" "}
      <Clouds />
      <Trees />
      <Object1 position={[-1.5, -0.05, -2]} />{" "}
      <Object2 position={[9, -0.25, -2]} rotation={[0, 0, 0]} scale={0.8} />{" "}
      <Object2 position={[8, -0.25, -12]} rotation={[0, 0, 0]} scale={0.8} />{" "}
      <Object2
        position={[4.5, -0.25, -2.5]}
        rotation={[0, Math.PI / 6, 0]}
        scale={0.8}
      />{" "}
      <Object2
        position={[-11, -0.25, 9]}
        rotation={[0, Math.PI, 0]}
        scale={0.8}
      />{" "}
      <Object2 position={[6, -0.25, -16]} rotation={[0, 0, 0]} scale={0.8} />{" "}
      <Object3
        position={[-1, -0.3, -4]}
        rotation={[0, (-2 * Math.PI) / 3 + Math.PI, 0]}
        scale={1.5}
      />{" "}
      <Object4 position={[-6, -0.4, 3.7]} scale={1.5} />{" "}
      <Object5
        position={[2, -0.24, -5]}
        rotation={[0, Math.PI / 4 + Math.PI / 6, 0]}
        scale={1.5}
      />{" "}
      <Logo
        position={[-4, -0.05, -12.5]}
        rotation={[0, Math.PI / 4, 0]}
        scale={1}
      />{" "}
    </>
  );
};

export default WorldModel;
