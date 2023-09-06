import React from 'react';
import styles from './About.module.scss'

function About(props) {
    return (
        <section className={styles.aboutSection} id="about">
            <div className={styles.rowContent}>
                <div>
                    <img src="https://picsum.photos/200/300" alt="profilePic" className={styles.aboutImage}/>
                </div>
                <div className={styles.aboutMeContent}>
                    <h2>About Me</h2>
                    <h1>Software Engineer and Tech Enthusiast</h1>
                    <p>With 3 years of hands-on experience in mobile development and full-stack engineering, I've honed my skills in a wide array of technologies, including HTML, CSS, JavaScript, React.js, Node.js Flutter and more with a Master's degree in Computer Science, laying a solid foundation for my career in tech.

                        As a seasoned developer, my expertise extends to working on innovative projects involving Convolutional Neural Networks (CNN) and data science. I excel in designing, building, and maintaining responsive and dynamic applications that provide an exceptional user experience. My passion for technology drives me to explore cutting-edge tools and methodologies, ensuring that the products I deliver are always at the forefront of innovation.

                        I pride myself on being a tech enthusiast who thrives on challenges and collaboration. </p> 
                </div>
            </div>
        </section>
    );
}

export default About;