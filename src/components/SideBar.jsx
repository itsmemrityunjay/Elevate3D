import React from "react";
import styles from "../css/sidebar.module.css";
const SideBar = () => {
    return ( <
        div className = {
            styles.parent
        } >
        <
        ul className = {
            styles.menuHoverFill
        } >
        <
        li >
        <
        a href = "#t2" > Events & Competitions < /a> <
        /li> <
        li >
        <
        a href = "#t3" > Marketing < /a> <
        /li> <
        li >
        <
        a href = "#t4" > Media & Publicity < /a> <
        /li> <
        li >
        <
        a href = "#t5" > Show Management < /a> <
        /li> <
        li >
        <
        a href = "#t6" > Finance < /a> <
        /li> <
        li >
        <
        a href = "#t7" > Public Relations < /a> <
        /li> <
        li >
        <
        a href = "#t8" > Security < /a> <
        /li> <
        li >
        <
        a href = "#t9" > Design < /a> <
        /li> <
        li >
        <
        a href = "#t10" > Web & App < /a> <
        /li> <
        li >
        <
        a href = "#t1" > Festival Coordinators < /a> <
        /li> <
        /ul> <
        /div>
    );
};
export default SideBar;