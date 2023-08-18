import React from 'react';
import styles from './Portfolio.module.scss'
import PortfolioItem from "./portfolioItem";

function PortfolioSection(props) {
    const orderNumber = [1,2,3,4,5];

    return (
        <section className={styles.portfolioSection} id="project">
            <div className={styles.portfolioContent}>
                <h2>PORTFOLIO</h2>
                <h1>Crafting Digital Masterpieces, One Pixel at a Time 🎨</h1>
                {orderNumber.map((orderNumber, index)=>(
                    <PortfolioItem key={index} orderNumber={orderNumber}>
                    </PortfolioItem>
                ))}

            </div>

        </section>
    );
}

export default PortfolioSection;