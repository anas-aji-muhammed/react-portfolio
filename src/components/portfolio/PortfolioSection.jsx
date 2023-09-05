import React from 'react';
import styles from './Portfolio.module.scss'
import PortfolioItem from "./portfolioItem";
import {mobileProjects} from "./portfolioContent"
import {webProjects} from "./webPortfolioContent"
import { useState } from 'react';

function PortfolioSection(props) {

    const [projectCategory, projectCategoryChange] = useState(1);
    const [activeProjectCategory, activeProjectCategoryChange] = useState(mobileProjects);

    const orderNumber = [1,2,3,4,5];
    function handleProjectChange(event, index){
        projectCategoryChange(index)
        if(index===1){
            activeProjectCategoryChange(mobileProjects)
        }
        if(index===2){
            activeProjectCategoryChange(webProjects)
        }
    }

    return (
        <section className={styles.portfolioSection} id="project">
            <div className={styles.portfolioContent}>
                <h2>PORTFOLIO</h2>
                <h1>Crafting Digital Masterpieces, One Pixel at a Time 🎨</h1>
                <div className={styles.tabBarContainer}>
                    <div onClick={(event=>handleProjectChange(event,1))}
                    className=
                        {(projectCategory===1)?styles.tabBarItemActive:styles.tabBarItem}
                    >
                        Mobile Projects
                    </div>
                    <div onClick={(event=>handleProjectChange(event,2))}
                    className=
                    {(projectCategory===2)?styles.tabBarItemActive:styles.tabBarItem}
                    >
                        Web Projects
                    </div>
                </div>

                {activeProjectCategory.map((project, index)=>(
                    <PortfolioItem key={index} project={project}>
                    </PortfolioItem>
                ))}

            </div>

        </section>
    );
}

export default PortfolioSection;