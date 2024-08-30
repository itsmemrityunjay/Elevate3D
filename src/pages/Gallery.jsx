import { useState, useEffect } from "react";
import styles from "../css/gallery.module.css";
import Loader from "../components/loader";
import InfiniteScroll from "react-infinite-scroll-component";
import {
    IoIosArrowBack,
    IoIosArrowForward,
    IoMdClose,
    IoIosHeart,
} from "react-icons/io";
import { getSingleDoc } from "../config/firebaseFirestore";
import Navbar from "../components/navbar";
import { LazyLoadImage } from "react-lazy-load-image-component";
import "react-lazy-load-image-component/src/effects/blur.css";

const Gallery = () => {
    const [galleryImages, setGalleryImages] = useState([]);
    const [likes, setLikes] = useState([]);
    const [totalImages, setTotalImages] = useState([]);
    const [isLiked, setIsLiked] = useState(false);
    const [loading, setLoading] = useState(true);

    const fetchGalleryImages = async () => {
        try {
            let data = await getSingleDoc("WebContents", "gallery");
            if (data !== null) {
                const sortedImages = data.data.sort((a, b) => b.like - a.like);
                setTotalImages(sortedImages);
                setGalleryImages(sortedImages.slice(0, 10));
                setLikes(sortedImages.slice(0, 10).map((e) => e.like));
                setLoading(false);
            }
        } catch (e) {
            console.log(e);
        }
    };

    useEffect(() => {
        fetchGalleryImages();
    }, []);

    const handleLike = () => {
        const selectedImage = galleryImages[slideNumber];
        const updatedImages = [...galleryImages];

        if (!likes.includes(slideNumber)) {
            setIsLiked(true);
            updatedImages[slideNumber] = {
                ...selectedImage,
                like: selectedImage.like + 1,
            };
            setLikes([...likes, slideNumber]);
        } else {
            setIsLiked(false);
            updatedImages[slideNumber] = {
                ...selectedImage,
                like: selectedImage.like - 1,
            };
            const updatedLikes = likes.filter((like) => like !== slideNumber);
            setLikes(updatedLikes);
        }

        setGalleryImages(updatedImages);
    };

    const [slideNumber, setSlideNumber] = useState(0);
    const [openModal, setOpenModal] = useState(false);

    const handleOpenModal = (index) => {
        setSlideNumber(index);
        setOpenModal(true);
    };

    const handleCloseModal = () => {
        setOpenModal(false);
    };

    const prevSlide = () => {
        slideNumber === 0
            ? setSlideNumber(galleryImages.length - 1)
            : setSlideNumber(slideNumber - 1);
    };

    const nextSlide = () => {
        slideNumber + 1 === galleryImages.length
            ? setSlideNumber(0)
            : setSlideNumber(slideNumber + 1);
    };

    useEffect(() => {
        const handleKeyPress = (event) => {
            if (event.keyCode === 37) {
                prevSlide();
            } else if (event.keyCode === 39) {
                nextSlide();
            } else if (event.keyCode === 27) {
                handleCloseModal();
            }
        };

        document.addEventListener("keydown", handleKeyPress);

        return () => {
            document.removeEventListener("keydown", handleKeyPress);
        };
    });

    const nextImages = (endIndex) => {
        setGalleryImages(totalImages.slice(0, endIndex));
        setLikes(totalImages.slice(0, endIndex).map((e) => e.like));
    };

    if (loading) {
        return <Loader />;
    }

    return (
        <div className={styles.gallery}>
            <div className={styles.galleryTitle}>
                <h1> Gallery </h1>{" "}
            </div>{" "}
            <Navbar />{" "}
            {openModal && (
                <div className={styles.sliderWrap}>
                    <IoMdClose
                        className={styles.btnClose}
                        onClick={handleCloseModal}
                        size={25}
                    />{" "}
                    <IoIosArrowBack
                        className={styles.btnPrev}
                        onClick={prevSlide}
                        size={40}
                    />{" "}
                    <IoIosArrowForward
                        className={styles.btnNext}
                        onClick={nextSlide}
                        size={40}
                    />{" "}
                    <div className={styles.likeContainer}>
                        <IoIosHeart
                            className={`${styles.likeIcon} ${isLiked ? styles.active : ""}`}
                            onClick={handleLike}
                            size={30}
                        />{" "}
                        <span className={styles.likeCount}>
                            {" "}
                            {galleryImages[slideNumber].like}{" "}
                        </span>{" "}
                    </div>{" "}
                    <div className={styles.fullScreenImage}>
                        <img src={galleryImages[slideNumber].img.url} alt="" />
                    </div>{" "}
                </div>
            )}{" "}
            <InfiniteScroll
                dataLength={galleryImages.length}
                next={() => {
                    nextImages(galleryImages.length + 10);
                }}
                hasMore={totalImages.length > galleryImages.length}
            >
                <div className={styles.galleryWrap}>
                    {" "}
                    {galleryImages &&
                        galleryImages.map((slide, index) => {
                            return (
                                <div
                                    className={styles.single}
                                    key={index}
                                    onClick={() => handleOpenModal(index)}
                                >
                                    <LazyLoadImage src={slide.img.url} alt="" effect="blur" />{" "}
                                    {/* <img src={slide.img.url} alt=""  /> */}{" "}
                                </div>
                            );
                        })}{" "}
                </div>{" "}
            </InfiniteScroll>{" "}
        </div>
    );
};

export default Gallery;
