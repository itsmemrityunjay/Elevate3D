import React from "react";
import styles from "../css/merch.module.css";
import {
    getSingleDoc
} from "../config/firebaseFirestore";
import {
    useState,
    useEffect
} from "react";
import Navbar from "../components/navbar";
import Loader from "../components/loader";
const Merch = () => {
    const [merch, setMerch] = useState();
    const [loading, setLoading] = useState(true);

    const fetchMerch = async () => {
        setLoading(true);
        try {
            let data = await getSingleDoc("WebContents", "Merch");
            if (data !== null) {
                setMerch(data.data[0]);
                setLoading(false);
            }
        } catch (e) {
            console.log(e);
        }
    };
    useEffect(() => {
        fetchMerch();
    }, []);
    if (loading) {
        return <Loader / > ;
    }

    return ( <
        div className = {
            styles.body
        } >
        <
        Navbar / > {!merch.isAvailable ? ( <
                div style = {
                    {
                        width: "99vw",
                        height: "100vh",
                        display: "flex",
                        alignItems: "center",
                        justifyContent: "center",
                    }
                } >
                <
                h1 style = {
                    {
                        color: "var(--headingMerch)"
                    }
                } > Coming Soon < /h1> <
                /div>
            ) : ( <
                div className = {
                    styles.container
                } >
                <
                div className = {
                    styles.imgDiv
                } >
                <
                img src = {
                    merch.img.url
                }
                /> <
                a href = {
                    merch.link
                }
                target = "_blank" >
                <
                div className = {
                    styles.button
                } >
                <
                p > Order Now < /p> <
                /div> <
                /a> <
                /div> <
                div className = {
                    styles.desc
                } >
                <
                div className = {
                    styles.paraDiv
                }
                dangerouslySetInnerHTML = {
                    {
                        __html: merch.desc.substring(5)
                    }
                } >
                < /div> {
                    /* <div className={styles.paraDiv}>
                                  <p style={{ color: `var(--secondary-color)` }}>Size Chart (Oversized):</p>
                                  <table>
                                    <tr>
                                      <th>Size</th>
                                      <th>Chest</th>
                                      <th>Length</th>
                                      <th>Waist</th>
                                    </tr>
                                    <tr>
                                      <td>S</td>
                                      <td>38-40</td>
                                      <td>28</td>
                                      <td>38</td>
                                    </tr>
                                    <tr>
                                      <td>M</td>
                                      <td>40-42</td>
                                      <td>29</td>
                                      <td>42</td>
                                    </tr>
                                    <tr>
                                      <td>L</td>
                                      <td>42-44</td>
                                      <td>30</td>
                                      <td>44</td>
                                    </tr>
                                    <tr>
                                      <td>XL</td>
                                      <td>46-48</td>
                                      <td>31</td>
                                      <td>48</td>
                                    </tr>
                                    <tr>
                                      <td>XXL</td>
                                      <td>48-50</td>
                                      <td>31.5</td>
                                      <td>50</td>
                                    </tr>
                                  </table>
                                </div> */
                } <
                /div> <
                /div>
            )
        } <
        /div>
    );
};
export default Merch;