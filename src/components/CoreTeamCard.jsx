import React from "react";
import styles from "../css/coreteamcard.module.css";
import {
    BsLinkedin,
    BsTelephoneFill
} from "react-icons/bs";
import {
    FaFacebookSquare,
    FaInstagramSquare
} from "react-icons/fa";
import {
    HiOutlineMail
} from "react-icons/hi";
const CoreTeamCard = ({
    member
}) => {
    // console.log(member);
    return ( <
        >
        <
        div className = {
            styles.photoDiv
        } >
        <
        img src = {
            member.Pic.url
        }
        alt = "Image" / > { /* <span className={styles.tri}></span> */ } <
        span className = {
            styles.rect
        } > < /span> <
        p className = {
            styles.name
        } > {
            member.Name
        } < /p> <
        ul className = {
            styles.iconList
        } >
        <
        li className = {
            styles.mail
        } >
        <
        a target = "_blank"
        href = {
            `tel:${member.Phone}`
        } >
        <
        BsTelephoneFill className = {
            styles.iconhover
        }
        /> <
        /a> <
        /li> <
        li className = {
            styles.mail
        } >
        <
        a target = "_blank"
        href = {
            `mailto:${member.Email}`
        } >
        <
        HiOutlineMail className = {
            styles.iconhover
        }
        /> <
        /a> <
        /li> <
        li className = {
            styles.linkedIn
        } >
        <
        a target = "_blank"
        href = {
            member.LinkedIn
        } >
        <
        BsLinkedin className = {
            styles.iconhover
        }
        /> <
        /a> <
        /li> <
        li className = {
            styles.insta
        } >
        <
        a target = "_blank"
        href = {
            member.Facebook
        } >
        <
        FaFacebookSquare className = {
            styles.iconhover
        }
        /> <
        /a> <
        /li> <
        li className = {
            styles.insta
        } >
        <
        a target = "_blank"
        href = {
            member.Instagram
        } >
        <
        FaInstagramSquare className = {
            styles.iconhover
        }
        /> <
        /a> <
        /li> <
        /ul> <
        /div> <
        />
    );
};
export default CoreTeamCard;