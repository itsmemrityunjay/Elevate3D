import React, {
    useState,
    useEffect
} from "react";
import "../css/schedule.css";
import Navbar from "../components/navbar";
// import Map from "../components/map";
import db from "../config/firebaseFirestore";
import Loader from "../components/loader";

import {
    getDocs,
    collection
} from "firebase/firestore";

const Schedule = () => {
    const [currentDaySchedule, setCurrentDaySchedule] = useState([]);
    const [day1, setDay1] = useState([]);
    const [day2, setDay2] = useState([]);
    const [day3, setDay3] = useState([]);
    const [day4, setDay4] = useState([]);
    const [activeDay, setActiveDay] = useState(1);
    const [loading, setLoading] = useState(true);

    // console.log(getDocs(collection(db, "schedule")));

    useEffect(() => {
        const fetchData = async () => {
            try {
                const querySnapshot = await getDocs(collection(db, "schedule"));

                // console.log(querySnapshot);

                if (querySnapshot.size > 0) {
                    const day1array = [];
                    const day2array = [];
                    const day3array = [];
                    const day4array = [];

                    querySnapshot.forEach((doc) => {
                        const startTime = doc.data().startTime.toDate();
                        const endTime = doc.data().endTime.toDate();

                        const schedule = {
                            title: doc.data().eventName,
                            description: doc.data().desc,
                            venue: doc.data().venue,
                            startTime: startTime.toLocaleString(),
                            endTime: endTime.toLocaleString(),
                            latitude: doc.data().latitude,
                            longitude: doc.data().longitude,
                            image: doc.data().image,
                            date: doc.data().date,
                            day: doc.data().day,
                            timestamp: startTime,
                            start: startTime.toLocaleTimeString([], {
                                hour: "2-digit",
                                minute: "2-digit",
                            }),
                            end: endTime.toLocaleTimeString([], {
                                hour: "2-digit",
                                minute: "2-digit",
                            }),
                        };

                        // console.log(schedule);

                        if (
                            // schedule.startTime.includes("19/10/2023") ||
                            // schedule.startTime.includes("10/19/2023")
                            schedule.day === "1"
                        ) {
                            day1array.push(schedule);
                        } else if (
                            // schedule.startTime.includes("20/10/2023") ||
                            // schedule.startTime.includes("10/20/2023")
                            schedule.day === "2"
                        ) {
                            day2array.push(schedule);
                        } else if (
                            // schedule.startTime.includes("21/10/2023") ||
                            // schedule.startTime.includes("10/21/2023")
                            schedule.day === "3"
                        ) {
                            day3array.push(schedule);
                        } else if (
                            // schedule.startTime.includes("22/10/2023") ||
                            // schedule.startTime.includes("10/22/2023")
                            schedule.day === "4"
                        ) {
                            day4array.push(schedule);
                        }
                    });

                    // console.log(day3array);

                    day1array.sort((x, y) => x.timestamp - y.timestamp);
                    day2array.sort((x, y) => x.timestamp - y.timestamp);
                    day3array.sort((x, y) => x.timestamp - y.timestamp);
                    day4array.sort((x, y) => x.timestamp - y.timestamp);

                    setDay1(day1array);
                    setDay2(day2array);
                    setDay3(day3array);
                    setDay4(day4array);
                    setCurrentDaySchedule(day1array);
                } else {
                    console.error("No data available.");
                }
                setLoading(false);
            } catch (error) {
                console.error("Error fetching data:", error);
            }
        };

        fetchData();
    }, []);

    useEffect(() => {
        if (activeDay === 1) {
            setCurrentDaySchedule(day1);
        } else if (activeDay === 2) {
            setCurrentDaySchedule(day2);
        } else if (activeDay === 3) {
            setCurrentDaySchedule(day3);
        } else if (activeDay === 4) {
            setCurrentDaySchedule(day4);
        }
    }, [activeDay]);

    const changeDay = (day) => {
        setActiveDay(day);
    };

    if (loading) {
        return <Loader / > ;
    }

    return ( <
        div className = "schedule__main" >
        <
        Navbar / >
        <
        div className = "app__schedule" >
        <
        div className = "schedule__heading" > Schedule < /div> <
        div className = "schedule__days" >
        <
        button className = {
            activeDay === 1 ? "active__day schedule__day" : "schedule__day"
        }
        onClick = {
            () => changeDay(1)
        } >
        <
        h3 > Day 1 < /h3> <
        /button> <
        button className = {
            activeDay === 2 ? "active__day schedule__day" : "schedule__day"
        }
        onClick = {
            () => changeDay(2)
        } >
        <
        h3 > Day 2 < /h3> <
        /button> <
        button className = {
            activeDay === 3 ? "active__day schedule__day" : "schedule__day"
        }
        onClick = {
            () => changeDay(3)
        } >
        <
        h3 > Day 3 < /h3> <
        /button> <
        button className = {
            activeDay === 4 ? "active__day schedule__day" : "schedule__day"
        }
        onClick = {
            () => changeDay(4)
        } >
        <
        h3 > Day 4 < /h3> <
        /button> <
        /div> <
        div className = "schedule__events" > {
            currentDaySchedule.map((event) => ( <
                div className = "schedule__card" >
                <
                div className = "schedule__box" >
                <
                div className = "schedule__left" >
                <
                div className = "schedule__title" >
                <
                h3 > {
                    event.title
                } < /h3> <
                /div> {
                    /* <div className="schedule__description">
                                        <p>{event.description}</p>
                                      </div> */
                } {
                    /* <div className="schedule__map">
                                        <Map latitude={event.latitude} longitude={event.longitude} />
                                      </div> */
                } <
                button className = "schedule__mapbutton"
                onClick = {
                    () => {
                        const mapsUrl = `https://www.google.com/maps?q=${event.latitude},${event.longitude}`;
                        window.open(mapsUrl, "_blank");
                    }
                } >
                Open in Map <
                /button> <
                /div> <
                div className = "schedule__middle" >
                <
                div className = "schedule__venue" >
                <
                p > {
                    event.venue
                } < /p> <
                /div> <
                div className = "schedule__time" >
                <
                p > {
                    event.start
                } < /p> <
                /div> <
                div className = "schedule__location" >
                <
                p > Latitude: {
                    event.latitude
                } < /p> <
                p > Longitude: {
                    event.longitude
                } < /p> <
                /div> <
                /div> {
                    /* <div className="schedule__right">
                                      <div className="schedule__image">
                                        <img src={event.image.url} alt="Event" />
                                      </div>
                                    </div> */
                } <
                /div> <
                /div>
            ))
        } <
        /div> <
        /div> <
        /div>
    );
};

export default Schedule;