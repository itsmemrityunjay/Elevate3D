import React from "react";
import Card from "../components/Card.jsx";
import styles from "../css/query.module.css";
import Loader from "../components/loader.jsx";
import { getSingleDoc } from "../config/firebaseFirestore.js";
import { useState, useEffect } from "react";
import Navbar from "../components/navbar.jsx";
const Query = () => {
    const [query, setQuery] = useState([]);

    const [loading, setLoading] = useState(true);

    const fetchQuery = async () => {
        try {
            let data = await getSingleDoc("WebContents", "Queries");
            if (data !== null) {
                setQuery(data.data);
                setLoading(false);
                // console.log(data.data);
            }
        } catch (e) {
            console.log(e);
        }
    };
    useEffect(() => {
        fetchQuery();
    }, []);

    if (loading) {
        return <Loader />;
    }

    return (
        <>
            <div className={styles.forBackground}>
                <Navbar />
                <h1 className={styles.queryHeading}>
                    For all queries, please contact{" "}
                </h1>{" "}
                <div className={styles.flexContainer}>
                    {" "}
                    {query.map((e) => {
                        return <Card data={e} />;
                    })}{" "}
                </div>{" "}
            </div>{" "}
        </>
    );
};
export default Query;
