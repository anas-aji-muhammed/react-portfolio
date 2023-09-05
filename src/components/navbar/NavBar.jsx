import React, { useState, useEffect } from 'react';
import styles from './Navbar.module.scss'
import { CiMenuFries } from "react-icons/ci";
import { GrClose } from "react-icons/gr";
function NavBar(props) {
    const [isMenuOpen, setisMenuOpen] = useState(false);

    function menuIconHandle(event, type){
        if(type===1) setisMenuOpen(true);
        else setisMenuOpen(false);
    }
    function handleLinksClick(event){
        if(isMenuOpen) setisMenuOpen(false);
    }



    return (
        <div className={styles.navbarContainer}>
            <h2>AAM</h2>
            <nav className={isMenuOpen?styles.navbarLinksOpen:styles.navbarLinks}>
                <a href="#home" onClick={(event=>handleLinksClick(event))}>Home</a>
                <a href="#about" onClick={(event=>handleLinksClick(event))}>About</a>
                <a href="#project" onClick={(event=>handleLinksClick(event))}>Project</a>
                <a href="#contact" onClick={(event=>handleLinksClick(event))}>Contact</a>
            </nav>
            <div className={styles.menuIcon}>
                {
                    isMenuOpen?
                    <h1 onClick={(event=>menuIconHandle(event,2))}><GrClose/></h1>:
                    <h1 onClick={(event=>menuIconHandle(event,1))} ><CiMenuFries/></h1>
                }
                
            </div>
            
        
        </div>
    );
}

export default NavBar;