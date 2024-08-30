import React, { useEffect, useRef, useState } from "react";
import styles from "../css/cardAttraction.module.css";
import VanillaTilt from "vanilla-tilt";

const AttractionCard = (props) => {
  const cardRef = useRef(null);
  const [bgImage, setBgImage] = useState("");

  useEffect(() => {
    if (cardRef.current) {
      VanillaTilt.init(cardRef.current, {
        max: 15,
        speed: 400,
        glare: true,
        "max-glare": 0.2,
      });

      setBgImage(`url(${props.data.Pic.url})`);
    }
  }, [props.data.Pic.url]);

  return (
    <div className={styles.attracion}>
      <a
        href={props.data.link}
        rel="noreferrer"
        target="_blank"
        className={styles.anchor}
      >
        <div
          ref={cardRef}
          className={`${styles.card}`}
          style={{
            backgroundImage: `${bgImage}`,
            backgroundSize: `cover`,
          }}
        ></div>{" "}
      </a>{" "}
    </div>
  );
};

export default AttractionCard;
