import React from 'react';
import styles from './About.module.scss'
import { generalImages } from '../../images/general/generalImages'
import {techStackIcons} from '../../images/tech-stack-icons/techStackIcons'

function About(props) {
    return (
        <section className={styles.aboutSection} id="about">
            <div className={styles.rowContent}>
                <div>
                    <img src={generalImages.aboutPageImage}  alt="profilePic" className={styles.aboutImage}/>
                </div>
                <div className={styles.aboutMeContent}>
                    <h2>About Me</h2>
                    <h1>Software Engineer and Tech Enthusiast</h1>
                    <p>With 3 years of hands-on experience in mobile development and full-stack engineering, I've honed my skills in a wide array of technologies, including HTML, CSS, JavaScript, React.js, Node.js Flutter and more with a Master's degree in Computer Science, laying a solid foundation for my career in tech.

                        As a seasoned developer, my expertise extends to working on innovative projects involving Convolutional Neural Networks (CNN) and data science. I excel in designing, building, and maintaining responsive and dynamic applications that provide an exceptional user experience. My passion for technology drives me to explore cutting-edge tools and methodologies, ensuring that the products I deliver are always at the forefront of innovation.

                        I pride myself on being a tech enthusiast who thrives on challenges and collaboration. </p> 
                        <div className={styles.techTackContainer}>
                {/* <div className={styles.techStackTitle}>Tech stacks</div> */}
                <h2 >Unlocking Infinite Possibilities with Every Line of Code: Explore My Diverse Tech Universe!</h2>

                <div className={styles.sliderContainer}>
                    {Object.values(techStackIcons).map((icon, index) => (
                        <div key={index}>
                            <img src={icon} alt="Tech Icon"  className={styles.techStackImages} />
                        </div>
                    ))}
                </div>

            </div>
                </div>
            </div>
            
        </section>
    );
}

export default About;