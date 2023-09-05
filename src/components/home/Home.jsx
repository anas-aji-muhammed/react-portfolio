import React from 'react';
import styles from './Home.module.scss'
import {socialIcons} from '../../images/social/socialImages'
import {techStackIcons} from '../../images/tech-stack-icons/techStackIcons'
import { Carousel } from 'react-responsive-carousel';
import { generalImages } from '../../images/general/generalImages'
import {FaHackerrank, FaStar} from 'react-icons/fa6'
import {SiLeetcode} from 'react-icons/si'


function Home(props) {
    return (
        <section className={styles.homeSection} id="home">
        <div>
            <div className={styles.imageRow}>
                <div className={styles.textContent}>
                    <h1>Software Engineer  👋</h1>
                    <p>Hi. I am Anas. A passionate software engineer based in London,UK </p>
                    <div className={styles.socialLogos}>
                        <img src={socialIcons.githubIcon} alt='githubIcon'/>
                        <img src={socialIcons.linkedInIcon} alt='linkedInIcon'/>
                        <img src={socialIcons.stackOverflow} alt='stackOverflow'/>
                        <img src={socialIcons.medium} alt='medium'/>
                    

                    </div>
                    <div className={styles.codingProfileContainer}>
                        <diV className={styles.codingProfile}>
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
                <div>
                    <img src="https://picsum.photos/200/300" alt="profilePic" id={styles.profilePic}/>

                </div>

            </div>
            
           

            {/* <div  className={styles.bubbles}>
                <img src={generalImages.bubble} alt="bubble"/>
                <img src={generalImages.bubble} alt="bubble" />
                <img src={generalImages.bubble} alt="bubble" />
                <img src={generalImages.bubble} alt="bubble" />
                </div> */}
        </div>
        {/* <div className={styles.techTackContainer}>
                <div className={styles.techStackTitle}>Tech stacks</div>
                <div className={styles.sliderContainer}>
                    {Object.values(techStackIcons).map((icon, index) => (
                        <div key={index}>
                            <img src={icon} alt="Tech Icon"  className={styles.techStackImages} />
                        </div>
                    ))}
                </div>
                <p >Unlocking Infinite Possibilities with Every Line of Code: Explore My Diverse Tech Universe</p>

            </div> */}
        </section>
    );
}

export default Home;