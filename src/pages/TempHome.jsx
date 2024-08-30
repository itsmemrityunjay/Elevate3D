/* eslint-disable react/jsx-no-target-blank */
import styles from "../css/tempHome.module.css";
import { getSingleDoc } from "../config/firebaseFirestore";
import { Link } from "react-router-dom";
import { Fade } from "react-awesome-reveal";
import { useState, useEffect } from "react";
import Aftermovies from "../components/aftermovies";
import Discover from "../components/discover";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
    faBuilding,
    faEye,
    faGraduationCap,
    faMasksTheater,
    faShoePrints,
    faSitemap,
} from "@fortawesome/free-solid-svg-icons";
import LandingGallery from "../components/landinggallery";
import typefacefinal from "../assets/bg/typefacefinal.png";
import {
    faFacebook,
    faGooglePlay,
    faInstagram,
    faLinkedin,
    faTwitter,
    faYoutube,
} from "@fortawesome/free-brands-svg-icons";
import Navbar from "../components/navbar";
import Associate from "../components/associate";
import Loader from "../components/loader";
import { useMediaQuery } from "react-responsive";

const TempHome = ({ switchMode }) => {
    const [loadingdata, setLoadingdata] = useState(true);
    const [aftermovies, setAftermovies] = useState([]);
    const [gallery, setGallery] = useState([]);
    const [discoverData, setDiscoverData] = useState([]);
    const isLaptopOrDesktop = useMediaQuery({ query: "(min-width: 800px)" });

    const fetchData = async () => {
        setLoadingdata(true);
        const rawData = await getSingleDoc("WebContents", "appLandingPage");
        let aftermovies = [];
        let gallery = [];
        let discover = [];

        for (let i = 0; i < rawData.data.length; i++) {
            switch (rawData.data[i].Vertical) {
                case "Aftermovies":
                    aftermovies.push(rawData.data[i]);
                    break;
                case "Gallery":
                    gallery.push(rawData.data[i]);
                    break;
                case "Discover More":
                    discover.push(rawData.data[i]);
                    break;
                default:
                    break;
            }
        }
        setAftermovies(aftermovies);
        setGallery(gallery);
        setDiscoverData(discover);
        setLoadingdata(false);
    };

    const [showNavbarLink, setShowNavbarLink] = useState(false);

    useEffect(() => {
        fetchData();
        document.onreadystatechange = function () {
            if (document.readyState === "complete") {
                setLoadingdata(false);
            } else {
                setLoadingdata(true);
            }
        };
        const handleScroll = () => {
            if (window.scrollY >= window.innerHeight) {
                setShowNavbarLink(true);
            } else {
                setShowNavbarLink(false);
            }
        };

        window.addEventListener("scroll", handleScroll);

        return () => {
            window.removeEventListener("scroll", handleScroll);
        };
    }, []);

    if (loadingdata) {
        return <Loader />;
    }

    return (
        <div className={styles.landing2d}>
            {isLaptopOrDesktop && (
                <div
                    onClick={() => {
                        switchMode(true);
                    }}
                    className={styles.normalMode}
                >
                    3D Mode
                </div>
            )}
            {showNavbarLink && (
                <div className={styles.navbarLink}>
                    <Navbar />
                </div>
            )}
            <div className={styles.tempHome}>
                <div className={styles.bg}></div>
                <div className={styles.title}>
                    <img className={styles.typeface} src={typefacefinal} alt="typeface" />
                    <div className={styles.nav}>
                        <a href="https://events.antaragni.in" target="_blank">
                            Events
                        </a>
                        <a href="https://ca.antaragni.in" target="_blank">
                            CA Program
                        </a>
                        <li className={`${styles.link} ${styles.dropdown}`}>
                            <span
                                className={`${styles.pOpensans} ${styles.navbarText} ${styles.dropdownToggle}`}
                                id="navbarDropdownMenuLink"
                                role="button"
                                data-bs-toggle="dropdown"
                                aria-expanded="false"
                            >
                                Roadtrips
                            </span>
                            <ul className={styles.dropdownMenu} aria-labelledby="navbarDropdownMenuLink">
                                <li>
                                    <a
                                        className={styles.dropdownItem}
                                        target="_blank"
                                        rel="noreferrer"
                                        href="https://bug.antaragni.in/"
                                    >
                                        Battle Underground
                                    </a>
                                </li>
                                <li>
                                    <a
                                        className={styles.dropdownItem}
                                        target="_blank"
                                        rel="noreferrer"
                                        href="https://synchronicity.antaragni.in/"
                                    >
                                        Synchronicity
                                    </a>
                                </li>
                                <li>
                                    <a
                                        className={styles.dropdownItem}
                                        target="_blank"
                                        rel="noreferrer"
                                        href="https://comickaun.antaragni.in/"
                                    >
                                        ComicKaun
                                    </a>
                                </li>
                                <li>
                                    <a
                                        className={styles.dropdownItem}
                                        target="_blank"
                                        rel="noreferrer"
                                        href="https://junoon.antaragni.in/"
                                    >
                                        Junoon
                                    </a>
                                </li>
                                <li>
                                    <a
                                        className={styles.dropdownItem}
                                        target="_blank"
                                        rel="noreferrer"
                                        href="https://djwar.antaragni.in/"
                                    >
                                        Dj War
                                    </a>
                                </li>
                                <li>
                                    <a
                                        className={styles.dropdownItem}
                                        target="_blank"
                                        rel="noreferrer"
                                        href="https://nationals.antaragni.in/"
                                    >
                                        Nationals
                                    </a>
                                </li>
                            </ul>
                        </li>
                        <Link to="/merchandise">Merchandise</Link>
                        <Link to="/schedule">Schedule</Link>
                        <li className={`${styles.link} ${styles.dropdown}`}>
                            <span
                                className={`${styles.pOpensans} ${styles.navbarText} ${styles.dropdownToggle}`}
                                id="navbarDropdownMenuLink"
                                role="button"
                                data-bs-toggle="dropdown"
                                aria-expanded="false"
                            >
                                Gallery
                            </span>
                            <ul className={styles.dropdownMenu} aria-labelledby="navbarDropdownMenuLink">
                                <li>
                                    <Link to="/gallery">Gallery</Link>
                                </li>
                                <li>
                                    <Link to="/brochure">Brochure</Link>
                                </li>
                                <li>
                                    <Link to="/media">Media</Link>
                                </li>
                            </ul>
                        </li>
                        <Link to="/Attractions">Star Attractions</Link>
                        <Link to="/sponsors">Sponsors</Link>
                        <Link to="/coreTeam">Core Team</Link>
                        <Link to="/queries">Queries</Link>
                    </div>
                </div>
            </div>
            <div className={styles.about}>
                <div className={styles.blockbout}>
                    <h1>About Elevate</h1>
                    <p className={styles.aboutpara}>
                        "Elevate 2024:!" – a dynamic 3-day induction program crafted to warmly welcome the newest members of our SVGOI family, the 2024 batch!
                    </p>
                    <div className={styles.stats}>
                        <div className={styles.stat}>
                            <div className={styles.statsicon}>
                                <FontAwesomeIcon icon={faGraduationCap} style={{ color: "#efc36a" }} />
                            </div>
                            <p>350 +</p>
                            <p>Colleges</p>
                        </div>
                        <div className={styles.stat}>
                            <div className={styles.statsicon}>
                                <FontAwesomeIcon icon={faEye} style={{ color: "#efc36a" }} />
                            </div>
                            <p>25 M +</p>
                            <p>Eyeballs</p>
                        </div>
                        <div className={styles.stat}>
                            <div className={styles.statsicon}>
                                <FontAwesomeIcon icon={faMasksTheater} style={{ color: "#efc36a" }} />
                            </div>
                            <p>75 +</p>
                            <p>Events</p>
                        </div>
                        <div className={styles.stat}>
                            <div className={styles.statsicon}>
                                <FontAwesomeIcon icon={faSitemap} style={{ color: "#efc36a" }} />
                            </div>
                            <p>50 +</p>
                            <p>Govt.Org</p>
                        </div>
                        <div className={styles.stat}>
                            <div className={styles.statsicon}>
                                <FontAwesomeIcon icon={faBuilding} style={{ color: "#efc36a" }} />
                            </div>
                            <p>150 +</p>
                            <p>Brands</p>
                        </div>
                        <div className={styles.stat}>
                            <div className={styles.statsicon}>
                                <FontAwesomeIcon icon={faShoePrints} style={{ color: "#efc36a" }} />
                            </div>
                            <p>1 L +</p>
                            <p>Footfalls</p>
                        </div>
                    </div>
                </div>
                <div className={styles.socialmedialinks}>
                    <a
                        className={`${styles.link} ${styles.iconLink}`}
                        target="_blank"
                        href="https://play.google.com/store/apps/details?id=in.antaragni.android"
                        rel="noreferrer"
                    >
                        <FontAwesomeIcon className={styles.icon} icon={faGooglePlay} />
                    </a>
                    <a
                        className={`${styles.link} ${styles.iconLink}`}
                        target="_blank"
                        href="https://www.instagram.com/antaragni.iitk/"
                        rel="noreferrer"
                    >
                        <FontAwesomeIcon className={styles.icon} icon={faInstagram} />
                    </a>
                    <a
                        className={`${styles.link} ${styles.iconLink}`}
                        target="_blank"
                        href="https://www.youtube.com/user/AntaragniIITKanpur"
                        rel="noreferrer"
                    >
                        <FontAwesomeIcon className={styles.icon} icon={faYoutube} />
                    </a>
                    <a
                        className={`${styles.link} ${styles.iconLink}`}
                        target="_blank"
                        href="https://www.facebook.com/antaragni.iitk"
                        rel="noreferrer"
                    >
                        <FontAwesomeIcon className={styles.icon} icon={faFacebook} />
                    </a>
                    <a
                        className={`${styles.link} ${styles.iconLink}`}
                        target="_blank"
                        href="https://www.linkedin.com/company/antaragni-iit-kanpur"
                        rel="noreferrer"
                    >
                        <FontAwesomeIcon className={styles.icon} icon={faLinkedin} />
                    </a>
                    <a
                        className={`${styles.link} ${styles.iconLink}`}
                        target="_blank"
                        href="https://twitter.com/AntaragniIITK"
                        rel="noreferrer"
                    >
                        <FontAwesomeIcon className={styles.icon} icon={faTwitter} />
                    </a>
                </div>
            </div>
            <div className={styles.gallery}>
                <LandingGallery data={discoverData} />
            </div>
            <div className={styles.discover}>
                <Discover data={gallery} />
            </div>
            <div className={styles.aftermovies}>
                <h1>Aftermovies</h1>
                <Aftermovies data={aftermovies} />
            </div>
            <Associate />
        </div>
    );
};

export default TempHome;
