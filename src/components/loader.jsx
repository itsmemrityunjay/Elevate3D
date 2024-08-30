import React, {
    useState,
    useEffect
} from "react";
import styles from "../css/loader.module.css";
import {
    TypeAnimation
} from "react-type-animation";

const Loader = () => {
    const [loading, setLoading] = useState(true);
    const [randomString, setRandomString] = useState(null);
    const totalItems = 9;

    useEffect(() => {
        const loadedItems = [];
        let itemsLoaded = 0;

        const stringsArray = [
            "Antaragni Started In The Year 1965 Under The Name Of Culfest And Was Renamed To Antaragni In The Year 1993",
            "In 1978 The Now Legendary Rock Metal Band Competition Began In Antaragni Under The Name Synchronicity",
            "Poets Of The Fall Headlined The Rock Night (Now Synchronicity Night) In 2007",
            "In 2010 Parikrama Headlined Synchronicity",
            "First EDM Night At Antaragni Happened In 2014",
            "50 Years Of Antaragni's Legacy Was Celebrated In 2015",
            "KSHMR (DJMAG Rank 12) Was Invited As The Headliner For EDM Night In 2017 In His First Ever College Festival Performance",
            "QUINTINO (DJMAG Rank 25) Was Invited As The Headliner For EDM Night In 2018 In His First Ever College Festival Performance",
            "In 2021 RITVIZ (King Of Indie Pop) Invited As The Headliner For EDM Night In His First Ever College Festival Performance In Red Bull Bus Tour",
        ];

        const shuffleArray = (array) => {
            for (let i = array.length - 1; i > 0; i--) {
                const j = Math.floor(Math.random() * (i + 1));
                [array[i], array[j]] = [array[j], array[i]];
            }
        };

        shuffleArray(stringsArray);

        const loadItem = () => {
            loadedItems.push(stringsArray[itemsLoaded]);
            itemsLoaded++;

            if (itemsLoaded === totalItems) {
                setLoading(false);
                const randomIndex = Math.floor(Math.random() * loadedItems.length);
                setRandomString(loadedItems[randomIndex]);
            }
        };

        for (let i = 0; i < totalItems; i++) {
            setTimeout(loadItem, 500);
        }

        const displayRandomStringInterval = setInterval(() => {
            const randomIndex = Math.floor(Math.random() * loadedItems.length);
            setRandomString(loadedItems[randomIndex]);
        }, 5000);

        return () => {
            clearInterval(displayRandomStringInterval);
        };
    }, []);

    return ( <
        div className = {
            styles["contents"]
        } >
        <
        div className = {
            styles.loader
        } >
        <
        div className = {
            styles.spinner
        } > < /div> {
            !loading && ( <
                div className = {
                    styles.string
                } > { /* <p>Loading...</p> */ } <
                TypeAnimation sequence = "Loading..."
                wrapper = "span"
                speed = {
                    50
                }
                style = {
                    {
                        // fontSize: "50px",
                        display: "inline-block",
                        color: "var(--secondary-color)",
                    }
                }
                repeat = {
                    0
                }
                cursor = {
                    false
                }
                /> <
                /div>
            )
        } <
        /div> <
        /div>
    );
};

export default Loader;