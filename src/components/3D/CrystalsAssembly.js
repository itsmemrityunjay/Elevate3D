import { useState, useEffect } from "react";
import Crystal from "./Crystal";
import styles from "../../css/3d.module.css";
import { getSingleDoc } from "../../config/firebaseFirestore";
import typeface from "../../assets/bg/typefacefinal.png";
import { useScroll, Html } from "@react-three/drei";
import { useFrame } from "@react-three/fiber";
import "animate.css";
const CrystalsAssembly = (props) => {
  const scroll = useScroll();
  // For 3D Content
  const [air, setAir] = useState(0);
  const [water, setWater] = useState(0);
  const [earth, setEarth] = useState(0);
  const [sky, setSky] = useState(0);
  const [fire, setFire] = useState(0);
  const [gallery, setGallery] = useState([]);
  const [discoverData, setDiscoverData] = useState([]);
  const [aftermovies, setAftermovies] = useState([]);
  const fetchData = async () => {
    const rawData = await getSingleDoc("WebContents", "appLandingPage");
    let gallery = [];
    let discover = [];
    let aftermovies = [];
    for (let i = 0; i < rawData.data.length; i++) {
      switch (rawData.data[i].Vertical) {
        case "Gallery":
          gallery.push(rawData.data[i]);
          break;
        case "Discover More":
          discover.push(rawData.data[i]);
          break;
        case "Aftermovies":
          aftermovies.push(rawData.data[i]);
          break;
        default:
          break;
      }
    }
    setGallery(gallery);
    setDiscoverData(discover);
    setAftermovies(aftermovies);
  };

  useEffect(() => {
    fetchData();
  }, []);

  useFrame(() => {
    // For 3D Content
    let airRange = scroll.visible(0.1, 0.15);
    let waterRange = scroll.visible(0.28, 0.22);
    let earthRange = scroll.visible(0.53, 0.15);
    let skyRange = scroll.visible(0.7, 0.1);
    let fireRange = scroll.visible(0.9, 0.11);

    setAir(airRange);
    setWater(waterRange);
    setEarth(earthRange);
    setSky(skyRange);
    setFire(fireRange);
  });

  return (
    <group {...props}>
      <Crystal
        colors={["#F7F7F7", "white"]}
        color={"white"}
        position={[-4.35, 1.5, 3.8]}
      >
        {air && (
          <Html
            wrapperClass={styles.annotationsWrapper}
            position={[0, 0, 0]}
            castShadow
            receiveShadow
            // transform
          >
            <div
              className={`${styles.textBox} animate__animated animate__fadeIn`}
            >
              <h1 className={styles.sectionHeading}> About Elevate </h1>{" "}
              <p className={styles.sectionPara}>
                Elevate 2024: – a dynamic 3-day induction program crafted to
                warmly welcome the newest members of our SVGOI family, the 2024
                batch!. This event is not just an orientation; it’s the start of
                an incredible journey filled with opportunities, inspiration,
                and growth. Whether you're eager to dive into academic
                challenges, connect with industry leaders, or simply enjoy the
                vibrant campus life, Elevate-2024 has something for everyone !{" "}
              </p>{" "}
            </div>{" "}
          </Html>
        )}{" "}
      </Crystal>{" "}
      <Crystal
        colors={["#4BBBEF", "aqua"]}
        color={"aqua"}
        position={[1.25, 1, 0.65]}
      >
        {water && (
          <Html
            wrapperClass={styles.annotationsWrapper}
            position={[0, 0, 0]}
            style={{
              display: water !== 0 ? "block" : "none",
            }}
            // occlude
            // transform
          >
            <div
              className={`${styles.textBox} animate__animated animate__fadeIn`}
            >
              <h1 className={styles.sectionHeading}> Discover More </h1>{" "}
              <div className={styles.scrollWrapper}>
                {" "}
                {discoverData.map((e) => {
                  return (
                    <a href={e.Link} target="_blank">
                      <img src={e.Pic.url} className={styles.discoverMoreImg} />{" "}
                    </a>
                  );
                })}{" "}
              </div>{" "}
              <a
                href="https://www.instagram.com/antaragni.iitkanpur/"
                target="_blank"
                className={styles.viewMore}
              >
                View More{" "}
              </a>{" "}
            </div>{" "}
          </Html>
        )}{" "}
      </Crystal>{" "}
      <Crystal
        colors={["green", "#35E914"]}
        color={"green"}
        position={[3.7, 0.7, -3.5]}
      >
        {earth && (
          <Html
            wrapperClass={styles.annotationsWrapper}
            position={[0, 0, 0]}
            style={{
              display: earth !== 0 ? "block" : "none",
            }}
          >
            <div
              className={`${styles.textBox} animate__animated animate__fadeIn`}
            >
              <h1 className={styles.sectionHeading}> Gallery </h1>{" "}
              <div className={styles.scrollWrapper}>
                {" "}
                {gallery.map((e) => {
                  return <img src={e.Pic.url} className={styles.img} />;
                })}{" "}
              </div>{" "}
              <a href="/gallery" target="_blank" className={styles.viewMore}>
                View More{" "}
              </a>{" "}
            </div>{" "}
          </Html>
        )}{" "}
      </Crystal>
      <Crystal
        colors={["blue", "#6196F7"]}
        color={"blue"}
        position={[-4, 1, -6]}
      >
        {sky && (
          <Html
            wrapperClass={styles.annotationsWrapper}
            position={[0, 0, 0]}
            style={{
              display: sky !== 0 ? "block" : "none",
            }}
          >
            <div
              className={`${styles.textBox} animate__animated animate__fadeIn`}
            >
              <h1 className={styles.sectionHeading}> Aftermovies </h1>{" "}
              <div className={styles.scrollWrapper}>
                {" "}
                {aftermovies.map((e) => {
                  return (
                    <a href={e.Link} target="_blank">
                      <img src={e.Pic.url} className={styles.youtube} />{" "}
                    </a>
                  );
                })}{" "}
              </div>{" "}
              <a
                href="https://www.youtube.com/@antaragniiitkanpur"
                target="_blank"
                className={styles.viewMore}
              >
                View More{" "}
              </a>{" "}
            </div>{" "}
          </Html>
        )}{" "}
      </Crystal>{" "}
      <Crystal
        colors={["red", "orange"]}
        color={"red"}
        position={[-3.8, 2, -12.3]}
      >
        {fire && (
          <Html
            wrapperClass={styles.annotationsWrapper}
            position={[0, 0, 0]}
            style={{
              display: fire !== 0 ? "block" : "none",
            }}
          >
            <div
              className={`${styles.textBox} animate__animated animate__fadeIn`}
              style={{
                width: "40vw",
              }}
            >
              {/* <h1 className={styles.sectionHeading}>Explore More</h1> */}{" "}
              <img src={typeface} className={styles.typeface} />{" "}
              <div
                style={{
                  textDecoration: "none",
                  fontWeight: "800",
                  // color: "var(--secondary-color)",
                  color: "white",
                }}
                onClick={() => {
                  props.switchMode(false);
                }}
              >
                Explore More{" "}
              </div>{" "}
            </div>{" "}
          </Html>
        )}{" "}
      </Crystal>{" "}
    </group>
  );
};

export default CrystalsAssembly;
