import React from 'react';
import styles from './Navbar.module.scss'

function NavBar(props) {
    return (
        <div className={styles.navbarContainer}>
            <h2>AnasAjiMuhammed</h2>
            <nav className={styles.navbarLinks}>
                <a>Home</a>
                <a>About</a>
                <a>Project</a>
                <a>Contact</a>
            </nav>
        </div>
    );
}

export default NavBar;