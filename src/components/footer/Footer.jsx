import React from 'react';
import styles from './Footer.module.scss'
import {onClickOpenInNewTabHandler} from '../../utils/helperFunctions'

function Footer(props) {
    return (
        <footer >
            <h3>Developed with React</h3>
            {/* <p>Design inspired from </p>
            <p
            onClick={(event=>onClickOpenInNewTabHandler(event, 'https://stefantopalovicdev.vercel.app/#projects'))}>
            Stefan.dev</p> */}
        </footer>
    );
}

export default Footer;