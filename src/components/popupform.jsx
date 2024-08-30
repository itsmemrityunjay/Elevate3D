import React, {
    useState
} from "react";
import styles from "../css/popupform.module.css";
import db from "../config/firebaseFirestore";
import {
    addDoc,
    collection
} from "firebase/firestore";

export default function Associates() {
    const [name, setName] = useState("");
    const [companyName, setCompanyName] = useState("");
    const [email, setEmail] = useState("");
    const [phone, setPhone] = useState("");
    const [message, setMessage] = useState("");
    const [cell, setCell] = useState("");

    const associatesCollection = collection(db, "associates");

    const handleSubmit = async (event) => {
        event.preventDefault();

        try {
            await addDoc(associatesCollection, {
                cell: cell,
                name: name,
                email: email,
                companyName: companyName,
                phone: phone,
                message: message,
            });

            console.log("Document written to Firestore successfully");

            setName("");
            setCompanyName("");
            setEmail("");
            setPhone("");
            setMessage("");
            setCell("");
        } catch (error) {
            console.error("Error adding document to Firestore: ", error);
        }
    };

    return ( <
        div className = {
            styles.formcontainer
        } >
        <
        div className = {
            styles.maintitle
        } > Associate With Us < /div>

        <
        form className = {
            styles.form
        }
        onSubmit = {
            handleSubmit
        } >
        <
        div className = {
            styles.formgroup
        } >
        <
        label className = {
            styles.labeltext
        }
        htmlFor = "cell" >
        Cell:
        <
        /label> <
        select name = "cell"
        id = "cell"
        className = {
            styles.title
        }
        placeholder = "Choose cell to associate with"
        required value = {
            cell
        }
        onChange = {
            (e) => setCell(e.target.value)
        } >
        <
        option value = "" > --Choose cell to associate with-- < /option> <
        option value = "Public Relations" > Public Relations < /option> <
        option value = "Marketing" > Marketing < /option> <
        option value = "Media & Publicity" > Media & Publicity < /option> <
        option value = "Events & Competition" > Events & Competition < /option> <
        option value = "Show Management" > Show Management < /option> <
        /select> <
        /div> <
        div className = {
            styles.formgroup
        } >
        <
        label className = {
            styles.labeltext
        }
        htmlFor = "company" >
        Company:
        <
        /label> <
        input type = "text"
        className = {
            styles.title
        }
        name = "company"
        placeholder = "Enter your company's name"
        required value = {
            companyName
        }
        onChange = {
            (e) => setCompanyName(e.target.value)
        }
        /> <
        /div> <
        div className = {
            styles.formgroup
        } >
        <
        label className = {
            styles.labeltext
        }
        htmlFor = "name" >
        Name:
        <
        /label> <
        input type = "text"
        className = {
            styles.title
        }
        name = "name"
        placeholder = "Enter your name"
        required value = {
            name
        }
        onChange = {
            (e) => setName(e.target.value)
        }
        /> <
        /div> <
        div className = {
            styles.formgroup
        } >
        <
        label className = {
            styles.labeltext
        }
        htmlFor = "phone" >
        Phone:
        <
        /label> <
        input type = "text"
        className = {
            styles.title
        }
        name = "phone"
        placeholder = "Enter your phone no."
        required value = {
            phone
        }
        onChange = {
            (e) => setPhone(e.target.value)
        }
        /> <
        /div> <
        div className = {
            styles.formgroup
        } >
        <
        label className = {
            styles.labeltext
        }
        htmlFor = "email" >
        Email:
        <
        /label> <
        input type = "email"
        className = {
            styles.title
        }
        name = "email"
        placeholder = "Enter your email"
        required value = {
            email
        }
        onChange = {
            (e) => setEmail(e.target.value)
        }
        /> <
        /div> <
        div className = {
            styles.formgroup
        } >
        <
        label className = {
            styles.labeltext
        }
        htmlFor = "message" >
        Message:
        <
        /label> <
        textarea className = {
            styles.title
        }
        name = "message"
        placeholder = "Enter your message"
        required value = {
            message
        }
        onChange = {
            (e) => setMessage(e.target.value)
        }
        /> <
        /div> <
        button className = {
            styles.formbtn
        }
        type = "submit"
        onClick = {
            handleSubmit
        } >
        Submit <
        /button> <
        /form> <
        /div>
    );
}