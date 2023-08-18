import React from 'react';
import styles from './Contact.module.scss'
import {socialIcons} from "../../images/social/socialImages";

function Contact(props) {
    return (
        <section className={styles.contactSection} id="contact">
            <div className={styles.contactContainer}>
                <h2>
                    CONTACT
                </h2>
                <h1>
                    Interested in working together? I'd love to hear from you! 💼
                </h1>
                <div className={styles.contactDetailsContainer}>
                    <div className={styles.contactDetailsChild}>
                        <img src={socialIcons.locationIcon} alt="locationIcon"/>
                        <div>
                            <h3>
                                Location
                            </h3>
                            <p>
                                London, UK
                            </p>
                        </div>
                    </div>
                    <div className={styles.contactDetailsChild}>
                        <img src={socialIcons.emailIcon} alt="emailIcon"/>
                        <div>
                            <h3>
                                Mail
                            </h3>
                            <p>
                                anas.ajeeb2@gmail.com
                            </p>
                        </div>
                    </div>
                </div>


            </div>
        </section>
    );
}

export default Contact;