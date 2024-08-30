import React from "react";
import { getSingleDoc } from "../config/firebaseFirestore.js";
import { useState, useEffect } from "react";
import AttractionCard from "../components/AttractionCard.jsx";
import styles from "../css/attraction.module.css";
import Loader from "../components/loader.jsx";
import Navbar from "../components/navbar.jsx";
const Attractions = () => {
    const [attractions, setAttractions] = useState([]);
    const [loading, setLoading] = useState(true);
    const fetchAttractions = async () => {
        try {
            let data = await getSingleDoc("WebContents", "starAttractions");
            if (data !== null) {
                setAttractions(data.data);
                setLoading(false);
                // console.log(data.data);
            }
        } catch (e) {
            console.log(e);
        }
    };
    useEffect(() => {
        fetchAttractions();
    }, []);

    if (loading) {
        return <Loader />;
    }

    return (
        <div className={styles.bigbox}>
            <Navbar />
            <div className={styles.mainheading}> Star Attractions </div>{" "}
            <div className={styles.container}>
                {" "}
                {attractions.map((e) => {
                    return <AttractionCard data={e} />;
                })}{" "}
            </div>{" "}
        </div>
    );
};
export default Attractions;
