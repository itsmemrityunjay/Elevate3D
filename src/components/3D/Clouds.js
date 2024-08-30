import Cloud from "./Cloud";

const Clouds = (props) => {
  return (
    <group {...props}>
      {" "}
      {/* Around Logo */}{" "}
      <Cloud position={[1, -0.6, -12]} rotation={[0, Math.PI / 6, 0]} />{" "}
      <Cloud position={[2, -0.5, -14]} rotation={[0, Math.PI / 4, 0]} />{" "}
      <Cloud position={[0.5, -0.5, -12]} rotation={[0, Math.PI / 4, 0]} />{" "}
      {/* Back Border */} {/* Right */}{" "}
      <Cloud position={[4, 0, -12]} rotation={[0, 0.3, 0]} />{" "}
      <Cloud position={[0.5, -0.1, -13]} rotation={[0, 0.3, 0]} />{" "}
      <Cloud position={[7, 0, -13]} rotation={[0, 0.4, 0]} />{" "}
      <Cloud position={[9, 0, -11]} rotation={[0, 0.4, 0]} />{" "}
      <Cloud position={[21.5, 0, -6.5]} rotation={[0, 0.4, 0]} scale={2} />{" "}
      <Cloud position={[11, 0, -11]} rotation={[0, 0.4, 0]} />{" "}
      <Cloud position={[13, 0, -9]} rotation={[0, 0.4, 0]} /> {/* Left */}{" "}
      <Cloud position={[-2.3, 0, -9]} rotation={[0, 0.3, 0]} />{" "}
      <Cloud position={[0, 0, -11]} rotation={[0, 0.3, 0]} scale={1.5} />{" "}
      {/* LeftSide Border */}{" "}
      <Cloud
        position={[-7, -0.1, -10]}
        rotation={[0, 0.3 + Math.PI / 2, 0]}
        scale={1.5}
      />{" "}
      <Cloud
        position={[-10, -0.1, -10]}
        rotation={[0, 0.3 + Math.PI / 2, 0]}
        scale={1.5}
      />{" "}
      <Cloud
        position={[-10, -0.1, -11]}
        rotation={[0, 0.3 + Math.PI / 2, 0]}
        scale={1.5}
      />{" "}
      <Cloud
        position={[-8, -0.1, -6]}
        rotation={[0, 0.3 + Math.PI / 2, 0]}
        scale={1.5}
      />{" "}
      <Cloud
        position={[-8, 0, -16]}
        rotation={[0, 0.3 + Math.PI / 2, 0]}
        scale={1.5}
      />{" "}
      <Cloud position={[-7, 0, -13]} rotation={[0, 0.3 + Math.PI / 2, 0]} />{" "}
      <Cloud position={[-8.5, 0, -10]} rotation={[0, 0.3 + Math.PI / 2, 0]} />{" "}
      <Cloud position={[-8, 0, 0]} rotation={[0, 0.3 + Math.PI / 2, 0]} />{" "}
      {/* RightSide Border */}{" "}
      <Cloud
        position={[8, 0, 13]}
        rotation={[0, 0.3 + (3 * Math.PI) / 2, 0]}
        scale={1.5}
      />{" "}
      <Cloud
        position={[6, 0, 11]}
        rotation={[0, 0.3 + (3 * Math.PI) / 2, 0]}
        scale={1.5}
      />{" "}
      <Cloud
        position={[7, 0, 7]}
        rotation={[0, 0.3 + (3 * Math.PI) / 2, 0]}
        scale={1.5}
      />{" "}
      <Cloud
        position={[9, 0, 4.5]}
        rotation={[0, 0.3 + (3 * Math.PI) / 2, 0]}
        scale={1.5}
      />{" "}
      <Cloud position={[8, 0, -1]} rotation={[0, 0.3 + (3 * Math.PI) / 2, 0]} />{" "}
      <Cloud position={[6, 0, -3]} rotation={[0, 0.3 + (3 * Math.PI) / 2, 0]} />{" "}
      {/* Front Border */} {/* Right */}{" "}
      <Cloud position={[12, -0.3, 9]} rotation={[0, 0.3, 0]} scale={1.5} />{" "}
      <Cloud position={[13, 0, 10]} rotation={[0, 0.3, 0]} />{" "}
      <Cloud position={[7, -0.5, 9]} rotation={[0, 0.3, 0]} /> {/* Left */}{" "}
      <Cloud position={[-4, -0.2, 9]} rotation={[0, 0.3, 0]} scale={1.5} />{" "}
      <Cloud position={[2.5, -0.2, 11]} rotation={[0, 0.3, 0]} scale={1.5} />{" "}
      <Cloud position={[-4, 0, 11.5]} rotation={[0, 0.3 - Math.PI / 6, 0]} />{" "}
      <Cloud position={[7, -0.2, 9]} rotation={[0, 0.3, 0]} />{" "}
      <Cloud position={[2, -0.2, 9]} rotation={[0, 0.3, 0]} />{" "}
      {/* Right Handside Inside Clouds */}{" "}
      <Cloud position={[9, -0.5, 3]} rotation={[0, 0, 0]} />{" "}
      <Cloud position={[-4, -0.1, 4]} rotation={[0, 0, 0]} scale={0.5} />{" "}
      <Cloud position={[-1, -0.1, -2]} rotation={[0, 0, 0]} scale={0.5} />{" "}
      <Cloud position={[-1, -0.1, -7]} rotation={[0, 0, 0]} scale={0.5} />{" "}
      <Cloud position={[2, -0.1, -5]} rotation={[0, 0, 0]} scale={0.5} />{" "}
      <Cloud position={[-2, -0.1, 3.5]} rotation={[0, 0, 0]} scale={0.5} />{" "}
      <Cloud position={[-5, -0.1, -4.5]} rotation={[0, 0, 0]} scale={0.5} />{" "}
      <Cloud position={[-4, -0.1, -1.5]} rotation={[0, 0, 0]} scale={0.5} />{" "}
      <Cloud position={[0, -0.1, -2.5]} rotation={[0, 0, 0]} scale={0.5} />{" "}
      <Cloud position={[1.5, -0.1, -4]} rotation={[0, 0, 0]} scale={0.5} />{" "}
      <Cloud position={[0.8, -0.15, -7]} rotation={[0, 0, 0]} scale={0.5} />{" "}
      <Cloud position={[-0.5, -0.15, -8]} rotation={[0, 0, 0]} scale={0.5} />{" "}
      {/* Left Handside Inside Clouds */}{" "}
      <Cloud position={[-0.5, -0.25, 5]} rotation={[0, 0, 0]} scale={0.5} />{" "}
      <Cloud position={[-1, -0.25, 4]} rotation={[0, 0, 0]} scale={0.5} />{" "}
      {/* <Cloud position={[-1, -0.25, 3]} rotation={[0,0 ,0]} scale={0.5}/> */}{" "}
      <Cloud position={[0, -0.1, 5]} rotation={[0, 0, 0]} scale={0.5} />{" "}
      <Cloud position={[0, -0.1, 7]} rotation={[0, 0, 0]} scale={0.5} />{" "}
      <Cloud position={[3, -0.2, 4]} rotation={[0, 0, 0]} scale={0.5} />{" "}
      <Cloud position={[3.5, -0.2, 5]} rotation={[0, 0, 0]} scale={0.5} />{" "}
      <Cloud position={[3.5, -0.2, 6]} rotation={[0, 0, 0]} scale={0.5} />{" "}
      <Cloud position={[3.5, -0.2, 7]} rotation={[0, 0, 0]} scale={0.5} />{" "}
      <Cloud position={[4, -0.1, -8]} rotation={[0, 0, 0]} scale={0.5} />{" "}
      <Cloud position={[7, -0.1, -8]} rotation={[0, 0, 0]} scale={0.5} />{" "}
      <Cloud position={[8, -0.1, -4]} rotation={[0, 0, 0]} scale={0.5} />{" "}
      <Cloud position={[6, -0.1, -4.5]} rotation={[0, 0, 0]} scale={0.5} />{" "}
      <Cloud position={[7, -0.1, -6]} rotation={[0, 0, 0]} scale={0.5} />{" "}
      <Cloud position={[4, -0.1, -0.5]} rotation={[0, 0, 0]} scale={0.5} />{" "}
      {/* <Cloud position={[5, 0.1, 2]} rotation={[0,3*Math.PI/4,0]} scale={0.5}/>
                  <Cloud position={[3, 0.1, 6]} rotation={[0,3*Math.PI/4,0]} scale={0.5}/>
                  <Cloud position={[4, 0.1, 7]} rotation={[0,3*Math.PI/4,0]} scale={0.5}/>
                  <Cloud position={[5, 0.1, 6]} rotation={[0,3*Math.PI/4,0]} scale={0.5}/>
                  <Cloud position={[6, 0.1, 7]} rotation={[0,3*Math.PI/4,0]} scale={0.5}/>
                  <Cloud position={[7, 0.1, 7]} rotation={[0,3*Math.PI/4,0]} scale={0.5}/>
                  <Cloud position={[8, 0.1, 6]} rotation={[0,3*Math.PI/4,0]} scale={0.5}/>
                  <Cloud position={[7,-0,0]} rotation={[0,Math.PI/2,Math.PI]} scale={0.5}/>
                  <Cloud position={[10, 0.5, 2]} rotation={[0,Math.PI ,0]} />
                  <Cloud position={[3.5,-0.1,5]} rotation={[0,0,Math.PI]} scale={0.5}/>
                  <Cloud position={[7,-0.1,3]} rotation={[0,0,Math.PI]} scale={0.5}/>
                  <Cloud position={[1.5,-0.1,1]} rotation={[0,Math.PI,0]} scale={0.5}/>
                  <Cloud position={[6, -0.5, 1]} rotation={[0,Math.PI ,0]} /> */}{" "}
      {/* Positive x- Negative z */}{" "}
      {/* <Cloud position={[2.5, -0.1, -11]} rotation={[0,Math.PI/4 ,0]} scale={0.5}/>
                  <Cloud position={[11, 0.5, -3]} rotation={[0,Math.PI ,0]}/>
                  <Cloud position={[7, -0.1, -3]} rotation={[0,Math.PI ,0]}/>
                  <Cloud position={[10, 0.5, -8]} rotation={[0,Math.PI ,0]} scale={0.5}/>
                  <Cloud position={[3.5,-0.1,-3.5]} rotation={[0,Math.PI/2,Math.PI]} scale={0.5}/> */}{" "}
      {/* Negative x-z */}{" "}
      {/* <Cloud position={[-6, -0.3, -3]} rotation={[0,3*Math.PI/4 ,0]} scale={1}/>
                  <Cloud position={[-6.5, 0, -8]} rotation={[0,Math.PI/4 ,0]} scale={0.5}/>
                  <Cloud position={[-4, -0.1, -5]} rotation={[0,Math.PI/4 ,0]} scale={0.5}/>
                  <Cloud position={[-6, -0.1, -4]} rotation={[0,3*Math.PI/4 ,0]} scale={0.5}/>
                  <Cloud position={[-2, -0.1, -4]} rotation={[0,Math.PI/4 ,0]} scale={0.5}/>
                  <Cloud position={[-9, 0.5, -3.5]} rotation={[0,Math.PI/2 ,0]} scale={0.5}/>
                  <Cloud position={[-3, -0.4, -13]} rotation={[0,Math.PI/2 ,0]} />
                  <Cloud position={[-6, -0.2, -4]} rotation={[0,3*Math.PI/4 ,0]} scale={0.5}/>
                  <Cloud position={[-3, -0.4, -13]} rotation={[0,-Math.PI/2 ,0]} />
                  <Cloud position={[-10, 0.5, -6]} rotation={[0,Math.PI/4,0]} scale={0.5}/>     
                  <Cloud position={[-7, 0.5, -12]} rotation={[0,3*Math.PI/4 ,0]}/>
                  <Cloud position={[-13, 0.5, -13]} rotation={[0,-Math.PI/4,0]}/>     
                  <Cloud position={[-13, 0.5, -9]} rotation={[0,Math.PI/4,0]}/>     
                  <Cloud position={[-13, 0.5, -4]} rotation={[0,Math.PI ,0]} />
                  <Cloud position={[-3,-0.1,-10]} rotation={[0,Math.PI/2,Math.PI]} scale={0.5}/>
                  <Cloud position={[-3, -0.3, -1]} rotation={[0,Math.PI/4 ,0]} scale={0.7}/> */}{" "}
      {/* Negative x- Positive z */}{" "}
      {/* <Cloud position={[-2, 0.1, 6]} rotation={[0,3*Math.PI/4,0]} scale={0.5}/>
                  <Cloud position={[-3, 0.1, 6]} rotation={[0,3*Math.PI/4,0]} scale={0.5}/>
                  <Cloud position={[-4, 0.2, 8]} rotation={[0,3*Math.PI/4,0]} scale={0.5}/>
                  <Cloud position={[-5, 0.1, 7]} rotation={[0,3*Math.PI/4,0]} scale={0.5}/>
                  <Cloud position={[-6, 0.1, 6]} rotation={[0,3*Math.PI/4,0]} scale={0.5}/>
                  <Cloud position={[-7, 0.1, 6]} rotation={[0,3*Math.PI/4,0]} scale={0.5}/> 
                  <Cloud position={[-2.2, -0.1, 3]} rotation={[0,Math.PI/4 ,0]} scale={0.5}/>
                  <Cloud position={[-7.5, -0.1, 2.3]} rotation={[0,Math.PI/4 ,0]} scale={0.5}/>
                  <Cloud position={[-4, -0.1, 2.5]} rotation={[0,Math.PI/4 ,0]} scale={0.5}/>
                  <Cloud position={[-5.5, -0.2, 3.5]} rotation={[0,Math.PI/4 ,0]} scale={1}/>
                  <Cloud position={[-1.5, -0.2, 5]} rotation={[0,Math.PI/4 ,0]} scale={0.5}/>
                  <Cloud position={[-8.5, -0.01, 5]} rotation={[0,Math.PI/4 ,0]}/>
                  <Cloud position={[-11, 0.5, 0]} rotation={[0,Math.PI ,0]}  scale={1.5}/> */}{" "}
    </group>
  );
};

export default Clouds;
