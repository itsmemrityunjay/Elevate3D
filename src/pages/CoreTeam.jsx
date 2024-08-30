import React from "react";
import styles from "../css/coreteam.module.css";
import CoreTeamCard from "../components/CoreTeamCard";
import SideBar from "../components/SideBar";
import Loader from "../components/loader";
import { getSingleDoc } from "../config/firebaseFirestore";
import { useState, useEffect } from "react";
import Navbar from "../components/navbar";
const CoreTeam = () => {
    const [coreTeam, setCoreTeam] = useState([]);

    const [loading, setLoading] = useState(true);

    const fetchCoreTeam = async () => {
        try {
            let data = await getSingleDoc("WebContents", "coreTeam");
            if (data !== null) {
                setCoreTeam(data.data);
                setLoading(false);
                // console.log(
                //   data.data
                //     .filter((e) => e.Vertical === "Festival Coordinator")
                //     .map((e) => console.log(e))
                // );
            }
        } catch (e) {
            console.log(e);
        }
    };

    useEffect(() => {
        fetchCoreTeam();
    }, []);

    if (loading) {
        return <Loader />;
    }

    return (
        <div className={styles.container}>
            <Navbar />
            <div className={styles.sideBar}>
                <SideBar />
            </div>{" "}
            <div className={styles.contactUsCard}>
                <h1 className={styles.mainHeading}> Core Team Antaragni '24</h1>{" "}
                <h1 id="t2" className={styles.TeamHeading}>
                    Events & Competitions{" "}
                </h1>{" "}
                <div className={styles.Team}>
                    {" "}
                    {coreTeam
                        .filter((e1) => e1.Vertical === "Events & Competitions")
                        .map((e) => {
                            return <CoreTeamCard member={e} />;
                        })}{" "}
                </div>{" "}
                <h1 id="t3" className={styles.TeamHeading}>
                    Marketing{" "}
                </h1>{" "}
                <div className={styles.Team}>
                    {" "}
                    {coreTeam
                        .filter((e1) => e1.Vertical === "Marketing")
                        .map((e) => {
                            return <CoreTeamCard member={e} />;
                        })}{" "}
                </div>{" "}
                <h1 id="t4" className={styles.TeamHeading}>
                    Media & Publicity{" "}
                </h1>{" "}
                <div className={styles.Team}>
                    {" "}
                    {coreTeam
                        .filter((e1) => e1.Vertical === "Media & Publicity")
                        .map((e) => {
                            return <CoreTeamCard member={e} />;
                        })}{" "}
                </div>{" "}
                <h1 id="t5" className={styles.TeamHeading}>
                    Show Management{" "}
                </h1>{" "}
                <div className={styles.Team}>
                    {" "}
                    {coreTeam
                        .filter((e1) => e1.Vertical === "Show Management")
                        .map((e) => {
                            return <CoreTeamCard member={e} />;
                        })}{" "}
                </div>{" "}
                <h1 id="t6" className={styles.TeamHeading}>
                    Finance{" "}
                </h1>{" "}
                <div className={styles.Team}>
                    {" "}
                    {coreTeam
                        .filter((e1) => e1.Vertical === "Finance")
                        .map((e) => {
                            return <CoreTeamCard member={e} />;
                        })}{" "}
                </div>{" "}
                <h1 id="t7" className={styles.TeamHeading}>
                    Public Relations{" "}
                </h1>{" "}
                <div className={styles.Team}>
                    {" "}
                    {coreTeam
                        .filter((e1) => e1.Vertical === "Public Relations")
                        .map((e) => {
                            return <CoreTeamCard member={e} />;
                        })}{" "}
                </div>{" "}
                <h1 id="t8" className={styles.TeamHeading}>
                    Security{" "}
                </h1>{" "}
                <div className={styles.Team}>
                    {" "}
                    {coreTeam
                        .filter((e1) => e1.Vertical === "Security")
                        .map((e) => {
                            return <CoreTeamCard member={e} />;
                        })}{" "}
                </div>{" "}
                <h1 id="t9" className={styles.TeamHeading}>
                    Design{" "}
                </h1>{" "}
                <div className={styles.Team}>
                    {" "}
                    {coreTeam
                        .filter((e1) => e1.Vertical === "Design")
                        .map((e) => {
                            return <CoreTeamCard member={e} />;
                        })}{" "}
                </div>{" "}
                <h1 id="t10" className={styles.TeamHeading}>
                    Web & App{" "}
                </h1>{" "}
                <div className={styles.Team}>
                    {" "}
                    {coreTeam
                        .filter((e1) => e1.Vertical === "Web & App")
                        .map((e) => {
                            return <CoreTeamCard member={e} />;
                        })}{" "}
                </div>{" "}
                <h1 id="t1" className={styles.TeamHeading}>
                    <br />
                    Festival Coordinators{" "}
                </h1>{" "}
                <div className={styles.Team}>
                    {" "}
                    {coreTeam
                        .filter((e1) => e1.Vertical === "Festival Coordinator")
                        .map((e) => {
                            return <CoreTeamCard member={e} />;
                        })}{" "}
                </div>{" "}
            </div>{" "}
        </div>
    );
};
export default CoreTeam;
