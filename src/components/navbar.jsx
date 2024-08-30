/* eslint-disable react/jsx-no-target-blank */
/* eslint-disable jsx-a11y/anchor-is-valid */
import React, { useState } from "react";
import { Link, useLocation } from "react-router-dom";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
    faFacebook,
    faInstagram,
    faLinkedin,
    faTwitter,
    faYoutube,
} from "@fortawesome/free-brands-svg-icons";
import styles from "../css/navbar.module.css";
import typefacefinal from "../assets/bg/typefacefinal.png";
import MobileDrawer from "./mobileDrawer";

const Navbar = () => {
    const location = useLocation();
    const [isMobileDrawerOpen, setIsMobileDrawerOpen] = useState(false);

    const toggleMobileDrawer = () => {
        setIsMobileDrawerOpen(!isMobileDrawerOpen);
    };

    return (
        <nav className={styles.navbar}>
            <div className={styles.navbarLogo}>
                <Link to="/">
                    <img src={typefacefinal} alt="typeface" />
                </Link>
            </div>

            <div
                className={styles.mobileMenuButton}
                onClick={toggleMobileDrawer}
            >
                <div
                    className={`${styles.drawerIcon} ${isMobileDrawerOpen ? styles.rotateIcon : ""
                        }`}
                >
                    &#9776;
                </div>
            </div>

            <ul className={styles.navbarLinks}>
                <li>
                    <a href="https://events.antaragni.in" target="_blank" rel="noreferrer">
                        Events
                    </a>
                </li>
                <li>
                    <a href="https://ca.antaragni.in/" target="_blank" rel="noreferrer">
                        CA Program
                    </a>
                </li>
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
                            <a className={styles.dropdownItem} href="https://bug.antaragni.in/" target="_blank" rel="noreferrer">
                                Battle Underground
                            </a>
                        </li>
                        <li>
                            <a className={styles.dropdownItem} href="https://synchronicity.antaragni.in/" target="_blank" rel="noreferrer">
                                Synchronicity
                            </a>
                        </li>
                        <li>
                            <a className={styles.dropdownItem} href="https://comickaun.antaragni.in/" target="_blank" rel="noreferrer">
                                ComicKaun
                            </a>
                        </li>
                        <li>
                            <a className={styles.dropdownItem} href="https://junoon.antaragni.in/" target="_blank" rel="noreferrer">
                                Junoon
                            </a>
                        </li>
                        <li>
                            <a className={styles.dropdownItem} href="https://djwar.antaragni.in/" target="_blank" rel="noreferrer">
                                DJ War
                            </a>
                        </li>
                        <li>
                            <a className={styles.dropdownItem} href="https://nationals.antaragni.in/" target="_blank" rel="noreferrer">
                                Nationals
                            </a>
                        </li>
                    </ul>
                </li>
                <li>
                    <Link
                        className={`${styles.link} ${location.pathname === "/merchandise" ? styles.activeLink : ""}`}
                        to="/merchandise"
                    >
                        Merchandise
                    </Link>
                </li>
                <li>
                    <Link
                        className={`${styles.link} ${location.pathname === "/schedule" ? styles.activeLink : ""}`}
                        to="/schedule"
                    >
                        Schedule
                    </Link>
                </li>
                <li className={`${styles.link} ${styles.dropdown}`}>
                    <span
                        className={`${styles.pOpensans} ${styles.navbarText} ${styles.dropdownToggle} ${location.pathname === "/gallery" || location.pathname === "/brochure" || location.pathname === "/media"
                                ? styles.activeLink
                                : ""
                            }`}
                        id="navbarDropdownMenuLink"
                        role="button"
                        data-bs-toggle="dropdown"
                        aria-expanded="false"
                    >
                        Gallery
                    </span>
                    <ul className={styles.dropdownMenu} aria-labelledby="navbarDropdownMenuLink">
                        <li>
                            <Link
                                className={`${styles.link} ${location.pathname === "/gallery" ? styles.activeLink : ""}`}
                                to="/gallery"
                            >
                                Gallery
                            </Link>
                        </li>
                        <li>
                            <Link
                                className={`${styles.link} ${location.pathname === "/brochure" ? styles.activeLink : ""}`}
                                to="/brochure"
                            >
                                Brochure
                            </Link>
                        </li>
                        <li>
                            <Link
                                className={`${styles.link} ${location.pathname === "/media" ? styles.activeLink : ""}`}
                                to="/media"
                            >
                                Media
                            </Link>
                        </li>
                    </ul>
                </li>
                <li>
                    <Link
                        className={`${styles.link} ${location.pathname === "/sponsors" ? styles.activeLink : ""}`}
                        to="/sponsors"
                    >
                        Sponsors
                    </Link>
                </li>
                <li>
                    <Link
                        className={`${styles.link} ${location.pathname === "/attractions" ? styles.activeLink : ""}`}
                        to="/attractions"
                    >
                        Star Attractions
                    </Link>
                </li>
                <li>
                    <Link
                        className={`${styles.link} ${location.pathname === "/coreTeam" ? styles.activeLink : ""}`}
                        to="/coreTeam"
                    >
                        Core Team
                    </Link>
                </li>
                <li>
                    <Link
                        className={`${styles.link} ${location.pathname === "/queries" ? styles.activeLink : ""}`}
                        to="/queries"
                    >
                        Queries
                    </Link>
                </li>
            </ul>

            <div className={styles.socialIcons}>
                <a href="https://www.instagram.com/antaragni.iitkanpur/" target="_blank" rel="noreferrer">
                    <FontAwesomeIcon icon={faInstagram} className={styles.faIcon} />
                </a>
                <a href="https://twitter.com/antaragni" target="_blank" rel="noreferrer">
                    <FontAwesomeIcon icon={faTwitter} className={styles.faIcon} />
                </a>
                <a href="https://www.youtube.com/user/antaragniiitkanpur" target="_blank" rel="noreferrer">
                    <FontAwesomeIcon icon={faYoutube} className={styles.faIcon} />
                </a>
                <a href="https://www.linkedin.com/company/antaragni-iit-kanpur/mycompany/" target="_blank" rel="noreferrer">
                    <FontAwesomeIcon icon={faLinkedin} className={styles.faIcon} />
                </a>
                <a href="https://www.facebook.com/antaragni.iitk/" target="_blank" rel="noreferrer">
                    <FontAwesomeIcon icon={faFacebook} className={styles.faIcon} />
                </a>
            </div>

            <MobileDrawer
                isOpen={isMobileDrawerOpen}
                onClose={toggleMobileDrawer}
            />
        </nav>
    );
};

export default Navbar;
