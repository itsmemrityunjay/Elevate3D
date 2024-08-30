import React from "react";
import styles from "../css/card.module.css";
import { BsLinkedin } from "react-icons/bs";
import { FaFacebookSquare } from "react-icons/fa";
import { HiOutlineMail } from "react-icons/hi";
const Card = ({ data }) => {
    return (
        <>
            <div className={styles.card}>
                <div className={styles.cardPhoto}>
                    <img src={data.Pic.url} alt="Image" />
                </div>{" "}
                <div className={styles.cardTitle}>
                    {" "}
                    {data.Name} <br />
                    <span> {data.PoR} </span>{" "}
                </div>{" "}
                <div className={styles.para}>
                    <br /> {data.Contact}{" "}
                </div>{" "}
                <div className={styles.cardSocials}>
                    <button className={styles.cardSocialsBtn}>
                        <a target="_blank" href={`mailto:${data.Email}`}>
                            <HiOutlineMail size={35} color={"var(--cardColor)"} />{" "}
                        </a>{" "}
                    </button>{" "}
                    <button className={styles.cardSocialsBtn}>
                        <a target="_blank" href={data.LinkedIn}>
                            <BsLinkedin size={30} color={"var(--cardColor)"} />{" "}
                        </a>{" "}
                    </button>{" "}
                    <button className={styles.cardSocialsBtn}>
                        <a target="_blank" href={data.Facebook}>
                            <FaFacebookSquare size={30} color={"var(--cardColor)"} />{" "}
                        </a>{" "}
                    </button>{" "}
                </div>{" "}
            </div>{" "}
        </>
    );
};
export default Card;
