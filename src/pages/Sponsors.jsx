import React, {
    useState,
    useEffect
} from "react";
import styles from "../css/sponsor.module.css";
import SponsorCard from "../components/SponsorCard";
import Loader from "../components/loader";
import {
    getSingleDoc
} from "../config/firebaseFirestore";
import Navbar from "../components/navbar";
import InfiniteScroll from "react-infinite-scroll-component";

const Sponsors = () => {
    const [sponsors, setSponsors] = useState([]);
    const [loading, setLoading] = useState(true);
    const [activeTab, setActiveTab] = useState("Marketing");
    const [sponsorsToDisplay, setSponsorsToDisplay] = useState(10);

    const fetchSponsors = async () => {
        try {
            let data = await getSingleDoc("WebContents", "sponsors");
            if (data !== null) {
                setSponsors(data.data);
                setLoading(false);
            }
        } catch (e) {
            console.log(e);
        }
    };

    useEffect(() => {
        fetchSponsors();
    }, []);

    if (loading) {
        return <Loader / > ;
    }

    const titleSponsors = sponsors.filter((sponsor) => sponsor.category === "Title");
    const mediaSponsors = sponsors.filter((sponsor) => sponsor.category === "Marketing");
    const eventSponsors = sponsors.filter((sponsor) => sponsor.category === "Events");
    const MnPSponsors = sponsors.filter((sponsor) => sponsor.category === "MnP");

    const renderTabContent = () => {
        if (activeTab === "Marketing") {
            return ( <
                InfiniteScroll dataLength = {
                    sponsorsToDisplay
                }
                next = {
                    () => {
                        setSponsorsToDisplay(sponsorsToDisplay + 10);
                    }
                }
                hasMore = {
                    sponsorsToDisplay < mediaSponsors.length
                } >
                <
                div className = {
                    styles.sponsorrow
                } > {
                    titleSponsors.map((sponsor) => ( <
                        SponsorCard key = {
                            sponsor.id
                        }
                        member = {
                            sponsor
                        }
                        />
                    ))
                } <
                /div> <
                div className = {
                    styles.sponsorrow
                } > {
                    mediaSponsors.slice(0, sponsorsToDisplay).map((sponsor) => ( <
                        SponsorCard key = {
                            sponsor.id
                        }
                        member = {
                            sponsor
                        }
                        />
                    ))
                } <
                /div> <
                /InfiniteScroll>
            );
        } else if (activeTab === "Events") {
            return ( <
                InfiniteScroll dataLength = {
                    sponsorsToDisplay
                }
                next = {
                    () => {
                        setSponsorsToDisplay(sponsorsToDisplay + 10);
                    }
                }
                hasMore = {
                    sponsorsToDisplay < eventSponsors.length
                } >
                <
                div className = {
                    styles.sponsorrow
                } > {
                    eventSponsors.slice(0, sponsorsToDisplay).map((sponsor) => ( <
                        SponsorCard key = {
                            sponsor.id
                        }
                        member = {
                            sponsor
                        }
                        />
                    ))
                } <
                /div> <
                /InfiniteScroll>
            );
        } else if (activeTab === "MnP") {
            return ( <
                InfiniteScroll dataLength = {
                    sponsorsToDisplay
                }
                next = {
                    () => {
                        setSponsorsToDisplay(sponsorsToDisplay + 10);
                    }
                }
                hasMore = {
                    sponsorsToDisplay < MnPSponsors.length
                } >
                <
                div className = {
                    styles.sponsorrow
                } > {
                    MnPSponsors.slice(0, sponsorsToDisplay).map((sponsor) => ( <
                        SponsorCard key = {
                            sponsor.id
                        }
                        member = {
                            sponsor
                        }
                        />
                    ))
                } <
                /div> <
                /InfiniteScroll>
            );
        }
    };

    return ( <
        >
        <
        Navbar / >
        <
        div className = {
            styles.app__sponsors
        } >
        <
        div className = {
            styles.sponsors__right
        } >
        <
        h1 className = {
            styles.sponsors_heading
        } > Our Sponsors < /h1> <
        div className = {
            styles.tabButtons
        } >
        <
        button onClick = {
            () => setActiveTab("Marketing")
        }
        className = {
            activeTab === "Marketing" ? styles.activeTab : ""
        } >
        Marketing <
        /button> <
        button onClick = {
            () => setActiveTab("MnP")
        }
        className = {
            activeTab === "MnP" ? styles.activeTab : ""
        } >
        MnP <
        /button> <
        button onClick = {
            () => setActiveTab("Events")
        }
        className = {
            activeTab === "Events" ? styles.activeTab : ""
        } >
        Events <
        /button> <
        /div> {
            renderTabContent()
        } <
        /div> <
        /div> <
        />
    );
};

export default Sponsors;