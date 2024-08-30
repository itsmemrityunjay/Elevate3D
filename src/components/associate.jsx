import React, { useState } from 'react';
import Popup from 'reactjs-popup';
import PopupForm from './popupform';
import styles from '../css/associate.module.css';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faHandshake } from '@fortawesome/free-solid-svg-icons';

function Associate() {
    const [isOpen, setIsOpen] = useState(false);

    const togglePopup = () => {
        setIsOpen(!isOpen);
    };

    return (
        <div className={styles.associate}>
            <button onClick={togglePopup} className={styles.associateButton}>
                <FontAwesomeIcon icon={faHandshake} className={styles.icon} />
                <p>Associate With Us</p>
            </button>

            <Popup
                open={isOpen}
                onClose={togglePopup}
                className={styles.popup}
            >
                {(close) => (
                    <PopupForm
                        isOpen={isOpen}
                        onClose={() => {
                            close();
                            setIsOpen(false);
                        }}
                    />
                )}
            </Popup>
        </div>
    );
}

export default Associate;
