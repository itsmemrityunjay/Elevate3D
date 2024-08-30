import React from 'react';
import styles from '../css/mediaCard.module.css';

const MediaCard = (props) => {

    return ( <
        div className = {
            styles.cardarea
        } >
        <
        div className = {
            styles.content
        } >
        <
        div className = {
            styles.desc
        } > {
            props.data.desc
        } < /div> <
        div className = {
            styles.button
        } >
        <
        a href = {
            props.data.link
        }
        rel = "noreferrer"
        target = "_blank" > Read more < /a> <
        /div> <
        /div> <
        div className = {
            styles.bgImage
        }
        style = {
            {
                backgroundImage: `url(${props.data.img.url})`,
                height: '100%',
                width: '35%',
                display: 'flex',
                justifyContent: 'center',
                alignItems: 'center',
                backgroundSize: 'contain',
                borderRadius: '5px',
                backgroundPosition: 'center',
                borderTop: '0px',
                alignContent: 'center',
                backgroundRepeat: 'no-repeat',
                border: '0px',
                marginRight: '0px',
            }
        } >
        < /div> <
        /div>
    );
}

export default MediaCard;