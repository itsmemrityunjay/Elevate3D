// import React, { useEffect, useRef, useState } from 'react';
// import styles from "../css/sponsorCard.module.css";

// // Define an array of possible colors
// const possibleColors = ['red', 'blue', 'green'];

// const SponsorCard = (props) => {
//   const cardRef = useRef(null);
//   const [bgImage, setBgImage] = useState('');

//   useEffect(() => {
//     if (props.data.Pic && props.data.Pic.url) {
//       setBgImage(`url(${props.data.Pic.url})`);
//     }
//   }, [props.data.Pic]);

//   // Randomly select a color from the possibleColors array
//   const randomColor = possibleColors[Math.floor(Math.random() * possibleColors.length)];

//   return (
//     <div className={styles.container}>
//       <div className={styles.card}>
//         <div className={styles.imgBx} style={{ backgroundColor: randomColor }}>
//           {props.data.Pic && props.data.Pic.url && (
//             <img src={props.data.Pic.url} alt={props.data.name} />
//           )}
//         </div>
//         <div className={styles.contentBx}>
//           <h2>{props.data.name}</h2>
//           <div className={styles.size}>
//             <h3>{props.data.description}</h3>
//           </div>
//         </div>
//       </div>
//     </div>
//   );
// }

// export default SponsorCard;

import React from "react";
import styles from "../css/sponsorCard.module.css";
// import { LazyLoadImage } from "react-lazy-load-image-component";
import "react-lazy-load-image-component/src/effects/blur.css";

const SponsorCard = ({
    member
}) => {
    if (!member || !member.webLink || !member.img || !member.img.url || !member.desc) {
        return <div > Error: Invalid sponsor data < /div>;
    }

    return ( <
        div className = {
            `${styles.sponsors__imageDiv}`
        } >
        <
        a target = "_blank"
        rel = "noreferrer"
        href = {
            member.webLink
        } >
        <
        img className = {
            styles.sponsors__img
        }
        src = {
            member.img.url
        }
        alt = {
            member.name
        }
        /> <
        p className = {
            styles.sponsors__desc
        } > {
            member.desc
        } < /p> <
        /a> <
        /div>
    );
};

export default SponsorCard;