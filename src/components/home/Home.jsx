import React from 'react';
import styles from './Home.module.scss'
import {socialIcons} from '../../images/social/socialImages'
import {FaHackerrank, FaStar} from 'react-icons/fa6'
import {SiLeetcode} from 'react-icons/si'
import {onClickOpenInNewTabHandler} from '../../utils/helperFunctions'
import { generalImages } from '../../images/general/generalImages'
import {techStackIcons} from '../../images/tech-stack-icons/techStackIcons'


function Home(props) {
    return (
        <section className={styles.homeSection} id="home">
        <div> 
            <div className={styles.imageRow}>
                <div className={styles.textContent}>
                    <h1>Software Engineer  👋</h1>
                    <p>Hi. I am Anas. A passionate software engineer based in London,UK </p>
                    <div className={styles.socialLogos}>
                        <img src={socialIcons.githubIcon} alt='githubIcon'
                            onClick={(event=>onClickOpenInNewTabHandler(event, 'github'))}
                        />
                        <img src={socialIcons.linkedInIcon} alt='linkedInIcon'
                             onClick={(event=>onClickOpenInNewTabHandler(event, 'linkedin'))}
                        />
                        <img src={socialIcons.stackOverflow} alt='stackOverflow'
                             onClick={(event=>onClickOpenInNewTabHandler(event, 'stackoverflow'))}
                        />
                        <img src={socialIcons.medium} alt='medium'
                             onClick={(event=>onClickOpenInNewTabHandler(event, 'medium'))}
                        />
                    
                    </div>
                    <div className={styles.codingProfileContainer}>
                        <diV className={styles.codingProfile}
                        onClick={(event=>onClickOpenInNewTabHandler(event, "hackerrank"))}
                        >
                        <div className={styles.rating}>
                            <h1 className={styles.ratingTech}>Java</h1>
                            <div>
                                <FaStar className={styles.star}/> 
                                <FaStar className={styles.star}/> 
                                <FaStar className={styles.star}/> 
                                <FaStar className={styles.star}/> 
                            </div>
                        </div>
                        <p className={styles.ratingLogo}><FaHackerrank/></p>
                    </diV>
                    </div>
                </div>
                <div className={styles.profilePic}>
                    <img 
                    src={generalImages.portfolioImage} alt="profilePic" 
                        // id={styles.profilePic}
                    />

                </div>

            </div>
            
           

            {/* <div  className={styles.bubbles}>
                <img src={generalImages.bubble} alt="bubble"/>
                <img src={generalImages.bubble} alt="bubble" />
                <img src={generalImages.bubble} alt="bubble" />
                <img src={generalImages.bubble} alt="bubble" />
                </div> */}
        </div>

        </section>
    );
}

export default Home;