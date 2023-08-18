import React from 'react';
import styles from './Portfolio.module.scss'
import {socialIcons} from '../../images/social/socialImages'
import {techStackIcons} from '../../images/tech-stack-icons/techStackIcons'

function PortfolioItem(props) {
    const isEven = props.orderNumber % 2 === 0;
    console.log(props.orderNumber)
    console.log(isEven)
    return (
        (isEven)? <div className={styles.portfolioItemContainer} >
                <div className={styles.portfolioItemContent}>
                    <img src="https://picsum.photos/200/300" alt="profilePic" className={styles.portfolioItemImageContainer}/>

                    <div className={styles.portfolioItemDetails}>
                        <h3>Project Title</h3>
                        <p>A car rental website is an online platform that allows users to rent cars for personal or business use.
                            The website provides an interface for searching, comparing, and reserving cars.
                        </p>
                        <div className={styles.techStackUsed}>
                            <div>
                                <img src={techStackIcons.javascriptIcon} alt="techStackIcons" />
                            </div>
                        </div>
                        <div className={styles.demoLinks}>
                            <div>
                                <h3>Code</h3>
                                <img src={socialIcons.githubIcon} alt="githubIcon"/>

                            </div>
                            <div>
                                <h3>Demo</h3>
                                <img src={socialIcons.linkIcon} alt="linkIcon" />
                            </div>

                        </div>
                    </div>

                </div>

            </div>:
            <div className={styles.portfolioItemContainer}>
                <div className={styles.portfolioItemContent}>

                    <div className={styles.portfolioItemDetails}>
                        <h3>Project Title</h3>
                        <p>A car rental website is an online platform that allows users to rent cars for personal or business use.
                            The website provides an interface for searching, comparing, and reserving cars.
                        </p>
                        <div className={styles.techStackUsed}>
                            <div>
                                <img src={techStackIcons.javascriptIcon} alt="techStackIcons" />
                            </div>
                        </div>
                        <div className={styles.demoLinks}>
                            <div>
                                <h3>Code</h3>
                                <img src={socialIcons.githubIcon} alt="githubIcon"/>

                            </div>
                            <div>
                                <h3>Demo</h3>
                                <img src={socialIcons.linkIcon} alt="linkIcon" />
                            </div>

                        </div>
                    </div>
                    <img src="https://picsum.photos/200/300" alt="profilePic" className={styles.portfolioItemImageContainer}/>

                </div>

            </div>
        )




}

export default PortfolioItem;