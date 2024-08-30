import { Sparkles, Cloud, Stars, Sky, Environment } from "@react-three/drei";
const HeavenEnviroment = () => {
  return (
    <>
      {" "}
      {/* Lights */} {/* <Environment preset="forest" /> */}{" "}
      <ambientLight intensity={1.5} color={"gold"} />{" "}
      <directionalLight intensity={2} position={[0, 0, 30]} />{" "}
      <directionalLight intensity={1} position={[0, 0, -30]} />{" "}
      <directionalLight intensity={2} position={[30, 0, 0]} />{" "}
      <directionalLight intensity={1} position={[-30, 0, 0]} />{" "}
      <directionalLight intensity={2} position={[0, 30, 0]} />{" "}
      <directionalLight intensity={1} position={[0, -30, 0]} />
      {/* Point Light on Object 1,3,4,5 and fountain */}{" "}
      <pointLight position={[1.5, 0.4, 0.7]} intensity={1} />
      <pointLight position={[-4.4, 3, 3.8]} intensity={0.1} />
      <pointLight position={[-5, 1, -0.5]} intensity={1} />{" "}
      {/* <pointLight position={[-3.9,0.5,-5.9]} intensity={1}/> */}{" "}
      {/* <pointLight position={[6.5,0.5,-3.6]} intensity={1}/> */}{" "}
      {/* <pointLight position={[4.5,0.5,-3.6]} intensity={1}/>    */}
      {/* Point Light on Logo*/}{" "}
      {/* <pointLight position={[-3, 1, -12.6]} intensity={5} />
                  <pointLight position={[-3.3, 1, -12.3]} intensity={5} />
                  <pointLight position={[-3.5, 3.5, -12.3]} intensity={5} />
                  <pointLight position={[-3.9, 1, -11]} intensity={5} /> */}
      {/* Elements */}{" "}
      <Stars
        radius={100}
        depth={50}
        count={2000}
        factor={4}
        saturation={1}
        fade
        speed={1}
      />{" "}
      <Sparkles count={2000} scale={25} size={10} opacity={0.5} speed={0.5} />{" "}
      <Sky distance={10000} sunPosition={[10000, 10000, 10000]} />{" "}
      {/* <Cloud
                    opacity={0.5}
                    speed={0.3}
                    width={200}
                    depth={1}
                    segments={500}
                    position={[0, 110, 0]}
                  /> */}{" "}
    </>
  );
};
export default HeavenEnviroment;
