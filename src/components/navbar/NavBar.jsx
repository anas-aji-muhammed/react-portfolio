import React from 'react';
import styles from './Navbar.module.scss'

function NavBar(props) {
    return (
        <div className={styles.navbarContainer}>
            <h2>AAM</h2>
            <nav className={styles.navbarLinks}>
                <a href="#home">Home</a>
                <a href="#about">About</a>
                <a href="#project">Project</a>
                <a href="#contact">Contact</a>
            </nav>
        </div>
    );
}

export default NavBar;