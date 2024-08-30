import React, { useState } from "react";
import Slider from "react-slick";
import { FaArrowRight, FaArrowLeft } from "react-icons/fa";
import "../css/aftermovies.css";

const links = [
    "https://www.youtube.com/embed/boF7X5yBEXo?si=0uo73lUCqeK-EzOf",
    "https://www.youtube.com/embed/qZmtHBF0AKQ?si=p0N76On1zYzxN23x",
    "https://www.youtube.com/embed/hQQLEFmkqwg?si=be3JGjx1rDpWlOL5",
    "https://www.youtube.com/embed/zFtS63KKhvc?si=Vim71YV3G08xiebJ",
    "https://www.youtube.com/embed/cMoHcuD6vOQ?si=dzJW99oqLeSYdb6L",
];

const Aftermovies = () => {
    const NextArrow = ({ onClick }) => {
        return (
            <div className="arrow next" onClick={onClick}>
                <FaArrowRight />
            </div>
        );
    };

    const PrevArrow = ({ onClick }) => {
        return (
            <div className="arrow prev" onClick={onClick}>
                <FaArrowLeft />
            </div>
        );
    };

    const [imageIndex, setImageIndex] = useState(0);

    const settings = {
        infinite: true,
        lazyLoad: true,
        speed: 300,
        slidesToShow: 3,
        centerMode: true,
        centerPadding: 0,
        nextArrow: <NextArrow />,
        prevArrow: <PrevArrow />,
        beforeChange: (current, next) => setImageIndex(next),
    };

    return (
        <div className="aftermovies">
            <Slider {...settings}>
                {" "}
                {links.map((url, idx) => (
                    <div
                        className={idx === imageIndex ? "slidee activeSlidee" : "slidee"}
                        key={idx}
                    >
                        <iframe
                            src={url}
                            alt={imageIndex}
                            title="YouTube video player"
                            frameBorder="0"
                            allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
                            allowFullScreen
                        >
                            {" "}
                        </iframe>{" "}
                    </div>
                ))}{" "}
            </Slider>{" "}
        </div>
    );
};

export default Aftermovies;
