// import { useRef } from "react";
// import { BsArrowLeftShort, BsArrowRightShort } from "react-icons/bs";
// import { Fade } from "react-awesome-reveal";
// import "../css/discover.css";

// const Discover = ({ data }) => {
//   const scrollRef = useRef(null);

//   // console.log(data);

//   const scrollLeftDir = () => scroll("left");
//   const scrollRightDir = () => scroll("right");

//   const scroll = (direction) => {
//     const { current } = scrollRef;
//     if (current && current.scrollLeft != null) {
//       if (direction === "left") {
//         current.scrollLeft -= 800;
//       } else if (direction === "right") {
//         current.scrollLeft += 500;
//       }
//     }
//   };

//   return (
//     <div className="app-gallery" id="gallery">
//       <div className="app-gallery-content">
//         <Fade bottom>
//           <h1>Gallery</h1>
//         </Fade>
//       </div>
//       <div className="app-gallery-images">
//         <div className="app-gallery-images_container" ref={scrollRef}>
//           {data.map((item, index) => (
//             <div className="app-gallery-images_card" key={index}>
//               <img
//                 className="gallery-image"
//                 src={item.Pic.url}
//                 // src={`img-${index}`}
//                 alt={index}
//               />
//             </div>
//           ))}
//         </div>
//         <div className="app-gallery-images_arrows">
//           <div className="gallery-arrows-div">
//             <BsArrowLeftShort
//               className="gallery-arrow-icon"
//               onClick={scrollLeftDir}
//             />
//           </div>
//           <div className="gallery-arrows-div">
//             <BsArrowRightShort
//               className="gallery-arrow-icon"
//               onClick={scrollRightDir}
//             />
//           </div>
//         </div>
//         </div>
//     </div>
//   );
// };

// export default Discover;

import React from "react";
import styles from "../css/discover.module.css";

const Discover = ({ data }) => {
    let mappedData = data.map((item, index) => (
        <div className={styles.imageContainer} key={index}>
            <img src={item.Pic.url} alt="gallery" className={styles.imagess} />{" "}
        </div>
    ));

    return (
        <div className={styles.landinggallery}>
            <h1 className={styles.heading}> Gallery </h1>{" "}
            <div className={styles.showgallery}> {mappedData} </div>{" "}
        </div>
    );
};

export default Discover;
