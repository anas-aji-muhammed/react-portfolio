import React from 'react';
import styles from './Portfolio.module.scss'
import PortfolioItem from "./portfolioItem";
import {projects} from "./portfolioContent"

function PortfolioSection(props) {
    const orderNumber = [1,2,3,4,5];

    return (
        <section className={styles.portfolioSection} id="project">
            <div className={styles.portfolioContent}>
                <h2>PORTFOLIO</h2>
                <h1>Crafting Digital Masterpieces, One Pixel at a Time 🎨</h1>
                {projects.map((project, index)=>(
                    <PortfolioItem key={index} project={project}>
                    </PortfolioItem>
                ))}

            </div>

        </section>
    );
}

export default PortfolioSection;