import React from "react";
import {
    getSingleDoc
} from "../config/firebaseFirestore";
import {
    useState,
    useEffect
} from "react";
import MediaCard from "../components/mediacard";
import styles from "../css/media.module.css";
import Loader from "../components/loader";
import Navbar from "../components/navbar";

const Media = () => {
    const [media, setMedia] = useState([]);
    const [loading, setLoading] = useState(true);

    const fetchMedia = async () => {
        try {
            let data = await getSingleDoc("WebContents", "media");
            if (data !== null) {
                setMedia(data.data);
                setLoading(false);
                // console.log(data.data);
            }
        } catch (e) {
            console.log(e);
        }
    };

    useEffect(() => {
        fetchMedia();
    }, []);

    if (loading) {
        return <Loader / > ;
    }

    return ( <
        div className = {
            styles.main
        } >
        <
        Navbar / >
        <
        h1 className = {
            styles.heading
        } > Media Coverage < /h1>

        {
            media
                .map((e) => {
                    return <MediaCard data = {
                        e
                    }
                    />
                })
        } <
        /div>
    );
};
export default Media;