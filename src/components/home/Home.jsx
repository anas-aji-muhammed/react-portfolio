import React from 'react';
import styles from './Home.module.scss'
import {socialIcons} from '../../images/social/socialImages'
import {techStackIcons} from '../../images/tech-stack-icons/techStackIcons'
import { Carousel } from 'react-responsive-carousel';


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
                </div>
                <div>
                    <img src="https://picsum.photos/200/300" alt="profilePic"/>

                </div>
            </div>
            <div className={styles.techTackContainer}>
                <div className={styles.techStackTitle}>Tech stacks</div>
                <div className={styles.sliderContainer}>
                    {Object.values(techStackIcons).map((icon, index) => (
                        <div key={index}>
                            <img src={icon} alt="Tech Icon"  className={styles.techStackImages} />
                        </div>
                    ))}
                </div>
            </div>
        </div>
        </section>
    );
}

export default Home;