import { Carousel } from "react-responsive-carousel";
import "react-responsive-carousel/lib/styles/carousel.min.css";
import "../css/brochure.css";
import sprite from "../assets/brochure/Sprite.svg";
import Loader from "../components/loader";
import { useState, useEffect } from "react";

import img1 from "../assets/brochure/1.jpg";
import img2 from "../assets/brochure/2.jpg";
import img3 from "../assets/brochure/3.jpg";
import img4 from "../assets/brochure/4.jpg";
import img5 from "../assets/brochure/5.jpg";
import img6 from "../assets/brochure/6.jpg";
import img7 from "../assets/brochure/7.jpg";
import img8 from "../assets/brochure/8.jpg";
import img9 from "../assets/brochure/9.jpg";
import img10 from "../assets/brochure/10.jpg";
import img11 from "../assets/brochure/11.jpg";
import img12 from "../assets/brochure/12.jpg";
import img13 from "../assets/brochure/13.jpg";
import img14 from "../assets/brochure/14.jpg";
import img15 from "../assets/brochure/15.jpg";
import img16 from "../assets/brochure/16.jpg";
import img17 from "../assets/brochure/17.jpg";
import img18 from "../assets/brochure/18.jpg";
import img19 from "../assets/brochure/19.jpg";
import img20 from "../assets/brochure/20.jpg";
import img21 from "../assets/brochure/21.jpg";
import img22 from "../assets/brochure/22.jpg";
import img23 from "../assets/brochure/23.jpg";
import img24 from "../assets/brochure/24.jpg";
import img25 from "../assets/brochure/25.jpg";
import img26 from "../assets/brochure/26.jpg";
import img27 from "../assets/brochure/27.jpg";
import img28 from "../assets/brochure/28.jpg";
import img29 from "../assets/brochure/29.jpg";
import img30 from "../assets/brochure/30.jpg";
import img31 from "../assets/brochure/31.jpg";
import img32 from "../assets/brochure/32.jpg";
import img33 from "../assets/brochure/33.jpg";
import img34 from "../assets/brochure/34.jpg";
import img35 from "../assets/brochure/35.jpg";
import img36 from "../assets/brochure/36.jpg";
import img37 from "../assets/brochure/37.jpg";
import img38 from "../assets/brochure/38.jpg";
import img39 from "../assets/brochure/39.jpg";
import img40 from "../assets/brochure/40.jpg";
import img41 from "../assets/brochure/41.jpg";
import img42 from "../assets/brochure/42.jpg";
import img43 from "../assets/brochure/43.jpg";
import img44 from "../assets/brochure/44.jpg";
import img45 from "../assets/brochure/45.jpg";
import Navbar from "../components/navbar";

const images = [
    img1,
    img2,
    img3,
    img4,
    img5,
    img6,
    img7,
    img8,
    img9,
    img10,
    img11,
    img12,
    img13,
    img14,
    img15,
    img16,
    img17,
    img18,
    img19,
    img20,
    img21,
    img22,
    img23,
    img24,
    img25,
    img26,
    img27,
    img28,
    img29,
    img30,
    img31,
    img32,
    img33,
    img34,
    img35,
    img36,
    img37,
    img38,
    img39,
    img40,
    img41,
    img42,
    img43,
    img44,
    img45,
];

function Brochure() {
    const rotateAnimationHandler = (props, state) => {
        const transitionTime = props.transitionTime + "ms";
        const transitionTimingFunction = "ease-in-out";
        let slideStyle = {
            display: "block",
            minHeight: "100%",
            transitionTimingFunction: transitionTimingFunction,
            msTransitionTimingFunction: transitionTimingFunction,
            MozTransitionTimingFunction: transitionTimingFunction,
            WebkitTransitionTimingFunction: transitionTimingFunction,
            OTransitionTimingFunction: transitionTimingFunction,
            transform: `rotate(0)`,
            position:
                state.previousItem === state.selectedItem ? "relative" : "absolute",
            inset: "0 0 0 0",
            zIndex: state.previousItem === state.selectedItem ? "1" : "-2",
            opacity: state.previousItem === state.selectedItem ? "1" : "0",
            WebkitTransitionDuration: transitionTime,
            MozTransitionDuration: transitionTime,
            OTransitionDuration: transitionTime,
            transitionDuration: transitionTime,
            msTransitionDuration: transitionTime,
        };
        return {
            slideStyle,
            selectedStyle: {
                ...slideStyle,
                opacity: 1,
                position: "relative",
                zIndex: 2,
                filter: `blur(0)`,
            },
            prevStyle: {
                ...slideStyle,
                transformOrigin: " 0 100%",
                transform: `rotate(${state.previousItem > state.selectedItem ? "-45deg" : "45deg"
                    })`,
                opacity: "0",
                filter: `blur( ${state.previousItem === state.selectedItem ? "0px" : "5px"
                    })`,
            },
        };
    };

    const [loading, setLoading] = useState(true);

    useEffect(() => {
        setTimeout(() => {
            setLoading(false);
        }, 2000);
    }, []);

    const [currentSlide, setCurrentSlide] = useState(0);

    const handleLeftArrowKeyPress = () => {
        setCurrentSlide((prevSlide) =>
            prevSlide === 0 ? images.length - 1 : prevSlide - 1
        );
    };

    const handleRightArrowKeyPress = () => {
        setCurrentSlide((prevSlide) =>
            prevSlide === images.length - 1 ? 0 : prevSlide + 1
        );
    };

    useEffect(() => {
        document.addEventListener("keydown", (event) => {
            if (event.keyCode === 37) {
                handleLeftArrowKeyPress();
            } else if (event.keyCode === 39) {
                handleRightArrowKeyPress();
            }
        });

        return () => {
            document.removeEventListener("keydown", (event) => {
                if (event.keyCode === 37) {
                    handleLeftArrowKeyPress();
                } else if (event.keyCode === 39) {
                    handleRightArrowKeyPress();
                }
            });
        };
    }, []);

    if (loading) {
        return <Loader />;
    }

    return (
        <>
            <div className="brochurepage">
                <div className="brochurehead"> Brochure </div> <Navbar />
                <div className="brochurebox">
                    <Carousel
                        selectedItem={currentSlide}
                        showIndicators
                        renderArrowNext={(clickHandler, hasNext) => {
                            return (
                                hasNext && (
                                    <button
                                        className="nav_btn nav_btn_right"
                                        onClick={clickHandler}
                                    >
                                        <svg>
                                            <use xlinkHref={sprite + "#right"}> </use>{" "}
                                        </svg>{" "}
                                    </button>
                                )
                            );
                        }}
                        renderArrowPrev={(clickHandler, hasNext) => {
                            return (
                                hasNext && (
                                    <button
                                        onClick={clickHandler}
                                        className="nav_btn nav_btn_left"
                                    >
                                        <svg>
                                            <use xlinkHref={sprite + "#left"}> </use>{" "}
                                        </svg>{" "}
                                    </button>
                                )
                            );
                        }}
                        statusFormatter={(currentItem, total) => {
                            return (
                                <div className="parahead">
                                    Page {currentItem} of {total}{" "}
                                </div>
                            );
                        }}
                        transitionTime={310}
                        animationHandler={rotateAnimationHandler}
                    >
                        {images.map((URL, index) => (
                            <div className="slide">
                                <img alt="sample_file" src={URL} key={index} />{" "}
                            </div>
                        ))}{" "}
                    </Carousel>{" "}
                </div>{" "}
            </div>{" "}
        </>
    );
}
export default Brochure;
