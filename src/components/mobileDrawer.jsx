import React, {
    useState
} from "react";
import {
    Link
} from "react-router-dom";
import styles from "../css/mobileDrawer.module.css";

const MobileDrawer = ({
    isOpen,
    onClose
}) => {
    const [isRoadtripsOpen, setIsRoadtripsOpen] = useState(false);

    const toggleRoadtrips = () => {
        setIsRoadtripsOpen(!isRoadtripsOpen);
    };

    return ( <
        div className = {
            `${styles.mobileDrawer} ${isOpen ? styles.open : ""}`
        } >
        <
        ul className = {
            styles.drawerLinks
        } >
        <
        li >
        <
        a href = "/"
        onClick = {
            onClose
        } >
        Home <
        /a> <
        /li> <
        li >
        <
        a href = "https://events.antaragni.in"
        target = "_blank"
        rel = "noreferrer"
        onClick = {
            onClose
        } >
        Events <
        /a> <
        /li> <
        li >
        <
        a href = "https://ca.antaragni.in"
        target = "_blank"
        rel = "noreferrer"
        onClick = {
            onClose
        } >
        CA Program <
        /a> <
        /li> <
        li className = {
            styles.dropdown
        } >
        <
        span className = {
            `${styles.dropdownToggle} ${styles.drawerLinks}`
        }
        onClick = {
            toggleRoadtrips
        } >
        Roadtrips <
        /span> <
        ul className = {
            `${styles.dropdownMenu} ${
              isRoadtripsOpen ? styles.open : ""
            }`
        } >
        <
        li >
        <
        a href = "https://bug.antaragni.in"
        onClick = {
            onClose
        } >
        Battle Underground <
        /a> <
        /li> <
        li >
        <
        a href = "https://synchronicity.antaragni.in"
        onClick = {
            onClose
        } >
        Synchronicity <
        /a> <
        /li> <
        li >
        <
        a href = "https://comickaun.antaragni.in"
        onClick = {
            onClose
        } >
        ComicKaun <
        /a> <
        /li> <
        li >
        <
        a href = "https://junoon.antaragni.in"
        onClick = {
            onClose
        } >
        Junoon <
        /a> <
        /li> <
        li >
        <
        a href = "https://djwar.antaragni.in"
        onClick = {
            onClose
        } >
        Dj War <
        /a> <
        /li> <
        li >
        <
        a href = "https://nationals.antaragni.in"
        onClick = {
            onClose
        } >
        Nationals <
        /a> <
        /li> <
        /ul> <
        /li> <
        li >
        <
        Link to = "/merchandise"
        onClick = {
            onClose
        } >
        Merchandise <
        /Link> <
        /li> <
        li >
        <
        Link to = "/schedule"
        onClick = {
            onClose
        } >
        Schedule <
        /Link> <
        /li> <
        li className = {
            styles.dropdown
        } >
        <
        span className = {
            `${styles.dropdownToggle} ${styles.drawerLinks}`
        }
        onClick = {
            toggleRoadtrips
        } >
        Gallery <
        /span> <
        ul className = {
            `${styles.dropdownMenu} ${
              isRoadtripsOpen ? styles.open : ""
            }`
        } >
        <
        li >
        <
        Link to = "/gallery"
        onClick = {
            onClose
        } >
        Gallery <
        /Link> <
        /li> <
        li >
        <
        Link to = "/brochure"
        onClick = {
            onClose
        } >
        Brochure <
        /Link> <
        /li> <
        li >
        <
        Link to = "/media"
        onClick = {
            onClose
        } >
        Media <
        /Link> <
        /li> <
        /ul> <
        /li> <
        li >
        <
        Link to = "/attractions"
        onClick = {
            onClose
        } >
        Star Attractions <
        /Link> <
        /li> <
        li >
        <
        Link to = "/sponsors"
        onClick = {
            onClose
        } >
        Sponsors <
        /Link> <
        /li> <
        li >
        <
        Link to = "/coreTeam"
        onClick = {
            onClose
        } >
        Core Team <
        /Link> <
        /li> <
        li >
        <
        Link to = "/queries"
        onClick = {
            onClose
        } >
        Queries <
        /Link> <
        /li> <
        /ul> <
        /div>
    );
};

export default MobileDrawer;