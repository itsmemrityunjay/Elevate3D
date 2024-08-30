import React from "react";
import styles from "../css/landinggallery.module.css";
import galleryData from "./galleryData"; // Update the path accordingly

const LandingGallery = () => {
    let mappedData = galleryData.map((item, index) => (
        <div className={styles.imageContainer} key={index}>
            <img src={item.Pic.url} alt="gallery" className={styles.imagess} />
        </div>
    ));

    return (
        <div className={styles.landinggallery}>
            <h1 className={styles.heading}> Discover More </h1>
            <div className={styles.showgallery}>{mappedData}</div>
        </div>
    );
};

export default LandingGallery;
