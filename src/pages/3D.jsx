import { Canvas, useFrame } from "@react-three/fiber";
import styles from "../css/3d.module.css";
import HeavenEnviroment from "../components/3D/HeavenEnviroment";
import WorldModel from "../components/3D/WorldModel";
import * as THREE from "three";
import { create } from "zustand";
import typeface from "../assets/bg/typefacefinal.png";
import {
    Html,
    PerspectiveCamera,
    ScrollControls,
    useScroll,
    OrbitControls,
    Scroll,
    Line,
} from "@react-three/drei";
import { Suspense, useEffect, useState } from "react";
import Navbar from "../components/navbar";
import "animate.css";
export const useStore = create((set) => ({
    cameraPosition: new THREE.Vector3(0, 1, 7.8),
    cameraTarget: new THREE.Vector3(0, 1, 5),
    psuedoCameraTarget: new THREE.Vector3(0, 1, 5),
}));

const Story = ({ switchMode }) => {
    const { cameraPosition, cameraTarget, psuedoCameraTarget } = useStore(
        (state) => state
    );

    const [showIntro, setShowIntro] = useState(true);
    const [hide, setHide] = useState(false);

    useEffect(() => {
        setTimeout(() => {
            if (hide) {
                setShowIntro(false);
            }
        }, 2000);
    }, [hide]);

    return (
        <Suspense fallback={<ThreeDLoader switchMode={switchMode} />}>
            {" "}
            <div className={styles.threeDPage}>
                {" "}
                {/* <img
                        src={typeface}
                        style={{ position: "fixed", zIndex: 1000, width: "250px", top: "5px" }}
                      /> */}{" "}
                <div
                    onClick={() => {
                        switchMode(false);
                    }}
                    className={styles.normalMode}
                >
                    Normal Mode{" "}
                </div>{" "}
                <Navbar />
                <div
                    className={`${styles.fullScreenTypeface} animate__animated ${hide && "animate__fadeOutLeft"
                        }`}
                    style={{
                        display: showIntro ? "flex" : "none",
                    }}
                >
                    <div className={styles.bg}> </div>{" "}
                    <img
                        src={typeface}
                        style={{
                            width: "85%",
                            zIndex: 1500,
                        }}
                    />{" "}
                    <span className={styles.introText}>
                        We are incredibly excited to introduce "Launching Futures: Elevate-2024, Your Path
                        Begins Here," <br />a transformative 3-day induction program specially designed to welcome
                        the newest members of <br /> our SVGOI family—the 2024 batch!
                    </span>{" "}
                    <span
                        className={styles.letsGo}
                        onClick={() => {
                            setHide(true);
                        }}
                    >
                        Let 's Go →{" "}
                    </span>{" "}
                </div>
                {/* 3D Code start */}{" "}
                <Canvas
                    style={{
                        height: "100vh",
                        width: "100vw",
                        position: "absolute",
                    }}
                    shadows
                >
                    <PerspectiveCamera makeDefault position={cameraPosition} />{" "}
                    {/* Helpers */}{" "}
                    {/* <gridHelper
                                                    args={[30, 30, 0xff0000, "blue"]}
                                                    position={[0, 0.1, 0]}
                                                  />
                                                  // <axesHelper args={[20]} position={[0, 0.1, 0]} /> */}{" "}
                    {/* Orbital Controls */} {/* <OrbitControls /> */} {/* 3D Elements */}{" "}
                    <HeavenEnviroment />
                    <ScrollControls pages={5} damping={0.4} maxSpeed={0.4}>
                        <ThreeDScroll
                            cameraPosition={cameraPosition}
                            cameraTarget={cameraTarget}
                            psuedoCameraTarget={psuedoCameraTarget}
                        />{" "}
                        <WorldModel position={[0, 0, 0]} switchMode={switchMode} />{" "}
                    </ScrollControls>{" "}
                </Canvas>{" "}
                {/* 3D Code End */}{" "}
            </div>{" "}
        </Suspense>
    );
};

export default Story;

const ThreeDLoader = ({ switchMode }) => {
    return (
        <div className={styles.loader}>
            <div
                onClick={() => {
                    switchMode(false);
                }}
                className={styles.normalMode}
            >
                Normal Mode{" "}
            </div>{" "}
            <div className={styles.spinner}> </div>{" "}
            <div className={styles.loaderText}> Loading </div>{" "}
        </div>
    );
};

const ThreeDScroll = ({ cameraPosition, cameraTarget, psuedoCameraTarget }) => {
    const scroll = useScroll();
    const cameraTargetCurve = new THREE.CatmullRomCurve3([
        new THREE.Vector3(0, 1, 5),
        new THREE.Vector3(-4.2, 1, 3.8),
        new THREE.Vector3(1, 1.2, 0.8),
        new THREE.Vector3(6, 0.7, -3.7),
        new THREE.Vector3(-4, 1.1, -6),
        new THREE.Vector3(-0.5, 0.05, -10),
        new THREE.Vector3(-5, 3, -13),
    ]);

    const cameraPositionCurve = new THREE.CatmullRomCurve3([
        new THREE.Vector3(0, 1, 7.8),
        new THREE.Vector3(0, 2, 5),
        new THREE.Vector3(-1.3, 1, 2),
        new THREE.Vector3(-1.5, 1, 0),
        new THREE.Vector3(1.3, 1, -4.3),
        new THREE.Vector3(1.5, 1, -7),
        new THREE.Vector3(-0.5, 0.5, -10),
    ]);

    const cameraTargetPoints = cameraTargetCurve.getPoints(99);
    const cameraPositionPoints = cameraPositionCurve.getPoints(99);
    useFrame(({ camera }, delta) => {
        let offset = parseInt(scroll.offset * (cameraTargetPoints.length - 1));
        // console.log(offset);
        cameraPosition.copy(cameraPositionPoints[offset]);
        cameraTarget.copy(cameraTargetPoints[offset]);
        camera.position.lerp(cameraPosition, delta);
        psuedoCameraTarget.lerp(cameraTarget, delta);
        camera.lookAt(psuedoCameraTarget);
    });
    // return (
    //   <>
    //     <Line points={cameraPositionPoints} lineWidth={1.5} color={"red"} />
    //     <Line points={cameraTargetPoints} lineWidth={1.5} color={"green"} />
    //   </>
    // );
};
